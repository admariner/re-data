"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[262],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:0},c="Anomalies",l={unversionedId:"reference/anomalies",id:"reference/anomalies",isDocsHomePage:!1,title:"Anomalies",description:"re_data looks at metrics gathered and alerts if those are suspicious, comparing to data saw in the past. This means situations similar to those.",source:"@site/docs/reference/anomalies.md",sourceDirName:"reference",slug:"/reference/anomalies",permalink:"/re-data/master/docs/reference/anomalies",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/anomalies.md",version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Checking for schema changes",permalink:"/re-data/master/docs/getting_started/example_project-data_monitoring/checking_for_schema_changes"},next:{title:"Data Cleaning",permalink:"/re-data/master/docs/reference/data_preparation/data_cleaning"}},u=[{value:"How it works?",id:"how-it-works",children:[]},{value:"Alerting notifications",id:"alerting-notifications",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anomalies"},"Anomalies"),(0,o.kt)("p",null,"re_data looks at metrics gathered and alerts if those are suspicious, comparing to data saw in the past. This means situations similar to those."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"sudden drops or increases in the volume of new records added to your tables"),(0,o.kt)("li",{parentName:"ul"},"longer than expected break between data arrivals"),(0,o.kt)("li",{parentName:"ul"},"increase in NULL values in one of your columns"),(0,o.kt)("li",{parentName:"ul"},"different maximal/minimal/avg numbers in any of the table columns")),(0,o.kt)("p",null,"Will be detected."),(0,o.kt)("h2",{id:"how-it-works"},"How it works?"),(0,o.kt)("p",null,"re_data is currently using z_score to detect anomalies. All detected anomalies are showing up in ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data_alerting")," model."),(0,o.kt)("h2",{id:"alerting-notifications"},"Alerting notifications"),(0,o.kt)("p",null,"To receive notifications you would need to set up, tests for ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data_alerting")," table. We recommend adding tests checking for any recent alerts to a dbt test suite."))}p.isMDXComponent=!0}}]);