(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{zTdw:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("ZZ/e"),o=u("HNzf"),r=u("e8Qb"),i=u("f+iR"),c=function(){function n(n,l,u,e,o){var r=this;this.appService=n,this.httpClient=l,this.nativeStorage=u,this.router=e,this.toastController=o,this.currentUser={},this.eventEmitter=new t.m,Object(i.b)("AccountPage constructor()"),this.appService.currentUser.subscribe(function(n){Object(i.b)(n,"AccountPage got currentUser"),r.currentUser=n,r.ngOnInit()})}return n.prototype.navigate=function(n){this.router.navigate([n])},n.prototype.ngOnInit=function(){Object(i.b)("AccountPage ngOnInit()")},n.prototype.doFacebookLogout=function(){return n=this,void 0,u=function(){return function(n,l){var u,t,e,o,r={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;r;)try{if(u=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,t=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(e=(e=r.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){r.label=o[1];break}if(6===o[0]&&r.label<e[1]){r.label=e[1],e=o;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(o);break}e[2]&&r.ops.pop(),r.trys.pop();continue}o=l.call(n,r)}catch(i){o=[6,i],t=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,function(n){switch(n.label){case 0:return this.nativeStorage.remove("current_user"),[4,this.toastController.create({message:"Logged out.",duration:2e3})];case 1:return n.sent().present(),this.appService.changeMessage(i.a.didLogout),[2]}})},new((l=void 0)||(l=Promise))(function(t,e){function o(n){try{i(u.next(n))}catch(l){e(l)}}function r(n){try{i(u.throw(n))}catch(l){e(l)}}function i(n){n.done?t(n.value):new l(function(l){l(n.value)}).then(o,r)}i((u=u.apply(n,[])).next())});var n,l,u},n.prototype.payMicro=function(){Object(i.b)("AccountPage payMicro()")},n}(),a=function(){return function(){}}(),b=u("pMnS"),p=u("oBZk"),s=u("khmd"),f=u("Ko49"),h=u("SPri"),g=u("ZYCi"),m=u("t/Na"),v=u("Ip0R"),d=t.nb({encapsulation:0,styles:[[""]],data:{}});function k(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,6,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.doFacebookLogout()&&t),t},p.C,p.k)),t.ob(1,49152,null,0,e.E,[t.h,t.k],{button:[0,"button"]},null),(n()(),t.pb(2,0,null,0,1,"ion-icon",[["name","power"],["slot","start"]],null,null,null,p.A,p.i)),t.ob(3,49152,null,0,e.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(4,0,null,0,2,"ion-label",[],null,null,null,p.D,p.l)),t.ob(5,49152,null,0,e.K,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,[" Logout "]))],function(n,l){n(l,1,0,""),n(l,3,0,"power")},null)}function y(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,6,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.payMicro()&&t),t},p.C,p.k)),t.ob(1,49152,null,0,e.E,[t.h,t.k],{button:[0,"button"]},null),(n()(),t.pb(2,0,null,0,1,"ion-icon",[["name","power"],["slot","start"]],null,null,null,p.A,p.i)),t.ob(3,49152,null,0,e.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.pb(4,0,null,0,2,"ion-label",[],null,null,null,p.D,p.l)),t.ob(5,49152,null,0,e.K,[t.h,t.k],null,null),(n()(),t.Gb(-1,0,[" Pay $0.05 "]))],function(n,l){n(l,1,0,""),n(l,3,0,"power")},null)}function w(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,20,"layout-sidemenu",[],null,null,null,s.b,s.a)),t.ob(1,114688,null,0,f.a,[r.a,h.a,e.Db,o.a,g.m,m.c,e.Kb],null,null),(n()(),t.pb(2,0,null,0,18,"ion-content",[],null,null,null,p.x,p.f)),t.ob(3,49152,null,0,e.r,[t.h,t.k],null,null),(n()(),t.pb(4,0,null,0,12,"ul",[],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["name:"])),(n()(),t.Gb(8,null,[" ",""])),(n()(),t.pb(9,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t.pb(10,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["email:"])),(n()(),t.Gb(12,null,[" ",""])),(n()(),t.pb(13,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),t.pb(14,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),t.Gb(-1,null,["id:"])),(n()(),t.Gb(16,null,[" ",""])),(n()(),t.gb(16777216,null,0,1,null,k)),t.ob(18,16384,null,0,v.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,0,1,null,y)),t.ob(20,16384,null,0,v.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(n,l){var u=l.component;n(l,1,0),n(l,18,0,u.currentUser),n(l,20,0,u.currentUser)},function(n,l){var u=l.component;n(l,8,0,u.currentUser.name),n(l,12,0,u.currentUser.email),n(l,16,0,u.currentUser.userID)})}function x(n){return t.Ib(0,[(n()(),t.pb(0,0,null,null,1,"app-account",[],null,null,null,w,d)),t.ob(1,114688,null,0,c,[r.a,m.c,o.a,g.m,e.Kb],null,null)],function(n,l){n(l,1,0)},null)}var I=t.lb("app-account",c,x,{},{eventEmitter:"eventEmitter"},[]),G=u("gIcY"),j=u("dVQv");u.d(l,"AccountModuleNgFactory",function(){return A});var A=t.mb(a,[],function(n){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,I]],[3,t.j],t.x]),t.xb(4608,v.k,v.j,[t.u,[2,v.s]]),t.xb(4608,G.g,G.g,[]),t.xb(4608,e.a,e.a,[t.z,t.g]),t.xb(4608,e.Eb,e.Eb,[e.a,t.j,t.q]),t.xb(4608,e.Hb,e.Hb,[e.a,t.j,t.q]),t.xb(1073742336,v.b,v.b,[]),t.xb(1073742336,G.f,G.f,[]),t.xb(1073742336,G.a,G.a,[]),t.xb(1073742336,e.Ab,e.Ab,[]),t.xb(1073742336,j.a,j.a,[]),t.xb(1073742336,g.p,g.p,[[2,g.v],[2,g.m]]),t.xb(1073742336,a,a,[]),t.xb(1024,g.k,function(){return[[{path:"",component:c}]]},[])])})}}]);