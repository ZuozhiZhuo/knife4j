(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{807:function(t,s,n){"use strict";n.r(s);var a=n(42),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_3-4-自定义文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-自定义文档"}},[t._v("#")]),t._v(" 3.4 自定义文档")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("增强功能需要通过配置yml配置文件开启增强,自2.0.7开始")]),t._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])])]),t._v(" "),n("p",[n("code",[t._v("Knife4j")]),t._v("为了满足文档的个性化配置,添加了自定义文档功能,自定义文档功能能丰富接口文档,在OpenAPI不足以满足接口说明的情况下,开发者通过"),n("code",[t._v("Knife4j")]),t._v("提供的自定义文档功能能够把接口文档更清晰的描述。开发者自定义"),n("code",[t._v(".md")]),t._v("文件扩展补充整个系统的文档说明")]),t._v(" "),n("p",[t._v("开发者可以在当前项目中添加多个个文件夹，文件夹中存放"),n("code",[t._v(".md")]),t._v("格式的markdown文件,每个"),n("code",[t._v(".md")]),t._v("文档代表一份自定义文档说明")]),t._v(" "),n("p",[n("strong",[t._v("注意")]),t._v("：自定义文档说明必须以"),n("code",[t._v(".md")]),t._v("结尾的文件,其他格式文件会被忽略")]),t._v(" "),n("p",[t._v("例如项目结构如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/knife4j/images/1-9-3/construct.png",alt:""}})]),t._v(" "),n("p",[t._v("每个"),n("code",[t._v(".md")]),t._v("文件中，"),n("code",[t._v("Knife4j")]),t._v("允许一级(h1)、二级(h2)、三级(h3)标题作为最终的文档标题")]),t._v(" "),n("p",[t._v("比如"),n("code",[t._v("api.md")]),t._v("文档：")]),t._v(" "),n("div",{staticClass:"language-markdown extra-class"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 自定义文档说明")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 效果说明")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`knife4j`")]),t._v("为了满足文档的个性化配置,添加了自定义文档功能\n\n开发者可自定义"),n("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`md`")]),t._v("文件扩展补充整个系统的文档说明\n\n开发者可以在当前项目中添加一个文件夹，文件夹中存放"),n("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`.md`")]),t._v("格式的markdown文件,每个"),n("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`.md`")]),t._v("文档代表一份自定义文档说明\n\n"),n("span",{pre:!0,attrs:{class:"token bold"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),n("span",{pre:!0,attrs:{class:"token content"}},[t._v("注意")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("：自定义文档说明必须以"),n("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`.md`")]),t._v("结尾的文件,其他格式文件会被忽略\n")])])]),n("p",[t._v("最终在"),n("code",[t._v("Knife4j")]),t._v("的界面中,"),n("code",[t._v("api.md")]),t._v("的文档标题会是"),n("code",[t._v("自定义文档说明")])]),t._v(" "),n("p",[t._v("整个文档效果如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/knife4j/images/knife4j/self-doc1.png",alt:""}})]),t._v(" "),n("p",[t._v("如果没有按照一级(h1)、二级(h2)、三级(h3)来设置标题,默认标题会是文件名称，如图上的"),n("code",[t._v("api2.md")])]),t._v(" "),n("p",[n("strong",[t._v("如何使用")])]),t._v(" "),n("p",[t._v("在Spring Boot环境中,首先需要在"),n("code",[t._v("application.yml")]),t._v("或者"),n("code",[t._v("application.properties")]),t._v("配置文件中配置自定义文档目录,支持多级目录")]),t._v(" "),n("p",[t._v("如下：")]),t._v(" "),n("div",{staticClass:"language-yml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("documents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2.x\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 测试自定义标题分组\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 某一个文件夹下所有的.md文件")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("locations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("markdown/*\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.2.x\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 接口签名\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 某一个文件夹下单个.md文件")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("locations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("markdown/sign.md\n")])])]),n("p",[t._v("在配置"),n("code",[t._v("knife4j.documents")]),t._v("中，该属性是一个集合数组,代表开发者可以添加多个自定义文档分组,因为我们在最终呈现接口文档时，会存在逻辑分组的情况，有时候我们希望不同的逻辑分组下显示不同的逻辑分组文档，所以需要通过该节点下的group(分组名称)进行区分")]),t._v(" "),n("p",[t._v("相关属性说明如下：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性名称")]),t._v(" "),n("th",[t._v("是否必须")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("group")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("逻辑分组名称,最终在逻辑分组时该属性需要传入")])]),t._v(" "),n("tr",[n("td",[t._v("name")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("自定义文档的分组名称，可以理解为开发者存在多个自定义文档，最终在Ui界面呈现时的一个分组名称")])]),t._v(" "),n("tr",[n("td",[t._v("location")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("提供自定义"),n("code",[t._v(".md")]),t._v("文件的路径或者文件")])])])]),t._v(" "),n("p",[t._v("开发者配置好后,最核心的一步，也是最后最重要的一步，开发者需要在创建"),n("code",[t._v("Docket")]),t._v("逻辑分组对象时，通过"),n("code",[t._v("Knife4j")]),t._v("提供的工具对象"),n("code",[t._v("OpenApiExtensionResolver")]),t._v("将扩展属性进行赋值")]),t._v(" "),n("p",[t._v("示例代码如下：")]),t._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[t._v("点击查看代码")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2WebMvc")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openApiExtensionResolver "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openApiExtensionResolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultApi2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultApi2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" groupName"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.X版本"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" docket"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DocumentationType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SWAGGER_2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestHandlerSelectors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("basePackage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.swagger.bootstrap.ui.demo.new2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PathSelectors")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extensions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openApiExtensionResolver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildExtensions")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" docket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiInfo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiInfoBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//.title("swagger-bootstrap-ui-demo RESTful APIs")')]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"# swagger-bootstrap-ui-demo RESTful APIs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("termsOfServiceUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.xx.com/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("contact")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx@qq.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("p",[t._v("通过上面示例代码，主要步骤如下：")]),t._v(" "),n("p",[t._v("1、通过"),n("code",[t._v("@Autowired")]),t._v("注解引入"),n("code",[t._v("Knife4j")]),t._v("向Spring容器注入的Bean对象"),n("code",[t._v("OpenApiExtensionResolver")])]),t._v(" "),n("p",[t._v("2、最终在"),n("code",[t._v("Dcoket")]),t._v("对象构建后，通过调用"),n("code",[t._v("Docket")]),t._v("对象的"),n("code",[t._v("extensions")]),t._v("方法进行插件赋值")]),t._v(" "),n("p",[t._v("3、插件赋值需要调用"),n("code",[t._v("OpenApiExtensionResolver")]),t._v("提供的"),n("code",[t._v("buildExtensions")]),t._v("方法，该方法需要一个逻辑分组名称，就是开发者在"),n("code",[t._v("yml")]),t._v("配置文件中配置的"),n("code",[t._v("group")]),t._v("名称")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("为什么需要这么做?这样做的目的一方面是充分利用Spring Boot提供的配置方式，方便开发者自定义配置属性，另一方面，通过扩展OpenAPI的规范属性，也更加符合OpenAPI对于扩展属性的要求")]),t._v(" "),n("p",[t._v("OpenAPI规范明确规定,对于扩展属性,开发者应当在响应的某个节点中，增加"),n("code",[t._v("x-")]),t._v("开头的属性方式,以扩展自定义的属性配置")]),t._v(" "),n("p",[t._v("自定义文档的扩展属性，开发者可以通过浏览器的Network功能查看OpenAPI的结构，最终Knife4j扩展增加"),n("code",[t._v("x-markdownFiles")]),t._v("属性，代表增加的扩展自定义文档属性，最终在Ui界面解析呈现，结构如下图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/knife4j/images/documentation/markdownfiles.png",alt:""}})])]),t._v(" "),n("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);