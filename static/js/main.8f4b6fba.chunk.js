(this.webpackJsonpraftchat=this.webpackJsonpraftchat||[]).push([[0],{385:function(e,t,n){e.exports=n(723)},390:function(e,t,n){},406:function(e,t){},408:function(e,t){},426:function(e,t){},428:function(e,t){},434:function(e,t){},435:function(e,t){},437:function(e,t){},488:function(e,t){},489:function(e,t){},536:function(e,t){},538:function(e,t){},723:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),o=n.n(a),l=(n(390),n(34)),i=(n(391),n(1)),u=(n(392),n(201)),s=(n(393),n(39)),m=n(35),d=n(127),f=n(98),h=n(32),v=n(372),b=n(51);function g(e,t){var n=Object(r.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(r){return console.log(r),l(t),t}})),c=Object(h.a)(n,2),a=c[0],o=c[1],l=function(t){try{var n=t instanceof Function?t(a):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}};return[a,l]}var p={state:{chatClient:new(n(373).ChatClient)({connection:{type:"websocket",secure:!0}}),channels:{},settings:null,queryCache:new s.a},setState:function(e){},setSettings:function(e){},setChannels:function(e){}},E=Object(r.createContext)(p),j=E.Provider,O=function(e){var t=e.children,n=g("settings",p.state.settings),a=Object(h.a)(n,2),o=a[0],l=a[1],i=g("channels",p.state.channels),u=Object(h.a)(i,2),s=u[0],m=u[1],d=Object(r.useState)(Object(f.a)({},p.state,{settings:o,channels:s})),v=Object(h.a)(d,2),b=v[0],E=v[1];return c.a.createElement(j,{value:{state:b,setState:E,setSettings:l,setChannels:m}},t)};function y(){return Object(r.useContext)(E).state}var w={staleTime:3e5};var x=n(44);function S(e){return[].concat(Object(b.a)(function(e){var t=Object(s.c)("bttv:channel:".concat(e),(function(){return""===e?Promise.resolve({sharedEmotes:[],channelEmotes:[]}):fetch("https://api.betterttv.net/3/cached/users/twitch/".concat(e)).then((function(e){return e.json()}))}),w),n=t.isLoading,r=t.error,c=t.data;if(n)return[];if(r)return console.error(r),[];for(var a=[],o=0,l=[].concat(Object(b.a)(null!==(i=null===c||void 0===c?void 0:c.channelEmotes)&&void 0!==i?i:[]),Object(b.a)(null!==(u=null===c||void 0===c?void 0:c.sharedEmotes)&&void 0!==u?u:[]));o<l.length;o++){var i,u,m=l[o];a.push({id:m.id,code:m.code,urls:{small:"https://cdn.betterttv.net/emote/".concat(m.id,"/1x"),medium:"https://cdn.betterttv.net/emote/".concat(m.id,"/2x"),big:"https://cdn.betterttv.net/emote/".concat(m.id,"/3x")}})}return a}(e)),Object(b.a)(function(e){var t=Object(s.c)("ffz:channel:".concat(e),(function(){return""===e?Promise.resolve({sets:{}}):fetch("https://api.frankerfacez.com/v1/room/id/".concat(e)).then((function(e){return e.json()}))}),w),n=t.isLoading,r=t.error,c=t.data;if(n||!(null===c||void 0===c?void 0:c.sets))return[];if(r)return console.error(r),[];var a,o=[],l=Object(x.a)(Object.values(c.sets));try{for(l.s();!(a=l.n()).done;){var i,u=a.value,m=Object(x.a)(u.emoticons);try{for(m.s();!(i=m.n()).done;){var d=i.value;o.push({id:String(d.id),code:d.name,urls:{small:d.urls[1],medium:d.urls[2],big:d.urls[4]}})}}catch(f){m.e(f)}finally{m.f()}}}catch(f){l.e(f)}finally{l.f()}return o}(e)),Object(b.a)(function(){var e=Object(s.c)("bttv:global",(function(){return fetch("https://api.betterttv.net/3/cached/emotes/global").then((function(e){return e.json()}))}),w),t=e.isLoading,n=e.error,r=e.data;if(t||!r)return[];if(n)return console.error(n),[];var c,a=[],o=Object(x.a)(r);try{for(o.s();!(c=o.n()).done;){var l=c.value;a.push({id:l.id,code:l.code,urls:{small:"https://cdn.betterttv.net/emote/".concat(l.id,"/1x"),medium:"https://cdn.betterttv.net/emote/".concat(l.id,"/2x"),big:"https://cdn.betterttv.net/emote/".concat(l.id,"/3x")}})}}catch(i){o.e(i)}finally{o.f()}return a}()),Object(b.a)(function(){var e=Object(s.c)("ffz:global",(function(){return fetch("https://api.frankerfacez.com/v1/set/global").then((function(e){return e.json()}))}),w),t=e.isLoading,n=e.error,r=e.data;if(t||!(null===r||void 0===r?void 0:r.sets))return[];if(n)return console.error(n),[];var c,a=[],o=Object(x.a)(Object.values(r.sets));try{for(o.s();!(c=o.n()).done;){var l,i=c.value,u=Object(x.a)(i.emoticons);try{for(u.s();!(l=u.n()).done;){var m=l.value;a.push({id:String(m.id),code:m.name,urls:{small:m.urls[1],medium:m.urls[2],big:m.urls[4]}})}}catch(d){u.e(d)}finally{u.f()}}}catch(d){o.e(d)}finally{o.f()}return a}()))}function k(){var e=Object(l.a)(["\n\tdisplay: inline-block;\n\tcolor: ",";\n\tmargin-right: 3px;\n\tfont-weight: bold;\n"]);return k=function(){return e},e}var F=m.a.div.attrs((function(e){return{style:{color:e.color}}}))(k(),(function(e){return e.color}));function C(e){var t=e.displayName,n=e.color,r=""!==n?n:"grey";return c.a.createElement(F,{color:r},t,":")}function L(){var e=Object(l.a)(["\n\tmargin: 0 3px;\n"]);return L=function(){return e},e}function z(){var e=Object(l.a)(["\n\tmargin: 0 0;\n\tmin-height: 1.5rem;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n"]);return z=function(){return e},e}var I=m.a.div(z()),R=m.a.img(L()),q=c.a.memo((function(e){for(var t,n=e.message,r=e.thirdPartyEmotes,a=[],o="",l=0;l<=n.messageText.length;l++){var i=n.messageText[l];t=!1;var u,s=Object(x.a)(n.emotes);try{for(s.s();!(u=s.n()).done;){var m=u.value;if(m.startIndex===l){t=!0,a.push(c.a.createElement(R,{key:l,alt:m.code,src:"https://static-cdn.jtvnw.net/emoticons/v1/".concat(m.id,"/1.0")})),l+=m.endIndex-m.startIndex-1;break}}}catch(b){s.e(b)}finally{s.f()}if(!t){if(" "!==i&&l!==n.messageText.length){o+=i;continue}var d,f=!1,h=Object(x.a)(r);try{for(h.s();!(d=h.n()).done;){var v=d.value;if(o.trim()===v.code){a.push(c.a.createElement(R,{key:l,alt:v.code,src:v.urls.small})),f=!0,o="";break}}}catch(b){h.e(b)}finally{h.f()}f||(a.push(o),o=""),a.push(i)}}return c.a.createElement(I,null,c.a.createElement(C,{displayName:n.displayName,color:n.colorRaw})," ",a)}),(function(){return!0}));function N(){var e=Object(l.a)(["\n    list-style-type: none;\n    flex-grow: 1;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\n\t&::-webkit-scrollbar {\n\t\twidth: 0px;\n\t}\n\t\n\t&::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: transparent;\n\t}\n"]);return N=function(){return e},e}function M(){var e=Object(l.a)(["\n    display: flex;\n\talign-items: center;\n    justify-content: center;\n\theight: 100%;\n"]);return M=function(){return e},e}function J(){var e=Object(l.a)(["\n\tflex-grow: 1;\n    display: flex;\n    flex-direction: column;\n\theight: 100%;\n"]);return J=function(){return e},e}var P=m.a.div(J()),D=m.a.div(M()),T=m.a.ul(N());function B(e){return e.channel?c.a.createElement(V,{channel:e.channel}):c.a.createElement(A,{id:e.id})}function V(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=y(),c=n.chatClient,a=Object(r.useState)([]),o=Object(h.a)(a,2),l=o[0],i=o[1],u=Object(r.useCallback)((function(n){if(n.channelName===e){var r=Object(b.a)(l);r.length+1===t&&r.pop(),r.unshift(n),i(r)}}),[t,e,l]);return Object(r.useEffect)((function(){return""===e?function(){}:(c.join(e),c.on("PRIVMSG",u),function(){return c.removeListener("PRIVMSG",u)})}),[e,c,t,u]),l}(e.channel),n=S(t.length>0?t[0].channelID:"");return c.a.createElement(P,null,c.a.createElement(T,null,t.map((function(e){return c.a.createElement("li",{key:e.messageID},c.a.createElement(q,{message:e,thirdPartyEmotes:n}))}))))}function A(e){var t=e.id,n=Object(r.useContext)(E),a=n.state,o=n.setState,l=Object(r.useState)(""),i=Object(h.a)(l,2),u=i[0],s=i[1],m=c.a.createElement(v.zb,{content:"Join"},c.a.createElement(v.g,{icon:"chat",type:"submit",minimal:!0}));return c.a.createElement(D,null,c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),e.target instanceof HTMLFormElement){var n=Object(f.a)({},a,{channels:Object(f.a)({},a.channels,Object(d.a)({},t,u))});null===a.settings&&(n.settings=t),o(n)}}},c.a.createElement(v.M,{placeholder:"channel",name:"channel",value:u,onChange:function(e){return s(e.target.value)},large:!0,rightElement:m,type:"text"})))}function G(e){return e&&e?Boolean(document.fullscreenElement===e||document.mozFullScreenElement===e||document.webkitFullscreenElement===e||document.msFullscreenElement===e):Boolean(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)}function K(){var e=Object(l.a)(["\n    display: flex;\n\talign-items: center;\n\tpadding: 5px;\n    width: 100%;\n    height: 2rem;\n\tjustify-content: space-between;\n\n\t.bp3-button {\n\t\tmin-height: 0;\n\t\tmin-width: 0;\n\t\tbackground: transparent !important;\n\t}\n"]);return K=function(){return e},e}var H=m.a.div(K());function W(){var e=function(e){var t=G(e),n=Object(r.useState)(t),c=Object(h.a)(n,2),a=c[0],o=c[1];return Object(r.useEffect)((function(){function t(){o(G(e))}return document.addEventListener("webkitfullscreenchange",t,!1),document.addEventListener("mozfullscreenchange",t,!1),document.addEventListener("msfullscreenchange",t,!1),document.addEventListener("MSFullscreenChange",t,!1),document.addEventListener("fullscreenchange",t,!1),function(){document.removeEventListener("webkitfullscreenchange",t),document.removeEventListener("mozfullscreenchange",t),document.removeEventListener("msfullscreenchange",t),document.removeEventListener("MSFullscreenChange",t),document.removeEventListener("fullscreenchange",t)}}),[e]),[a,a?function(){return document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen?document.msExitFullscreen():void 0}:function(){var t=e&&e||document.documentElement;return t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}]}(document.body),t=Object(h.a)(e,2)[1];return c.a.createElement(H,null,"Settings",c.a.createElement(v.g,{icon:"fullscreen",onClick:t}))}function Q(){return Math.random().toString(36).substr(2,9).toString()}var U="#121416",X="#1C1F22",Y="#25292D",Z="#090A0B";function $(){var e=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n\n\t.mosaic-window-body {\n\t\tpadding: 5px;\n\t}\n\n\t.mosaic.mosaic-blueprint-theme.bp3-dark {\n\t\tbackground: ",";\n\n\t\t.mosaic-window-body {\n\t\t\tbackground: ",";\n\t\t}\n\n\t\t.mosaic-window-toolbar {\n\t\t\tbackground: ",";\n\t\t}\n\n\t\t.mosaic-window-toolbar.draggable:hover {\n\t\t\tbackground: ",";\n\t\t}\n\t}\n"]);return $=function(){return e},e}var _=m.a.div($(),Z,U,X,Y);function ee(){var e=Object(r.useContext)(E),t=e.state,n=e.setSettings;return Object(r.useEffect)((function(){t.chatClient.connect()}),[t.chatClient]),Object(r.useEffect)((function(){window.localStorage.setItem("channels",JSON.stringify(t.channels))}),[t.channels]),Object(r.useEffect)((function(){window.localStorage.setItem("settings",JSON.stringify(t.settings))}),[t.settings]),c.a.createElement(s.b,{queryCache:t.queryCache},c.a.createElement(_,{className:"mosaic-blueprint-theme ".concat(i.g.DARK)},c.a.createElement(W,null),c.a.createElement(u.Mosaic,{className:"mosaic-blueprint-theme ".concat(i.g.DARK),renderTile:function(e,n){var r,a;return c.a.createElement(u.MosaicWindow,{path:n,createNode:Q,title:null!==(r=t.channels[e])&&void 0!==r?r:""},c.a.createElement(B,{channel:null!==(a=t.channels[e])&&void 0!==a?a:"",id:e}))},onRelease:n,initialValue:t.settings,zeroStateView:c.a.createElement(B,{id:Q()})})))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null,c.a.createElement(ee,null))),document.getElementById("root"))}},[[385,1,2]]]);
//# sourceMappingURL=main.8f4b6fba.chunk.js.map