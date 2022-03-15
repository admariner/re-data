"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[908],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8314:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],c={sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},l="Base metrics",s={unversionedId:"reference/metrics/base_metrics",id:"reference/metrics/base_metrics",title:"Base metrics",description:"Base metrics are computed for all monitored tables. If you would rather not compute some of them it's easy to change the base metrics list via the redata:metricsbase variable.",source:"@site/docs/reference/metrics/base_metrics.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/base_metrics",permalink:"/master/docs/reference/metrics/base_metrics",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/metrics/base_metrics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/master/docs/reference/metrics/overview_metric"},next:{title:"Extra Metrics",permalink:"/master/docs/reference/metrics/extra_metrics"}},d={},m=[{value:"Base table level metrics",id:"base-table-level-metrics",level:2},{value:"row_count",id:"row_count",level:3},{value:"(source code)",id:"source-code",level:4},{value:"freshness",id:"freshness",level:3},{value:"(source code)",id:"source-code-1",level:4},{value:"schema_changes",id:"schema_changes",level:3},{value:"Base column level metrics",id:"base-column-level-metrics",level:2},{value:"min",id:"min",level:3},{value:"(source code)",id:"source-code-2",level:4},{value:"max",id:"max",level:3},{value:"(source code)",id:"source-code-3",level:4},{value:"avg",id:"avg",level:3},{value:"(source code)",id:"source-code-4",level:4},{value:"stddev",id:"stddev",level:3},{value:"(source code)",id:"source-code-5",level:4},{value:"variance",id:"variance",level:3},{value:"(source code)",id:"source-code-6",level:4},{value:"min_length",id:"min_length",level:3},{value:"(source code) ",id:"source-code-",level:4},{value:"max_length ",id:"max_length-",level:3},{value:"avg_length",id:"avg_length",level:3},{value:"(source code)",id:"source-code-7",level:4},{value:"nulls_count",id:"nulls_count",level:3},{value:"(source code)",id:"source-code-8",level:4},{value:"missing_count",id:"missing_count",level:3},{value:"(source code)",id:"source-code-9",level:4},{value:"missing_percent",id:"missing_percent",level:3},{value:"(source code)",id:"source-code-10",level:4},{value:"nulls_percent",id:"nulls_percent",level:3},{value:"(source code)",id:"source-code-11",level:4}],u={toc:m};function p(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"base-metrics"},"Base metrics"),(0,i.kt)("p",null,"Base metrics are computed for all monitored tables. If you would rather not compute some of them it's easy to change the base metrics list via the ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data:metrics_base")," variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Sample table for example metrics"',title:'"Sample',table:!0,for:!0,example:!0,'metrics"':!0},"__      title               rental_rate rating      created_at\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00\n2       Grosse Wonderful    4.99        R           2021-09-01T12:00:00\n3       Airport Pollock     4.99        R           2021-09-01T15:00:00\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00\n6       Ace Goldfinger      4.99        G           2021-09-01T10:00:00\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00\n8       Affair Prejudice    2.99        G           2021-09-01T19:00:00\n9       African Egg         2.99        G           2021-09-01T20:00:00\n10      Agent Truman        2.99        PG          2021-09-01T07:00:00\n11      Airplane Sierra     4.99        PG-13       2021-09-02T09:00:00\n12      Alabama Devil       2.99        PG-13       2021-09-02T10:00:00\n13      Aladdin Calendar    4.99        NC-17       2021-09-02T11:00:00\n14      Alamo Videotape     0.99        G           2021-09-02T12:00:00\n15      Alaska Phantom      0.99        PG          2021-09-02T13:00:00\n16      Date Speed          0.99        R           2021-09-02T14:00:00\n17      Ali Forever         4.99        PG          2021-09-02T15:00:00\n18      Alice Fantasia      0.99        NC-17       2021-09-02T16:00:00\n19      Alien Center        2.99        NC-17       2021-09-02T17:00:00\n")),(0,i.kt)("p",null,"Below is a list of currently available metrics and how they are computed internally by re_data:"),(0,i.kt)("h2",{id:"base-table-level-metrics"},"Base table level metrics"),(0,i.kt)("h3",{id:"row_count"},"row_count"),(0,i.kt)("h4",{id:"source-code"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_row_count"},"(source code)")),(0,i.kt)("p",null,"Numbers of rows added to the table in a specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"row_count = 10 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"freshness"},"freshness"),(0,i.kt)("h4",{id:"source-code-1"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_freshness"},"(source code)")),(0,i.kt)("p",null,"Information about the latest record in a given time frame. Suppose we calculate the ",(0,i.kt)("inlineCode",{parentName:"p"},"freshness")," metric in the table above for the time window ",(0,i.kt)("inlineCode",{parentName:"p"},"[2021-09-01T00:00:00, 2021-09-02T00:00:00)"),". We observe that the latest record\nin that time frame appears in row 9 with ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at=2021-09-01T20:00:00"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"freshness")," is the difference between the end of the time window and the latest record in the time frame in seconds. For this example described, re_data would calculate freshness as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-09-02T00:00:00 - 2021-09-01T20:00:00 = 14400\n")),(0,i.kt)("h3",{id:"schema_changes"},"schema_changes"),(0,i.kt)("p",null,"Information about schema changes in the monitored table."),(0,i.kt)("p",null,"Stored separately from the rest of the metrics in the ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data_schema_changes")," model."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Schema changes are metric different from the rest.\nBecause information about schema changes is gathered by comparing schemas\nbetween re_data runs this metric ",(0,i.kt)("strong",{parentName:"p"},"doesn't")," filter changes to time-window specified and\nin fact, ",(0,i.kt)("strong",{parentName:"p"},"doesn't")," use time_window settings at all."))),(0,i.kt)("h2",{id:"base-column-level-metrics"},"Base column level metrics"),(0,i.kt)("h3",{id:"min"},"min"),(0,i.kt)("h4",{id:"source-code-2"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min"},"(source code)")),(0,i.kt)("p",null,"Minimal value appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"min(rental_rate) = 0.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"max"},"max"),(0,i.kt)("h4",{id:"source-code-3"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max"},"(source code)")),(0,i.kt)("p",null,"Maximal value appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max(rental_rate) = 4.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"avg"},"avg"),(0,i.kt)("h4",{id:"source-code-4"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg"},"(source code)")),(0,i.kt)("p",null,"Average of all values appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"avg(rental_rate) = 3.79 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"stddev"},"stddev"),(0,i.kt)("h4",{id:"source-code-5"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_stddev"},"(source code)")),(0,i.kt)("p",null,"The standard deviation of all values appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"stddev(rental_rate) = 1.3984117975602022 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"variance"},"variance"),(0,i.kt)("h4",{id:"source-code-6"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_variance"},"(source code)")),(0,i.kt)("p",null,"The variance of all values appearing in a given numeric column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"variance(rental_rate) = 1.9555555555555557 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"min_length"},"min_length"),(0,i.kt)("h4",{id:"source-code-"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min_length"},"(source code) ")),(0,i.kt)("p",null,"Minimal length of all strings appearing in a given column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"min_length(rating) = 1 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"max_length-"},(0,i.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max_length"},"max_length ")),(0,i.kt)("p",null,"Maximal length of all strings appearing in a given column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max_length(rating) = 5 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"avg_length"},"avg_length"),(0,i.kt)("h4",{id:"source-code-7"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg_length"},"(source code)")),(0,i.kt)("p",null,"The average length of all strings appearing in a given column"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"avg_length(rating) = 2.4 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"nulls_count"},"nulls_count"),(0,i.kt)("h4",{id:"source-code-8"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_count"},"(source code)")),(0,i.kt)("p",null,"A number of nulls in a given column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nulls_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"missing_count"},"missing_count"),(0,i.kt)("h4",{id:"source-code-9"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_count"},"(source code)")),(0,i.kt)("p",null,"A number of nulls and empty string values in a given column for the specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"missing_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"missing_percent"},"missing_percent"),(0,i.kt)("h4",{id:"source-code-10"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_percent"},"(source code)")),(0,i.kt)("p",null,"A percentage of nulls and empty string values in a given column for the specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"missing_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,i.kt)("h3",{id:"nulls_percent"},"nulls_percent"),(0,i.kt)("h4",{id:"source-code-11"},(0,i.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_percent"},"(source code)")),(0,i.kt)("p",null,"A percentage of null values in a given column for the specific time range."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nulls_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")))}p.isMDXComponent=!0}}]);