(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},721:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1348)),c={id:"components_terminal_utils",title:"Module: components/terminal/utils",sidebar_label:"components/terminal/utils",custom_edit_url:null,hide_title:!0},i={unversionedId:"docs-client/modules/components_terminal_utils",id:"docs-client/modules/components_terminal_utils",isDocsHomePage:!1,title:"Module: components/terminal/utils",description:"Module: components/terminal/utils",source:"@site/docs/docs-client/modules/components_terminal_utils.md",slug:"/docs-client/modules/components_terminal_utils",permalink:"/docs/docs-client/modules/components_terminal_utils",editUrl:null,version:"current",sidebar_label:"components/terminal/utils",sidebar:"sidebar",previous:{title:"Module: components/terminal/components/types",permalink:"/docs/docs-client/modules/components_terminal_components_types"},next:{title:"Module: components/ui/Admin",permalink:"/docs/docs-client/modules/components_ui_admin"}},l=[{value:"Functions",id:"functions",children:[{value:"getOs",id:"getos",children:[]},{value:"handleLogging",id:"handlelogging",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-componentsterminalutils"},"Module: components/terminal/utils"),Object(o.b)("h2",{id:"functions"},"Functions"),Object(o.b)("h3",{id:"getos"},"getOs"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"getOs"),"(): ",Object(o.b)("em",{parentName:"p"},"win")," ","|"," ",Object(o.b)("em",{parentName:"p"},"linux")," ","|"," ",Object(o.b)("em",{parentName:"p"},"darwin")," ","|"," ",Object(o.b)("em",{parentName:"p"},"unknown")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"win")," ","|"," ",Object(o.b)("em",{parentName:"p"},"linux")," ","|"," ",Object(o.b)("em",{parentName:"p"},"darwin")," ","|"," ",Object(o.b)("em",{parentName:"p"},"unknown")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/terminal/utils.tsx#L38"},"packages/client-core/components/terminal/utils.tsx:38")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"handlelogging"},"handleLogging"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"handleLogging"),"(",Object(o.b)("inlineCode",{parentName:"p"},"method"),": ",Object(o.b)("em",{parentName:"p"},"any"),", ",Object(o.b)("inlineCode",{parentName:"p"},"addToOutput"),": ",Object(o.b)("em",{parentName:"p"},"any"),"): ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"method")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"any"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"addToOutput")),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("em",{parentName:"td"},"any"))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"void")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/66a84a950/packages/client-core/components/terminal/utils.tsx#L12"},"packages/client-core/components/terminal/utils.tsx:12")))}b.isMDXComponent=!0}}]);