"use strict";var F=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var le=Object.prototype.hasOwnProperty;var Ce=(t,e)=>{for(var s in e)F(t,s,{get:e[s],enumerable:!0})},fe=(t,e,s,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of ie(e))!le.call(t,r)&&r!==s&&F(t,r,{get:()=>e[r],enumerable:!(a=ce(e,r))||a.enumerable});return t};var ue=t=>fe(F({},"__esModule",{value:!0}),t);var $e={};Ce($e,{default:()=>re});module.exports=ue($e);var n=require("@raycast/api"),h=require("react");var te=require("@raycast/api");var pe=new RegExp("([\\p{Ll}\\d])(\\p{Lu})","gu"),de=new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])","gu"),me=new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d","u"),he=/[^\p{L}\d]+/giu,$="$1\0$2",j="";function E(t){let e=t.trim();e=e.replace(pe,$).replace(de,$),e=e.replace(he,"\0");let s=0,a=e.length;for(;e.charAt(s)==="\0";)s++;if(s===a)return[];for(;e.charAt(a-1)==="\0";)a--;return e.slice(s,a).split(/\0/g)}function ge(t){let e=E(t);for(let s=0;s<e.length;s++){let a=e[s],r=me.exec(a);if(r){let i=r.index+(r[1]??r[2]).length;e.splice(s,1,a.slice(0,i),a.slice(i))}}return e}function L(t,e){let[s,a,r]=P(t,e);return s+a.map(_(e?.locale)).join(e?.delimiter??" ")+r}function D(t,e){let[s,a,r]=P(t,e),i=_(e?.locale),l=U(e?.locale),p=e?.mergeAmbiguousCharacters?N(i,l):q(i,l);return s+a.map((u,m)=>m===0?i(u):p(u,m)).join(e?.delimiter??"")+r}function W(t,e){let[s,a,r]=P(t,e),i=_(e?.locale),l=U(e?.locale),p=e?.mergeAmbiguousCharacters?N(i,l):q(i,l);return s+a.map(p).join(e?.delimiter??"")+r}function X(t,e){return k(t,{delimiter:"_",...e})}function k(t,e){let[s,a,r]=P(t,e),i=_(e?.locale),l=U(e?.locale);return s+a.map(N(i,l)).join(e?.delimiter??" ")+r}function J(t,e){let[s,a,r]=P(t,e);return s+a.map(U(e?.locale)).join(e?.delimiter??"_")+r}function H(t,e){return L(t,{delimiter:".",...e})}function K(t,e){return L(t,{delimiter:"-",...e})}function V(t,e){return L(t,{delimiter:"/",...e})}function B(t,e){return L(t,{delimiter:"_",...e})}function Q(t,e){return k(t,{delimiter:"-",...e})}function _(t){return t===!1?e=>e.toLowerCase():e=>e.toLocaleLowerCase(t)}function U(t){return t===!1?e=>e.toUpperCase():e=>e.toLocaleUpperCase(t)}function N(t,e){return s=>`${e(s[0])}${t(s.slice(1))}`}function q(t,e){return(s,a)=>{let r=s[0];return(a>0&&r>="0"&&r<="9"?"_"+r:e(r))+t(s.slice(1))}}function P(t,e={}){let s=e.split??(e.separateNumbers?ge:E),a=e.prefixCharacters??j,r=e.suffixCharacters??j,i=0,l=t.length;for(;i<t.length;){let p=t.charAt(i);if(!a.includes(p))break;i++}for(;l>i;){let p=l-1,u=t.charAt(p);if(!r.includes(u))break;l=p}return[t.slice(0,i),s(t.slice(i,l)),t.slice(l)]}function G(t,e){let s="";for(let a of t)s+=Math.random()>.5?a.toLocaleUpperCase(e):a.toLocaleLowerCase(e);return s}function Y(t,e){let s="";for(let a of t){let r=a.toLocaleLowerCase(e);s+=a===r?a.toLocaleUpperCase(e):r}return s}var xe=/(\S+)|(.)/g,Ae=new RegExp("[\\.#]\\p{Alphabetic}","u"),we=new RegExp("\\p{Ll}(?=[\\p{Lu}])","u"),Te=new RegExp("\\p{Alphabetic}+","gu"),ye=new RegExp("^(\\P{Alphabetic})*(?:\\p{Alphabetic}\\.){2,}(\\P{Alphabetic})*$","u"),Le=new Set(["\u2014","\u2013","-","\u2015","/"]),Z=new Set([".","!","?"]),Pe=new Set([...Z,":",'"',"'","\u201D"]),O=new Set(["a","an","and","as","at","because","but","by","en","for","if","in","neither","nor","of","on","only","or","over","per","so","some","than","that","the","to","up","upon","v","versus","via","vs","when","with","without","yet"]);function ee(t,e={}){let{locale:s=void 0,sentenceCase:a=!1,sentenceTerminators:r=Z,titleTerminators:i=Pe,smallWords:l=O,wordSeparators:p=Le}=typeof e=="string"||Array.isArray(e)?{locale:e}:e,u=a?r:i,m="",d=!0;for(let y of t.matchAll(xe)){let{1:C,2:g,index:b=0}=y;if(g){m+=g;continue}if(Ae.test(C)){let x=C.match(ye);if(x){let[w,S="",o=""]=x;m+=a&&!d?C:z(C,S.length,s),d=u.has(o.charAt(0));continue}m+=C,d=u.has(C.charAt(C.length-1))}else{let x=Array.from(C.matchAll(Te)),w=C,S=!1;for(let o=0;o<x.length;o++){let{0:f,index:T=0}=x[o],A=C.charAt(T+f.length);if(S=u.has(A),d)d=!1;else{if(a||we.test(f))continue;if(x.length===1){if(l.has(f)&&!(b+C.length===t.length)&&!S)continue}else if(o>0&&(!p.has(C.charAt(T-1))||l.has(f)&&p.has(A)))continue}w=z(w,T,s)}m+=w,d=S||u.has(C.charAt(C.length-1))}}return m}function z(t,e,s){return t.slice(0,e)+t.charAt(e).toLocaleUpperCase(s)+t.slice(e+1)}var Re=t=>t.toLowerCase(),be=t=>t.length<=1?t.toLowerCase():t[0].toLowerCase()+t.slice(1),Ee=t=>E(t).map(s=>s.toUpperCase()).join("-"),ne=(t,e)=>{let s=(0,te.getPreferenceValues)().exceptions.split(",").map(r=>r.trim())??[],a=new Set([...s,...O]);return ee(t,{sentenceCase:e,smallWords:a})},ke=t=>ne(t,!0),_e=t=>ne(t,!1),Ue=t=>t.toUpperCase(),ve=t=>t.length<=1?t.toUpperCase():t[0].toUpperCase()+t.slice(1),R={"Camel Case":D,"Capital Case":k,"Constant Case":J,"Dot Case":H,"Header Case":Q,"Lower Case":Re,"Lower First":be,"No Case":L,"Kebab Case":K,"Kebab Upper Case":Ee,"Pascal Case":W,"Pascal Snake Case":X,"Path Case":V,"Random Case":G,"Sentence Case":ke,"Snake Case":B,"Swap Case":Y,"Title Case":_e,"Upper Case":Ue,"Upper First":ve},Be=Object.keys(R),se={"Header Case":["train","dash"],"No Case":["none"],"Kebab Case":["dash","slug","param"],"Random Case":["sponge"],"Swap Case":["reverse"],"Constant Case":["macro"]};var c=require("react/jsx-runtime"),v=class t extends Error{constructor(){super("No text"),Object.setPrototypeOf(this,t.prototype)}};async function Ie(){try{return await(0,n.getSelectedText)()}catch{return""}}async function oe(t){let e=await n.Clipboard.readText(),s=await Ie();if(t==="clipboard"){if(e)return e;if(s)return s}else{if(s)return s;if(e)return e}throw new v}function ae(t,e){return e?t:t.toLowerCase()}function M(t,e){let s=[],a=[],r=t.split(`
`);for(let i of r){let l=R[e](ae(i,!0));s.push(l),a.push((l.length===0?"\u200B":l)+`
`)}return{rawText:s.join(`
`),markdown:a.join(`
`)}}var I=new n.Cache,Fe=()=>{let t=I.get("pinned");return t?JSON.parse(t):[]},Ne=()=>{let t=I.get("recent");return t?JSON.parse(t):[]},Oe=t=>{I.set("pinned",JSON.stringify(t))},Me=t=>{I.set("recent",JSON.stringify(t))};function re(t){let e=(0,n.getPreferenceValues)(),s=e.source,a=e.action,r=e.preserveCase,i=t.launchContext?.case;if(i){(async()=>{let o=await oe(s).then(T=>ae(T,r)),f=R[i](o);a==="paste"?n.Clipboard.paste(f):n.Clipboard.copy(f),(0,n.showHUD)(`Converted to ${i}`),(0,n.popToRoot)()})();return}let[l,p]=(0,h.useState)(""),[u,m]=(0,h.useState)(),[d,y]=(0,h.useState)([]),[C,g]=(0,h.useState)([]);(0,h.useEffect)(()=>{y(Fe()),g(Ne()),(0,n.getFrontmostApplication)().then(m)},[]),(0,h.useEffect)(()=>{Oe(d)},[d]),(0,h.useEffect)(()=>{Me(C)},[C]);let b=async()=>{try{p(await oe(s))}catch(o){o instanceof v&&(0,n.showToast)({style:n.Toast.Style.Failure,title:"Nothing to convert",message:"Please ensure that text is either selected or copied"})}};(0,h.useEffect)(()=>{b()},[]);let x=o=>(0,c.jsx)(n.Action,{title:"Copy to Clipboard",icon:n.Icon.Clipboard,onAction:()=>{o.pinned||g([o.case,...C.filter(f=>f!==o.case)].slice(0,4)),(0,n.showHUD)("Copied to Clipboard"),n.Clipboard.copy(o.modified),e.popToRoot?(0,n.popToRoot)():(0,n.closeMainWindow)()}}),w=o=>u?(0,c.jsx)(n.Action,{title:`Paste in ${u.name}`,icon:{fileIcon:u.path},onAction:()=>{o.pinned||g([o.case,...C.filter(f=>f!==o.case)].slice(0,4)),(0,n.showHUD)(`Pasted in ${u.name}`),n.Clipboard.paste(o.modified),e.popToRoot?(0,n.popToRoot)():(0,n.closeMainWindow)()}}):null,S=o=>{let f=encodeURIComponent(`{"case":"${o.case}"}`),T=`raycast://extensions/erics118/${n.environment.extensionName}/${n.environment.commandName}?context=${f}`;return(0,c.jsx)(n.List.Item,{id:o.case,title:o.case,accessories:[{text:o.modified}],detail:(0,c.jsx)(n.List.Item.Detail,{markdown:o.detail}),keywords:se[o.case],actions:(0,c.jsxs)(n.ActionPanel,{children:[(0,c.jsxs)(n.ActionPanel.Section,{children:[a==="paste"&&(0,c.jsx)(w,{...o}),(0,c.jsx)(x,{...o}),a==="copy"&&(0,c.jsx)(w,{...o})]}),(0,c.jsxs)(n.ActionPanel.Section,{children:[o.pinned?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Action,{title:"Remove Pinned Case",icon:n.Icon.PinDisabled,shortcut:n.Keyboard.Shortcut.Common.Remove,onAction:()=>{y(d.filter(A=>A!==o.case))}}),(0,c.jsx)(n.Action,{title:"Clear Pinned Cases",style:n.Action.Style.Destructive,icon:{source:n.Icon.XMarkCircle},shortcut:n.Keyboard.Shortcut.Common.RemoveAll,onAction:()=>{y([])}})]}):(0,c.jsx)(n.Action,{title:"Pin Case",icon:n.Icon.Pin,shortcut:n.Keyboard.Shortcut.Common.Pin,onAction:()=>{y([o.case,...d]),o.recent&&g(C.filter(A=>A!==o.case))}}),o.recent&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Action,{title:"Remove Recent Case",icon:n.Icon.XMarkCircle,shortcut:n.Keyboard.Shortcut.Common.Remove,onAction:()=>{g(C.filter(A=>A!==o.case))}}),(0,c.jsx)(n.Action,{title:"Clear Recent Cases",icon:{source:n.Icon.XMarkCircle,tintColor:n.Color.Red},shortcut:n.Keyboard.Shortcut.Common.RemoveAll,onAction:()=>{g([])}})]}),(0,c.jsx)(n.Action.CreateQuicklink,{title:`Create Quicklink to Convert to ${o.case}`,quicklink:{name:`Convert to ${o.case}`,link:T}})]}),(0,c.jsx)(n.ActionPanel.Section,{children:(0,c.jsx)(n.Action,{title:"Refresh Content",icon:n.Icon.RotateAntiClockwise,shortcut:n.Keyboard.Shortcut.Common.Refresh,onAction:b})})]})})};return(0,c.jsxs)(n.List,{isShowingDetail:!0,children:[(0,c.jsx)(n.List.Section,{title:"Pinned",children:d?.map(o=>{let f=M(l,o);return(0,c.jsx)(S,{case:o,modified:f.rawText,detail:f.markdown,pinned:!0},o)})}),(0,c.jsx)(n.List.Section,{title:"Recent",children:C.map(o=>{let f=M(l,o);return(0,c.jsx)(S,{case:o,modified:f.rawText,detail:f.markdown,recent:!0},o)})}),(0,c.jsx)(n.List.Section,{title:"All Cases",children:Object.keys(R).filter(o=>e[o.replace(/ +/g,"")]&&!C.includes(o)&&!d.includes(o)).map(o=>{let f=M(l,o);return(0,c.jsx)(S,{case:o,modified:f.rawText,detail:f.markdown},o)})})]})}