(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+YFz":function(t,e,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},c=n("6VBw"),u=function(t,e){return a.createElement(c.a,Object.assign({},t,{ref:e,icon:r}))};u.displayName="InfoCircleOutlined";e.a=a.forwardRef(u)},Dx9A:function(t,e,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},c=n("6VBw"),u=function(t,e){return a.createElement(c.a,Object.assign({},t,{ref:e,icon:r}))};u.displayName="SendOutlined";e.a=a.forwardRef(u)},Pl5x:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verification/[token]",function(){return n("j9mH")}])},V4Hs:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),u=n("fpy4"),i=n("V31j"),o=function(){return function(){var t=Object(c.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.a.get("/profile"),t.abrupt("return",e({type:i.a.USER_PROFILE.default,payload:n}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},W80I:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return d}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),u=n("fpy4"),i=n("tLVB"),o=n("kQFM"),s=n("vDqi"),l=n.n(s),f=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.a.post("/user/login",t),e.abrupt("return",n({type:i.a.LOGIN.default,payload:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(t,e){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c,s,f,p;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{Authorization:"Bearer ".concat(e)}},s=o.b.getState(),f=s.auth.data,p=(null===f||void 0===f?void 0:f.token)?u.a.post("/verify_account",t):l.a.post("https://api.spreadprolimited.com/api/verify_account",t,c),n.abrupt("return",a({type:i.a.VERIFY_EMAIL.default,payload:p}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.a.post("/user",t),e.abrupt("return",n({type:i.a.SIGN_UP.default,payload:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},j9mH:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),c=n("5rEg"),u=n("3S7+"),i=n("2/Rp"),o=n("y0hu"),s=n("+YFz"),l=n("Dx9A"),f=n("nOHt"),p=n("W80I"),d=n("V4Hs"),v=n("/MKj"),h=r.a.createElement;e.default=function(){var t=Object(f.useRouter)(),e=Object(a.useState)(),n=e[0],r=e[1],m=t.query.token,y=Object(v.b)(),w={email:n};return h("section",{className:"verification-container"},h("div",{style:{display:"flex"}},h(c.a,{placeholder:"Enter your email",prefix:h(o.a,null),suffix:h(u.a,{title:"Email used during registration"},h(s.a,{style:{color:"rgba(0,0,0,.45)"}})),onChange:function(t){r(t.target.value)}}),h(i.a,{type:"primary",icon:h(l.a,null),onClick:function(){y(Object(p.c)(w,m)).then((function(t){200===(null===t||void 0===t?void 0:t.value.status)&&y(Object(d.a)()),console.log(t)}))}},"Submit")))}},y0hu:function(t,e,n){"use strict";var a=n("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},c=n("6VBw"),u=function(t,e){return a.createElement(c.a,Object.assign({},t,{ref:e,icon:r}))};u.displayName="MailOutlined";e.a=a.forwardRef(u)}},[["Pl5x",0,1,2,3,4,5,6,8,9,10]]]);