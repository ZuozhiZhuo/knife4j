import KUtils from '@/core/utils'

/**
 * 根据当前swagger分组实例得到当前组下markdown纯文本
 * @param {*} instance 当前对象实例
 */
export default function maMarkdownText(instance) {
  var markdownCollections = [];
  if (instance != null && instance != undefined) {
    createBasicInfo(instance, markdownCollections);
    createTagsInfo(instance, markdownCollections);
    // 增强文档
    createPlusInfo(instance, markdownCollections);
  }
  return markdownCollections.join('\n');
}

/**
 * 主动换行
 * @param {*} markdownCollections markdown文本集合对象
 */
function markdownLines(markdownCollections) {
  markdownCollections.push('\n');
}

/**
 * 基本信息
 * @param {*} instance 当前分组实例对象
 * @param {*} markdownCollections markdown文本集合对象
 */
function createBasicInfo(instance, markdownCollections) {
  markdownCollections.push('# ' + instance.title);
  markdownLines(markdownCollections);
  markdownCollections.push('**简介**:' + instance.description);
  markdownLines(markdownCollections);
  markdownCollections.push('**HOST**:' + instance.host);
  markdownLines(markdownCollections);
  markdownCollections.push('**联系人**:' + instance.contact);
  markdownLines(markdownCollections);
  markdownCollections.push('**Version**:' + instance.version);
  markdownLines(markdownCollections);
  markdownCollections.push('**接口路径**:' + instance.url);
  markdownLines(markdownCollections);
  // 第三方md软件Typora目录格式
  markdownCollections.push('[TOC]');
  markdownLines(markdownCollections);
}

/**
 * 增加增强文档
 * @param {*} instance 当前分组实例对象
 * @param {*} markdownCollections markdown文本集合对象
 */
function createPlusInfo(instance, markdownCollections) {
  if (KUtils.checkUndefined(instance.markdownFiles)) {
    if (instance.markdownFiles.length > 0) {
      markdownLines(markdownCollections);
      markdownCollections.push('# 附录');
      instance.markdownFiles.forEach(function (md) {
        markdownLines(markdownCollections);
        // 判断是否包含children
        if (KUtils.arrNotEmpty(md.children)) {
          markdownCollections.push('## ' + md.name);
          markdownLines(markdownCollections);

          md.children.forEach(mdfile => {
            markdownCollections.push('### ' + mdfile.title);
            markdownCollections.push(mdfile.content);
          })
        }
      })
    }
  }

}

/**
 * 遍历tags分组信息
 * @param {*} instance  当前分组实例对象
 * @param {*} markdownCollections markdown文本集合对象
 */
function createTagsInfo(instance, markdownCollections) {
  const maCustomDDConfig = instance.maCustomConfig.maCustomDD
  if (instance.tags != undefined && instance.tags != null) {
    markdownCollections.push('\n');
    instance.tags.forEach(function (tag) {
      markdownLines(markdownCollections);
      markdownCollections.push('# ' + tag.name)
      if (tag.childrens != undefined && tag.childrens != null && tag.childrens.length > 0) {
        // 遍历
        if(maCustomDDConfig.orderByApiName) {
          try {
            tag.childrens.sort((a, b) => {
              if (!a.summary) {
                return 1
              }
              if (!b.summary) {
                return -1
              }
              if (getSummaryOrder(a.summary) < getSummaryOrder(b.summary)) {
                return -1
              } else {
                return 1
              }
            })
          } catch (erorr) {
            console.error('排序失败',erorr)
          }
        }
        tag.childrens.forEach(function (apiInfo) {
          createApiInfo(apiInfo, markdownCollections);
        })
      } else {
        markdownCollections.push('暂无接口文档')
      }
    })

  }
}

function getSummaryOrder(summary) {
  let startIndex = summary.lastIndexOf('-')
  if(startIndex == -1) {
    return -1
  }
  let endIndex = summary.lastIndexOf('】')
  if(endIndex == -1) {
    return -1
  }
  let order = summary.slice(startIndex + 1,endIndex)
  return parseInt(order.trim())
}

// /**
//  * 遍历接口详情
//  * @param {*} apiInfo 接口实例
//  * @param {*} markdownCollections markdown文本集合对象
//  */
// function createApiInfo(apiInfo, markdownCollections) {
//   // 二级标题
//   markdownLines(markdownCollections);
//   markdownCollections.push('## ' + apiInfo.summary);
//   markdownLines(markdownCollections);
//   markdownCollections.push('**接口地址**:`' + apiInfo.showUrl + '`');
//   markdownLines(markdownCollections);
//   markdownCollections.push('**请求方式**:`' + apiInfo.methodType + '`');
//   markdownLines(markdownCollections);
//   markdownCollections.push('**请求数据类型**:`' + KUtils.toString(apiInfo.consumes, '*') + '`');
//   markdownLines(markdownCollections);
//   markdownCollections.push('**响应数据类型**:`' + KUtils.toString(apiInfo.produces, '*') + '`');
//   markdownLines(markdownCollections);
//   if (KUtils.strNotBlank(apiInfo.author)) {
//     markdownCollections.push('**开发者**:' + KUtils.toString(apiInfo.author, '暂无') + '');
//     markdownLines(markdownCollections);
//   }
//   markdownCollections.push('**接口描述**:' + KUtils.toString(apiInfo.description, '暂无') + '');
//   // 判断是否有请求示例
//   if (KUtils.checkUndefined(apiInfo.requestValue)) {
//     markdownLines(markdownCollections);
//     markdownCollections.push('**请求示例**:');
//     markdownLines(markdownCollections);
//     markdownCollections.push('```javascript');
//     markdownCollections.push(apiInfo.requestValue);
//     markdownCollections.push('```');
//   }
//   // 请求参数
//   createApiRequestParameters(apiInfo, markdownCollections);
//   // 响应状态
//   createApiResponseStatus(apiInfo, markdownCollections);
//   // 响应Schema-参数
//   // 判断响应参数
//   createApiResponseParameters(apiInfo, markdownCollections);
//
// }

/**
 * 遍历接口详情
 * @param {*} apiInfo 接口实例
 * @param {*} markdownCollections markdown文本集合对象
 */
function createApiInfo(apiInfo, markdownCollections) {
  // 二级标题
  markdownLines(markdownCollections);
  markdownCollections.push('### ' + apiInfo.summary);
  markdownLines(markdownCollections);
  markdownCollections.push('- 接口功能');
  markdownLines(markdownCollections);
  markdownCollections.push('[function]');
  markdownLines(markdownCollections);
  markdownCollections.push('- 函数原型');
  markdownLines(markdownCollections);
  markdownCollections.push('```java');
  markdownLines(markdownCollections);
  markdownCollections.push('[prototype]');
  markdownLines(markdownCollections);
  markdownCollections.push('```');
  markdownLines(markdownCollections);
  markdownCollections.push('- 请求参数');


  // markdownCollections.push('**接口地址**:`' + apiInfo.showUrl + '`');
  // markdownLines(markdownCollections);
  // markdownCollections.push('**请求方式**:`' + apiInfo.methodType + '`');
  // markdownLines(markdownCollections);
  // markdownCollections.push('**请求数据类型**:`' + KUtils.toString(apiInfo.consumes, '*') + '`');
  // markdownLines(markdownCollections);
  // markdownCollections.push('**响应数据类型**:`' + KUtils.toString(apiInfo.produces, '*') + '`');
  // markdownLines(markdownCollections);
  // if (KUtils.strNotBlank(apiInfo.author)) {
  //   markdownCollections.push('**开发者**:' + KUtils.toString(apiInfo.author, '暂无') + '');
  //   markdownLines(markdownCollections);
  // }
  // markdownCollections.push('**接口描述**:' + KUtils.toString(apiInfo.description, '暂无') + '');
  // // 判断是否有请求示例
  // if (KUtils.checkUndefined(apiInfo.requestValue)) {
  //   markdownLines(markdownCollections);
  //   markdownCollections.push('**请求示例**:');
  //   markdownLines(markdownCollections);
  //   markdownCollections.push('```javascript');
  //   markdownCollections.push(apiInfo.requestValue);
  //   markdownCollections.push('```');
  // }
  // 请求参数
  createApiRequestParameters(apiInfo, markdownCollections);
  // 响应状态
  markdownCollections.push('- 返回结果');
  // 判断响应参数
  createApiResponseParameters(apiInfo, markdownCollections);
  markdownCollections.push('- 异常处理');
  markdownLines(markdownCollections);
  markdownCollections.push('系统配置了全局异常处理器，在调用接口发生异常时会自动处理异常，并转化为相应的错误码返回给调用方。当出现参数校验错误或者调用下游服务返回错误结果集时，会向调用方返回以9000开头的业务错误码；当BFF产生异常或者调用下游服务产生异常，则会返回以9999开头的系统错误码。不同的接口返回的错误码数量会有所不同，当前接口errorCode枚举如下：');
  markdownCollections.push(errorCodeTable)
  markdownLines(markdownCollections);
  markdownCollections.push('- 处理流程');
  markdownLines(markdownCollections);
  markdownCollections.push('[sequence】');
  markdownLines(markdownCollections);
  markdownCollections.push('接口文档参考：[docuemnt-url】');
  markdownLines(markdownCollections);
}

var errorCodeTable = `<table class="relative-table wrapped">
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
  `
/**
 * 响应状态
 * @param {*} apiInfo 接口信息
 * @param {*} markdownCollections markdown文本集合对象
 */
function createApiResponseStatus(apiInfo, markdownCollections) {
  if (KUtils.checkUndefined(apiInfo.responseCodes) && apiInfo.responseCodes.length > 0) {
    markdownLines(markdownCollections);
    markdownCollections.push('**响应状态**:');
    markdownLines(markdownCollections);
    // 拥有参数
    markdownCollections.push('| 状态码 | 说明 | schema |');
    markdownCollections.push('| -------- | -------- | ----- | ');
    apiInfo.responseCodes.forEach(function (respcode) {
      markdownCollections.push('|' + KUtils.toString(respcode.code, '') + '|' + KUtils.toString(respcode.description, '') + '|' + KUtils.toString(respcode.schema, '') + '|')
    })
  }
}

/**
 * 响应参数拥有响应头
 * @param {*} responseHeaderParameters 响应header参数
 * @param {*} markdownCollections markdown文本集合对象
 */
function createApiResponseHeaderParams(responseHeaderParameters, markdownCollections) {
  if (KUtils.checkUndefined(responseHeaderParameters)) {
    if (responseHeaderParameters.length > 0) {
      markdownLines(markdownCollections);
      markdownCollections.push('**响应Header**:');
      markdownLines(markdownCollections);
      // 拥有参数
      markdownCollections.push('| 参数名称 | 参数说明 | 数据类型 |');
      markdownCollections.push('| -------- | -------- | ----- | ');
      responseHeaderParameters.forEach(function (respHeader) {
        markdownCollections.push('|' + KUtils.toString(respHeader.name, '') + '|' + KUtils.toString(respHeader.description, '') + '|' + KUtils.toString(respHeader.type, '') + '|');
      })
    }
  }
}

/**
 * 响应参数
 * @param {*} apiInfo 接口信息对象
 * @param {*} markdownCollections markdown文本集合对象
 * @param {*} singleFlag 是否单schema
 */
function createApiResponseParameters(apiInfo, markdownCollections) {
  // 判断是否多个schema
  if (apiInfo.multipartResponseSchema) {
    var multipartData = apiInfo.multipCodeDatas;
    if (KUtils.arrNotEmpty(multipartData)) {
      multipartData.forEach(function (resp) {
        markdownLines(markdownCollections);
        markdownCollections.push('**响应状态码-' + KUtils.toString(resp.code, '') + '**:');
        createApiResponseSingleParam(resp, markdownCollections);
      })
    }
  } else {
    // 单个
    createApiResponseSingleParam(apiInfo.multipData, markdownCollections);
  }
}
/**
 * 单个响应状态
 * @param {*} resp 响应对象
 * @param {*} markdownCollections markdown文本集合对象
 */
function createApiResponseSingleParam(resp, markdownCollections) {
  // 判断是否有响应Header
  createApiResponseHeaderParams(resp.responseHeaderParameters, markdownCollections);
  // 数据
  markdownLines(markdownCollections);
  if (KUtils.arrNotEmpty(resp.data)) {
    // 拥有参数
    markdownCollections.push('| 参数名称 | 参数说明 | 类型 |');
    markdownCollections.push('| -------- | -------- | ----- |');
    resp.data.forEach(function (param) {
      param.level = 1;
      markdownCollections.push('|' + getMdTableByLevel(param) + '|' + KUtils.toString(param.description, '') + '|' + KUtils.toString(param.type, '') + '|')
      deepMdTableByResponseParameter(param.children, markdownCollections, (param.level + 1));
    })
  } else {
    markdownCollections.push('暂无');
  }
  // 判断是否拥有响应示例
  markdownLines(markdownCollections);
}


/**
 * 请求参数
 * @param {*} apiInfo 接口对象
 * @param {*} markdownCollections markdown文本集合对象
 */
function createApiRequestParameters(apiInfo, markdownCollections) {
  // window.console.log(apiInfo)

  let reqParameters = apiInfo.reqParameters;
  // 判断是否拥有请求参数
  if (KUtils.arrNotEmpty(reqParameters)) {
    // if (reqParameters.length > 0) {
    markdownLines(markdownCollections);
    // 拥有参数
    markdownCollections.push('| 请求参数 | 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 |');
    markdownCollections.push('| -------- | -------- | ----- | -------- | -------- | ------ |');
    markdownCollections.push('| 接口地址 | '+ apiInfo.showUrl +' |   |   |   |   |');
    markdownCollections.push('| 请求方式 | '+ apiInfo.methodType +' |   |   |   |   |');
    markdownCollections.push('| 访问权限 | '+ '外网' +' |   |   |   |   |');
    markdownCollections.push('| 访问模式 | '+ 'HTTPS' +' |   |   |   |   |');
    markdownCollections.push('| 请求参数 | 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 |');
    // 级联表格，在表格需要最佳空格缩进符号
    deepMdTableByRequestParameter(reqParameters, markdownCollections, 1);
  } else {
    markdownLines(markdownCollections);
    markdownCollections.push('暂无');
  }
}

/**
 *  递归循环遍历响应参数得到markdown表格
 * @param {*} parameters 参数
 * @param {*} markdownCollections markdown文本集合对象
 */
function deepMdTableByResponseParameter(parameters, markdownCollections, level) {
  if (parameters != null && parameters != undefined && parameters.length > 0) {
    parameters.forEach(function (param) {
      param.level = level;
      markdownCollections.push('|' + getMdTableByLevel(param) + '|' + KUtils.toString(param.description, '') + '|' + KUtils.toString(param.type, '') + '|' + KUtils.toString(param.schemaValue, '') + '|')
      deepMdTableByResponseParameter(param.children, markdownCollections, (param.level + 1));
    })
  }

}


/**
 * 递归循环遍历参数得到markdown表格
 * @param {*} parameters 参数
 * @param {*} markdownCollections markdown文本集合对象
 */
function deepMdTableByRequestParameter(parameters, markdownCollections, level) {
  if (parameters != null && parameters != undefined && parameters.length > 0) {
    parameters.forEach(function (param) {
      // 赋值一个level
      param.level = level;
      markdownCollections.push('|' + '' + '|' + getMdTableByLevel(param) + '|' + KUtils.toString(param.description, '') + '|' + KUtils.toString(param.in, '') + '|' + KUtils.toString(param.require, '') + '|' + KUtils.toString(param.type, '') + '|')
      deepMdTableByRequestParameter(param.children, markdownCollections, (param.level + 1));
    })
  }

}


/**
 * 根据参数级别获取名称
 * @param {*} param 参数
 */
function getMdTableByLevel(param) {
  var spaceArr = [];
  for (var i = 1; i < param.level; i++) {
    spaceArr.push('&emsp;&emsp;')
  }
  var tmpName = spaceArr.join('') + param.name;
  return tmpName;
}

/**
 * 递归遍历子元素
 * @param {*} md markdown对象
 * @param {*} modelData model数据对象
 */
function findModelChildren(md, modelData) {
  if (modelData != null && modelData != undefined && modelData.length > 0) {
    modelData.forEach(function (nmd) {
      if (nmd.pid == md.id) {
        nmd.children = [];
        findModelChildren(nmd, modelData);
        // 查找后如果没有,则将children置空
        if (nmd.children.length == 0) {
          nmd.children = null;
        }
        md.children.push(nmd);
      }
    });
  }
}

/**
 * 响应参数递归遍历参数
 * @param {*} md markdown对象
 * @param {*} modelData model数据对象
 */
function findRespModelChildren(md, modelData) {
  if (modelData != null && modelData != undefined && modelData.length > 0) {
    modelData.forEach(function (nmd) {
      if (nmd.pid == md.id) {
        nmd.children = [];
        // 本级level+1
        nmd.level = md.level + 1;
        findRespModelChildren(nmd, modelData);
        // 查找后如果没有,则将children置空
        if (nmd.children.length == 0) {
          nmd.children = null;
        }
        md.children.push(nmd);
      }
    });
  }
}
