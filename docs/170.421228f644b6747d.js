"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[170],{4170:(Z,u,s)=>{s.r(u),s.d(u,{BlanklayoutComponent:()=>b});var c=s(6814),r=s(2577),n=s(5879),p=s(872);const d=["navbar"];function g(o,l){if(1&o){const i=n.EpF();n.TgZ(0,"ul",19)(1,"li")(2,"a",20),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.toggleOptions())}),n._UZ(3,"i",21),n._uU(4," Profile"),n.qZA()(),n.TgZ(5,"li")(6,"a",22),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.toggleOptions())}),n._UZ(7,"i",23),n._uU(8," Settings"),n.qZA()(),n.TgZ(9,"li")(10,"a",22),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.signOut())}),n._UZ(11,"i",24),n._uU(12," SignOut"),n.qZA()()()}}let _=(()=>{class o{constructor(i,e){this._AuthService=i,this._Renderer2=e,this.options=!1}ngOnInit(){this.getUserData()}onScroll(){scrollY>100?this._Renderer2.addClass(this.navelement.nativeElement,"bg-body-tertiary"):this._Renderer2.removeClass(this.navelement.nativeElement,"bg-body-tertiary")}toggleOptions(){this.options=!this.options}signOut(){this._AuthService.signOut()}getUserData(){this._AuthService.getUserInfo().subscribe({next:i=>{console.log(i),this.user=i},error:i=>{console.log(i)}})}static#n=this.\u0275fac=function(e){return new(e||o)(n.Y36(p.e),n.Y36(n.Qsj))};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-blanknav"]],viewQuery:function(e,t){if(1&e&&n.Gf(d,5),2&e){let a;n.iGM(a=n.CRH())&&(t.navelement=a.first)}},hostBindings:function(e,t){1&e&&n.NdJ("scroll",function(){return t.onScroll()},!1,n.Jf7)},standalone:!0,features:[n.jDz],decls:29,vars:3,consts:[[1,"navbar","navbar-expand-lg","position-fixed","top-0","start-0","end-0","z-2","py-3"],["navbar",""],[1,"container"],["routerLink","home",1,"logo","fs-1"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","m-auto","text-center","my-links"],[1,"nav-item","me-4"],["routerLink","home","routerLinkActive","bg-main",1,"custom-nav-link"],["routerLink","patients","routerLinkActive","bg-main",1,"custom-nav-link"],["routerLink","community","routerLinkActive","bg-main",1,"custom-nav-link"],[1,"left-side","ms-auto","d-flex","justify-content-between","align-items-center"],[1,"fs-6"],["height","40","alt","",1,"profile-photo","ms-2",3,"src"],[1,"options","position-relative"],["title","options","type","button",1,"btn",3,"click"],[1,"fa-solid","fa-caret-down","fa-xl"],["class","list-unstyled position-absolute bg-body-tertiary shadow p-3 option rounded-2",4,"ngIf"],[1,"list-unstyled","position-absolute","bg-body-tertiary","shadow","p-3","option","rounded-2"],["routerLink","/profile",3,"click"],[1,"fa-solid","fa-user"],[3,"click"],[1,"fa","fa-gear"],[1,"fa-solid","fa-right-from-bracket"]],template:function(e,t){1&e&&(n.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),n._uU(4,"DERMA"),n.qZA(),n.TgZ(5,"button",4),n._UZ(6,"span",5),n.qZA(),n.TgZ(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),n._uU(11,"Scan"),n.qZA()(),n.TgZ(12,"li",8)(13,"a",10),n._uU(14,"Patients"),n.qZA()(),n.TgZ(15,"li",8)(16,"a",11),n._uU(17,"Community"),n.qZA()()()(),n.TgZ(18,"div",6)(19,"div",12)(20,"div",13),n._uU(21," DR/ "),n.TgZ(22,"span"),n._uU(23),n.qZA(),n._UZ(24,"img",14),n.qZA(),n.TgZ(25,"div",15)(26,"button",16),n.NdJ("click",function(){return t.toggleOptions()}),n._UZ(27,"i",17),n.qZA(),n.YNc(28,g,13,0,"ul",18),n.qZA()()()()()),2&e&&(n.xp6(23),n.Oqu(null==t.user?null:t.user.displayName),n.xp6(1),n.Q6J("src",null==t.user?null:t.user.photoURL,n.LSH),n.xp6(4),n.Q6J("ngIf",t.options))},dependencies:[c.ez,c.O5,r.Od,r.rH],styles:[".logo[_ngcontent-%COMP%]{color:var(--main-color);text-decoration:none;font-size:30px;font-weight:700}.navbar[_ngcontent-%COMP%]{background-color:#ffffff4d;padding-block:30px;transition:all .5s ease}.profile-photo[_ngcontent-%COMP%]{width:40px;border-radius:50%}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;transition:all .5s ease;cursor:pointer;font-size:1rem}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main-color)}.left-side[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]{width:120px;top:30px;left:10px}.left-side[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-block:10px}.left-side[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.my-links[_ngcontent-%COMP%]{visibility:hidden}@media screen and (max-width: 768px){.my-links[_ngcontent-%COMP%]{visibility:visible}.nav-item[_ngcontent-%COMP%]{padding-block:10px;width:100%!important}.left-side[_ngcontent-%COMP%]{flex-direction:column}}"]})}return o})();const m=["sideNav"];function f(o,l){1&o&&(n.TgZ(0,"span",16),n._uU(1,"home"),n.qZA())}function v(o,l){1&o&&(n.TgZ(0,"span",16),n._uU(1,"patients"),n.qZA())}function C(o,l){1&o&&(n.TgZ(0,"span",16),n._uU(1,"community"),n.qZA())}function h(o,l){1&o&&(n.TgZ(0,"span"),n._uU(1,"Sign Out"),n.qZA())}function O(o,l){if(1&o){const i=n.EpF();n.TgZ(0,"i",17),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.changeLayout())}),n.qZA()}}function y(o,l){if(1&o){const i=n.EpF();n.TgZ(0,"i",18),n.NdJ("click",function(){n.CHM(i);const t=n.oxw();return n.KtG(t.changeLayout())}),n.qZA()}}let k=(()=>{class o{constructor(i,e){this._AuthService=i,this._Renderer2=e,this.show=!0,this.mynav=new n.vpe,this.layOutVar=!1}changeLayout(){this.mynav.emit(this.layOutVar=!this.layOutVar)}ngOnInit(){}logOut(){this._AuthService.signOut()}static#n=this.\u0275fac=function(e){return new(e||o)(n.Y36(p.e),n.Y36(n.Qsj))};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-side-nav"]],viewQuery:function(e,t){if(1&e&&n.Gf(m,5),2&e){let a;n.iGM(a=n.CRH())&&(t.sideNav=a.first)}},outputs:{mynav:"mynav"},standalone:!0,features:[n.jDz],decls:20,vars:6,consts:[[1,"side-nav","bg-body-tertiary","p-5"],[1,"d-flex","flex-column","justify-content-between","h-100"],[1,"list-unstyled","d-flex","flex-column","gap-5"],["routerLink","/home","routerLinkActive","btn-nav"],[1,"text-decoration-none","text-dark"],[1,"fa-solid","fa-home"],["class","ms-3",4,"ngIf"],["routerLink","/patients","routerLinkActive","btn-nav"],[1,"fa-solid","fa-hospital-user"],["routerLink","/community","routerLinkActive","btn-nav"],[1,"fa-solid","fa-globe"],[1,"fs-6","text-decoration-none","text-dark","sign-out-icon",3,"click"],[1,"fa-solid","fa-arrow-right-from-bracket","me-2"],[4,"ngIf"],["class","fa-solid fa-chevron-left sideBar-icon ",3,"click",4,"ngIf"],["class","fa-solid fa-chevron-right sideBar-icon ",3,"click",4,"ngIf"],[1,"ms-3"],[1,"fa-solid","fa-chevron-left","sideBar-icon",3,"click"],[1,"fa-solid","fa-chevron-right","sideBar-icon",3,"click"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"aside",1)(2,"ul",2)(3,"li",3)(4,"a",4),n._UZ(5,"i",5),n.YNc(6,f,2,0,"span",6),n.qZA()(),n.TgZ(7,"li",7)(8,"a",4),n._UZ(9,"i",8),n.YNc(10,v,2,0,"span",6),n.qZA()(),n.TgZ(11,"li",9)(12,"a",4),n._UZ(13,"i",10),n.YNc(14,C,2,0,"span",6),n.qZA()()(),n.TgZ(15,"a",11),n.NdJ("click",function(){return t.logOut()}),n._UZ(16,"i",12),n.YNc(17,h,2,0,"span",13),n.qZA(),n.YNc(18,O,1,0,"i",14),n.YNc(19,y,1,0,"i",15),n.qZA()()),2&e&&(n.xp6(6),n.Q6J("ngIf",!t.layOutVar),n.xp6(4),n.Q6J("ngIf",!t.layOutVar),n.xp6(4),n.Q6J("ngIf",!t.layOutVar),n.xp6(3),n.Q6J("ngIf",!t.layOutVar),n.xp6(1),n.Q6J("ngIf",!t.layOutVar),n.xp6(1),n.Q6J("ngIf",t.layOutVar))},dependencies:[c.ez,c.O5,r.rH,r.Od],styles:['.btn-nav[_ngcontent-%COMP%]{position:relative}.btn-nav[_ngcontent-%COMP%]:after{content:"";position:absolute;background-color:var(--main-color);height:110%;width:5px;right:0}.btn-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--main-color)!important}.side-nav[_ngcontent-%COMP%]{height:88vh;border-top-right-radius:60px;position:sticky;top:88px}.side-nav[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]{position:sticky;top:0;bottom:0}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.0625rem;transition:all .2s ease;cursor:pointer}.side-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--main-color)!important}.side-nav[_ngcontent-%COMP%]   .sign-out-icon[_ngcontent-%COMP%]{cursor:pointer}.side-nav[_ngcontent-%COMP%]   .sideBar-icon[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:15px;font-size:25px;transition:all .2s ease;cursor:pointer}.side-nav[_ngcontent-%COMP%]   .sideBar-icon[_ngcontent-%COMP%]:hover{color:var(--tomato)}@media screen and (max-width: 768px){.side-nav[_ngcontent-%COMP%]{display:none}}']})}return o})(),b=(()=>{class o{changeLayoutClicked(i){this.state=i,console.log("clicked from layout",i)}static#n=this.\u0275fac=function(e){return new(e||o)};static#t=this.\u0275cmp=n.Xpm({type:o,selectors:[["app-blanklayout"]],standalone:!0,features:[n.jDz],decls:7,vars:4,consts:[[1,"container-fluid","all"],[1,"row"],[1,"side-nav","px-0"],[3,"mynav"],[1,"content","px-0"]],template:function(e,t){1&e&&(n._UZ(0,"app-blanknav"),n.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"app-side-nav",3),n.NdJ("mynav",function(M){return t.changeLayoutClicked(M)}),n.qZA()(),n.TgZ(5,"div",4),n._UZ(6,"router-outlet"),n.qZA()()()),2&e&&(n.xp6(3),n.Tol(t.state?"col-md-1":"col-md-2"),n.xp6(2),n.Tol(t.state?"col-md-10":"col-md-9"))},dependencies:[c.ez,r.lC,_,k],styles:[".all[_ngcontent-%COMP%]{margin-top:90px}.content[_ngcontent-%COMP%]{margin-block:auto}[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;justify-content:space-between}.side-nav[_ngcontent-%COMP%]{transition:all 1s ease}@media screen and (max-width: 768px){[_nghost-%COMP%]{justify-content:center}.all[_ngcontent-%COMP%]{margin-top:50px!important}}"]})}return o})()}}]);