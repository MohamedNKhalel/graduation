"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[469],{3469:(g,l,o)=>{o.r(l),o.d(l,{CommunityComponent:()=>u});var r=o(6814),i=o(95),e=o(5879),d=o(2848);function c(t,m){if(1&t&&(e.TgZ(0,"div",6)(1,"div",7)(2,"div",8),e._UZ(3,"img",9),e.qZA(),e.TgZ(4,"div",10)(5,"h3")(6,"span",11),e._uU(7,"title :"),e.qZA(),e._uU(8),e.qZA(),e.TgZ(9,"p")(10,"span",11),e._uU(11,"description :"),e.qZA(),e._uU(12),e.qZA()()()()),2&t){const n=m.$implicit;e.xp6(3),e.Q6J("src",null==n?null:n.imageUrl,e.LSH),e.xp6(5),e.hij(" ",null==n?null:n.title,""),e.xp6(4),e.hij(" ",null==n?null:n.description.split(" ").slice(0,12).join(" "),"")}}let u=(()=>{class t{constructor(n){this._DataService=n}ngOnInit(){this.getData()}getData(){this._DataService.newApi(this.endPoint).subscribe({next:n=>{console.log(n),this.diseases=n},error:n=>{console.log(n)}})}static#e=this.\u0275fac=function(a){return new(a||t)(e.Y36(d.D))};static#n=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-community"]],standalone:!0,features:[e.jDz],decls:7,vars:2,consts:[[1,"container","my-5"],[1,"mb-3"],["for","search"],["type","text","name","search","id","search","placeholder","enter disease name",1,"form-control",3,"ngModel","keyup","ngModelChange"],[1,"row","gy-4"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"card","shadow","rounded-2"],[1,"card-header"],["alt","",1,"w-100",3,"src"],[1,"card-body"],[1,"fw-bolder","text-uppercase"]],template:function(a,s){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"label",2),e._uU(3,"Search"),e.qZA(),e.TgZ(4,"input",3),e.NdJ("keyup",function(){return s.getData()})("ngModelChange",function(_){return s.endPoint=_}),e.qZA()(),e.TgZ(5,"div",4),e.YNc(6,c,13,3,"div",5),e.qZA()()),2&a&&(e.xp6(4),e.Q6J("ngModel",s.endPoint),e.xp6(2),e.Q6J("ngForOf",s.diseases))},dependencies:[r.ez,r.sg,i.u5,i.Fj,i.JJ,i.On],styles:[".card[_ngcontent-%COMP%]{max-height:360px;overflow:hidden}"]})}return t})()}}]);