(this.webpackJsonpriftchat=this.webpackJsonpriftchat||[]).push([[0],{383:function(e,n,t){e.exports=t(722)},388:function(e,n,t){},404:function(e,n){},406:function(e,n){},424:function(e,n){},426:function(e,n){},432:function(e,n){},433:function(e,n){},435:function(e,n){},486:function(e,n){},487:function(e,n){},534:function(e,n){},536:function(e,n){},722:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(20),l=t.n(a),u=(t(388),t(36)),o=(t(389),t(390),t(391),t(196)),i=t(37),s=t(377),m=t(42),f=t(378);var d={state:{chatClient:new(t(368).ChatClient)({connection:{type:"websocket",secure:!0}}),settings:{direction:"row",first:"gempir",second:{direction:"column",first:"pokimane",second:"pajlada"},splitPercentage:40}},setState:function(e){},setSettings:function(e){}},v=Object(c.createContext)(d),g=v.Provider,b=function(e){var n=e.children,t=function(e,n){var t=Object(c.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(c){return console.log(c),n}})),r=Object(m.a)(t,2),a=r[0],l=r[1];return[a,function(n){try{var t=n instanceof Function?n(a):n;l(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(c){console.log(c)}}]}("settings",d.state.settings),a=Object(m.a)(t,2),l=a[0],u=a[1],o=Object(c.useState)(Object(f.a)({},d.state,{settings:l})),i=Object(m.a)(o,2),s=i[0],v=i[1];return r.a.createElement(g,{value:{state:s,setState:v,setSettings:u}},n)};function h(){return Object(c.useContext)(v).state}var E=t(369);function p(){var e=Object(u.a)(["\n\tdisplay: inline-block;\n\tcolor: ",";\n\tmargin-right: 3px;\n\tfont-weight: bold;\n"]);return p=function(){return e},e}var w=i.a.div(p(),(function(e){return e.color}));function x(e){var n=e.displayName,t=e.color;return r.a.createElement(w,{color:t},n,":")}function j(){var e=Object(u.a)(["\n\tmargin: 0;\n"]);return j=function(){return e},e}function O(){var e=Object(u.a)(["\n\tmargin: 0 0;\n\tmin-height: 1.5rem;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n"]);return O=function(){return e},e}var F=i.a.div(O()),k=i.a.img(j());function y(e){for(var n,t=e.message,c=[],a="",l=0;l<=t.messageText.length;l++){var u=t.messageText[l];n=!1;var o,i=Object(E.a)(t.emotes);try{for(i.s();!(o=i.n()).done;){var s=o.value;if(s.startIndex===l){n=!0,c.push(r.a.createElement(k,{key:l,alt:s.code,src:"https://static-cdn.jtvnw.net/emoticons/v1/".concat(s.id,"/1.0")})),l+=s.endIndex-s.startIndex-1;break}}}catch(m){i.e(m)}finally{i.f()}if(!n){if(" "!==u&&l!==t.messageText.length-1){a+=u;continue}c.push(a),a="",c.push(u)}}return r.a.createElement(F,null,r.a.createElement(x,{displayName:t.displayName,color:t.colorRaw})," ",c)}function S(){var e=Object(u.a)(["\n    list-style-type: none;\n    flex-grow: 1;\n\toverflow-y: scroll;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tflex-direction: column-reverse;\n\n\t&::-webkit-scrollbar {\n\t\twidth: 0px;\n\t}\n\t\n\t&::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t}\n\n\t&::-webkit-scrollbar-thumb {\n\t\tbackground-color: transparent;\n\t}\n"]);return S=function(){return e},e}function C(){var e=Object(u.a)(["\n\tflex-grow: 1;\n    display: flex;\n    flex-direction: column;\n\theight: 100%;\n"]);return C=function(){return e},e}var L=i.a.div(C()),R=i.a.ul(S());function I(e){var n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=h(),r=t.chatClient,a=Object(c.useState)([]),l=Object(m.a)(a,2),u=l[0],o=l[1],i=Object(c.useCallback)((function(t){if(t.channelName===e){var c=Object(s.a)(u);c.length+1===n&&c.pop(),c.unshift(t),o(c)}}),[n,e,u]);return Object(c.useEffect)((function(){return r.join(e),r.on("PRIVMSG",i),function(){return r.removeListener("PRIVMSG",i)}}),[e,r,n,i]),u}(e.channel);return r.a.createElement(L,null,r.a.createElement(R,null,n.map((function(e){return r.a.createElement("li",{key:e.messageID},r.a.createElement(y,{message:e}))}))))}var N=t(367);function q(e){return e&&e?Boolean(document.fullscreenElement===e||document.mozFullScreenElement===e||document.webkitFullscreenElement===e||document.msFullscreenElement===e):Boolean(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement)}function z(){var e=Object(u.a)(["\n    display: flex;\n\talign-items: center;\n\tpadding: 5px;\n    width: 100%;\n    height: 2rem;\n\tjustify-content: space-between;\n\n\t.bp3-button {\n\t\tmin-height: 0;\n\t\tmin-width: 0;\n\t}\n"]);return z=function(){return e},e}var M=i.a.div(z());function J(){var e=function(e){var n=q(e),t=Object(c.useState)(n),r=Object(m.a)(t,2),a=r[0],l=r[1];return Object(c.useEffect)((function(){function n(){l(q(e))}return document.addEventListener("webkitfullscreenchange",n,!1),document.addEventListener("mozfullscreenchange",n,!1),document.addEventListener("msfullscreenchange",n,!1),document.addEventListener("MSFullscreenChange",n,!1),document.addEventListener("fullscreenchange",n,!1),function(){document.removeEventListener("webkitfullscreenchange",n),document.removeEventListener("mozfullscreenchange",n),document.removeEventListener("msfullscreenchange",n),document.removeEventListener("MSFullscreenChange",n),document.removeEventListener("fullscreenchange",n)}}),[e]),[a,a?function(){return document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen?document.msExitFullscreen():void 0}:function(){var n=e&&e||document.documentElement;return n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen?n.msRequestFullscreen():void 0}]}(document.body),n=Object(m.a)(e,2)[1];return r.a.createElement(M,null,"Settings",r.a.createElement(N.g,{icon:"fullscreen",onClick:n}))}var P=t(1);function T(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n\n\t.mosaic-window-body {\n\t\tpadding: 5px;\n\t}\n"]);return T=function(){return e},e}var B=i.a.div(T());function D(){var e=Object(c.useContext)(v).state;return Object(c.useEffect)((function(){e.chatClient.connect()}),[e.chatClient]),r.a.createElement(B,{className:"mosaic-blueprint-theme ".concat(P.g.DARK)},r.a.createElement(J,null),r.a.createElement(o.Mosaic,{className:"mosaic-blueprint-theme ".concat(P.g.DARK),renderTile:function(e,n){return r.a.createElement(o.MosaicWindow,{path:n,createNode:function(){return"new"},title:e},r.a.createElement(I,{channel:e}))},initialValue:e.settings}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null,r.a.createElement(D,null))),document.getElementById("root"))}},[[383,1,2]]]);
//# sourceMappingURL=main.2d485a05.chunk.js.map