(this["webpackJsonpobs-subs"]=this["webpackJsonpobs-subs"]||[]).push([[0],{11:function(e,a,t){},24:function(e,a,t){e.exports=t(35)},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),l=t.n(r),s=(t(11),t(6)),m=t(7),o=t(1),u=t(13),i=(t(29),function(e){var a=e.name,t=e.value,n=e.text,r=e.onChange,l=e.checked;return c.a.createElement("div",{style:{margin:"20px"}},c.a.createElement("label",{className:"label"},c.a.createElement("div",{className:"toggle"},c.a.createElement("input",{className:"toggle-state",checked:l,onChange:r,type:"checkbox",name:a,value:t}),c.a.createElement("div",{className:"toggle-inner"},c.a.createElement("div",{className:"indicator"})),c.a.createElement("div",{className:"active-bg"})),c.a.createElement("div",{className:"label-text"},n)))}),p=function(e){var a=window.location.origin,t=Object(n.useState)({loc:a,link:"",params:{theme:"1",goal:"",videos:!1,subs:!0,views:!1,transparent:"1",lang:"ru"},res:"",clicked:!1,checked:!1}),r=Object(u.a)(t,2),l=r[0],s=r[1];function p(e){s(Object(o.a)({},l,Object(m.a)({},e.target.name,e.target.value)))}function h(){var e,a="";Object.keys(l.params).map((function(e){return""!==l.params[e]&&(a+="".concat(e,"=").concat(l.params[e],"&")),0})),""!==l.link&&((e=decodeURI(l.link)).includes("youtube.com")||(e="https://www.youtube.com/channel/"+e),e=e.split("/")[4].split("?")[0]),s(Object(o.a)({},l,{res:"".concat(l.loc).concat("","/").concat(e,"?").concat(a),clicked:!0}))}Object(n.useEffect)((function(){!0===l.clicked&&h()}),[l.params]);var b=l.params.lang;return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"language"},c.a.createElement(i,{name:"lang",onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{lang:"ru"===l.params.lang?"eng":"ru"})}))},checked:"eng"===l.params.lang,text:"\ud83c\uddfa\ud83c\uddf8switch to english"})),"ru"===b?c.a.createElement("h2",null,"1. \u0412\u0441\u0442\u0430\u0432\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u0430\u043d\u0430\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 https://www.youtube.com/channel/ID_\u043a\u0430\u043d\u0430\u043b\u0430 ",c.a.createElement("br",null),"\u0418\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u044c ID \u043a\u0430\u043d\u0430\u043b\u0430, \u0443\u0437\u043d\u0430\u0442\u044c \u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435: ",c.a.createElement("a",{href:"https://www.youtube.com/account_advanced"},"https://youtube.com/account_advanced")):c.a.createElement("h2",null,"1. Paste the link to your channel in format https://www.youtube.com/channel/channel_ID ",c.a.createElement("br",null),"Or paste channel ID, you can find out it here: ",c.a.createElement("a",{href:"https://www.youtube.com/account_advanced"},"https://youtube.com/account_advanced")),c.a.createElement("div",{className:"inputContainer"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},c.a.createElement("input",{type:"text",placeholder:"ru"===b?"\u0421\u0441\u044b\u043b\u043a\u0430 \u0438\u043b\u0438 ID \u043a\u0430\u043d\u0430\u043b\u0430":"Channel link or channel ID",required:!0,value:l.link,name:"link",onChange:p}),c.a.createElement("div",{className:"tools"},c.a.createElement("div",null,c.a.createElement(i,{name:"checked",onChange:function(){return s(Object(o.a)({},l,{checked:!l.checked}))},checked:l.checked,text:"ru"===b?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0446\u0435\u043b\u044c \u043a\u043e\u043b-\u0432\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432":"Add sub goal"}),c.a.createElement("div",null,l.checked?c.a.createElement("input",{type:"number",value:l.params.goal,name:"goal",placeholder:"ru"===b?"\u0412\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043b\u043e":"Enter goal number",onChange:function(e){s(Object(o.a)({},l,{params:Object(o.a)({},l.params,Object(m.a)({},e.target.name,e.target.value.trim()))}))}}):null)),c.a.createElement(i,{onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{subs:!l.params.subs})}))},checked:l.params.subs,text:"ru"===b?"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432":"Show subscribers count"}),c.a.createElement(i,{onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{videos:!l.params.videos})}))},checked:l.params.videos,text:"ru"===b?"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e":"Show uploaded videos count"}),c.a.createElement(i,{onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{views:!l.params.views})}))},checked:l.params.views,text:"ru"===b?"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432":"Show views amount"}),c.a.createElement(i,{name:"transparent",onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{transparent:"1"})}))},checked:"1"===l.params.transparent,text:"ru"===b?"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0444\u043e\u043d":"Transparent background",value:"1"}),c.a.createElement(i,{name:"transparent",onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{transparent:"2"})}))},checked:"2"===l.params.transparent,text:"ru"===b?"\u041f\u043e\u043b\u0443\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0442\u0451\u043c\u043d\u044b\u0439 \u0444\u043e\u043d":"50% Transparent dark background",value:"2"}),c.a.createElement(i,{name:"transparent",onChange:function(){return s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{transparent:"3"})}))},checked:"3"===l.params.transparent,text:"ru"===b?"\u0422\u0451\u043c\u043d\u044b\u0439 \u043d\u0435\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0444\u043e\u043d":"Non-transparent dark background",value:"3"})),"ru"===b?c.a.createElement("h2",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0435\u043c\u0443 \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0451\u0442\u0447\u0438\u043a\u0430"):c.a.createElement("h2",null,"2. Choose a theme for the counter"),c.a.createElement("div",{className:"themes"},c.a.createElement("div",{className:"themeItem"},c.a.createElement("label",{htmlFor:"theme1",className:"container"},c.a.createElement("input",{onClick:function(){s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{theme:"1"})}))},type:"radio",name:"theme",id:"theme1",value:"1"}),c.a.createElement("img",{alt:"",src:"ru"===b?"theme1.png":"theme1_eng.png"}),c.a.createElement("span",{className:"checkmark"}))),c.a.createElement("div",{className:"themeItem"},c.a.createElement("label",{htmlFor:"theme2",className:"container"},c.a.createElement("input",{onClick:function(){s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{theme:"2"})}))},type:"radio",id:"theme2",name:"theme",value:"2"}),c.a.createElement("img",{alt:"",src:"ru"===b?"theme2.png":"theme2_eng.png"}),c.a.createElement("span",{className:"checkmark"}))),c.a.createElement("div",{className:"themeItem"},c.a.createElement("label",{htmlFor:"theme3",className:"container"},c.a.createElement("input",{onClick:function(){s(Object(o.a)({},l,{params:Object(o.a)({},l.params,{theme:"3"})}))},type:"radio",name:"theme",id:"theme3",value:"3"}),c.a.createElement("img",{alt:"",src:"ru"===b?"theme3.png":"theme3_eng.png"}),c.a.createElement("span",{className:"checkmark"})))),c.a.createElement("button",{type:"submit",className:"go",onClick:h},"ru"===b?"3. \u041f\u043e\u043b\u0443\u0447\u0438 \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f OBS":"3. Get the link to OBS"),c.a.createElement("div",null,l.clicked&&""!==l.link?c.a.createElement("input",{type:"text",value:l.res,name:"res",onChange:p}):null,l.clicked&&""!==l.link?c.a.createElement("button",{className:"go",onClick:function(){var e=document.createElement("textarea");e.innerText=l.res,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}},"ru"===b?"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430":"Copy to clipboard"):null,l.clicked&&""!==l.link?c.a.createElement("h2",null,"ru"===b?"4. \u0412\u0441\u0442\u0430\u0432\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 CLR \u0431\u0440\u0430\u0443\u0437\u0435\u0440 OBS":"4. Paste result link into CLR browser"):null))))},h=t(23),b=function(e){var a=window.location.pathname.split("/")[window.location.pathname.split("/").length-1],t=window.location.search.split("&");t[0]=t[0].split("?")[1];var r=Object(n.useState)({link:a,info:{subscriberCount:"",videoCount:"",viewCount:""},params:{theme:"",goal:"",videos:!1,subs:!1,views:!1,transparent:"1",lang:"ru"}}),l=Object(u.a)(r,2),s=l[0],i=l[1],p=[],b=[];t.map((function(e){var a=e.split("=");return""===a[0]&&void 0===a[1]||(p.push(a[0]),b.push(a[1])),0}));var d=Object.assign.apply(Object,Object(h.a)(p.map((function(e,a){return Object(m.a)({},e,b[a])}))));function g(){fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(s.link,"&key=AIzaSyDnICHbhs5jRfs_pxfWq26ZR9j32iZwedU")).then((function(e){return e.json()})).then((function(e){0!==e.items.length&&i(Object(o.a)({},s,{info:{subscriberCount:e.items[0].statistics.subscriberCount,videoCount:e.items[0].statistics.videoCount,viewCount:e.items[0].statistics.viewCount},params:d}))})).catch((function(e){}))}Object(n.useEffect)((function(){g(),setInterval((function(){g()}),6e5)}),[]);return c.a.createElement("div",{className:"wrapper",style:[{background:"rgba(0,0,0,0)"},{background:"rgba(57,57,57,0.5)"},{background:"rgba(57,57,57,1)"}][+s.params.transparent-1]},c.a.createElement("div",{className:"link_theme".concat(s.params.theme)},"true"===s.params.subs?""!==s.params.goal&&void 0!==s.params.goal?c.a.createElement("label",null,"ru"===s.params.lang?"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ":"Sub goal: ",s.info.subscriberCount,"  /  ",s.params.goal):c.a.createElement("label",null,"ru"===s.params.lang?"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ":"Subscribers: "," ",s.info.subscriberCount," "):null,"true"===s.params.videos?c.a.createElement("label",null," ","ru"===s.params.lang?"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u0432\u0438\u0434\u0435\u043e: ":"Videos amount: "," ",s.info.videoCount," "):null,"true"===s.params.views?c.a.createElement("label",null,"ru"===s.params.lang?"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0432\u0441\u0435\u0433\u043e: ":"Views amount: ","  ",s.info.viewCount," "):null),c.a.createElement("div",{className:"link_theme".concat(s.params.theme," sign")},c.a.createElement("label",null,"https://subsobs.xyz")))};var d=function(){return c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:p}),c.a.createElement(s.a,{path:"/main",component:p}),c.a.createElement(s.a,{path:"/:link",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=t(15);l.a.render(c.a.createElement(g.a,{basename:""},c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e02c0055.chunk.js.map