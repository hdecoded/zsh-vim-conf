"use strict";var r=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var s in e)r(t,s,{get:e[s],enumerable:!0})},y=(t,e,s,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of m(e))!u.call(t,i)&&i!==s&&r(t,i,{get:()=>e[i],enumerable:!(n=p(e,i))||n.enumerable});return t};var D=t=>y(r({},"__esModule",{value:!0}),t);var g={};h(g,{default:()=>l});module.exports=D(g);var o=require("@raycast/api");var c=require("url");var a={$schema:"https://www.raycast.com/schemas/extension.json",name:"dash",title:"Dash",description:"Interface with the Dash application, allowing users to quickly search through documentation sets.",icon:"command-icon.png",author:"RSO",contributors:["sxn","JasonJiang"],categories:["Documentation","Productivity"],license:"MIT",commands:[{name:"index",title:"Find in Dash",subtitle:"Dash",description:"Filter a Dash docset and search for the provided string in it.",mode:"view"},{name:"docset",title:"Find in Specific Dash Docset",subtitle:"Docset keyword in Dash",description:"Directly search for the provided string in specific docset.",mode:"view",arguments:[{name:"docset",placeholder:"Docset keyword",type:"text",required:!0}]},{name:"create-docset-link",title:"Create Docset Quicklink",subtitle:"Docset keyword in Dash",description:"Create a quicklink for a specific docset in Dash.",mode:"no-view",arguments:[{name:"docset",placeholder:"Docset keyword",type:"text",required:!0}]}],dependencies:{"@raycast/api":"^1.53.4",execa:"6.1.0","fast-xml-parser":"3.20.3","html-entities":"2.3.2","node-fetch":"3.0.0","raycast-toolkit":"1.0.3",tempy:"2.0.0"},devDependencies:{"@types/node":"16.10.9","@types/react":"17.0.42","@typescript-eslint/eslint-plugin":"5.16.0","@typescript-eslint/parser":"5.16.0",eslint:"8.5.0","eslint-config-prettier":"8.5.0","eslint-plugin-react-hooks":"4.3.0","react-devtools":"4.19.2",typescript:"4.6.2"},scripts:{build:"ray build -e dist",dev:"ray develop",lint:"ray lint","fix-lint":"ray lint --fix"}};var d=t=>{let e=`raycast://extensions/${a.author}/dash/docset`,s=new c.URL(e);return s.searchParams.set("arguments",JSON.stringify({docset:t})),e=s.toString(),e};async function l(t){let{docset:e}=t.arguments,s=d(e);await(0,o.launchCommand)({ownerOrAuthorName:"raycast",extensionName:"raycast",name:"create-quicklink",type:o.LaunchType.UserInitiated,fallbackText:s})}