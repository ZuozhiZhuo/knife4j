"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6994],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),f=a,O=s["".concat(d,".").concat(f)]||s[f]||c[f]||o;return t?r.createElement(O,i(i({ref:n},p),{},{components:t})):r.createElement(O,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var u={};for(var d in n)hasOwnProperty.call(n,d)&&(u[d]=n[d]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},83181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],u={},d="3.14 \u6e05\u9664\u7f13\u5b58",l={unversionedId:"features/clearCache",id:"features/clearCache",title:"3.14 \u6e05\u9664\u7f13\u5b58",description:"knife4j \u7248\u672c>2.0.1 \u4f7f\u7528\u6b64\u89c4\u5219",source:"@site/docs/features/clearCache.md",sourceDirName:"features",slug:"/features/clearCache",permalink:"/docs/features/clearCache",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660470595,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"3.13 \u641c\u7d22API\u63a5\u53e3",permalink:"/docs/features/search"},next:{title:"3.15 \u52a8\u6001\u8bf7\u6c42\u53c2\u6570\u6dfb\u52a0\u6587\u6863\u6ce8\u91ca",permalink:"/docs/features/dynamicRequestDescription"}},p={},c=[],s={toc:c};function f(e){var n=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,u,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"314-\u6e05\u9664\u7f13\u5b58"},"3.14 \u6e05\u9664\u7f13\u5b58"),(0,o.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u9192",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"knife4j")," \u7248\u672c>2.0.1 \u4f7f\u7528\u6b64\u89c4\u5219")),(0,o.kt)("p",null,"\u5728\u6587\u6863\u5347\u7ea7\u3001\u6216\u8005\u4ea7\u751f\u4e00\u4e9b\u83ab\u540d\u5176\u5999\u7684\u95ee\u9898\u65f6,\u5927\u5bb6\u53ef\u4ee5\u70b9\u51fb\u6587\u6863\u53f3\u4e0a\u89d2\u7684\u6e05\u9664\u7f13\u5b58\u64cd\u4f5c,\u5982\u4e0b\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(71005).Z,width:"410",height:"181"})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u7684\u7f13\u5b58\u5168\u90e8\u5b58\u50a8\u5728\u6d4f\u89c8\u5668\u4e2d\u7684IndexedDB\u4e2d,\u6240\u4ee5,\u901a\u8fc7\u6d4f\u89c8\u5668\u7684\u5f3a\u5236\u5237\u65b0\u7b49\u64cd\u4f5c\u662f\u65e0\u6cd5\u8d77\u5230\u6e05\u7406\u7f13\u5b58\u7684\u4f5c\u7528\u7684"),(0,o.kt)("p",null,"\u7f13\u5b58\u4f4d\u7f6e\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(31925).Z,width:"1352",height:"369"})),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u624b\u5de5\u5220\u9664\u8be5\u7f13\u5b58\u503c,\u7136\u540e\u518d\u5237\u65b0",(0,o.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u7684\u6587\u6863\u67e5\u770b\u6587\u6863\u6548\u679c"))}f.isMDXComponent=!0},31925:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/cacheLocation-96363de816162c8b4b66bdd411b0cbd8.png"},71005:(e,n,t)=>{t.d(n,{Z:()=>r});const r="data:image/png;base64,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x21GGW4MGkoWvPeampoiZqJxgIYozTm7z4iSye39yKAhSmPOmWcYoyFKJrwHne9LBg1RmvKaEECUTKxoiDoIr/EZBg0lm9t7kUFDlEbcgoTXNaNU4vZ+ZNAQpTFn9xlRKnBeDolBQ9SBMGwo2dzegwwaIiLyFYOGiIh8xVOIiSjCM888I+vWrdP3p06dKrfddluSj4jSGYOGiCJs2bJFbr31Vn3/d7/7na9Bs3r1ajl8+LB+vszMTNdtjh49Ki+88ILcdNNNMnDgwLB1H330kezfv19uuOGGqM8xYMAAufTSS/UlUlasWCGXX365nHXWWa7brly50nU/11xzjdTX18v7779vLZs8ebL1s8J+7euimTlzZtRj7kgYNESkqxeEyznnnCOrVq3Sy6688kr99d1335X77rtPZsyYobe54IIL9C0etm3bJp988on06dNHPv30Ux0ErWEPnpbs27dPtm7dKhdffHHUbT744AO9PzT+uCHAACE2evTosFD69re/HfY4u0WLFult8do2b96s9+UMShOOnQWDhqiTO3bsmLz88ssyatQo/RWBMm3aNGv90qVLddhgHQIG3WpYlp2d3a7nRSP99ttvy7333qu/f+mll2TYsGERFYtRV1ent5k/f77s3btXP3/fvn1lx44dUZ/n448/lrPPPttzvwgB7HfMmDHtej0GgsbOXh1t3LjRuo+KprMINHM+JFHacJ43g+tK4Xby5El9O3HihOTm5sa0T4QIuseefPLJsGVmjAaVDcZpjIceekgHDgKprRAyCKs77rjDqhRQASB4ECS9evWytsXy9evX60CcMmWKrhLQffXOO+947t9UFXgehMjtt99uBY2966x37976ONAlZqopPJ8zLJz7tb8OUwl5dfuhK85ZEXVkNTU1+irOXbt21Tf8bxpWNESdnOkuQ8WCsZg///nPOmTmzZun16OC6devnw4XbHPgwIF2dZ2Zhhy3oUOHynPPPScjR47UDf2NN94oP//5z3WVY4IBwYL727dv18GALrC33npLnn32WR1IXmM0CJS1a9fKV1995Xoc2C+qjXvuuSeiyw7jLoWFhdK9e3er6wzbNzY26uN1jtFAtLEdr+Vuz90RMWiIOrmCggLdVYbxF/jwww91tYLlgPtYhnCprKzU25p1sTCVBILKhASW2eFTP0LGVBkTJkzQ1QsaegQN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"}}]);