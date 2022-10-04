"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:1},o="Overview",l={unversionedId:"re_data/reference/cli/overview",id:"re_data/reference/cli/overview",title:"Overview",description:"re_data overview cli command is used to generate & serve reliability UI.",source:"@site/docs/re_data/reference/cli/overview.md",sourceDirName:"re_data/reference/cli",slug:"/re_data/reference/cli/overview",permalink:"/master/docs/re_data/reference/cli/overview",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/cli/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Init",permalink:"/master/docs/re_data/reference/cli/init"},next:{title:"Run",permalink:"/master/docs/re_data/reference/cli/run"}},d={},s=[{value:"generate",id:"generate",level:3},{value:"serve",id:"serve",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"re_data overview")," cli command is used to generate & serve reliability UI. "),(0,n.kt)("h3",{id:"generate"},"generate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --end-date 2021-01-30 --interval days:1\n")),(0,n.kt)("p",null,"Generates overview as HTML and JSON files and saves by default in the target folder specified in the dbt project. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supported arguments:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"start-date (",(0,n.kt)("em",{parentName:"li"},"default: today - 7 days"),") - start date of period for which you generate overview"),(0,n.kt)("li",{parentName:"ul"},"end-date (",(0,n.kt)("em",{parentName:"li"},"default: today"),") - end date of period for which you generate overview"),(0,n.kt)("li",{parentName:"ul"},"interval (",(0,n.kt)("em",{parentName:"li"},"default: days:1"),") - basic time grain for the overview, supported values - ",(0,n.kt)("em",{parentName:"li"},"days"),", ",(0,n.kt)("em",{parentName:"li"},"hours"),", example: ",(0,n.kt)("strong",{parentName:"li"},"days:7"),", ",(0,n.kt)("strong",{parentName:"li"},"hours:1"),"."),(0,n.kt)("li",{parentName:"ul"},"re-data-target-dir - directory to store artefacts generated by re_data. Defaults to the 'target-path' used in dbt_project.yml."),(0,n.kt)("li",{parentName:"ul"},"dbt-vars - This accepts a valid YAML dictionary as string which is passed down to the dbt command using ",(0,n.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/docs/building-a-dbt-project/building-models/using-variables"},"--vars"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Dbt supported arguments:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"profile - Which profile to load. Overrides setting in dbt_project.yml."),(0,n.kt)("li",{parentName:"ul"},"target - Which target to load for the given profile."),(0,n.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents."),(0,n.kt)("li",{parentName:"ul"},"profiles-dir - Which directory to look in for the profiles.yml file. Default = ~/.dbt.")))),(0,n.kt)("p",null,"For this command to generate HTML/JSON with data, you need to have already re_data models for chosen dates/intervals in your data warehouse. ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data run")," command or just bare ",(0,n.kt)("inlineCode",{parentName:"p"},"dbt run")," for re_data package (can be called in your dbt Cloud env) are command to use for that."),(0,n.kt)("h3",{id:"serve"},"serve"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"re_data overview serve\n")),(0,n.kt)("p",null,"Starts simple python server that serves HTML/JSON files generated & opens your browser \ud83d\ude0a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Supported arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"port - Specify the port number for the UI server. Default is 8085."),(0,n.kt)("li",{parentName:"ul"},"re-data-target-dir - directory serve files generated by re_data. Defaults to the 'target-path' used in\ndbt_project.yml."),(0,n.kt)("li",{parentName:"ul"},"--no-browser - Don't start web browser."))),(0,n.kt)("li",{parentName:"ul"},"Dbt supported arguments:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"project-dir - Which directory to look in for the dbt_project.yml file. Default is the current working directory and its parents.")))))}c.isMDXComponent=!0}}]);