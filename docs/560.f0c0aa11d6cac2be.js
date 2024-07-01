"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[560],{6560:(E,u,i)=>{i.r(u),i.d(u,{MyErrorStateMatcher:()=>I,RegisterComponent:()=>b});var d=i(6814),n=i(95),f=i(2032),l=i(4170),h=i(2577),e=i(5879),C=i(872);function M(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function Z(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function O(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"i",26),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.toggleEye())}),e.qZA()}}function v(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"i",27),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.toggleEye())}),e.qZA()}}function x(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function w(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password must contain at least one chracter "),e.qZA())}function y(t,o){if(1&t&&(e.TgZ(0,"p",28),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.errMsg)}}function P(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Sign up"),e.qZA())}function T(t,o){1&t&&e._UZ(0,"i",29)}class I{isErrorState(o,a){return!!(o&&o.invalid&&(o.dirty||o.touched||a&&a.submitted))}}let b=(()=>{class t{constructor(a){this._AuthService=a,this.email="",this.password="",this.eyeFlag=!1,this.errMsg="",this.loadingFlag=!1,this.registerForm=new n.cw({displayName:new n.NI(null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(20)]),email:new n.NI(null,[n.kI.required,n.kI.email]),password:new n.NI(null,[n.kI.required,n.kI.pattern(/[A-Za-z]/)])})}ngOnInit(){this._AuthService.errMsgRegister.subscribe({next:a=>{this.errMsg=this._AuthService.errMsgRegister.getValue(),this.loadingFlag=!1}})}register(){this._AuthService.register(this.registerForm.get("email")?.value,this.registerForm.get("password")?.value,this.registerForm.get("displayName")?.value),this.errMsg=this._AuthService.errMsgRegister.getValue(),this.loadingFlag=!0}signInIwthGoogle(){this._AuthService.signInWithGoogle()}toggleEye(){this.eyeFlag=!this.eyeFlag}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(C.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:43,vars:12,consts:[[1,"main","pt-5"],[1,"container","shadow","rounded-5"],[1,"row","align-items-center","rounded-5","bg-body-secondary"],[1,"col-md-4","offset-1"],["src","assets/images/icons/undraw_sign_up_n6im.svg","alt","",1,"w-100"],[1,"col-md-7","p-5","bg-white"],[1,"text-uppercase","text-primary","fw-bolder"],[1,"example-form","mt-5",3,"formGroup"],["appearance","outline",1,"example-full-width","mb-2"],["name","Name","formControlName","displayName","type","text","matInput","","placeholder","Enter Your name"],["name","email","formControlName","email","type","email","matInput","","placeholder","Enter Your email"],[4,"ngIf"],["appearance","outline",1,"example-full-width"],["formControlName","password","matInput","","placeholder","Enter you password",3,"type"],["password",""],["class","position-absolute top-50 translate-middle-y password-eye fa fa-eye",3,"click",4,"ngIf"],["class","position-absolute top-50 translate-middle-y password-eye fa fa-eye-slash",3,"click",4,"ngIf"],["class","alert alert-danger fs-6",4,"ngIf"],["type","button",1,"btn-main","mt-2","w-100",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"line","text-center","mt-4"],[1,"d-flex","flex-column","gap-2","social"],[1,"text-capitalize","fs-6",3,"click"],["src","assets/images/google.svg","alt","",1,"google-icon"],[1,"mt-3","text-center"],["routerLink","/login",1,"text-decoration-none"],[1,"position-absolute","top-50","translate-middle-y","password-eye","fa","fa-eye",3,"click"],[1,"position-absolute","top-50","translate-middle-y","password-eye","fa","fa-eye-slash",3,"click"],[1,"alert","alert-danger","fs-6"],[1,"fa","fa-spinner","fa-spin"]],template:function(s,r){if(1&s&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div"),e._UZ(5,"img",4),e.qZA()(),e.TgZ(6,"div",5)(7,"div")(8,"h2",6),e._uU(9,"Create new account"),e.qZA(),e.TgZ(10,"form",7)(11,"mat-form-field",8)(12,"mat-label"),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"mat-form-field",8)(16,"mat-label"),e._uU(17,"Email"),e.qZA(),e._UZ(18,"input",10),e.YNc(19,M,2,0,"mat-error",11),e.YNc(20,Z,4,0,"mat-error",11),e.qZA(),e.TgZ(21,"mat-form-field",12),e._UZ(22,"input",13,14),e.YNc(24,O,1,0,"i",15),e.YNc(25,v,1,0,"i",16),e.YNc(26,x,4,0,"mat-error",11),e.YNc(27,w,2,0,"mat-error",11),e.qZA(),e.YNc(28,y,2,1,"p",17),e.TgZ(29,"div")(30,"button",18),e.NdJ("click",function(){return r.register()}),e.YNc(31,P,2,0,"span",11),e.YNc(32,T,1,0,"i",19),e.qZA()()(),e.TgZ(33,"p",20),e._uU(34,"Or"),e.qZA(),e.TgZ(35,"div",21)(36,"button",22),e.NdJ("click",function(){return r.signInIwthGoogle()}),e._uU(37," Sign up with google "),e._UZ(38,"img",23),e.qZA()(),e.TgZ(39,"p",24),e._uU(40,"already have an account? "),e.TgZ(41,"a",25),e._uU(42,"Sign in"),e.qZA()()()()()()()),2&s){const g=e.MAs(23);let c,p,m,_;e.xp6(10),e.Q6J("formGroup",r.registerForm),e.xp6(9),e.Q6J("ngIf",null==(c=r.registerForm.get("email"))||null==c.errors?null:c.errors.email),e.xp6(1),e.Q6J("ngIf",null==(p=r.registerForm.get("email"))||null==p.errors?null:p.errors.required),e.xp6(2),e.Q6J("type",r.eyeFlag?"text":"password"),e.xp6(2),e.Q6J("ngIf",!r.eyeFlag&&g.value.length>0),e.xp6(1),e.Q6J("ngIf",r.eyeFlag&&g.value.length>0),e.xp6(1),e.Q6J("ngIf",null==(m=r.registerForm.get("password"))||null==m.errors?null:m.errors.required),e.xp6(1),e.Q6J("ngIf",null==(_=r.registerForm.get("password"))||null==_.errors?null:_.errors.pattern),e.xp6(1),e.Q6J("ngIf",r.errMsg),e.xp6(2),e.Q6J("disabled",r.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",!r.loadingFlag),e.xp6(1),e.Q6J("ngIf",r.loadingFlag)}},dependencies:[d.ez,d.O5,l.lN,l.KE,l.hX,l.TO,f.c,f.Nt,n.u5,n._Y,n.Fj,n.JJ,n.JL,n.UX,n.sg,n.u,h.rH],styles:['.main[_ngcontent-%COMP%]{background-size:cover;background-position:center}.example-form[_ngcontent-%COMP%], .example-full-width[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:75%;margin:auto}.wave[_ngcontent-%COMP%]{width:40px}.line[_ngcontent-%COMP%]{position:relative}.line[_ngcontent-%COMP%]:after{content:"";position:absolute;width:45%;height:3px;background-color:var(--second-color);top:55%;right:0;transform:translateY(-50%)}.line[_ngcontent-%COMP%]:before{content:"";position:absolute;width:45%;height:3px;background-color:var(--second-color);top:55%;left:0;transform:translateY(-50%)}.social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:10px 0;border-radius:10px;background-color:#095d7e;color:#fff;position:relative;transition:all .5s ease}.social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:#fff}.social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .google-icon[_ngcontent-%COMP%]{width:25px;position:absolute;left:10px;top:50%;transform:translateY(-50%)}.social[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{color:red}.social[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%]{color:#1e4ae9}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:80px!important}.container[_ngcontent-%COMP%]{width:95%}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}}button[_ngcontent-%COMP%]:disabled{border:none!important;color:#ffffff80!important}.password-eye[_ngcontent-%COMP%]{right:10px;cursor:pointer}']})}return t})()}}]);