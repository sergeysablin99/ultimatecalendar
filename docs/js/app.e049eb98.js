(function(){"use strict";var e={9331:function(e,t,n){var a=n(9963),o=n(6252),l=n(3577),r=n(2262);n(560);const i={class:"calendar-date-item-container"},d={class:"calendar-date-item-day-of-week"},s={class:"calendar-date-item-date"};function c(e,t){return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",d,[(0,o.WI)(e.$slots,"day-of-week",{},void 0,!0)]),(0,o._)("div",s,[(0,o.WI)(e.$slots,"date",{},void 0,!0)])])}var u=n(3744);const f={},v=(0,u.Z)(f,[["render",c],["__scopeId","data-v-10f87de2"]]);var p=v;const w=e=>((0,o.dD)("data-v-6db2fc03"),e=e(),(0,o.Cn)(),e),g={id:"calendar-header"},m=w((()=>(0,o._)("div",{id:"calendar-month-name-col"},"Ноябрь",-1))),_={id:"calendar-controls-col"},h={id:"calendar-controls"},b=["disabled"],I=["disabled"];var y={__name:"CalendarHeader",props:["activeLeft","activeRight"],setup(e){let t=window.Telegram.WebApp,n=t.themeParams;const a=e;function i(){let e=document.getElementById("calendar-dates"),t=4,n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),l=e.scrollLeft%o;e.scrollTo({top:0,left:e.scrollLeft+-t*o-l,behavior:"smooth"})}function d(){let e=document.getElementById("calendar-dates"),t=4,n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),l=e.scrollLeft%o;e.scrollTo({top:0,left:e.scrollLeft+t*o-l,behavior:"smooth"})}return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",g,[m,(0,o._)("div",_,[(0,o._)("div",h,[(0,o._)("button",{id:"calendar-prev-button",disabled:!a.activeLeft,class:"calendar-control-buttons",onClick:i},"< ",8,b),(0,o._)("button",{id:"calendar-next-button",disabled:!a.activeRight,class:"calendar-control-buttons",onClick:d},"> ",8,I)])])]),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).bg_color),1),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).text_color),1),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).hint_color),1),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).link_color),1),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).button_color),1),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).button_text_color),1),(0,o._)("div",null,(0,l.zw)((0,r.SU)(n).secondary_bg_color),1)],64))}};const U=(0,u.Z)(y,[["__scopeId","data-v-6db2fc03"]]);var S=U;const k={class:"calendar-date-item-slot-container"},C={class:"calendar-date-item-slot-item"},D=["id","value","onClick"],z=["for"];var L={__name:"CalendarDateSlots",props:["dateInfo"],setup(e){const t=e;let n=(0,r.iH)(null),{registration:i,registrationUpdate:d}=(0,o.f3)("registration"),s=(0,o.f3)("webApp");var c=s.MainButton;function u(e){c.setText("Записаться"),c.show(),d([t.dateInfo.date,t.dateInfo.month,t.dateInfo.year].join("."),t.dateInfo.slots[e])}return(0,o.Jd)((async()=>{c.hide()})),(e,i)=>((0,o.wg)(),(0,o.iD)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.dateInfo.slots,((e,t)=>((0,o.wg)(),(0,o.iD)("div",C,[(0,o.wy)((0,o._)("input",{id:`slots-${t}`,type:"radio",name:"slots","onUpdate:modelValue":i[0]||(i[0]=e=>(0,r.dq)(n)?n.value=e:n=e),value:t,onClick:e=>u(t)},null,8,D),[[a.G2,(0,r.SU)(n)]]),(0,o._)("label",{for:`slots-${t}`},(0,l.zw)(e),9,z)])))),256))]))}};const W=(0,u.Z)(L,[["__scopeId","data-v-d42ae5aa"]]);var H=W;const O={id:"calendar-container"},x={id:"calendar-header-row"},R={id:"calendar-dates-row"},j={class:"calendar-date-item"},B=["id","value"],T=["for"],E={key:0,id:"calendar-slots-row"};var $={__name:"CarouselCalendar",setup(e){let t=(0,r.iH)(!1),n=(0,r.iH)(!0),i=(0,r.iH)(null),d="onscrollend"in window,s="onscroll"in window,c=d?"scrollend":"scroll",u=[];for(let a=0;a<100;a++)u.push({weekDay:"Пн",date:a,month:a,year:2023,slots:["10:00","12:00","14:00","16:00","18:00","20:00"]});let f=(0,r.iH)(u);function v(){let e=document.getElementById("calendar-dates");t.value=e.scrollLeft>0,n.value=e.scrollWidth-e.clientWidth-e.scrollLeft>0}return(e,u)=>((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",x,[(0,o.Wm)(S,{"active-left":(0,r.SU)(t),"active-right":(0,r.SU)(n)},null,8,["active-left","active-right"])]),(0,o._)("div",R,[(0,o._)("div",(0,o.dG)({id:"calendar-dates"},{[(0,l.hR)((0,r.SU)(c))]:v}),[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(f),((e,t)=>((0,o.wg)(),(0,o.iD)("div",j,[(0,o.wy)((0,o._)("input",{id:`radio-${t}`,type:"radio",name:"radio","onUpdate:modelValue":u[0]||(u[0]=e=>(0,r.dq)(i)?i.value=e:i=e),value:t},null,8,B),[[a.G2,(0,r.SU)(i)]]),(0,o._)("label",{for:`radio-${t}`},[(0,o.Wm)(p,null,{date:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.date),1)])),"day-of-week":(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.weekDay),1)])),_:2},1024)],8,T)])))),256))],16)]),null!==(0,r.SU)(i)?((0,o.wg)(),(0,o.iD)("div",E,[((0,o.wg)(),(0,o.j4)(H,{dateInfo:(0,r.SU)(f)[(0,r.SU)(i)],key:(0,r.SU)(i)},null,8,["dateInfo"]))])):(0,o.kq)("",!0),(0,o._)("div",null,(0,l.zw)((0,r.SU)(d))+" "+(0,l.zw)((0,r.SU)(s))+" "+(0,l.zw)((0,r.SU)(c)),1)]))}};const A=(0,u.Z)($,[["__scopeId","data-v-2ff05c90"]]);var J=A,Y={__name:"App",setup(e){let t=(0,r.iH)({date:null,slot:null});function n(e,n){t.value.date=e,t.value.slot=n}let a=window.Telegram.WebApp;return(0,o.JJ)("registration",{registration:t,registrationUpdate:n}),(0,o.JJ)("webApp",a),a.MainButton.onClick((()=>{a.sendData(t.value)})),(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(J),(0,o._)("div",null,(0,l.zw)((0,r.SU)(a).initData),1)],64))}};const Z=Y;var q=Z;(0,a.ri)(q).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var i=!0,d=0;d<a.length;d++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(i=!1,l<r&&(r=l));if(i){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,r=a[0],i=a[1],d=a[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(d)var c=d(n)}for(t&&t(a);s<r.length;s++)l=r[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkdocs"]=self["webpackChunkdocs"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9331)}));a=n.O(a)})();
//# sourceMappingURL=app.e049eb98.js.map