(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{721:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"v2-0-0-2019-12-16-knife4j-2-0发布-涅槃重生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0-2019-12-16-knife4j-2-0发布-涅槃重生"}},[t._v("#")]),t._v(" [v2.0.0-2019/12/16 Knife4j 2.0发布,涅槃重生~！]")]),t._v(" "),s("p",[s("code",[t._v("Knife4j")]),t._v("前身是"),s("code",[t._v("swagger-bootstrap-ui")]),t._v(",取名knife4j是希望她能像一把匕首一样小巧,轻量,并且功能强悍,更名也是希望把她做成一个为Swagger接口文档服务的通用性解决方案,不仅仅只是专注于前端Ui前端.虽然目前还只是在前端，但以后功能肯定不止于此.")]),t._v(" "),s("p",[s("code",[t._v("2.0")]),t._v("版本主要是使用"),s("code",[t._v("Vue")]),t._v("+"),s("code",[t._v("Ant Design Vue")]),t._v("对前端Ui进行重写,该版本是真正的前后端分离版本，同时依赖于"),s("code",[t._v("Vue")]),t._v("的技术生态,以后会有更多有趣的功能实现,全方位满足开发者的需要.")]),t._v(" "),s("p",[s("strong",[t._v("文档：")]),s("a",{attrs:{href:"http://doc.xiaominfo.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://doc.xiaominfo.com"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("**效果(旧版)：**http://swagger-bootstrap-ui.xiaominfo.com/doc.html")]),t._v(" "),s("p",[s("strong",[t._v("效果(2.0版):")]),s("a",{attrs:{href:"http://knife4j.xiaominfo.com/doc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://knife4j.xiaominfo.com/doc.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("**Gitee：**https://gitee.com/xiaoym/knife4j")]),t._v(" "),s("p",[t._v("**GitHub：**https://github.com/xiaoymin/swagger-bootstrap-ui")]),t._v(" "),s("p",[t._v("**示例：**https://gitee.com/xiaoym/swagger-bootstrap-ui-demo")]),t._v(" "),s("h2",{attrs:{id:"特性-优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性-优化"}},[t._v("#")]),t._v(" 特性 & 优化")]),t._v(" "),s("h3",{attrs:{id:"knife4j-spring-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knife4j-spring-ui"}},[t._v("#")]),t._v(" knife4j-spring-ui")]),t._v(" "),s("p",[t._v("1、使用Vue+Ant Design Vue对Ui进行重写,统一整体界面风格,更清晰的文档说明能力以及接口调试能力")]),t._v(" "),s("p",[t._v("2、支持在界面中导出离线Markdown、离线Html格式的文档，Markdown、Html风格较之前都做了极致的优化，Markdown格式主要是针对树形Model的展示通过缩进的方式在md格式的table中显示更加直观,Html离线文档和在线版风格几乎没有区别，简洁、直观."),s("a",{attrs:{href:"https://doc.xiaominfo.com/html/knife4j-export-html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击预览导出离线Html效果"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("3、单接口文档页的复制文档也是通过复制Markdown格式的问题，同上主要优化md格式的table显示问题，以缩进的方式显示树形表格")]),t._v(" "),s("p",[t._v("4、对调试栏进行优化、区分请求头和请求体参数,使用tab标签页组件可以对请求参数进行动态的添加、维护、如果你使用对文档进行缓存,文档页的动态调试参数会持久化处理.")]),t._v(" "),s("p",[t._v("5、文档的个性化配置(增强功能)有删减,目前只保留4项功能，即(请求参数缓存、过滤重复同类型接口、本地缓存打开tab接口、文档增强)")]),t._v(" "),s("p",[t._v("6、Tab标签页打开接口、右键可以根据选择关闭不同的Tab标签页")]),t._v(" "),s("p",[t._v("7、调试框请求头、请求体均支持动态参数，开发者可以自行添加动态参数进行调试,更加灵活方便")]),t._v(" "),s("p",[t._v("8、提供增强直接访问地址，"),s("code",[t._v("http://ip:port/doc.html#/plus")]),t._v("，后端在保证开启增强注解的情况下可直接使用该地址,不需要在前端个性化配置中再进行配置,方便团队直接进行沟通")]),t._v(" "),s("p",[t._v("9、响应下载类型增加至141种,几乎涵盖目前常见的文件类型")]),t._v(" "),s("p",[t._v("10、修复响应体中会出现属性多余双引号的bug"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/issues/I125B2",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee # I125B2"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/156",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #156"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("11、修复请求参数数据类型的format不显示的问题,针对Long类型区分int64、int32- "),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/161",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #161"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("12、解决多个Schema响应状态码的情况下SwaggerModels字段不显示的问题"),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/170",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #170"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("13、调试请求默认追加一个Ui的请求头"),s("code",[t._v("Request-Origion")]),t._v(",值为"),s("code",[t._v("Knife4j")]),t._v("，原来该值是"),s("code",[t._v("SwaggerBootsrapUi")]),t._v("，在2.0版本中进行了变更.")]),t._v(" "),s("p",[t._v("14、解决Models属性嵌套过多时,页面白板，效率问题"),s("a",{attrs:{href:"https://github.com/xiaoymin/swagger-bootstrap-ui/issues/106",target:"_blank",rel:"noopener noreferrer"}},[t._v("github #106"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("如果你后端是Java+Spring的技术栈，在使用springfox的同时，想换一个Swagger的Ui皮肤，通过在pom.xml中直接引入即可,如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-spring-ui"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"knife4j-spring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knife4j-spring"}},[t._v("#")]),t._v(" Knife4j-Spring")]),t._v(" "),s("p",[t._v("1、移除增强注解"),s("code",[t._v("@EnableSwaggerBootstrapUi")]),t._v(",以后的增强开启注解请使用"),s("code",[t._v("@EnableKnife4j")])]),t._v(" "),s("p",[t._v("2、"),s("code",[t._v("knife4j-spring-boot-starter")]),t._v("组件移除默认springfox的ui-jar包"),s("code",[t._v("springfox-swagger-ui")]),t._v(",只保留"),s("code",[t._v("knife4j-spring-ui")]),t._v(",开发者如果要使用springfox的ui包需要自行在项目中引入")]),t._v(" "),s("p",[t._v("3、合并"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j/pulls/12",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR12-修复IDEA debug无法显示动态Response的问题"),s("OutboundLink")],1),t._v(",修复动态类加载不到的问题")]),t._v(" "),s("p",[t._v("使用SpringBoot的技术栈可以通过引用starter的方式快速引入使用,注意该starter组件是包含Ui的,如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果是微服务的情况下,微服务其实不需要引用Ui的jar包，只需要在网关引用Ui的jar包依赖,所以在微服务情况下,使用增强属性只需要引用微服务版本的starter依赖,如下：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xiaoymin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-micro-spring-boot-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("h2",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),s("ul",[s("li",[t._v("基于Vue+Ant Design构建的文档，更强大、清晰的接口文档说明能力以及接口调试能力")]),t._v(" "),s("li",[t._v("左右布局,基于Tabs组件的多文档查阅风格")]),t._v(" "),s("li",[t._v("支持在线导出Html、Markdown、Word、PDF等多种格式的离线文档")]),t._v(" "),s("li",[t._v("接口排序,支持分组及接口的排序功能")]),t._v(" "),s("li",[t._v("支持接口全局在线搜索功能")]),t._v(" "),s("li",[t._v("提供Swagger资源保护策略,保护文档安全")]),t._v(" "),s("li",[t._v("接口调试支持无限参数,开发者调试非常灵活，动态增加、删除参数")]),t._v(" "),s("li",[t._v("全局缓存调试信息,页面刷新后依然存在,方便开发者调试")]),t._v(" "),s("li",[t._v("以更人性化的table树组件展示Swagger Models功能")]),t._v(" "),s("li",[t._v("文档以多tab方式可显示多个接口文档")]),t._v(" "),s("li",[t._v("请求参数栏请求类型、是否必填着颜色区分")]),t._v(" "),s("li",[t._v("主页中粗略统计接口不同类型数量")]),t._v(" "),s("li",[t._v("支持自定义全局参数功能，主页包括header及query两种类型")]),t._v(" "),s("li",[t._v("JSR-303 annotations 注解的支持")]),t._v(" "),s("li",[t._v("更多个性化设置功能")])]),t._v(" "),s("h2",{attrs:{id:"界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面"}},[t._v("#")]),t._v(" 界面")]),t._v(" "),s("p",[t._v("接口文档显示界面如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/1.png",alt:""}})]),t._v(" "),s("p",[t._v("接口调试界面如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/8.png",alt:""}})]),t._v(" "),s("p",[t._v("Swagger Models功能")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/6.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/7.png",alt:""}})]),t._v(" "),s("p",[t._v("支持导出离线Markdown、Html功能，markdown的表格较原先版本通过缩减显示为树形结构，效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/3.png",alt:""}})]),t._v(" "),s("p",[t._v("通过第三方Markdown软件导出的PDF效果如下图:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/4.png",alt:""}})]),t._v(" "),s("p",[t._v("同时提供了导出离线Html功能,Html功能界面风格和在线几乎没有区别,美观、大方、简洁，如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/knife4j2.0/5.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"star-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#star-issue"}},[t._v("#")]),t._v(" Star & Issue")]),t._v(" "),s("p",[t._v("感谢各位朋友的支持,前往"),s("a",{attrs:{href:"https://gitee.com/xiaoym/knife4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xiaoym/knife4j"),s("OutboundLink")],1),t._v("点个Star吧~~ ：）")]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("这次版本是基于Vue重写，对于某些问题有极大的可能难免考虑不周,大家在使用的过程中如果有问题也欢迎及时通过issues和我沟通,会尽快修正，谢谢大家~！！")]),t._v(" "),s("h2",{attrs:{id:"关注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关注"}},[t._v("#")]),t._v(" 关注")]),t._v(" "),s("p",[t._v("关注我的微信公众号,实时了解"),s("code",[t._v("swagger-bootstrap-ui")]),t._v("的最新资讯~~~~")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.9.4-issue/us.png",alt:""}})]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);