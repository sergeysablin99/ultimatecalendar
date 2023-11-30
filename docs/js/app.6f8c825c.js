(function(){"use strict";var e={9347:function(e,t,n){var a=n(9963),o=n(6252),i=(n(560),n(2262)),l=n(3577);const r={class:"calendar-date-item-container"},d={class:"calendar-date-item-day-of-week"},s={class:"calendar-date-item-date"};function c(e,t){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",d,[(0,o.WI)(e.$slots,"day-of-week",{},void 0,!0)]),(0,o._)("div",s,[(0,o.WI)(e.$slots,"date",{},void 0,!0)])])}var u=n(3744);const f={},p=(0,u.Z)(f,[["render",c],["__scopeId","data-v-7a9d9299"]]);var v=p;const m={id:"calendar-header"},g={id:"calendar-month-name-col"},h={id:"calendar-controls-col"},w={id:"calendar-controls"},_=["disabled"],b=["disabled"];var y={__name:"CalendarHeader",props:["activeLeft","activeRight"],setup(e){let t=window.Telegram.WebApp;t.themeParams;const n=e;function a(){let e=document.getElementById("calendar-dates"),t=4,n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),i=e.scrollLeft%o;e.scrollTo({top:0,left:e.scrollLeft+-t*o-i,behavior:"smooth"})}function i(){let e=document.getElementById("calendar-dates"),t=4,n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),i=e.scrollLeft%o;e.scrollTo({top:0,left:e.scrollLeft+t*o-i,behavior:"smooth"})}return(e,t)=>((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",g,[(0,o.WI)(e.$slots,"observable-month")]),(0,o._)("div",h,[(0,o._)("div",w,[(0,o._)("button",{id:"calendar-prev-button",disabled:!n.activeLeft,class:"calendar-control-buttons",onClick:a},"< ",8,_),(0,o._)("button",{id:"calendar-next-button",disabled:!n.activeRight,class:"calendar-control-buttons",onClick:i},"> ",8,b)])])]))}};const I=(0,u.Z)(y,[["__scopeId","data-v-c57620a0"]]);var k=I,C=n(2960),S=n.n(C);const U=e=>((0,o.dD)("data-v-515955c0"),e=e(),(0,o.Cn)(),e),D={key:0,class:"slot-section"},H=U((()=>(0,o._)("div",{class:"slot-section-header"},"Утро",-1))),L={class:"calendar-date-item-slot-container"},W={class:"calendar-date-item-slot-item"},R=["id","value","onClick"],O=["for"],$={key:1,class:"slot-section"},j=U((()=>(0,o._)("div",{class:"slot-section-header"},"День",-1))),x={class:"calendar-date-item-slot-container"},B={class:"calendar-date-item-slot-item"},E=["id","value","onClick"],T=["for"],z={key:2,class:"slot-section"},q=U((()=>(0,o._)("div",{class:"slot-section-header"},"Вечер",-1))),A={class:"calendar-date-item-slot-container"},J={class:"calendar-date-item-slot-item"},M=["id","value","onClick"],Y=["for"];var K={__name:"CalendarDateSlots",props:["dateInfo"],setup(e){const t=e;function n(e){return S().map(e,(function(e,t){return[e,t]}))}const a=n(t.dateInfo.slots),r=a.filter((e=>e[0]<="12:00")),d=a.filter((e=>e[0]>"12:00"&&e[0]<"18:00")),s=a.filter((e=>e[0]>="18:00"));let{registration:c,registrationUpdate:u}=(0,o.f3)("registration"),f=(0,o.f3)("webApp");var p=f.MainButton;function v(e){p.setText("Записаться"),p.show(),u([t.dateInfo.date,t.dateInfo.month,t.dateInfo.year].join("."),e)}return(0,o.Jd)((async()=>{p.hide()})),(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,i.SU)(r).length>0?((0,o.wg)(),(0,o.iD)("div",D,[H,(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(r),(e=>((0,o.wg)(),(0,o.iD)("div",W,[(0,o._)("input",{id:`slots-${e[1]}`,type:"radio",name:"slots",value:e[1],onClick:t=>v(e[0])},null,8,R),(0,o._)("label",{for:`slots-${e[1]}`},(0,l.zw)(e[0]),9,O)])))),256))])])):(0,o.kq)("",!0),(0,i.SU)(d).length>0?((0,o.wg)(),(0,o.iD)("div",$,[j,(0,o._)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(d),(e=>((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("input",{id:`slots-${e[1]}`,type:"radio",name:"slots",value:e[1],onClick:t=>v(e[0])},null,8,E),(0,o._)("label",{for:`slots-${e[1]}`},(0,l.zw)(e[0]),9,T)])))),256))])])):(0,o.kq)("",!0),(0,i.SU)(s).length>0?((0,o.wg)(),(0,o.iD)("div",z,[q,(0,o._)("div",A,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(s),(e=>((0,o.wg)(),(0,o.iD)("div",J,[(0,o._)("input",{id:`slots-${e[1]}`,type:"radio",name:"slots",value:e[1],onClick:t=>v(e[0])},null,8,M),(0,o._)("label",{for:`slots-${e[1]}`},(0,l.zw)(e[0]),9,Y)])))),256))])])):(0,o.kq)("",!0)],64))}};const P=(0,u.Z)(K,[["__scopeId","data-v-515955c0"]]);var Z=P;const N={id:"calendar-container"},G={id:"calendar-header-row"},F={id:"calendar-dates-row"},V={class:"calendar-date-item"},Q=["id","value"],X=["for"],ee={key:0,id:"calendar-slots-row"};var te={__name:"CarouselCalendar",setup(e){let t=(0,i.iH)(!1),n=(0,i.iH)(!0),r=(0,i.iH)(null),d="onscrollend"in window,s=d?"scrollend":"scroll",c=(0,i.iH)(),u=[];for(let a=26;a<31;a++)u.push({weekDay:"Пн",date:a,month:"Ноябрь",year:2023,slots:["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","18:00","19:00"]});for(let a=0;a<20;a++)u.push({weekDay:"Пн",date:a,month:"Декабрь",year:2023,slots:["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","18:00","19:00"]});let f=(0,i.iH)(u);function p(){let e=document.getElementById("calendar-dates"),t=window.getComputedStyle(e),n=document.getElementsByClassName("calendar-date-item")[0],a=window.getComputedStyle(n),o=parseInt(a.width,10)+parseInt(a.marginLeft,10)+parseInt(a.marginRight,10)+parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10)+parseInt(a.paddingRight,10)+parseInt(a.paddingLeft,10),i=Math.floor(parseInt(t.width,10)/o),l=Math.floor(e.scrollLeft/o),r=f.value.slice(0).splice(l,i).map((e=>e.month)),d=[...new Set(r)];c.value=d.join("-")}function m(){let e=document.getElementById("calendar-dates");t.value=e.scrollLeft>0,n.value=e.scrollWidth-e.clientWidth-e.scrollLeft>0,p()}return(0,o.bv)((()=>p())),(e,d)=>((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",G,[(0,o.Wm)(k,{"active-left":(0,i.SU)(t),"active-right":(0,i.SU)(n)},{"observable-month":(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)((0,i.SU)(c)),1)])),_:1},8,["active-left","active-right"])]),(0,o._)("div",F,[(0,o._)("div",(0,o.dG)({id:"calendar-dates"},{[(0,l.hR)((0,i.SU)(s))]:m}),[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,i.SU)(f),((e,t)=>((0,o.wg)(),(0,o.iD)("div",V,[(0,o.wy)((0,o._)("input",{id:`radio-${t}`,type:"radio",name:"radio","onUpdate:modelValue":d[0]||(d[0]=e=>(0,i.dq)(r)?r.value=e:r=e),value:t},null,8,Q),[[a.G2,(0,i.SU)(r)]]),(0,o._)("label",{for:`radio-${t}`},[(0,o.Wm)(v,null,{date:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.date),1)])),"day-of-week":(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.weekDay),1)])),_:2},1024)],8,X)])))),256))],16)]),null!==(0,i.SU)(r)?((0,o.wg)(),(0,o.iD)("div",ee,[((0,o.wg)(),(0,o.j4)(Z,{dateInfo:(0,i.SU)(f)[(0,i.SU)(r)],key:(0,i.SU)(r)},null,8,["dateInfo"]))])):(0,o.kq)("",!0)]))}};const ne=(0,u.Z)(te,[["__scopeId","data-v-7ae132c6"]]);var ae=ne,oe={__name:"App",setup(e){let t=(0,i.iH)({date:null,slot:null});function n(e,n){t.value.date=e,t.value.slot=n}let a=window.Telegram.WebApp,l=((0,i.iH)(window.Telegram),a.themeParams);(0,i.iH)(l.bg_color),(0,i.iH)(l.text_color),(0,i.iH)(l.hint_color),(0,i.iH)(l.link_color),(0,i.iH)(l.button_color),(0,i.iH)(l.button_text_color),(0,i.iH)(l.secondary_bg_color);return(0,o.JJ)("registration",{registration:t,registrationUpdate:n}),(0,o.JJ)("webApp",a),a.MainButton.onClick((()=>{alert("send"),a.close()})),(e,t)=>((0,o.wg)(),(0,o.j4)(ae))}};const ie=oe;var le=ie;(0,a.ri)(le).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var r=!0,d=0;d<a.length;d++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[d])}))?a.splice(d--,1):(r=!1,i<l&&(l=i));if(r){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,l=a[0],r=a[1],d=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(d)var c=d(n)}for(t&&t(a);s<l.length;s++)i=l[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunkdocs"]=self["webpackChunkdocs"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9347)}));a=n.O(a)})();
//# sourceMappingURL=app.6f8c825c.js.map