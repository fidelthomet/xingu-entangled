import{o,c as r,d as u,_ as w,h as x,i as N,u as S,j as B,b as e,k as t,L as C,F as h,r as R,e as a,l as g,m as k,n as c,q as v}from"./index-N3S6nMPh.js";import{L as V,I as $,a as M}from"./InputButtonDelete-BPiyLGUp.js";import{I as n}from"./InputButton-z-PHQ8c8.js";import{T}from"./TheHeader-DgJTZkWq.js";const E={class:"icon",width:"45",height:"45",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg"},j=u("path",{d:"M24.88,15.9992136 L23.88,16.9992136 L17,17 C16.4477153,17 16,17.4477153 16,18 L16,28 C16,28.5522847 16.4477153,29 17,29 L27,29 C27.5522847,29 28,28.5522847 28,28 L28,21.1202136 L29,20.1202136 L29,28 C29,29.1045695 28.1045695,30 27,30 L17,30 C15.8954305,30 15,29.1045695 15,28 L15,18 C15,16.8954305 15.8954305,16 17,16 L24.88,15.9992136 Z M29.5606602,14.8535534 L30.1464466,15.4393398 C30.732233,16.0251263 30.732233,16.9748737 30.1464466,17.5606602 L23.0204787,24.6866281 C22.8558164,24.8512904 22.6550778,24.9753537 22.4341601,25.0489929 L18.7094306,26.2905694 L19.9510071,22.5658399 C20.0246463,22.3449222 20.1487096,22.1441836 20.3133719,21.9795213 L27.4393398,14.8535534 C28.0251263,14.267767 28.9748737,14.267767 29.5606602,14.8535534 Z M28.1464466,15.5606602 L21.0204787,22.6866281 C20.9655912,22.7415156 20.9242368,22.8084284 20.8996904,22.8820676 L20.29,24.709 L22.1179324,24.1003096 C22.1670252,24.0839453 22.2131285,24.0601108 22.2546722,24.0297765 L22.3133719,23.9795213 L29.4393398,16.8535534 C29.634602,16.6582912 29.634602,16.3417088 29.4393398,16.1464466 L28.8535534,15.5606602 C28.6582912,15.365398 28.3417088,15.365398 28.1464466,15.5606602 Z",fill:"currentColor"},null,-1),z=[j];function Z(_,s){return o(),r("svg",E,[...z])}const q={name:"base-Edit",render:Z},D={class:"list"},F={class:"node-list"},H={__name:"TheList",setup(_){const s=x(),d=N(),y=S(),p=B();function I(){const L=s.createNode({type:p.params.type});d.open(L,"node")}return(L,m)=>(o(),r("main",D,[u("nav",null,[e(C,{horizontal:"","equal-size":""},{default:t(()=>[a(y).edit?(o(),g(n,{key:0,tag:"RouterLink",to:"projects"},{default:t(()=>[c(" Projects ")]),_:1})):k("",!0),e(n,{tag:"RouterLink",to:"graph"},{default:t(()=>[c(" Stories ")]),_:1}),e(n,{tag:"RouterLink",to:"entity"},{default:t(()=>[c(" Entities ")]),_:1}),e(n,{tag:"RouterLink",to:"image"},{default:t(()=>[c(" Images ")]),_:1})]),_:1}),e(C,{horizontal:""},{default:t(()=>[e(n,{onClick:I,"disable-padding":"",title:"new"},{default:t(()=>[e(a($))]),_:1})]),_:1})]),u("div",F,[(o(!0),r(h,null,R(a(s).data.nodes,(i,l)=>{var f;return o(),r(h,{key:l},[i.type===a(p).params.type?(o(),g(V,{key:0,tag:"RouterLink",to:{name:"graph",params:{type:i.type,id:l}},label:i.label,meta:(f=a(s).data.nodes[i.class])==null?void 0:f.label},{default:t(()=>[e(M,{title:"delete",onClick:m[0]||(m[0]=v(()=>{},["prevent"])),onConfirmed:b=>a(s).deleteNode(l,null,!0)},null,8,["onConfirmed"]),e(n,{title:"edit",onClick:v(b=>a(d).open(l,"node"),["stop","prevent"]),"disable-padding":""},{default:t(()=>[e(a(q))]),_:2},1032,["onClick"])]),_:2},1032,["to","label","meta"])):k("",!0)],64)}),128))])]))}},P=w(H,[["__scopeId","data-v-75e8329b"]]),W={class:"list-view"},A={__name:"ListView",setup(_){return(s,d)=>(o(),r("div",W,[e(T),e(P)]))}},Q=w(A,[["__scopeId","data-v-38992857"]]);export{Q as default};
