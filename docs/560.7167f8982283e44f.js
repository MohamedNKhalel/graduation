"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[560],{6560:(b,u,i)=>{i.r(u),i.d(u,{MyErrorStateMatcher:()=>I,RegisterComponent:()=>E});var d=i(6814),n=i(95),f=i(2032),l=i(4170),h=i(2577),e=i(5879),C=i(872);function M(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function Z(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function O(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"i",26),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.toggleEye())}),e.qZA()}}function v(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"i",27),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.toggleEye())}),e.qZA()}}function x(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function P(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Password must contain at least one chracter "),e.qZA())}function T(t,o){if(1&t&&(e.TgZ(0,"p",28),e._uU(1),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Oqu(a.errMsg)}}function w(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Sign up"),e.qZA())}function y(t,o){1&t&&e._UZ(0,"i",29)}class I{isErrorState(o,a){return!!(o&&o.invalid&&(o.dirty||o.touched||a&&a.submitted))}}let E=(()=>{class t{constructor(a){this._AuthService=a,this.email="",this.password="",this.eyeFlag=!1,this.errMsg="",this.loadingFlag=!1,this.registerForm=new n.cw({displayName:new n.NI(null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(20)]),email:new n.NI(null,[n.kI.required,n.kI.email]),password:new n.NI(null,[n.kI.required,n.kI.pattern(/[A-Za-z]/)])})}ngOnInit(){this._AuthService.errMsgRegister.subscribe({next:a=>{this.errMsg=this._AuthService.errMsgRegister.getValue(),this.loadingFlag=!1}})}register(){this._AuthService.register(this.registerForm.get("email")?.value,this.registerForm.get("password")?.value,this.registerForm.get("displayName")?.value),this.errMsg=this._AuthService.errMsgRegister.getValue(),this.loadingFlag=!0}signInIwthGoogle(){this._AuthService.signInWithGoogle()}toggleEye(){this.eyeFlag=!this.eyeFlag}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(C.e))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],standalone:!0,features:[e.jDz],decls:43,vars:12,consts:[[1,"main","pt-5"],[1,"container","shadow","p-5","rounded-5"],[1,"row","align-items-center"],[1,"col-md-7"],[1,"text-uppercase","text-primary","fw-bolder"],[1,"example-form","mt-5",3,"formGroup"],["appearance","outline",1,"example-full-width","mb-2"],["name","Name","formControlName","displayName","type","text","matInput","","placeholder","Enter Your name"],["name","email","formControlName","email","type","email","matInput","","placeholder","Enter Your email"],[4,"ngIf"],["appearance","outline",1,"example-full-width"],["formControlName","password","matInput","","placeholder","Enter you password",3,"type"],["password",""],["class","position-absolute top-50 translate-middle-y password-eye fa fa-eye",3,"click",4,"ngIf"],["class","position-absolute top-50 translate-middle-y password-eye fa fa-eye-slash",3,"click",4,"ngIf"],["class","alert alert-danger fs-6",4,"ngIf"],["type","button",1,"btn-main","mt-2","w-100",3,"disabled","click"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"line","text-center","mt-4"],[1,"d-flex","flex-column","gap-2","social"],[1,"text-capitalize","fs-6",3,"click"],["src","assets/images/google.svg","alt","",1,"google-icon"],[1,"mt-3","text-center"],["routerLink","/login",1,"text-decoration-none"],[1,"col-md-4","offset-1"],["src","assets/images/icons/undraw_sign_up_n6im.svg","alt","",1,"w-100"],[1,"position-absolute","top-50","translate-middle-y","password-eye","fa","fa-eye",3,"click"],[1,"position-absolute","top-50","translate-middle-y","password-eye","fa","fa-eye-slash",3,"click"],[1,"alert","alert-danger","fs-6"],[1,"fa","fa-spinner","fa-spin"]],template:function(s,r){if(1&s&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"h2",4),e._uU(6,"Create new account"),e.qZA(),e.TgZ(7,"form",5)(8,"mat-form-field",6)(9,"mat-label"),e._uU(10,"Name"),e.qZA(),e._UZ(11,"input",7),e.qZA(),e.TgZ(12,"mat-form-field",6)(13,"mat-label"),e._uU(14,"Email"),e.qZA(),e._UZ(15,"input",8),e.YNc(16,M,2,0,"mat-error",9),e.YNc(17,Z,4,0,"mat-error",9),e.qZA(),e.TgZ(18,"mat-form-field",10),e._UZ(19,"input",11,12),e.YNc(21,O,1,0,"i",13),e.YNc(22,v,1,0,"i",14),e.YNc(23,x,4,0,"mat-error",9),e.YNc(24,P,2,0,"mat-error",9),e.qZA(),e.YNc(25,T,2,1,"p",15),e.TgZ(26,"div")(27,"button",16),e.NdJ("click",function(){return r.register()}),e.YNc(28,w,2,0,"span",9),e.YNc(29,y,1,0,"i",17),e.qZA()()(),e.TgZ(30,"p",18),e._uU(31,"Or"),e.qZA(),e.TgZ(32,"div",19)(33,"button",20),e.NdJ("click",function(){return r.signInIwthGoogle()}),e._uU(34," Sign up with google "),e._UZ(35,"img",21),e.qZA()(),e.TgZ(36,"p",22),e._uU(37,"already have an account? "),e.TgZ(38,"a",23),e._uU(39,"Sign in"),e.qZA()()()(),e.TgZ(40,"div",24)(41,"div"),e._UZ(42,"img",25),e.qZA()()()()()),2&s){const g=e.MAs(20);let c,p,m,_;e.xp6(7),e.Q6J("formGroup",r.registerForm),e.xp6(9),e.Q6J("ngIf",null==(c=r.registerForm.get("email"))||null==c.errors?null:c.errors.email),e.xp6(1),e.Q6J("ngIf",null==(p=r.registerForm.get("email"))||null==p.errors?null:p.errors.required),e.xp6(2),e.Q6J("type",r.eyeFlag?"text":"password"),e.xp6(2),e.Q6J("ngIf",!r.eyeFlag&&g.value.length>0),e.xp6(1),e.Q6J("ngIf",r.eyeFlag&&g.value.length>0),e.xp6(1),e.Q6J("ngIf",null==(m=r.registerForm.get("password"))||null==m.errors?null:m.errors.required),e.xp6(1),e.Q6J("ngIf",null==(_=r.registerForm.get("password"))||null==_.errors?null:_.errors.pattern),e.xp6(1),e.Q6J("ngIf",r.errMsg),e.xp6(2),e.Q6J("disabled",r.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",!r.loadingFlag),e.xp6(1),e.Q6J("ngIf",r.loadingFlag)}},dependencies:[d.ez,d.O5,l.lN,l.KE,l.hX,l.TO,f.c,f.Nt,n.u5,n._Y,n.Fj,n.JJ,n.JL,n.UX,n.sg,n.u,h.rH],styles:['.main[_ngcontent-%COMP%]{background-size:cover;background-position:center}.example-form[_ngcontent-%COMP%], .example-full-width[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:75%;margin:auto}.wave[_ngcontent-%COMP%]{width:40px}.line[_ngcontent-%COMP%]{position:relative}.line[_ngcontent-%COMP%]:after{content:"";position:absolute;width:45%;height:3px;background-color:var(--second-color);top:55%;right:0;transform:translateY(-50%)}.line[_ngcontent-%COMP%]:before{content:"";position:absolute;width:45%;height:3px;background-color:var(--second-color);top:55%;left:0;transform:translateY(-50%)}.social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:10px 0;border-radius:10px;background-color:#095d7e;color:#fff;position:relative;transition:all .5s ease}.social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--main-color);color:#fff}.social[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .google-icon[_ngcontent-%COMP%]{width:25px;position:absolute;left:10px;top:50%;transform:translateY(-50%)}.social[_ngcontent-%COMP%]   .fa-google[_ngcontent-%COMP%]{color:red}.social[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%]{color:#1e4ae9}@media screen and (max-width: 768px){.main[_ngcontent-%COMP%]{padding-bottom:20px;padding-top:80px!important}.container[_ngcontent-%COMP%]{width:95%}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}}button[_ngcontent-%COMP%]:disabled{border:none!important;color:#ffffff80!important}.password-eye[_ngcontent-%COMP%]{right:10px;cursor:pointer}']})}return t})()}}]);