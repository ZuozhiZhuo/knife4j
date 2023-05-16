import juicer from 'juicer';

/**
 * 根据当前swagger分组实例得到当前组下markdown纯文本
 * @param {*} instance 当前对象实例
 */
export default function maHTMLText(instance) {
  var markdownCollections = [];
  if (instance != null && instance != undefined) {
    markdownCollections.push('\n\n\n')
    // 创建 api 数据
    markdownCollections.push(createTemplateTagsInfo(instance))
    markdownCollections.push('\n\n\n')

  }
  return markdownCollections.join('\n');
}

/**
 * 遍历tags分组信息
 * @param {*} instance  当前分组实例对象
 * @return 渲染后的HTML数据
 */
function createTemplateTagsInfo(instance) {

  const maCustomDDConfig = instance.maCustomConfig.maCustomDD
  if (instance.tags != undefined && instance.tags != null) {
    // flat map
    let apiInfoList = instance.tags.flatMap(tag => tag.childrens)
    // 按照summary排序
    if(maCustomDDConfig.enable && maCustomDDConfig.orderByApiName) {
      apiInfoList.sort((a, b) => a.summary < b.summary ? -1 : 1)
    }
    // 预处理
    apiInfoList.forEach(e => {
      // 这部分是模板没办法处理的，需要我们手动写代码处理
      // 预处理请求信息
      if(e.reqParameters) {
        // 将嵌套的参数结构转化为水平的数据，方便处理
        let flatReqParameters = []
        deepParametersByRequestParameter(e.reqParameters,1,flatReqParameters)
        e.flatReqParameters = flatReqParameters
        // 对参数进行处理
        e.flatReqParameters = processParameters(e.flatReqParameters,maCustomDDConfig)
      }
      // 存储参数数量，合并单元格用
      e.reqParametersLength = e.flatReqParameters.length + 1
      // 将嵌套的参数结构转化为水平的数据，方便处理
      // 预处理响应信息
      if(e.multipData && e.multipData.data && e.multipData.data.length > 0 ) {
        let flatResParameters = []
        deepParametersByRequestParameter(e.multipData.data,1,flatResParameters)
        e.multipData.flatData = flatResParameters
      }
      // 添加默认参数，避免手动补充框架中为空的注释
      e.flatReqParameters.forEach(param => {
        if(!param.description) {
          // 获取哦对应的默认注释
          const defaultComment = maCustomDDConfig.defaultParameterComment[param.name]
          if(defaultComment) {
            param.description = defaultComment
          }
        }
      })
      e.multipData.flatData.forEach(param => {
        if(!param.description) {
          // 获取哦对应的默认注释
          const defaultComment = maCustomDDConfig.defaultParameterComment[param.name]
          if(defaultComment) {
            param.description = defaultComment
          }
        }
      })
    })
    // 最终渲染的modelData
    const targetModelData = {
      'instance': instance,
      'apiInfo': apiInfoList,
      'maCustomDD': maCustomDDConfig
    }
    console.log('apiInfo[0]:')
    console.log(apiInfoList[0])
    const renderedHtml = juicer(templateInnerHtml,targetModelData)
    console.log('渲染的接口内容:')
    console.log(renderedHtml)
    // return
    return renderedHtml
  }
}


/**
 * 递归循环遍历参数得到flat的数据
 * @param {*} parameters 参数
 * @param {*} markdownCollections markdown文本集合对象
 */
function deepParametersByRequestParameter(children,level,resultArr) {
  // 递归结束条件
  if(!children || children.length == 0) {
    return;
  }
  // 遍历children
  children.forEach(parameter => {
    // 获取级数名称
    parameter.deepName = getDeepNameByLevel(parameter.name,level)
    resultArr.push(parameter)
    // 递归获取子参数
    if(parameter.children && parameter.children.length > 0) {
      deepParametersByRequestParameter(parameter.children,level + 1,resultArr)
    }
  })
  return
}

/**
 * 根据参数级别获取名称
 * @param {*} param 参数
 */
function getDeepNameByLevel(name,level) {
  var spaceArr = [];
  for (var i = 1; i < level; i++) {
    spaceArr.push('&emsp;&emsp;')
  }
  var tmpName = spaceArr.join('') + name;
  return tmpName;
}


/*
 对参数进行排序，优先级是 参数类型 -> 是否必须 -> 参数名称
 */
function processParameters(parameters,maCustomConfig) {
  if(!parameters) {
    return parameters
  }
  // 移除header 参数
  if(maCustomConfig.enable && maCustomConfig.hideHeaderParameter) {
    let newParameters = parameters.filter( e => e.in != 'header')
    parameters = newParameters
  }
  // 对参数进行排序
  if(maCustomConfig.enable && maCustomConfig.orderParameter) {
    // 基本排序优先级 in -> required -> name
    parameters.sort((a,b) => {
      //类型相同
      if(a.in == b.in) {
        if(a.require == b.require) {
            return a.name < b.name ? -1 : 1
        } else {
            return a.require == true ? -1 : 1
        }
      } else {
        // 类型不同，按 header > body > query 的顺序排列
        return (a.in == 'header') || (a.in == 'body' && b.in != 'header') ? -1 : 1
      }
    })
  }
  return parameters
}
// https://github.com/PaulGuo/Juicer

var templateInnerHtml = `
 <h3> 请求数据模型</h3>
{@each apiInfo as item}
<h3> TODO \$\${item.url}</h3>
<ac:structured-macro ac:macro-id="\$\${item.id}" ac:name="code" ac:schema-version="1">
  <ac:plain-text-body><![CDATA[\$\${item.requestValue}]]></ac:plain-text-body>
</ac:structured-macro>
<br/>
{@/each}


<h3> 响应数据模型</h3>
{@each apiInfo as item}
  <h3> TODO \$\${item.multipData.schema}</h3>
  <ac:structured-macro ac:macro-id="\$\${item.id}" ac:name="code" ac:schema-version="1">
    <ac:plain-text-body><![CDATA[\$\${item.multipData.responseValue}]]></ac:plain-text-body>
  </ac:structured-macro>
  <br/>

{@/each}


-------------------------------------






{@each apiInfo as item}
<h3> [Index] \$\${item.summary}</h3>
<ul>
  <li>功能说明</li>
</ul>
\$\${item.description}
<ul>
  <li>函数原型</li>
</ul>
<ac:structured-macro ac:macro-id="b4913a61-9e0f-4242-9d9f-8bd4616ed617" ac:name="code" ac:schema-version="1">
  <ac:plain-text-body><![CDATA[[TODO Prototype]]]></ac:plain-text-body>
</ac:structured-macro>
<ul>
  <li class="auto-cursor-target">请求参数</li>
</ul>
<table class="wrapped">
  <colgroup>
    <col/>
    <col/>
    <col/>
    <col/>
    <col/>
    <col/>
  </colgroup>
  <thead>
    <tr>
      <td class="highlight-#deebff" data-highlight-colour="#deebff">
        <strong>
          <span class="md-pair-s" title="">
            <span class="md-plain">接口地址</span>
          </span>
        </strong>
      </td>
      <td colspan="5">\$\${item.showUrl}</td>
    </tr>
    <tr>
      <td class="highlight-#deebff" data-highlight-colour="#deebff">
        <strong>
          <span class="md-pair-s" title="">
            <span class="md-plain">请求方式</span>
          </span>
        </strong>
      </td>
      <td colspan="5">
        <span class="md-pair-s md-expand">
          <code style="text-align: left;">\$\${item.methodType}</code>
        </span>
      </td>
    </tr>
    <tr>
      <td class="highlight-#deebff" data-highlight-colour="#deebff">
        <strong>
          <span class="md-plain" title="">访问权限</span>
        </strong>
      </td>
      <td colspan="5">
        <span class="md-plain">外网</span>
      </td>
    </tr>
    <tr>
      <td class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="md-plain" title="">
          <strong>访问模式</strong>
        </span>
      </td>
      <td colspan="5">
        <span class="md-plain">HTTPS</span>
      </td>
    </tr>
    <tr>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="md-plain" title="">
          <strong>请求参数</strong>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span md-focus" title="">
          <span class="md-plain md-expand">参数名称</span>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span" title="">
          <span class="md-plain">参数说明</span>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span" title="">
          <span class="md-plain">请求类型</span>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span" title="">
          <span class="md-plain">是否必须</span>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span" title="">
          <span class="md-plain">数据类型</span>
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="highlight-#deebff" data-highlight-colour="#deebff" rowspan="\$\${item.reqParametersLength}"></td>
    </tr>
    {@each item.flatReqParameters as reqParameters}
    <tr>
      <td>\$\${reqParameters.deepName}</td>
      <td>\$\${reqParameters.description}</td>
      {@if reqParameters.in}
        <td>\$\${reqParameters.in}</td>
      {@else}
        <td>N/A</td>
      {@/if}
      <td>\$\${reqParameters.require}</td>
      <td>\$\${reqParameters.type}</td>
    </tr>
    {@/each}
  </tbody>
</table>
<p class="auto-cursor-target">
  <br/>
</p>
<ul>
  <li class="auto-cursor-target">返回结果</li>
</ul>
<table class="wrapped">
  <colgroup>
    <col/>
    <col/>
    <col/>
  </colgroup>
  <thead>
    <tr>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span md-focus" title="">
          <span class="md-plain md-expand">参数名称</span>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span" title="">
          <span class="md-plain">参数说明</span>
        </span>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff">
        <span class="td-span" title="">
          <span class="md-plain">类型</span>
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
  {@each item.multipData.flatData as responseParameter}
    <tr>
      <td>
        <span class="td-span md-focus">
          <span class="md-plain md-expand">\$\${responseParameter.deepName}</span>
        </span>
      </td>
      <td>\$\${responseParameter.description}</td>
      <td>
        <span class="td-span">
          <span class="md-plain">\$\${responseParameter.type}</span>
        </span>
      </td>
    </tr>
   {@/each}
  </tbody>
</table>
<ul>
  <li>异常处理</li>
</ul>
<p>系统配置了全局异常处理器，在调用接口发生异常时会自动处理异常，并转化为相应的错误码返回给调用方。当出现参数校验错误或者调用下游服务返回错误结果集时，会向调用方返回以9000开头的业务错误码；当BFF产生异常或者调用下游服务产生异常，则会返回以9999开头的系统错误码。不同的接口返回的错误码数量会有所不同，当前接口errorCode枚举如下：</p>
<p class="auto-cursor-target">
  <br/>
</p>
<table class="relative-table wrapped">
  <colgroup>
    <col style="width: 16.8519%;"/>
    <col style="width: 83.1481%;"/>
  </colgroup>
  <thead>
    <tr>
      <th class="highlight-#deebff" data-highlight-colour="#deebff" style="text-align: left;">
        <p title="">错误码</p>
      </th>
      <th class="highlight-#deebff" data-highlight-colour="#deebff" style="text-align: left;">
        <p title="">错误信息</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left;">90000001</td>
      <td style="text-align: left;">
        <p>中文：网络未连接，请检查网络</p>
        <p>英文：Network is not connected, please checkout the network</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: left;">99990004</td>
      <td style="text-align: left;">
        <p>中文：服务器异常，请稍后再试</p>
        <p>英文：System error, please try again later</p>
      </td>
    </tr>
    <tr>
      <td colspan="1">
        <span>90000005</span>
      </td>
      <td colspan="1">
        <p>设备在其他地方登录</p>
      </td>
    </tr>
  </tbody>
</table>
<p class="auto-cursor-target">
  <br/>
</p>
<ul>
  <li class="auto-cursor-target">处理流程</li>
</ul>
<p>
  TODO [WorkFlow]
</p>
<p>
  <span>接口文档参考：\$\${maCustomDD.extensions.mapiDocumentName}</span>
</p>
{@/each}
`
