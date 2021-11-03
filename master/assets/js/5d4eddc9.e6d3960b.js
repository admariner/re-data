"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[574],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7360:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:5},l="Tests",c={unversionedId:"reference/tests",id:"reference/tests",isDocsHomePage:!1,title:"Tests",description:"redata models (specifically redata_metrics model) can be tested like any other dbt model. Because of the nature of metrics we created a couple of custom tests to help you with metrics testing.",source:"@site/docs/reference/tests.md",sourceDirName:"reference",slug:"/reference/tests",permalink:"/re-data/master/docs/reference/tests",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/tests.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/re-data/master/docs/reference/models"},next:{title:"Introduction",permalink:"/re-data/master/docs/bi_integration/introduction"}},u=[{value:"Built-in metrics tests",id:"built-in-metrics-tests",children:[{value:"metric_expression_is_true",id:"metric_expression_is_true",children:[]},{value:"metric_equal_to",id:"metric_equal_to",children:[]},{value:"metric_in_range",id:"metric_in_range",children:[]}]},{value:"Testing metrics vs testing models",id:"testing-metrics-vs-testing-models",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tests"},"Tests"),(0,s.kt)("p",null,"re_data models (specifically ",(0,s.kt)("inlineCode",{parentName:"p"},"re_data_metrics")," model) can be tested like any other dbt model. Because of the nature of metrics we created a couple of custom tests to help you with metrics testing."),(0,s.kt)("p",null,"Here is a very simple example of metrics tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="models/metrics/re_data_metrics.yml"',title:'"models/metrics/re_data_metrics.yml"'},"version: 2\n\nmodels:\n  - name: re_data_metrics\n    tests:\n      - re_data.metric_expression_is_true:\n          table: ref('buy_events')\n          metric: max_length\n          column_name: event_type\n          expression: value = 3\n\n      - re_data.metric_equal_to:\n          table: ref('buy_events')\n          metric: max_length\n          column_name: event_type\n          value: 3\n\n      - re_data.metric_in_range:\n          table: ref('buy_events')\n          metric: max_length\n          column_name: event_type\n          min_value: 3\n          max_value: 3\n\n      - re_data.metric_expression_is_true:\n          table: ref('buy_events')\n          metric: row_count\n          expression: value > 0 and value < 10\n          condition: time_window_start >= '2021-05-02'\n")),(0,s.kt)("h2",{id:"built-in-metrics-tests"},"Built-in metrics tests"),(0,s.kt)("h3",{id:"metric_expression_is_true"},"metric_expression_is_true"),(0,s.kt)("p",null,"Most flexible test. It accepts:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"table - which should be a ref to model which metrics we want to test"),(0,s.kt)("li",{parentName:"ul"},"metric - name of the metric"),(0,s.kt)("li",{parentName:"ul"},"column_name - the name of column (you should skip this for table_level metrics)"),(0,s.kt)("li",{parentName:"ul"},"condition - filtering condition, when you only want to tests only metrics for a limited time window."),(0,s.kt)("li",{parentName:"ul"},"expression - any expression, as re_data_metrics stores metric value in ",(0,s.kt)("inlineCode",{parentName:"li"},"value")," column \ud83d\ude0a You would usually write some expression with ",(0,s.kt)("inlineCode",{parentName:"li"},"value")," column used.")),(0,s.kt)("h3",{id:"metric_equal_to"},"metric_equal_to"),(0,s.kt)("p",null,"Simple shortcut which lets you check if the metric has one specific value"),(0,s.kt)("h3",{id:"metric_in_range"},"metric_in_range"),(0,s.kt)("p",null,"Simple shortcut which lets you check if metric values are in the range"),(0,s.kt)("h2",{id:"testing-metrics-vs-testing-models"},"Testing metrics vs testing models"),(0,s.kt)("p",null,"Some of the metrics produced and possible tests for them may overlap with tests\nyou are already doing on your models.\nIn this case, we advise to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"testing things that cannot happen in your models tests"),(0,s.kt)("li",{parentName:"ul"},"testing for warning things that are alerting (but can happen and you don't want to stop processing because of it with re_data metrics)")),(0,s.kt)("p",null,"But of course, the best solution would still very much depend on your specific use case."),(0,s.kt)("p",null,"Overall metrics tests are very lightweight compared to data tests as data they are querying is already aggregated. This can make it possible for you to tests more things with keeping test running-time and costs low."),(0,s.kt)("p",null,"If you would like to ask about your use case, hit as on ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug"},"Slack! \ud83d\ude0a"))))}d.isMDXComponent=!0}}]);