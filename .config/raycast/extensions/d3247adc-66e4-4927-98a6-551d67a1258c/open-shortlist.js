"use strict";var a=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var d=(o,t)=>{for(var i in t)a(o,i,{get:t[i],enumerable:!0})},h=(o,t,i,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of m(t))!c.call(o,r)&&r!==i&&a(o,r,{get:()=>t[r],enumerable:!(e=f(t,r))||e.enumerable});return o};var l=o=>h(a({},"__esModule",{value:!0}),o);var u={};d(u,{default:()=>s});module.exports=l(u);var p=require("@raycast/api");var n="https://read.readwise.io/";async function s(){await(0,p.open)(n+"shortlist")}
