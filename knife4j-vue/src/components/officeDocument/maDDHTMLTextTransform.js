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

  const customTemplateConfig = instance.maCustomConfig.customTemplate
  if (instance.tags != undefined && instance.tags != null) {
    // flat map
    let apiInfoList = instance.tags.flatMap(tag => tag.childrens)
    // 按照summary排序
    if(customTemplateConfig.enable && customTemplateConfig.orderByApiName) {
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
        e.flatReqParameters = processParameters(e.flatReqParameters,customTemplateConfig)
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
          const defaultComment = customTemplateConfig.defaultParameterComment[param.name]
          if(defaultComment) {
            param.description = defaultComment
          }
        }
      })
      e.multipData.flatData.forEach(param => {
        if(!param.description) {
          // 获取哦对应的默认注释
          const defaultComment = customTemplateConfig.defaultParameterComment[param.name]
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
      'customTemplate': customTemplateConfig
    }
    console.log('apiInfo[0]:')
    console.log(apiInfoList[0])
    const renderedHtml = juicer(customTemplateConfig.templateData || '<未找到模板数据>',targetModelData)
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
