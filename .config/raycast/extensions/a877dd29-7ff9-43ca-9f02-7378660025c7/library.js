"use strict";var n=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var c=(e,t)=>{for(var a in t)n(e,a,{get:t[a],enumerable:!0})},d=(e,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of m(t))!s.call(e,i)&&i!==a&&n(e,i,{get:()=>t[i],enumerable:!(o=f(t,i))||o.enumerable});return e};var h=e=>d(n({},"__esModule",{value:!0}),e);var u={};c(u,{default:()=>p});module.exports=h(u);var r=require("@raycast/api");async function p(){await(0,r.open)("https://readwise.io/everything")}