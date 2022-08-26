"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[487],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),s=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:e},u),{},{components:r})):a.createElement(f,i({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1444:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:0},c="Welcome to re docs!",s={unversionedId:"start_here",id:"start_here",title:"Welcome to re docs!",description:"re_data",source:"@site/docs/start_here.md",sourceDirName:".",slug:"/start_here",permalink:"/master/docs/start_here",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/start_here.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"What is re_data?",permalink:"/master/docs/re_data/introduction/whatis_data"}},u={},d=[{value:"re_data",id:"re_data",level:2},{value:"re_cloud",id:"re_cloud",level:2}],p={toc:d};function m(t){var e=t.components,l=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-re-docs"},"Welcome to re docs!"),(0,o.kt)("h2",{id:"re_data"},"re_data"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"re_data")," is an open-source data reliability framework build for modern data stack."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"re_data")," focuses on observing the dbt project and lets you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"get alerts about bad data"),(0,o.kt)("li",{parentName:"ul"},"compute data quality metrics"),(0,o.kt)("li",{parentName:"ul"},"write your own data asserts"),(0,o.kt)("li",{parentName:"ul"},"and more \ud83d\ude0a")),(0,o.kt)("p",null,"To start with ",(0,o.kt)("strong",{parentName:"p"},"re_data")," go to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/re_data/introduction/whatis_data"},"introduction"))," \ud83d\ude80"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://re-data.github.io/re-data/ui-latest/#/alerts"},"live demo"))," of what re_data can do for you! \ud83d\ude0a"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"GraphExample",src:r(1319).Z,width:"1587",height:"863"})),(0,o.kt)("h2",{id:"re_cloud"},"re_cloud"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"re_cloud")," allows you to very easily host and collaborate on data reports from data tools of your choice like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"re_data")," \ud83d\ude0a"),(0,o.kt)("li",{parentName:"ul"},"dbt docs"),(0,o.kt)("li",{parentName:"ul"},"great_expectations"),(0,o.kt)("li",{parentName:"ul"},"pandas_profiling"),(0,o.kt)("li",{parentName:"ul"},"and more comming soon!")),(0,o.kt)("p",null,"Start with ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://cloud.getre.io/#/register"},"a free account here \ud83d\ude0a")),"\nand check our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/re_cloud/Introduction/whatis_cloud"},"introdudction docs"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"DashboardExample",src:r(1969).Z,width:"1638",height:"1072"})))}m.isMDXComponent=!0},1969:function(t,e,r){e.Z=r.p+"assets/images/dashboard-a5e9e193485fda14dc24915f1ca9ed3d.png"},1319:function(t,e,r){e.Z=r.p+"assets/images/graph-9b350274adfb40bc5c806d7ae9d54c49.png"}}]);