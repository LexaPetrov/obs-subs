(this["webpackJsonpobs-subs"]=this["webpackJsonpobs-subs"]||[]).push([[0],{11:function(e,a,t){},24:function(e,a,t){e.exports=t(35)},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=(t(11),t(6)),s=t(7),m=t(1),i=t(13),u=(t(29),function(e){var a=e.name,t=e.value,n=e.text,l=e.onChange,c=e.checked,o=e.label;return r.a.createElement("div",{style:{margin:"20px"}},r.a.createElement("label",{className:"label"},r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{className:"toggle-state",checked:c,onChange:l,type:"checkbox",name:a,value:t}),r.a.createElement("div",{className:"toggle-inner"},r.a.createElement("div",{className:"indicator"})),r.a.createElement("div",{className:"active-bg"})),r.a.createElement("div",{className:"label-text",style:{display:"flex"}},r.a.createElement("label",null,o),n)))}),p=function(e){var a=window.location.origin,t=Object(n.useState)({loc:a,link:"",params:{theme:"1",goal:"",videos:!1,subs:!0,views:!1,transparent:"1",lang:"ru"},res:"",clicked:!1,checked:!1}),l=Object(i.a)(t,2),c=l[0],o=l[1];function p(e){o(Object(m.a)({},c,Object(s.a)({},e.target.name,e.target.value)))}function d(){var e,a="";Object.keys(c.params).map((function(e){return""!==c.params[e]&&(a+="".concat(e,"=").concat(c.params[e],"&")),0})),""!==c.link&&((e=decodeURI(c.link)).includes("youtube.com")||(e="https://www.youtube.com/channel/"+e),e=e.split("/")[4].split("?")[0]),o(Object(m.a)({},c,{res:"".concat(c.loc).concat("","/").concat(e,"?").concat(a),clicked:!0}))}Object(n.useEffect)((function(){!0===c.clicked&&d()}),[c.params]);var h=c.params.lang;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"language"},r.a.createElement(u,{name:"lang",onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{lang:"ru"===c.params.lang?"eng":"ru"})}))},checked:"eng"===c.params.lang,text:"switch to english",label:r.a.createElement("label",{className:"flag_icon"})})),"ru"===h?r.a.createElement("h2",null,"1. \u0412\u0441\u0442\u0430\u0432\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u0430\u043d\u0430\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 https://www.youtube.com/channel/ID_\u043a\u0430\u043d\u0430\u043b\u0430 ",r.a.createElement("br",null),"\u0418\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u044c ID \u043a\u0430\u043d\u0430\u043b\u0430, \u0443\u0437\u043d\u0430\u0442\u044c \u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0448\u044c \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435: ",r.a.createElement("a",{href:"https://www.youtube.com/account_advanced"},"https://youtube.com/account_advanced")):r.a.createElement("h2",null,"1. Paste the link to your channel in format https://www.youtube.com/channel/channel_ID ",r.a.createElement("br",null),"Or paste channel ID, you can find out it here: ",r.a.createElement("a",{href:"https://www.youtube.com/account_advanced"},"https://youtube.com/account_advanced")),r.a.createElement("div",{className:"inputContainer"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{type:"text",placeholder:"ru"===h?"\u0421\u0441\u044b\u043b\u043a\u0430 \u0438\u043b\u0438 ID \u043a\u0430\u043d\u0430\u043b\u0430":"Channel link or channel ID",required:!0,value:c.link,name:"link",onChange:p}),r.a.createElement("div",{className:"tools"},r.a.createElement("div",null,r.a.createElement(u,{name:"checked",onChange:function(){return o(Object(m.a)({},c,{checked:!c.checked}))},checked:c.checked,text:"ru"===h?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0446\u0435\u043b\u044c \u043a\u043e\u043b-\u0432\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432":"Add sub goal"}),r.a.createElement("div",null,c.checked?r.a.createElement("input",{type:"number",value:c.params.goal,name:"goal",placeholder:"ru"===h?"\u0412\u0432\u0435\u0434\u0438 \u0447\u0438\u0441\u043b\u043e":"Enter goal number",onChange:function(e){o(Object(m.a)({},c,{params:Object(m.a)({},c.params,Object(s.a)({},e.target.name,e.target.value.trim()))}))}}):null)),r.a.createElement(u,{onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{subs:!c.params.subs})}))},checked:c.params.subs,text:"ru"===h?"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432":"Show subscribers count"}),r.a.createElement(u,{onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{videos:!c.params.videos})}))},checked:c.params.videos,text:"ru"===h?"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0432\u0438\u0434\u0435\u043e":"Show uploaded videos count"}),r.a.createElement(u,{onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{views:!c.params.views})}))},checked:c.params.views,text:"ru"===h?"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432":"Show views amount"}),r.a.createElement(u,{name:"transparent",onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{transparent:"1"})}))},checked:"1"===c.params.transparent,text:"ru"===h?"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0444\u043e\u043d":"Transparent background",value:"1"}),r.a.createElement(u,{name:"transparent",onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{transparent:"2"})}))},checked:"2"===c.params.transparent,text:"ru"===h?"\u041f\u043e\u043b\u0443\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0442\u0451\u043c\u043d\u044b\u0439 \u0444\u043e\u043d":"50% Transparent dark background",value:"2"}),r.a.createElement(u,{name:"transparent",onChange:function(){return o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{transparent:"3"})}))},checked:"3"===c.params.transparent,text:"ru"===h?"\u0422\u0451\u043c\u043d\u044b\u0439 \u043d\u0435\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0439 \u0444\u043e\u043d":"Non-transparent dark background",value:"3"})),"ru"===h?r.a.createElement("h2",null,"2. \u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0435\u043c\u0443 \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0451\u0442\u0447\u0438\u043a\u0430"):r.a.createElement("h2",null,"2. Choose a theme for the counter"),r.a.createElement("div",{className:"themes"},r.a.createElement("div",{className:"themeItem"},r.a.createElement("label",{htmlFor:"theme1",className:"container"},r.a.createElement("input",{onClick:function(){o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{theme:"1"})}))},type:"radio",name:"theme",id:"theme1",value:"1"}),r.a.createElement("img",{alt:"",src:"ru"===h?"theme1.png":"theme1_eng.png"}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("div",{className:"themeItem"},r.a.createElement("label",{htmlFor:"theme2",className:"container"},r.a.createElement("input",{onClick:function(){o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{theme:"2"})}))},type:"radio",id:"theme2",name:"theme",value:"2"}),r.a.createElement("img",{alt:"",src:"ru"===h?"theme2.png":"theme2_eng.png"}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("div",{className:"themeItem"},r.a.createElement("label",{htmlFor:"theme3",className:"container"},r.a.createElement("input",{onClick:function(){o(Object(m.a)({},c,{params:Object(m.a)({},c.params,{theme:"3"})}))},type:"radio",name:"theme",id:"theme3",value:"3"}),r.a.createElement("img",{alt:"",src:"ru"===h?"theme3.png":"theme3_eng.png"}),r.a.createElement("span",{className:"checkmark"})))),r.a.createElement("button",{type:"submit",className:"go",onClick:d},"ru"===h?"3. \u041f\u043e\u043b\u0443\u0447\u0438 \u0441\u0441\u044b\u043b\u043a\u0443 \u0434\u043b\u044f OBS":"3. Get the link to OBS"),r.a.createElement("div",null,c.clicked&&""!==c.link?r.a.createElement("input",{type:"text",value:c.res,name:"res",onChange:p}):null,c.clicked&&""!==c.link?r.a.createElement("button",{className:"go",onClick:function(){var e=document.createElement("textarea");e.innerText=c.res,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}},"ru"===h?"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430":"Copy link to clipboard"):null,c.clicked&&""!==c.link?r.a.createElement("h2",null,"ru"===h?"4. \u0412\u0441\u0442\u0430\u0432\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443 \u0432 CLR \u0431\u0440\u0430\u0443\u0437\u0435\u0440 OBS":"4. Paste result link into CLR browser"):null))),r.a.createElement("div",{className:"downloads"},r.a.createElement("a",{className:"downloads__link downloads__link__windows",download:!0,href:"https://github.com/LexaPetrov/obs-subs/releases/download/1.0.0/windows-obs-subs.Setup.1.0.0.zip"},"ru"===h?"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Windows":"Download desktop app for Windows"),r.a.createElement("a",{className:"downloads__link downloads__link__macos",download:!0,href:"https://github.com/LexaPetrov/obs-subs/releases/download/1.0.0/macos-obs-subs.zip"},"ru"===h?"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f MacOS":"Download desktop app for MacOS"),r.a.createElement("a",{className:"downloads__link downloads__link__linux",download:!0,href:"https://github.com/LexaPetrov/obs-subs/releases/download/1.0.0/linux-obs-subs-1.0.0.zip"},"ru"===h?"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Linux":"Download desktop app for Linux")),r.a.createElement("div",{className:"donation"},r.a.createElement("a",{className:"donation__link donation__link__1",target:"_blank",rel:"noopener noreferrer",href:"https://www.tinkoff.ru/rm/petrov.aleksey68/IXJ5N7740",alt:""}),r.a.createElement("a",{className:"donation__link donation__link__2",target:"_blank",rel:"noopener noreferrer",href:"https://money.yandex.ru/to/41001921826050",alt:""}),r.a.createElement("a",{className:"donation__link donation__link__3",target:"_blank",rel:"noopener noreferrer",href:"https://www.donationalerts.com/r/ne_creator",alt:""})),r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("label",null,"made with"),r.a.createElement("label",{className:"footer__label1"}),r.a.createElement("label",null,"by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",alt:"",href:"http://lexapetrov.github.io"},"petrovdev"))),r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/lexapetrov/obs-subs/"},"github repository"))))},d=t(23),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_DATA":var t=a.payload.data;return Object(m.a)({},e,{loading:"",info:{subscriberCount:t.items[0].statistics.subscriberCount,videoCount:t.items[0].statistics.videoCount,viewCount:t.items[0].statistics.viewCount},params:a.payload.newParams});default:return e}},b=function(e){var a=window.location.pathname.split("/")[window.location.pathname.split("/").length-1],t=window.location.search.split("&");t[0]=t[0].split("?")[1];var l=Object(n.useReducer)(h,{link:a,info:{subscriberCount:"",videoCount:"",viewCount:""},params:{theme:"",goal:"",videos:!1,subs:!1,views:!1,transparent:"1",lang:"ru"}}),c=Object(i.a)(l,2),o=c[0],m=c[1],u=[],p=[];t.map((function(e){var a=e.split("=");return""===a[0]&&void 0===a[1]||(u.push(a[0]),p.push(a[1])),0}));var b=Object.assign.apply(Object,Object(d.a)(u.map((function(e,a){return Object(s.a)({},e,p[a])}))));function g(){!function(e,a,t){fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=".concat(e,"&key=AIzaSyDnICHbhs5jRfs_pxfWq26ZR9j32iZwedU")).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){a({type:"FETCH_DATA",payload:{data:e,newParams:t}})})).catch((function(e){console.error(e)}))}(o.link,m,b)}Object(n.useEffect)((function(){g(),setInterval((function(){g()}),6e5)}),[]);return r.a.createElement("div",{className:"wrapper pt26",style:[{background:"rgba(0,0,0,0)"},{background:"rgba(57,57,57,0.5)"},{background:"rgba(57,57,57,1)"}][+o.params.transparent-1]},r.a.createElement("div",{className:"link_theme".concat(o.params.theme)},"true"===o.params.subs?""!==o.params.goal&&void 0!==o.params.goal?r.a.createElement("label",null,"ru"===o.params.lang?"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ":"Sub goal: ",o.info.subscriberCount,"  /  ",o.params.goal):r.a.createElement("label",null,"ru"===o.params.lang?"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432: ":"Subscribers: "," ",o.info.subscriberCount," "):null,"true"===o.params.videos?r.a.createElement("label",null," ","ru"===o.params.lang?"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e \u0432\u0438\u0434\u0435\u043e: ":"Videos amount: "," ",o.info.videoCount," "):null,"true"===o.params.views?r.a.createElement("label",null,"ru"===o.params.lang?"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0432\u0441\u0435\u0433\u043e: ":"Views amount: ","  ",o.info.viewCount," "):null),r.a.createElement("div",{className:"link_theme".concat(o.params.theme," sign")},r.a.createElement("label",null,"https://subsobs.xyz")))};var g=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:p}),r.a.createElement(o.a,{path:"/main",component:p}),r.a.createElement(o.a,{path:"/:link",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=t(15);c.a.render(r.a.createElement(v.a,{basename:""},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.9f0a2a8a.chunk.js.map