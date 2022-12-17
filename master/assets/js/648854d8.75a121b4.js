"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(r),p=n,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:0,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},l="Overview",o={unversionedId:"re_data/reference/metrics/overview_metric",id:"re_data/reference/metrics/overview_metric",title:"Overview",description:"How metrics look like",source:"@site/docs/re_data/reference/metrics/overview_metric.md",sourceDirName:"re_data/reference/metrics",slug:"/re_data/reference/metrics/overview_metric",permalink:"/master/docs/re_data/reference/metrics/overview_metric",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/metrics/overview_metric.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Notify",permalink:"/master/docs/re_data/reference/cli/notify"},next:{title:"Default metrics",permalink:"/master/docs/re_data/reference/metrics/base_metrics"}},s={},c=[{value:"How metrics look like",id:"how-metrics-look-like",level:2},{value:"Time based",id:"time-based",level:2},{value:"Global",id:"global",level:2},{value:"Table level",id:"table-level",level:2},{value:"Column level",id:"column-level",level:2},{value:"Default",id:"default",level:2},{value:"Extra",id:"extra",level:2},{value:"Custom",id:"custom",level:2}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"how-metrics-look-like"},"How metrics look like"),(0,n.kt)("p",null,"re_data metrics are currently ",(0,n.kt)("em",{parentName:"p"},"just")," expressions which\nare added to select statements run automatically by re_data."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data query"',title:'"re_data','query"':!0},"select metric1, metric2, metric3\nfrom your_table\nwhere data in time_window\n")),(0,n.kt)("p",null,"These simple definitions still make it possible to create a wide variety of metrics.\nIn case metric is more than single sql expression, you can also create them by using sub queries in metric macros (more details in custom metrics section)"),(0,n.kt)("h2",{id:"time-based"},"Time based"),(0,n.kt)("p",null,"We recommend that most of your metrics computed would be time-based (data is then filtered by the ",(0,n.kt)("inlineCode",{parentName:"p"},"time_filter")," specified in the table config.\n",(0,n.kt)("inlineCode",{parentName:"p"},"time_filter")," can be either some date column comparable to timestamp or SQL expression that will be comparable to the timestamp in your data warehouse. ",(0,n.kt)("em",{parentName:"p"},"(And if you think we can shorten this definition to just SQL expression as column name is one, you are right \ud83d\ude0a")),(0,n.kt)("h2",{id:"global"},"Global"),(0,n.kt)("p",null,"In cases when time-based filtering is not possible re_data can compute global metrics for a table. Global metrics don't filter by time and work on data from the whole table. You can pass ",(0,n.kt)("inlineCode",{parentName:"p"},"time_filter: null")," in the re_data table config to compute global metrics."),(0,n.kt)("h2",{id:"table-level"},"Table level"),(0,n.kt)("p",null,"Table level metrics compute stats based on the whole table row, the most simple example of this is ",(0,n.kt)("inlineCode",{parentName:"p"},"row_count")," metric. Your custom table level metrics can use multiple columns when computing the value."),(0,n.kt)("h2",{id:"column-level"},"Column level"),(0,n.kt)("p",null,"Column level metrics are testing a single column of data values. For example, computing maximal value appears in the column. They take column names as an argument, which makes them generic. (you can use them on different columns and different tables)"),(0,n.kt)("h2",{id:"default"},"Default"),(0,n.kt)("p",null,"re_data comes with a set of metrics that are computed by default for all monitored tables. This is controlled by ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:default_metrics"),". Default metrics variable contain list of metrics groups which you would like to compute for all the tables. Check out "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="re_data:default_metrics:"',title:'"re_data:default_metrics:"'},"  re_data:metrics_groups:\n    table_metrics:\n      table:\n        - row_count\n        - freshness\n\n    column_metrics:\n      column:\n        numeric:\n          - min\n          - max\n          - avg\n          - stddev\n          - variance\n          - nulls_count\n          - nulls_percent\n        text:\n          - min_length\n          - max_length\n          - avg_length\n          - nulls_count\n          - missing_count\n          - nulls_percent\n          - missing_percent\n\n  re_data:default_metrics:\n    - table_metrics\n    - column_metrics\n\n")),(0,n.kt)("p",null,"Definition of all base metrics is available under ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/base_metrics"},"default metrics"))," section."),(0,n.kt)("h2",{id:"extra"},"Extra"),(0,n.kt)("p",null,"Apart from base metrics which can be added to your metrics computed, but are not available computed by default. Full list of those metrics is available in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/extra_metrics"},"Extra metrics"))," section."),(0,n.kt)("h2",{id:"custom"},"Custom"),(0,n.kt)("p",null,"re_data makes it possible to create macros which will compute your own metrics. More information about that in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/re_data/reference/metrics/your_own_metric"},"Custom metrics")),"  section."))}u.isMDXComponent=!0}}]);