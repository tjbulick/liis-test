(this["webpackJsonpliis-test"]=this["webpackJsonpliis-test"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/rocket.076fbf9a.jpg"},31:function(e,t,a){e.exports=a(52)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),c=a.n(i),s=a(5),l=a(10),o=(a(40),a(11)),u=(a(41),a(42),function(e){return r.a.createElement("div",{className:"input-block"},r.a.createElement("span",{className:"input-label"},e.label),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e.value,className:"form-input",name:e.name,onChange:e.onChange}))}),m=(a(43),function(e){return r.a.createElement("button",{className:"register-button",type:"submit",onClick:e.onSubmit},"Register")}),p=function(e){return{type:"CHANGE_FORM_INPUT",inputName:e.target.name,payload:e.target.value}},b=function(){return{type:"FORM_SUBMIT"}},f=(a(44),function(e){return r.a.createElement("div",{className:"two-input-row"},e.children)}),d=Object(l.b)((function(e){return Object(o.a)({},e.registrationFormFields)}),(function(e){return{changeFormInput:Object(s.b)(p,e),submitForm:Object(s.b)(b,e)}}))((function(e){var t=function(t){(0,e.changeFormInput)(t)};return r.a.createElement("form",{className:"registration-form"},r.a.createElement("div",{className:"branding"},r.a.createElement("i",{className:"fas fa-layer-group"}),r.a.createElement("span",null,r.a.createElement("i",null,r.a.createElement("b",null,"your"),"text"))),r.a.createElement("h1",null,"Registration Form"),r.a.createElement(f,null,r.a.createElement(u,{label:"First Name",name:"firstName",value:e.firstName,onChange:t}),r.a.createElement(u,{label:"Second Name",name:"secondName",value:e.secondName,onChange:t})),r.a.createElement(u,{label:"Username",name:"username",value:e.username,onChange:t}),r.a.createElement(u,{label:"Email",name:"email",value:e.email,onChange:t}),r.a.createElement(u,{label:"Phone Number",name:"phone",value:e.phone,onChange:t}),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement(m,{onSubmit:function(t){t.preventDefault(),(0,e.submitForm)()}})))})),E=a(27),h=a.n(E),g=(a(45),function(e){return r.a.createElement("div",{className:"you-are-registred"},r.a.createElement("h1",null,"You are successfully registred!"),r.a.createElement("h3",null,"Your unique ID in Firebase is ",e.id),r.a.createElement("h3",null,"Contact me, to check out database content: "),"Telegram: ",r.a.createElement("a",{href:"https://t.me/tjbulick",target:"_blank"},"tjbulick"),r.a.createElement("br",null),"\u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435: ",r.a.createElement("a",{href:"https://vk.com/tjbulick",target:"_blank"},"tjbulick"),r.a.createElement("br",null),"E-mail: ",r.a.createElement("a",{href:"mailto:e.pichtchalnikov@gmail.com?subject=\u0414\u043e\u0441\u0442\u0443\u043f \u043a Firebase"},"e.pichtchalnikov@gmail.com"))}),N=Object(l.b)((function(e){return{isRegistred:e.isRegistred,id:e.id}}))((function(e){return r.a.createElement("div",{className:"app"},e.isRegistred?r.a.createElement(g,{id:e.id}):r.a.createElement(d,null),r.a.createElement("img",{src:h.a,alt:"",height:"500px"}))})),v=(a(46),{isRegistred:!1,id:null,registrationFormFields:{firstName:"",secondName:"",username:"",email:"",phone:""}});var O=a(30),j=a(8),k=a.n(j),w=a(12),F=a(28),R=a(29),y=a(21),C=(a(48),k.a.mark(S)),I=k.a.mark(D),_=new function e(){var t=this;Object(R.a)(this,e),this.writeUserData=function(){var e=Object(F.a)(k.a.mark((function e(a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.db.collection("users").add(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.firebaseConfig={apiKey:"AIzaSyBSTRgnDd3k1x5x5NAK7A4jpFoMKTVY_OA",authDomain:"liis-test.firebaseapp.com",databaseURL:"https://liis-test.firebaseio.com",projectId:"liis-test",storageBucket:"liis-test.appspot.com",messagingSenderId:"739295187595",appId:"1:739295187595:web:1f4e9b004bc96c4af7ba8e"},y.initializeApp(this.firebaseConfig),this.db=y.firestore()};function x(e){return _.writeUserData({firstName:e.firstName,secondName:e.secondName,username:e.username,email:e.email,phone:e.phone})}function S(){var e,t;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(w.c)((function(e){return e.registrationFormFields}));case 2:return e=a.sent,a.prev=3,a.next=6,Object(w.a)(x,e);case 6:return t=a.sent,console.log("Document written with ID: ",t.id),a.next=10,Object(w.b)({type:"REGISTRATION_SUCCEEDED",payload:t.id});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(3),console.log("Registration failed with "+a.t0);case 15:case"end":return a.stop()}}),C,null,[[3,12]])}function D(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)("FORM_SUBMIT",S);case 2:case"end":return e.stop()}}),I)}var T=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,U=Object(O.a)(),A=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FORM_INPUT":var a=Object(o.a)({},e);return a.registrationFormFields[t.inputName]=t.payload,a;case"REGISTRATION_SUCCEEDED":return Object(o.a)({},e,{isRegistred:!0,id:t.payload});default:return e}}),T(Object(s.a)(U)));U.run(D),c.a.render(r.a.createElement(l.a,{store:A},r.a.createElement(N,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f154997c.chunk.js.map