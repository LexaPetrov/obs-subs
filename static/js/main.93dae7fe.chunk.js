(this["webpackJsonpobs-subs"]=this["webpackJsonpobs-subs"]||[]).push([[0],{24:function(e,a,t){e.exports=t(34)},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(20),r=t.n(l),s=(t(9),t(6)),m=t(7),i=t(1),o=t(13),u=function(e){var a=e.name,t=e.value,n=e.text,l=e.onChange,r=e.checked;return c.a.createElement("div",{style:{margin:"20px"}},c.a.createElement("label",{className:"label"},c.a.createElement("div",{className:"toggle"},c.a.createElement("input",{className:"toggle-state",checked:r,onChange:l,type:"checkbox",name:a,value:t}),c.a.createElement("div",{className:"toggle-inner"},c.a.createElement("div",{className:"indicator"})),c.a.createElement("div",{className:"active-bg"})),c.a.createElement("div",{className:"label-text"},n)))},p=function(e){var a=window.location.origin,t=Object(n.useState)({loc:a,link:"",params:{theme:"1",goal:"",videos:!1,subs:!0,views:!1},res:"",clicked:!1,checked:!1}),l=Object(o.a)(t,2),r=l[0],s=l[1];function p(e){s(Object(i.a)({},r,Object(m.a)({},e.target.name,e.target.value)))}return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"header"},c.a.createElement("h2",null,"1. \u0412\u0441\u0442\u0430\u0432\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u0430\u043d\u0430\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 https://www.youtube.com/channel/[ID \u043a\u0430\u043d\u0430\u043b\u0430]")),c.a.createElement("div",{className:"inputContainer"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{type:"text",placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c \u0441\u0441\u044b\u043b\u043a\u0443",required:!0,value:r.link,name:"link",onChange:p}),c.a.createElement("div",{className:"tools"},c.a.createElement("div",null,c.a.createElement(u,{name:"checked",onChange:function(){return s(Object(i.a)({},r,{checked:!r.checked}))},checked:r.checked,text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0446\u0435\u043b\u044c \u043a\u043e\u043b-\u0432\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"}),c.a.createElement("div",null,r.checked?c.a.createElement("input",{type:"number",value:r.params.goal,name:"goal",placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043b\u043e",onChange:function(e){s(Object(i.a)({},r,{params:Object(i.a)({},r.params,Object(m.a)({},e.target.name,e.target.value.trim()))}))}}):null)),c.a.createElement(u,{onChange:function(){return s(Object(i.a)({},r,{params:Object(i.a)({},r.params,{subs:!r.params.subs})}))},checked:r.params.subs,text:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"}),c.a.createElement(u,{onChange:function(){return s(Object(i.a)({},r,{params:Object(i.a)({},r.params,{videos:!r.params.videos})}))},checked:r.params.videos,text:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u0442\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e"}),c.a.createElement(u,{onChange:function(){return s(Object(i.a)({},r,{params:Object(i.a)({},r.params,{views:!r.params.views})}))},checked:r.params.views,text:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"})),c.a.createElement("h2",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0435\u043c\u0443 \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0451\u0442\u0447\u0438\u043a\u0430"),c.a.createElement("div",{className:"themes"},c.a.createElement("div",{className:"themeItem"},c.a.createElement("label",{htmlFor:"theme1"},c.a.createElement("input",{onClick:function(){s(Object(i.a)({},r,{params:Object(i.a)({},r.params,{theme:"1"})}))},type:"radio",name:"theme",id:"theme1",value:"1"}),c.a.createElement("img",{alt:"",src:"theme1.png"}))),c.a.createElement("div",{className:"themeItem"},c.a.createElement("label",{htmlFor:"theme2"},c.a.createElement("input",{onClick:function(){s(Object(i.a)({},r,{params:Object(i.a)({},r.params,{theme:"2"})}))},type:"radio",id:"theme2",name:"theme",value:"2"}),c.a.createElement("img",{alt:"",src:"theme2.png"}))),c.a.createElement("div",{className:"themeItem"},c.a.createElement("label",{htmlFor:"theme3"},c.a.createElement("input",{onClick:function(){s(Object(i.a)({},r,{params:Object(i.a)({},r.params,{theme:"3"})}))},type:"radio",name:"theme",id:"theme3",value:"3"}),c.a.createElement("img",{alt:"",src:"theme3.png"})))),c.a.createElement("button",{type:"submit",className:"go",onClick:function(){var e,a="";Object.keys(r.params).map((function(e){return""!==r.params[e]&&(a+="".concat(e,"=").concat(r.params[e],"&")),0})),""!==r.link&&(e=(e=decodeURI(r.link)).split("/")[4].split("?")[0]),s(Object(i.a)({},r,{res:"".concat(r.loc,"/").concat(e,"?").concat(a),clicked:!0}))}},"3. \u041f\u043e\u043b\u0443\u0447\u0438 \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f OBS"),c.a.createElement("div",null,r.clicked&&""!==r.link?c.a.createElement("input",{type:"text",value:r.res,name:"res",onChange:p}):null,r.clicked&&""!==r.link?c.a.createElement("h2",null,"4. \u0412\u0441\u0442\u0430\u0432\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 CLR \u0431\u0440\u0430\u0443\u0437\u0435\u0440 OBS"):null))))},b=t(23),h=function(e){var a=window.location.pathname.split("/")[1],t=window.location.search.split("&");t[0]=t[0].split("?")[1];var l=Object(n.useState)({link:a,info:{subscriberCount:"",videoCount:"",viewCount:""},params:{theme:"",goal:"",videos:!1,subs:!1,views:!1}}),r=Object(o.a)(l,2),s=r[0],u=r[1],p=[],h=[];t.map((function(e){var a=e.split("=");return""===a[0]&&void 0===a[1]||(p.push(a[0]),h.push(a[1])),0}));var d=Object.assign.apply(Object,Object(b.a)(p.map((function(e,a){return Object(m.a)({},e,h[a])}))));return Object(n.useEffect)((function(){fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(s.link,"&key=AIzaSyBj811HF4_j0-j_Q-NSvu0zA90Gipz4aNg")).then((function(e){return e.json()})).then((function(e){0!==e.items.length&&u(Object(i.a)({},s,{info:{subscriberCount:e.items[0].statistics.subscriberCount,videoCount:e.items[0].statistics.videoCount,viewCount:e.items[0].statistics.viewCount},params:d}))}))}),[]),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"link_theme".concat(s.params.theme)},!1!==s.params.subs&&""!==s.params.goal&&void 0!==s.params.goal?c.a.createElement("label",null,"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ",s.info.subscriberCount,"  /  ",s.params.goal," "):c.a.createElement("label",null,"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ",s.info.subscriberCount," "),!1!==s.params.videos&&c.a.createElement("label",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u0432\u0438\u0434\u0435\u043e: ",s.info.videoCount," "),!1!==s.params.views&&c.a.createElement("label",null,"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0432\u0441\u0435\u0433\u043e: ",s.info.viewCount," ")))};var d=function(){return c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/obs-subs/",exact:!0,component:p}),c.a.createElement(s.a,{path:"/obs-subs/main",component:p}),c.a.createElement(s.a,{path:"/obs-subs/:link",component:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=t(15);r.a.render(c.a.createElement(v.a,{basename:"/obs-subs"},c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){}},[[24,1,2]]]);
//# sourceMappingURL=main.93dae7fe.chunk.js.map