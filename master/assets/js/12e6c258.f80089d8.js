"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[779],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,_=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(_,o(o({ref:t},l),{},{components:r})):n.createElement(_,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8937:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:4},s="Specifying extra metrics",m={unversionedId:"getting_started/example_project/data_monitoring/specifying_extra_metrics",id:"getting_started/example_project/data_monitoring/specifying_extra_metrics",isDocsHomePage:!1,title:"Specifying extra metrics",description:"Now that we have computed default metrics for the current monitored tables, we can specify extra metrics",source:"@site/docs/getting_started/example_project/data_monitoring/specifying_extra_metrics.md",sourceDirName:"getting_started/example_project/data_monitoring",slug:"/getting_started/example_project/data_monitoring/specifying_extra_metrics",permalink:"/re-data/master/docs/getting_started/example_project/data_monitoring/specifying_extra_metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project/data_monitoring/specifying_extra_metrics.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Compute first metrics",permalink:"/re-data/master/docs/getting_started/example_project/data_monitoring/compute_first_metrics"},next:{title:"Specifying custom metrics",permalink:"/re-data/master/docs/getting_started/example_project/data_monitoring/compute_custom_metrics"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"specifying-extra-metrics"},"Specifying extra metrics"),(0,i.kt)("p",null,"Now that we have computed default metrics for the current monitored tables, we can specify extra metrics\nto compute at table or column level. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/data_monitoring/metrics#defining-your-metric"},"defining your metric")," to set up custom metrics."),(0,i.kt)("p",null,"Here is an example showing how to add these metrics to the ",(0,i.kt)("inlineCode",{parentName:"p"},"customers")," table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml vars"',title:'"dbt_project.yml','vars"':!0},"vars:\n  re_data:alerting_z_score: 3\n  re_data:monitored:\n    - tables:\n        - name: customers\n          time_filter: joined_at\n          metrics:\n            table: # computing table level metrics\n                - distinct_table_rows\n            column:\n                first_name: # computing metrics for the first_name column only\n                    - distinct_values\n                    - match_regex:\n                        regex: (Emily) # match rows with this name\n        - name: order_items\n          time_filter: added_at\n        - name: orders\n          time_filter: created_at\n      actively_monitored: true \n")),(0,i.kt)("p",null,"Metrics: ",(0,i.kt)("inlineCode",{parentName:"p"},"distinct_table_rows"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"distinct_table_rows"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"match_regex")," are already defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data")," so we just need to reference them here to let re_data now to compute them."),(0,i.kt)("p",null,"Once again, we run data, let's do it for the same day as previously (metrics for the first day of 2021 would be overwritten)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dbt run --models package:re_data --vars \\\n   \'{\n     "re_data:time_window_start": "2021-01-01 00:00:00",\n     "re_data:time_window_end": "2021-01-02 00:00:00"\n    }\'\n')),(0,i.kt)("p",null,"And now we can inspect ours extra metrics in SQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'select table_name, column_name, metric, value, time_window_start, time_window_end from toy_shop_re.re_data_metrics\nwhere metric in (\'distinct_table_rows\', \'distinct_values\', \'match_regex\');\n\n               table_name              | column_name  |  metric             | value |  time_window_start  |   time_window_end\n---------------------------------------+--------------+---------------------+-------+---------------------+---------------------\n"postgres"."toy_shop"."customers"      | first_name   | distinct_values     |    12 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n"postgres"."toy_shop"."customers"      | first_name   | match_regex         |    3  | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n"postgres"."toy_shop"."customers"      |              | distinct_table_rows |    15 | 2021-01-01 00:00:00 | 2021-01-02 00:00:00\n\n')),(0,i.kt)("p",null,"What if we have a metric that is quite special for us and isn't available in re_data? No problem, we can define it ourselves and let re_data compute it. Let's check how to do it:"))}d.isMDXComponent=!0}}]);