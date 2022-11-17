"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[95157],{96477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(83117),n=(r(67294),r(3905));const a={},i="Examples",l={unversionedId:"project-overview/licenses/examples",id:"project-overview/licenses/examples",title:"Examples",description:"We chose ELv2 because it is very permissive with what you can do with the software.",source:"@site/../docs/project-overview/licenses/examples.md",sourceDirName:"project-overview/licenses",slug:"/project-overview/licenses/examples",permalink:"/project-overview/licenses/examples",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/project-overview/licenses/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"MIT",permalink:"/project-overview/licenses/mit-license"},next:{title:"Release Notes",permalink:"/category/release-notes"}},c={},s=[{value:"Examples of projects that can&#39;t leverage the technology under ELv2 without a contract",id:"examples-of-projects-that-cant-leverage-the-technology-under-elv2-without-a-contract",level:2},{value:"Examples of projects for which you can leverage Airbyte fully",id:"examples-of-projects-for-which-you-can-leverage-airbyte-fully",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"examples"},"Examples"),(0,n.kt)("p",null,"We chose ELv2 because it is very permissive with what you can do with the software.\nWe are still being asked whether one's project are concerned by the ELv2 license. So we decided to list some projects to make this very explicit. "),(0,n.kt)("p",null,"Don't hesitate to ask us about this or to do a pull request to add your project here. If we merge it, it means you're good to go."),(0,n.kt)("p",null,"Let's start with the list of projects that falls under ELv2 and for which you can't leverage Airbyte's technology that is under Elv2, because there aren't actually many projects."),(0,n.kt)("h2",{id:"examples-of-projects-that-cant-leverage-the-technology-under-elv2-without-a-contract"},"Examples of projects that can't leverage the technology under ELv2 without a contract"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hosting Airbyte yourself and selling it as an ELT/ETL tool. That means selling a competitive alternative to Airbyte Cloud or the future Airbyte Enterprise."),(0,n.kt)("li",{parentName:"ul"},"Selling a product that directly exposes Airbyte\u2019s UI or API.")),(0,n.kt)("h2",{id:"examples-of-projects-for-which-you-can-leverage-airbyte-fully"},"Examples of projects for which you can leverage Airbyte fully"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Creating an analytics or attribution platform for which you want to use Airbyte to bring data in on behalf of your customers."),(0,n.kt)("li",{parentName:"ul"},"Creating any kind of platform on which you offer Airbyte's connectors to your customers to bring their data in, unless you're selling some ELT / ETL solution."),(0,n.kt)("li",{parentName:"ul"},"Building your internal data stack and configuring pipelines through Airbyte's UI or API.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contact us on the chat on the bottom right to add your project example!")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(r),h=n,m=y["".concat(c,".").concat(h)]||y[h]||p[h]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);