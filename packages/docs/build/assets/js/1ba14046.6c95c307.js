(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{2722:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return O}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=s.a.createContext({}),l=function(e){var t=s.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=l(e.components);return s.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),o=l(a),m=n,O=o["".concat(p,".").concat(m)]||o[m]||d[m]||r;return a?s.a.createElement(O,b(b({ref:t},i),{},{components:a})):s.a.createElement(O,b({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,p[1]=b;for(var i=2;i<r;i++)p[i]=a[i];return s.a.createElement.apply(null,p)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},348:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),s=a(7),r=(a(0),a(2722)),p={id:"renderer_postprocessing_passes_depthpass.depthpass",title:"Class: DepthPass",sidebar_label:"DepthPass",custom_edit_url:null,hide_title:!0},b={unversionedId:"docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass",id:"docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass",isDocsHomePage:!1,title:"Class: DepthPass",description:"Class: DepthPass",source:"@site/docs/docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass.md",slug:"/docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass",permalink:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass",editUrl:null,version:"current",sidebar_label:"DepthPass",sidebar:"sidebar",previous:{title:"Class: DepthDownsamplingPass",permalink:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthdownsamplingpass.depthdownsamplingpass"},next:{title:"Class: EffectPass",permalink:"/docs/docs-engine/classes/renderer_postprocessing_passes_effectpass.effectpass"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"camera",id:"camera",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"name",id:"name",children:[]},{value:"needsDepthTexture",id:"needsdepthtexture",children:[]},{value:"needsSwap",id:"needsswap",children:[]},{value:"renderPass",id:"renderpass",children:[]},{value:"renderTarget",id:"rendertarget",children:[]},{value:"resolution",id:"resolution",children:[]},{value:"resolutionScale",id:"resolutionscale",children:[]},{value:"rtt",id:"rtt",children:[]},{value:"scene",id:"scene",children:[]},{value:"screen",id:"screen",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"renderToScreen",id:"rendertoscreen",children:[]},{value:"texture",id:"texture",children:[]}]},{value:"Methods",id:"methods",children:[{value:"dispose",id:"dispose",children:[]},{value:"getDepthTexture",id:"getdepthtexture",children:[]},{value:"getFullscreenMaterial",id:"getfullscreenmaterial",children:[]},{value:"getResolutionScale",id:"getresolutionscale",children:[]},{value:"initialize",id:"initialize",children:[]},{value:"render",id:"render",children:[]},{value:"setDepthTexture",id:"setdepthtexture",children:[]},{value:"setFullscreenMaterial",id:"setfullscreenmaterial",children:[]},{value:"setResolutionScale",id:"setresolutionscale",children:[]},{value:"setSize",id:"setsize",children:[]}]}],i={toc:c};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-depthpass"},"Class: DepthPass"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/modules/renderer_postprocessing_passes_depthpass"},"renderer/postprocessing/passes/DepthPass"),".DepthPass"),Object(r.b)("p",null,"A pass that renders the depth of a given scene into a color buffer."),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},Object(r.b)("em",{parentName:"a"},"Pass"))),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"DepthPass")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new DepthPass"),"(",Object(r.b)("inlineCode",{parentName:"p"},"scene"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"camera"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass"},Object(r.b)("em",{parentName:"a"},"DepthPass"))),Object(r.b)("p",null,"Constructs a new depth pass."),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"scene")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The scene to render.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"camera")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The camera to use to render the scene.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_depthpass.depthpass"},Object(r.b)("em",{parentName:"a"},"DepthPass"))),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L22"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:22")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"camera"},"camera"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"camera"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#camera"},"camera")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L73"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:73")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"enabled"},"enabled"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"enabled"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#enabled"},"enabled")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L78"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:78")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"name"},"name"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"name"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#name"},"name")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L71"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:71")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"needsdepthtexture"},"needsDepthTexture"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"needsDepthTexture"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#needsdepthtexture"},"needsDepthTexture")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L77"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:77")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"needsswap"},"needsSwap"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"needsSwap"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#needsswap"},"needsSwap")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L18"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:18")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"renderpass"},"renderPass"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"renderPass"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_renderpass.renderpass"},Object(r.b)("em",{parentName:"a"},"RenderPass"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L19"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:19")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rendertarget"},"renderTarget"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"renderTarget"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L20"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:20")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"resolution"},"resolution"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"resolution"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_core_resizer.resizer"},Object(r.b)("em",{parentName:"a"},"Resizer"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L21"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:21")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"resolutionscale"},"resolutionScale"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"resolutionScale"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L22"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:22")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rtt"},"rtt"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"rtt"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#rtt"},"rtt")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L75"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:75")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scene"},"scene"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"scene"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#scene"},"scene")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L72"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:72")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"screen"},"screen"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"screen"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass"),".",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass#screen"},"screen")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L74"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:74")),Object(r.b)("h2",{id:"accessors"},"Accessors"),Object(r.b)("h3",{id:"rendertoscreen"},"renderToScreen"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"renderToScreen"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Indicates whether this pass should render to screen."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L171"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:171")),Object(r.b)("p",null,"\u2022 set ",Object(r.b)("strong",{parentName:"p"},"renderToScreen"),"(",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the render to screen flag."),Object(r.b)("p",null,"If the flag is changed to a different value, the fullscreen material will\nbe updated as well."),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L184"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:184")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"texture"},"texture"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"texture"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The depth texture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L101"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:101")),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"dispose"},"dispose"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"dispose"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Performs a shallow search for disposable properties and deletes them. The\npass will be inoperative after this method was called!"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_core_effectcomposer.effectcomposer"},"EffectComposer")," calls this method when it is being destroyed.\nYou may, however, use it independently to free memory when you are certain\nthat you don't need this pass anymore."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L322"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:322")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getdepthtexture"},"getDepthTexture"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getDepthTexture"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Returns the current depth texture."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The current depth texture, or null if there is none."),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L240"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:240")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getfullscreenmaterial"},"getFullscreenMaterial"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getFullscreenMaterial"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Returns the current fullscreen material."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The current fullscreen material, or null if there is none."),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L202"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:202")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getresolutionscale"},"getResolutionScale"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getResolutionScale"),"(): ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Returns the current resolution scale."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"deprecated"))," Adjust the fixed resolution width or height instead."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"The resolution scale."),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L112"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:112")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"initialize"},"initialize"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"initialize"),"(",Object(r.b)("inlineCode",{parentName:"p"},"renderer"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"alpha"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"frameBufferType"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Performs initialization tasks."),Object(r.b)("p",null,"By overriding this method you gain access to the renderer. You'll also be\nable to configure your custom render targets to use the appropriate format\n(RGB or RGBA)."),Object(r.b)("p",null,"The provided renderer can be used to warm up special off-screen render\ntargets by performing a preliminary render operation."),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_core_effectcomposer.effectcomposer"},"EffectComposer")," calls this method when this pass is added to its\nqueue, but not before its size has been set."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"example"))," if(!alpha && frameBufferType === UnsignedByteType) { this.myRenderTarget.texture.format = RGBFormat; }"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"renderer")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The renderer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"alpha")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"Whether the renderer uses the alpha channel or not.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"frameBufferType")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The type of the main frame buffers.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L311"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:311")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"render"},"render"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"render"),"(",Object(r.b)("inlineCode",{parentName:"p"},"renderer"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"inputBuffer?"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"outputBuffer?"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"deltaTime?"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"stencilTest?"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Renders the scene depth."),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"renderer")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The renderer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"inputBuffer?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"A frame buffer that contains the result of the previous pass.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"outputBuffer?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"A frame buffer that serves as the output render target unless this pass renders to screen.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"deltaTime?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"stencilTest?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L138"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:138")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setdepthtexture"},"setDepthTexture"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setDepthTexture"),"(",Object(r.b)("inlineCode",{parentName:"p"},"depthTexture"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"depthPacking?"),": ",Object(r.b)("em",{parentName:"p"},"number"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the depth texture."),Object(r.b)("p",null,"This method will be called automatically by the ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_core_effectcomposer.effectcomposer"},"EffectComposer"),"."),Object(r.b)("p",null,"You may override this method if your pass relies on the depth information\nof a preceding ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_renderpass.renderpass"},"RenderPass"),"."),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"depthTexture")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"-"),Object(r.b)("td",{parentName:"tr",align:"left"},"A depth texture.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"depthPacking")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"number")),Object(r.b)("td",{parentName:"tr",align:"left"},"0"),Object(r.b)("td",{parentName:"tr",align:"left"},"-")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L256"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:256")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setfullscreenmaterial"},"setFullscreenMaterial"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"setFullscreenMaterial"),"(",Object(r.b)("inlineCode",{parentName:"p"},"material"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the fullscreen material."),Object(r.b)("p",null,"The material will be assigned to a mesh that fills the screen. The mesh\nwill be created once a material is assigned via this method."),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"material")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"A fullscreen material.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/Pass.ts#L216"},"packages/engine/src/renderer/postprocessing/passes/Pass.ts:216")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setresolutionscale"},"setResolutionScale"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setResolutionScale"),"(",Object(r.b)("inlineCode",{parentName:"p"},"scale"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Sets the resolution scale."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"deprecated"))," Adjust the fixed resolution width or height instead."),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"scale")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The new resolution scale.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L123"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:123")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setsize"},"setSize"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setSize"),"(",Object(r.b)("inlineCode",{parentName:"p"},"width"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"height"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Updates the size of this pass."),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"width")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The width.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"height")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any")),Object(r.b)("td",{parentName:"tr",align:"left"},"The height.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Overrides: ",Object(r.b)("a",{parentName:"p",href:"/docs/docs-engine/classes/renderer_postprocessing_passes_pass.pass"},"Pass")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/engine/src/renderer/postprocessing/passes/DepthPass.ts#L150"},"packages/engine/src/renderer/postprocessing/passes/DepthPass.ts:150")))}l.isMDXComponent=!0}}]);