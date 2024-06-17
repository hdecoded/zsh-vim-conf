"use strict";var N=Object.create;var m=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var k=(t,n)=>{for(var e in n)m(t,e,{get:n[e],enumerable:!0})},y=(t,n,e,p)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of T(n))!L.call(t,o)&&o!==e&&m(t,o,{get:()=>n[o],enumerable:!(p=P(n,o))||p.enumerable});return t};var _=(t,n,e)=>(e=t!=null?N(W(t)):{},y(n||!t||!t.__esModule?m(e,"default",{value:t,enumerable:!0}):e,t)),M=t=>y(m({},"__esModule",{value:!0}),t);var H={};k(H,{default:()=>F});module.exports=M(H);var i=require("@raycast/api");var c=require("react"),f=require("@raycast/api");var S=require("@raycast/api");var a=new S.Cache;var E=_(require("node:process"),1),I=require("node:util"),g=require("node:child_process"),v=(0,I.promisify)(g.execFile);async function l(t,{humanReadableOutput:n=!0}={}){if(E.default.platform!=="darwin")throw new Error("macOS only");let e=n?[]:["-ss"],{stdout:p}=await v("osascript",["-e",t,e]);return p.trim()}var R=require("@raycast/api");async function A(t){for(let n=0;n<t.length;n++)try{let e=t[n].name;if(await Q(e)&&!await B(e)&&!await V(e)){let s=`
tell application "${e}"
   quit
end tell`;await l(s)}}catch(e){console.error(e)}}async function x(t){for(let n=0;n<t.length;n++)try{let e=t[n].path.split("/").pop()?.replace(".app","");if(await Q(e)){let o=`tell application "${e}"
   quit
end tell`;await l(o)}}catch(e){console.error(e)}}async function B(t){try{return(await(0,R.getFrontmostApplication)())?.name==t}catch(n){return console.error(n),!1}}async function Q(t){let n=`if application "${t}" is running then
	return true
else
	return false
end if`;try{return await l(n)=="true"}catch(e){return console.error(e),!1}}async function V(t){let n=`set appName to "${t}"
tell application "System Events"
    if not (exists process appName) then
        return false
    end if
    set appProcess to first process whose name is appName
    set appWindows to windows of appProcess
    if length of appWindows is 0 then
        return false
    else
        return true
    end if
end tell
`;try{return await l(n)=="true"}catch{return!1}}var b=require("@raycast/api"),{layout:J,columns:X,itemInset:z,refreshInterval:h}=(0,b.getPreferenceValues)();var q=()=>{let[t,n]=(0,c.useState)(!0),[e,p]=(0,c.useState)([]),o=(0,c.useCallback)(async()=>{n(!0);let u=[];try{let s=a.get("Quit App");typeof s=="string"&&(u=JSON.parse(s)),p(u)}catch(s){console.error(s)}if(f.environment.launchType==f.LaunchType.Background){let s=a.get("Refresh Interval"),d=5;if(typeof s=="string"&&(d=parseInt(s)),d==h)await A(u),a.set("Refresh Interval","5");else{let w=d+5;w>h?(await A(u),a.set("Refresh Interval","5")):a.set("Refresh Interval",String(w))}}else await A(u),a.set("Refresh Interval","5");n(!1)},[]);return(0,c.useEffect)(()=>{o()},[o]),{quitApps:e,loading:t}};var r=require("react/jsx-runtime");function F(){let{quitApps:t,loading:n}=q();return(0,r.jsxs)(i.MenuBarExtra,{icon:{source:{light:"menu-bar-icon.png",dark:"menu-bar-icon@dark.png"}},isLoading:n,tooltip:"Auto Quit App",children:[t.length!==0&&(0,r.jsx)(i.MenuBarExtra.Section,{title:"Auto Quit Apps",children:t?.map(e=>(0,r.jsx)(i.MenuBarExtra.Item,{title:e.name,icon:{fileIcon:e.path},tooltip:`Open ${e.name}`,onAction:async()=>{await(0,i.open)(e.path)}},e.name))}),t.length!==0&&(0,r.jsx)(i.MenuBarExtra.Section,{children:(0,r.jsx)(i.MenuBarExtra.Item,{title:"Quit All Apps",icon:i.Icon.XMarkTopRightSquare,shortcut:{modifiers:["cmd"],key:"q"},onAction:async()=>{await x(t)}})}),(0,r.jsx)(i.MenuBarExtra.Section,{children:(0,r.jsx)(i.MenuBarExtra.Item,{title:"Set Auto Quit App",icon:i.Icon.AppWindowGrid3x3,shortcut:{modifiers:["cmd"],key:"s"},onAction:()=>{(0,i.launchCommand)({name:"set-auto-quit-app",type:i.LaunchType.UserInitiated}).then()}})}),(0,r.jsx)(i.MenuBarExtra.Section,{children:(0,r.jsx)(i.MenuBarExtra.Item,{title:"Preferences",icon:i.Icon.Gear,shortcut:{modifiers:["cmd"],key:","},onAction:()=>{(0,i.openCommandPreferences)().then(()=>null)}})})]})}
