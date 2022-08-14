"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={},i="3.21 \u5168\u5c40\u53c2\u6570",p={unversionedId:"features/globalParameter",id:"features/globalParameter",title:"3.21 \u5168\u5c40\u53c2\u6570",description:"Knife4j\u63d0\u4f9b\u57fa\u4e8eUI\u4e34\u65f6\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\u529f\u80fd,\u4f8b\u5982\u540e\u53f0\u5168\u5c40token\u53c2\u6570\u7b49.\u63d0\u4f9b\u8be5\u529f\u80fd\u4e3b\u8981\u662f\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u8c03\u8bd5",source:"@site/docs/features/globalParameter.md",sourceDirName:"features",slug:"/features/globalParameter",permalink:"/docs/features/globalParameter",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660470595,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"3.20 \u5bfc\u51faPostman",permalink:"/docs/features/postman"},next:{title:"3.22 \u81ea\u5b9a\u4e49Swagger Models\u540d\u79f0",permalink:"/docs/features/swaggermodels"}},s={},u=[],f={toc:u};function m(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"321-\u5168\u5c40\u53c2\u6570"},"3.21 \u5168\u5c40\u53c2\u6570"),(0,o.kt)("p",null,"Knife4j\u63d0\u4f9b\u57fa\u4e8eUI\u4e34\u65f6\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\u529f\u80fd,\u4f8b\u5982\u540e\u53f0\u5168\u5c40token\u53c2\u6570\u7b49.\u63d0\u4f9b\u8be5\u529f\u80fd\u4e3b\u8981\u662f\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u8c03\u8bd5"),(0,o.kt)("p",null,"\u76ee\u524d\u5168\u5c40\u53c2\u6570\u529f\u80fd\u4e3b\u8981\u63d0\u4f9b\u4e24\u79cd\u53c2\u6570\u7c7b\u578b\uff1a",(0,o.kt)("strong",{parentName:"p"},"query(\u8868\u5355)\u3001header(\u8bf7\u6c42\u5934)")),(0,o.kt)("p",null,"\u5982\u679c\u540e\u7aefSwagger\u6709\u914d\u7f6e\u5168\u5c40\u53c2\u6570\uff0c\u8be5\u529f\u80fd\u53ef\u4ee5\u65e0\u89c6"),(0,o.kt)("p",null,"\u529f\u80fd\u76ee\u5f55\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u6587\u6863\u7ba1\u7406 -> \u5168\u5c40\u53c2\u6570\u8bbe\u7f6e")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(84695).Z,width:"1360",height:"626"})))}m.isMDXComponent=!0},84695:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/globalParameter-932f6eabca5b14ce7e03acfc66281625.png"}}]);