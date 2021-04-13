(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{2722:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(r),b=n,u=d["".concat(s,".").concat(b)]||d[b]||m[b]||o;return r?a.a.createElement(u,c(c({ref:t},l),{},{components:r})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},730:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),o=(r(0),r(2722)),s={id:"payments_seat_seat_model",title:"Module: payments/seat/seat.model",sidebar_label:"payments/seat/seat.model",custom_edit_url:null,hide_title:!0},c={unversionedId:"docs-server-core/modules/payments_seat_seat_model",id:"docs-server-core/modules/payments_seat_seat_model",isDocsHomePage:!1,title:"Module: payments/seat/seat.model",description:"Module: payments/seat/seat.model",source:"@site/docs/docs-server-core/modules/payments_seat_seat_model.md",slug:"/docs-server-core/modules/payments_seat_seat_model",permalink:"/docs/docs-server-core/modules/payments_seat_seat_model",editUrl:null,version:"current",sidebar_label:"payments/seat/seat.model",sidebar:"sidebar",previous:{title:"Module: payments/seat/seat.hooks",permalink:"/docs/docs-server-core/modules/payments_seat_seat_hooks"},next:{title:"Module: payments/seat/seat.service",permalink:"/docs/docs-server-core/modules/payments_seat_seat_service"}},p=[{value:"Properties",id:"properties",children:[{value:"default",id:"default",children:[]}]}],l={toc:p};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"module-paymentsseatseatmodel"},"Module: payments/seat/seat.model"),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"default"},"default"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"default"),": (",Object(o.b)("inlineCode",{parentName:"p"},"app"),": Application) => ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"app"),": Application): ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("h4",{id:"parameters"},"Parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Name"),Object(o.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("inlineCode",{parentName:"td"},"app")),Object(o.b)("td",{parentName:"tr",align:"left"},"Application")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/xr3ngine/xr3ngine/blob/716a06460/packages/server-core/src/payments/seat/seat.model.ts#L2"},"packages/server-core/src/payments/seat/seat.model.ts:2")))}i.isMDXComponent=!0}}]);