(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{FMM8:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("ZYCi"),i=(u("OO+k"),u("HNzf")),r=u("J/mm"),o=u("e8Qb"),c=u("f+iR"),a=function(l,n,u,t){return new(u||(u=Promise))(function(e,i){function r(l){try{c(t.next(l))}catch(n){i(n)}}function o(l){try{c(t.throw(l))}catch(n){i(n)}}function c(l){l.done?e(l.value):new u(function(n){n(l.value)}).then(r,o)}c((t=t.apply(l,n||[])).next())})},s=function(l,n){var u,t,e,i,r={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;r;)try{if(u=1,t&&(e=2&i[0]?t.return:i[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,i[1])).done)return e;switch(t=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(e=(e=r.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){r.label=i[1];break}if(6===i[0]&&r.label<e[1]){r.label=e[1],e=i;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(i);break}e[2]&&r.ops.pop(),r.trys.pop();continue}i=n.call(l,r)}catch(o){i=[6,o],t=0}finally{u=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},b=function(){function l(l,n,u,t,i,o){var b=this;this.appService=l,this.nativeStorage=n,this.router=u,this.sanitizer=t,this.httpClient=i,this.toastController=o,this.newsitems=[],this.mainTitle="Home",Object(c.b)("homefeed#constructor"),l.setTitle(this.mainTitle),this.httpClient.get(r.a.homefeed).subscribe(function(l){l.newsitems&&(b.newsitems=l.newsitems)},function(l){return a(b,void 0,void 0,function(){return s(this,function(n){switch(n.label){case 0:return console.log("+++ homefeed 1:",JSON.stringify(l)),[4,this.toastController.create({message:l,duration:2e3})];case 1:return n.sent().present(),[2]}})})}),u.events.subscribe(function(l){l instanceof e.d&&b.ngOnInit()})}return l.prototype.ngOnInit=function(){var l=this;this.appService.currentMessage.subscribe(function(n){n==c.a.didLogin&&l.render()})},l.prototype.youtubeUrl=function(l){return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+l.youtube_id)},l.prototype.render=function(){var l=this;this.httpClient.get(r.a.homefeed).subscribe(function(n){n.newsitems&&(n.newsitems.map(function(l){l.youtube_id&&(l.youtube_url="https://www.youtube.com/embed/#{n['youtube_id]}")}),l.newsitems=n.newsitems)},function(n){return a(l,void 0,void 0,function(){return s(this,function(l){switch(l.label){case 0:return Object(c.b)(n,"+-2 error from m3:"),[4,this.toastController.create({message:n,duration:2e3})];case 1:return l.sent().present(),[2]}})})})},l}(),p=function(){return function(){}}(),d=u("pMnS"),f=u("Ip0R"),g=u("ra/t"),h=u("ntG5"),m=u("M9A9"),w=u("tXrQ"),x=u("ZYjt"),v=u("t/Na"),y=u("P87I"),k=t.nb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{overflow:scroll}.a-1[_ngcontent-%COMP%]{width:100%;height:100%}.row[_ngcontent-%COMP%]{height:calc(100% - 100px);overflow-x:scroll;overflow-y:hidden;margin:20px;display:-webkit-box;display:flex;width:auto}.title-card[_ngcontent-%COMP%]{width:35vw;min-width:250px;margin-right:40px}.title-card-inner[_ngcontent-%COMP%]{width:100%;background:#eee;height:calc(100% - 80px);margin:20px;padding:20px}.card-inner[_ngcontent-%COMP%]{padding:10px;height:100%}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:calc(100% - 20px);max-width:calc(100vw - 40px)}.img[_ngcontent-%COMP%]{width:calc(100vw - 80px);height:calc(100% - 20px)}.row-newsitems-video[_ngcontent-%COMP%]{height:calc(100% - 100px);overflow-x:scroll;overflow-y:hidden;margin:20px;display:-webkit-box;display:flex;width:auto}.row-newsitems-video[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.row-newsitems-video[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]{background:#eee;margin:0;padding:0;min-width:90vw;height:calc(100% - 20px);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.row-newsitems-video[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{margin:auto;max-width:100%;max-height:100%}"]],data:{}});function O(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\xa0 \xa0 \xa0 Loading..."])),(l()(),t.pb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,0,"br",[],null,null,null,null,null))],null,null)}function _(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"div",[["class","card-inner"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,3,"div",[["class","img"]],null,null,null,null,null)),t.ob(3,278528,null,0,f.l,[t.t,t.k,t.D],{ngStyle:[0,"ngStyle"]},null),t.Cb(4,{background:0,"background-repeat":1,"background-position":2,"background-size":3}),(l()(),t.Eb(-1,null,["\xa0"]))],function(l,n){var u=l(n,4,0,"#cccccc url("+n.context.$implicit.large_url+")","no-repeat","center","contain");l(n,3,0,u)},null)}function C(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","title-card"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","title-card-inner"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"ion-icon",[["name","camera"],["slot","start"]],null,null,null,g.z,g.i)),t.ob(5,49152,null,0,h.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(6,null,[" \xa0 "," (",")"])),(l()(),t.pb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(8,null,["",""])),(l()(),t.gb(16777216,null,null,2,null,_)),t.ob(10,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Bb(0,f.o,[])],function(l,n){l(n,5,0,"camera"),l(n,10,0,t.Fb(n,10,0,t.zb(n,11).transform(n.parent.context.$implicit.photos,0,3)))},function(l,n){l(n,6,0,n.parent.context.$implicit.name,n.parent.context.$implicit.photos.length);var u=n.parent.context.$implicit.created_at.substring(0,10);l(n,8,0,u)})}function M(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"iframe",[["allow","autoplay; encrypted-media"],["allowfullscreen",""],["frameborder","0"],["height","315"],["width","560"]],[[8,"src",5]],null,null,null,null))],null,function(l,n){l(n,1,0,n.component.youtubeUrl(n.parent.parent.context.$implicit))})}function P(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,13,"div",[["class","row-newsitems-video"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,8,"div",[["class","title-card"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,7,"div",[["class","title-card-inner"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"ion-icon",[["name","videocam"],["slot","start"]],null,null,null,g.z,g.i)),t.ob(5,49152,null,0,h.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(6,null,[" \xa0 ",""])),(l()(),t.pb(7,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t.Eb(9,null,["",""])),(l()(),t.pb(10,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,2,"div",[["class","card-inner"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,M)),t.ob(13,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,"videocam"),l(n,13,0,n.parent.context.$implicit.youtube_id)},function(l,n){l(n,6,0,n.parent.context.$implicit.name);var u=n.parent.context.$implicit.created_at.substring(0,10);l(n,9,0,u)})}function I(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,13,"div",[["class","title-card"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,12,"div",[["class","title-card-inner"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,9,"h1",[],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"ion-icon",[["name","today"],["slot","start"]],null,null,null,g.z,g.i)),t.ob(5,49152,null,0,h.x,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Eb(-1,null,[" \xa0 "])),(l()(),t.pb(7,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.zb(l,8).onClick(u)&&e),"click"===n&&(e=!1!==t.zb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.ob(8,16384,null,0,m.a,[[2,e.n],w.a,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(9,1),t.ob(10,671744,null,0,e.o,[e.n,e.a,f.g],{routerLink:[0,"routerLink"]},null),t.Ab(11,1),(l()(),t.Eb(12,null,["",""])),(l()(),t.pb(13,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(14,null,["",""]))],function(l,n){l(n,5,0,"today");var u=l(n,9,0,"/en/reports/show/"+n.parent.context.$implicit.reportname);l(n,8,0,u);var t=l(n,11,0,"/en/reports/show/"+n.parent.context.$implicit.reportname);l(n,10,0,t)},function(l,n){l(n,7,0,t.zb(n,10).target,t.zb(n,10).href),l(n,12,0,n.parent.context.$implicit.name);var u=n.parent.context.$implicit.created_at.substring(0,10);l(n,14,0,u)})}function $(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,6,"div",[["class","a-1"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,C)),t.ob(2,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,P)),t.ob(4,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,I)),t.ob(6,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,"gallery"==n.context.$implicit.item_type),l(n,4,0,"video"==n.context.$implicit.item_type),l(n,6,0,"report"==n.context.$implicit.item_type)},null)}function z(l){return t.Gb(0,[(l()(),t.gb(16777216,null,null,1,null,O)),t.ob(1,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(2,0,null,null,2,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,$)),t.ob(4,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,1,0,0==u.newsitems.length),l(n,4,0,u.newsitems)},null)}function L(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-newsfeed",[],null,null,null,z,k)),t.ob(1,114688,null,0,b,[o.a,i.a,e.n,x.b,v.c,y.a],null,null)],function(l,n){l(n,1,0)},null)}var G=t.lb("app-newsfeed",b,L,{},{},[]),j=u("gIcY"),E=u("95zI"),S=u("9opb"),F=u("apKv"),T=u("B4/3");u.d(n,"HomefeedPageModuleNgFactory",function(){return J});var J=t.mb(p,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[d.a,G]],[3,t.j],t.x]),t.xb(4608,f.k,f.j,[t.u,[2,f.s]]),t.xb(4608,j.c,j.c,[]),t.xb(4608,E.a,E.a,[t.z,t.g]),t.xb(4608,S.a,S.a,[E.a,t.j,t.q]),t.xb(4608,F.a,F.a,[E.a,t.j,t.q]),t.xb(1073742336,f.b,f.b,[]),t.xb(1073742336,j.b,j.b,[]),t.xb(1073742336,j.a,j.a,[]),t.xb(1073742336,T.a,T.a,[]),t.xb(1073742336,e.p,e.p,[[2,e.v],[2,e.n]]),t.xb(1073742336,p,p,[]),t.xb(1024,e.l,function(){return[[{path:"",component:b}]]},[])])})}}]);