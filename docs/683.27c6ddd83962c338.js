"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[683],{7683:(D,o,i)=>{i.r(o),i.d(o,{PatientDetailsComponent:()=>g});var r=i(6814),s=i(2577),u=i(8593),t=i(5879),_=i(2848),p=i(7104),d=i(6210),c=i(2032);function m(n,f){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div")(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Patient Name"),t.qZA(),t._UZ(6,"input",5),t.qZA()()(),t.TgZ(7,"div",4)(8,"div")(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Patient Email"),t.qZA(),t._UZ(12,"input",5),t.qZA()()(),t.TgZ(13,"div",4)(14,"div")(15,"mat-form-field")(16,"mat-label"),t._uU(17,"Patient BirthDate"),t.qZA(),t._UZ(18,"input",5),t.qZA()()(),t.TgZ(19,"div",4)(20,"div")(21,"mat-form-field")(22,"mat-label"),t._uU(23,"Patient Gender"),t.qZA(),t._UZ(24,"input",5),t.qZA()()()()),2&n){const a=t.oxw();t.xp6(6),t.Q6J("value",null==a.patient?null:a.patient.name),t.xp6(6),t.Q6J("value",null!=a.patient&&a.patient.email?null==a.patient?null:a.patient.email:"Not assigned yet"),t.xp6(6),t.Q6J("value",null==a.patient?null:a.patient.birthDate),t.xp6(6),t.Q6J("value",null==a.patient?null:a.patient.gender)}}const v=function(n){return["/records",n]};function P(n,f){if(1&n&&(t.TgZ(0,"button",6),t._uU(1,"Show Medical Records"),t.qZA()),2&n){const a=t.oxw();t.Q6J("routerLink",t.VKq(1,v,a.patient.id))}}let g=(()=>{class n{constructor(a,e,l){this._DataService=a,this._ActivatedRoute=e,this._AngularFirestore=l}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{let e=a.get("id");this.getPatientById(e),this.patientId=e,this.updatePtientId(this.patientId)}})}updatePtientId(a){this._DataService.updatePatientId().doc(a).update({id:this.patientId})}getPatientById(a){this._DataService.getSpecificPatient().doc(a).get().subscribe({next:e=>{this.patient=e.data()},error:e=>{console.log(e)}})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(_.D),t.Y36(s.gz),t.Y36(p.ST))};static#a=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-patient-details"]],standalone:!0,features:[t.jDz],decls:4,vars:2,consts:[[1,"main","container"],["class","row",4,"ngIf"],["type","button","class","btn btn-outline-primary d-block m-auto",3,"routerLink",4,"ngIf"],[1,"row"],[1,"col-md-6"],["disabled","","placeholder","name","type","text","matInput","",3,"value"],["type","button",1,"btn","btn-outline-primary","d-block","m-auto",3,"routerLink"]],template:function(e,l){1&e&&(t.TgZ(0,"section",0)(1,"div"),t.YNc(2,m,25,4,"div",1),t.YNc(3,P,2,3,"button",2),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",l.patient),t.xp6(1),t.Q6J("ngIf",l.patient))},dependencies:[r.ez,r.O5,s.rH,u.m,d.KE,d.hX,c.Nt],styles:["input[_ngcontent-%COMP%]:disabled{color:#000!important}mat-label[_ngcontent-%COMP%]{color:var(--main-color)!important}mat-form-field[_ngcontent-%COMP%]{width:100%}"]})}return n})()}}]);