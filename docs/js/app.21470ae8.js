(function(){"use strict";var e={4232:function(e,t,n){var a=n(9963),o=n(6252),r=n(3577),i=n(2262);n(560);const l={class:"calendar-date-item-container"},d={class:"calendar-date-item-day-of-week"},s={class:"calendar-date-item-date"};function c(e,t){return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",d,[(0,o.WI)(e.$slots,"day-of-week",{},void 0,!0)]),(0,o._)("div",s,[(0,o.WI)(e.$slots,"date",{},void 0,!0)])])}var u=n(3744);const f={},p=(0,u.Z)(f,[["render",c],["__scopeId","data-v-7a9d9299"]]);var v=p;const m=e=>((0,o.dD)("data-v-3c8453e0"),e=e(),(0,o.Cn)(),e),g={id:"calendar-header"},h=m((()=>(0,o._)("div",{id:"calendar-month-name-col"},"Ноябрь",-1))),w={id:"calendar-controls-col"},b={id:"calendar-controls"},_=["disabled"],y=["disabled"];var I={__name:"CalendarHeader",props:["activeLeft","activeRight"],setup(e){let t=window.Telegram.WebApp;t.themeParams;const n=e;function a(){let e=document.getElementById("calendar-dates"),t=4,n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),r=e.scrollLeft%o;e.scrollTo({top:0,left:e.scrollLeft+-t*o-r,behavior:"smooth"})}function r(){let e=document.getElementById("calendar-dates"),t=4,n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),r=e.scrollLeft%o;e.scrollTo({top:0,left:e.scrollLeft+t*o-r,behavior:"smooth"})}return(e,t)=>((0,o.wg)(),(0,o.iD)("div",g,[h,(0,o._)("div",w,[(0,o._)("div",b,[(0,o._)("button",{id:"calendar-prev-button",disabled:!n.activeLeft,class:"calendar-control-buttons",onClick:a},"< ",8,_),(0,o._)("button",{id:"calendar-next-button",disabled:!n.activeRight,class:"calendar-control-buttons",onClick:r},"> ",8,y)])])]))}};const k=(0,u.Z)(I,[["__scopeId","data-v-3c8453e0"]]);var C=k;const H={class:"calendar-date-item-slot-container"},U={class:"calendar-date-item-slot-item"},D=["id","value","onClick"],L=["for"];var S={__name:"CalendarDateSlots",props:["dateInfo"],setup(e){const t=e;let n=(0,i.iH)(null),{registration:l,registrationUpdate:d}=(0,o.f3)("registration"),s=(0,o.f3)("webApp");var c=s.MainButton;function u(e){c.setText("Записаться"),c.show(),d([t.dateInfo.date,t.dateInfo.month,t.dateInfo.year].join("."),t.dateInfo.slots[e])}return(0,o.Jd)((async()=>{c.hide()})),(e,l)=>((0,o.wg)(),(0,o.iD)("div",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.dateInfo.slots,((e,t)=>((0,o.wg)(),(0,o.iD)("div",U,[(0,o.wy)((0,o._)("input",{id:`slots-${t}`,type:"radio",name:"slots","onUpdate:modelValue":l[0]||(l[0]=e=>(0,i.dq)(n)?n.value=e:n=e),value:t,onClick:e=>u(t)},null,8,D),[[a.G2,(0,i.SU)(n)]]),(0,o._)("label",{for:`slots-${t}`},(0,r.zw)(e),9,L)])))),256))]))}};const W=(0,u.Z)(S,[["__scopeId","data-v-cf19bfd4"]]);var O=W;const x={id:"calendar-container"},R={id:"calendar-header-row"},j={id:"calendar-dates-row"},T={class:"calendar-date-item"},B=["id","value"],E=["for"],A={key:0,id:"calendar-slots-row"};var $={__name:"CarouselCalendar",setup(e){let t=(0,i.iH)(!1),n=(0,i.iH)(!0),l=(0,i.iH)(null),d="onscrollend"in window,s=d?"scrollend":"scroll",c=[];for(let a=0;a<100;a++)c.push({weekDay:"Пн",date:a,month:a,year:2023,slots:["10:00","12:00","14:00","16:00","18:00","20:00"]});let u=(0,i.iH)(c);function f(){let e=document.getElementById("calendar-dates");t.value=e.scrollLeft>0,n.value=e.scrollWidth-e.clientWidth-e.scrollLeft>0}return(e,d)=>((0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",R,[(0,o.Wm)(C,{"active-left":(0,i.SU)(t),"active-right":(0,i.SU)(n)},null,8,["active-left","active-right"])]),(0,o._)("div",j,[(0,o._)("div",(0,o.dG)({id:"calendar-dates"},{[(0,r.hR)((0,i.SU)(s))]:f}),[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(u),((e,t)=>((0,o.wg)(),(0,o.iD)("div",T,[(0,o.wy)((0,o._)("input",{id:`radio-${t}`,type:"radio",name:"radio","onUpdate:modelValue":d[0]||(d[0]=e=>(0,i.dq)(l)?l.value=e:l=e),value:t},null,8,B),[[a.G2,(0,i.SU)(l)]]),(0,o._)("label",{for:`radio-${t}`},[(0,o.Wm)(v,null,{date:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.date),1)])),"day-of-week":(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.weekDay),1)])),_:2},1024)],8,E)])))),256))],16)]),null!==(0,i.SU)(l)?((0,o.wg)(),(0,o.iD)("div",A,[((0,o.wg)(),(0,o.j4)(O,{dateInfo:(0,i.SU)(u)[(0,i.SU)(l)],key:(0,i.SU)(l)},null,8,["dateInfo"]))])):(0,o.kq)("",!0)]))}};const J=(0,u.Z)($,[["__scopeId","data-v-721e829d"]]);var P=J;const z={style:{color:"red"}};var Z={__name:"App",setup(e){let t=(0,i.iH)({date:null,slot:null});function n(e,n){t.value.date=e,t.value.slot=n}let a=window.Telegram.WebApp,l=(0,i.iH)(window.Telegram),d=a.themeParams;(0,i.iH)(d.bg_color),(0,i.iH)(d.text_color),(0,i.iH)(d.hint_color),(0,i.iH)(d.link_color),(0,i.iH)(d.button_color),(0,i.iH)(d.button_text_color),(0,i.iH)(d.secondary_bg_color);return(0,o.JJ)("registration",{registration:t,registrationUpdate:n}),(0,o.JJ)("webApp",a),a.MainButton.onClick((()=>{alert("send"),a.close()})),a.onEvent("themeChanged",(()=>{alert("themeChanged"),console.log(d)})),(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P),(0,o._)("div",z,(0,r.zw)((0,i.SU)(l).WebApp.themeParams),1)],64))}};const q=Z;var G=q;(0,a.ri)(G).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var l=!0,d=0;d<a.length;d++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],l=a[1],d=a[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(d)var c=d(n)}for(t&&t(a);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkdocs"]=self["webpackChunkdocs"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4232)}));a=n.O(a)})();
//# sourceMappingURL=app.21470ae8.js.map