"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[823],{6823:(k,u,c)=>{c.r(u),c.d(u,{MedicalRecordsComponent:()=>U});var l=c(6814),g=c(7700),f=c(3387),d=c(95),v=c(4716),x=c(8593),p=c(7680),e=c(5879),C=c(5501),M=c(4186),h=c(6989),_=c(2848),Z=c(2425);function T(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"ngx-dropzone-preview",12),e.NdJ("removed",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.onRemove(r))}),e.TgZ(1,"ngx-dropzone-label"),e._uU(2),e.qZA()()}if(2&i){const t=a.$implicit;e.Q6J("removable",!0),e.xp6(2),e.AsE("",t.name," (",t.type,")")}}function w(i,a){1&i&&(e.TgZ(0,"span"),e._uU(1,"Analyze"),e.qZA())}function b(i,a){1&i&&(e.TgZ(0,"span"),e._uU(1,"Analyzing image "),e._UZ(2,"i",13),e.qZA())}function F(i,a){if(1&i&&(e.TgZ(0,"h2",14),e._uU(1,"Patient possible disease name is : "),e.TgZ(2,"span",15),e._uU(3),e.qZA()()),2&i){const t=e.oxw();e.xp6(3),e.Oqu(t.prediction)}}const A=function(i){return{width:i}};let I=(()=>{class i{constructor(t,o,n,r,s,m,J){this._DiseaseService=t,this._AngularFireStorage=o,this._RecordsService=n,this._DataService=r,this._MatDialogRef=s,this.data=m,this._ToastrService=J,this.files=[],this.percentage=0,this.loadingFlag=!1,this.sendImageForm=new d.cw({fileup:new d.NI(null,[d.kI.required])})}onSelect(t){console.log(t),this.selectedFiles=t.addedFiles,console.log(this.selectedFiles),this.files.push(t.addedFiles[0]),this.sendImageForm.get("fileup")?.setValue(this.files)}onRemove(t){console.log(t),this.files.splice(this.files.indexOf(t),1)}sendImage(){console.log(this.data),this.loadingFlag=!0;let t=new FormData;t.append("fileup",this.selectedFiles[0]),this.currentSelectedFile=new f.O(this.selectedFiles[0]);const n=this._AngularFireStorage.ref("Uploads/"+this.currentSelectedFile.file.name);n.put(this.selectedFiles[0]).snapshotChanges().pipe((0,v.x)(()=>{n.getDownloadURL().subscribe(s=>{this.currentSelectedFile.url=s,this.currentSelectedFile.name=this.currentSelectedFile.file.name,this.currentSelectedFile.size=this.currentSelectedFile.file.size,this.currentSelectedFile.prediction=this.prediction,this._RecordsService.saveFileMetaData(this.currentSelectedFile,this.data)})})).subscribe({next:s=>{console.log(s),this.percentage=100*s.bytesTransferred/s.totalBytes},error:s=>{console.log(s)}}),this._DiseaseService.diseaseApi(t).subscribe({next:s=>{console.log(s),this.prediction=s.prediction,this._DataService.diseaseName.next(this.prediction),console.log(this.prediction),this.loadingFlag=!1,this._DataService.updateDiseaseProperty().doc(this.data).update({disease:this.prediction}).then(()=>{console.log("Property updated successfully")}).catch(m=>{console.error("Error updating property: ",m)})},error:s=>{console.log(s),this.loadingFlag=!1,this.prediction="Diagnoses Not Avaliable"}}),setTimeout(()=>{this._MatDialogRef.close(!0),this._ToastrService.success("Record added successfully")},2e3)}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(C.j),e.Y36(M.Q1),e.Y36(h.$),e.Y36(_.D),e.Y36(g.so),e.Y36(g.WI),e.Y36(Z._W))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-record"]],standalone:!0,features:[e.jDz],decls:18,vars:11,consts:[[1,"main","container","my-3"],[1,"shadow","p-3"],[1,"w-75","mx-auto"],["action","",3,"formGroup","ngSubmit"],[1,"w-100","m-auto",3,"change"],[3,"removable","removed",4,"ngFor","ngForOf"],[1,"progress","mt-3"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-info",3,"ngStyle"],[1,"d-flex","justify-content-center","align-items-center","mt-2"],["type","submit",1,"btn","btn-outline-primary",3,"disabled"],[4,"ngIf"],["class","text-center",4,"ngIf"],[3,"removable","removed"],[1,"fa","fa-spinner","fa-spin"],[1,"text-center"],[1,"text-primary"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3),e.NdJ("ngSubmit",function(){return n.sendImage()}),e.TgZ(4,"div")(5,"ngx-dropzone",4),e.NdJ("change",function(s){return n.onSelect(s)}),e.TgZ(6,"ngx-dropzone-label"),e._uU(7,"Drop your image here"),e.qZA(),e.YNc(8,T,3,3,"ngx-dropzone-preview",5),e.qZA(),e.TgZ(9,"div",6)(10,"div",7),e._uU(11),e.qZA()()(),e.TgZ(12,"div")(13,"div",8)(14,"button",9),e.YNc(15,w,2,0,"span",10),e.YNc(16,b,3,0,"span",10),e.qZA()(),e.YNc(17,F,4,1,"h2",11),e.qZA()()()()()),2&o&&(e.xp6(3),e.Q6J("formGroup",n.sendImageForm),e.xp6(5),e.Q6J("ngForOf",n.files),e.xp6(2),e.Q6J("ngStyle",e.VKq(9,A,n.percentage+"%")),e.uIk("aria-valuenow",n.percentage),e.xp6(1),e.hij(" ",n.percentage,"% "),e.xp6(3),e.Q6J("disabled",n.sendImageForm.invalid),e.xp6(1),e.Q6J("ngIf",!n.loadingFlag),e.xp6(1),e.Q6J("ngIf",n.loadingFlag),e.xp6(1),e.Q6J("ngIf",n.prediction))},dependencies:[l.ez,l.sg,l.O5,l.PC,x.m,d._Y,d.JL,d.sg,p.bB,p._f,p.NP,p.dt,d.UX,d.u5],styles:["i[_ngcontent-%COMP%]{cursor:pointer}"]})}return i})();var y=c(2577);function O(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"h2",10),e._uU(4),e.qZA(),e.TgZ(5,"span",11),e._uU(6),e.qZA()(),e.TgZ(7,"div")(8,"div",12)(9,"div",13)(10,"div",14)(11,"h3"),e._uU(12),e.qZA(),e.TgZ(13,"h3"),e._uU(14),e.qZA(),e.TgZ(15,"h3"),e._uU(16),e.qZA(),e.TgZ(17,"h3"),e._uU(18),e.ALo(19,"date"),e.qZA()()(),e.TgZ(20,"div",7)(21,"div"),e._UZ(22,"img",15),e.qZA()()()(),e.TgZ(23,"div")(24,"button",16),e.NdJ("click",function(){const r=e.CHM(t).index,s=e.oxw(2);return e.KtG(s.selectImage(r))}),e._uU(25,"Preview"),e.qZA()()()()}if(2&i){const t=a.$implicit,o=a.index;let n,r;e.xp6(4),e.Oqu(null==t||null==t.prediction||null==(n=t.prediction.split(" "))||null==(r=n.slice(0,2))?null:r.join(" ")),e.xp6(2),e.Oqu(o+1),e.xp6(6),e.Oqu(null==t?null:t.prediction),e.xp6(2),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.id),e.xp6(2),e.Oqu(e.lcZ(19,7,null==t?null:t.scannedAt)),e.xp6(4),e.Q6J("src",null==t?null:t.url,e.LSH)}}function R(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"button",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.open())}),e._uU(2,"Add new record"),e.qZA(),e.TgZ(3,"div",5),e.YNc(4,O,26,9,"div",6),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.records)}}function P(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",17),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.previewFlag=!1)}),e.TgZ(1,"div",18),e.NdJ("click",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.stop(n))}),e._UZ(2,"img",19),e.TgZ(3,"div",20)(4,"i",21),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.moveLeft())}),e.qZA(),e.TgZ(5,"i",22),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.moveRight())}),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(2),e.Q6J("src",t.imageUrl,e.LSH)}}function S(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"h2",23),e._uU(1,"There is no medical records yet.."),e.qZA(),e.TgZ(2,"h3",24),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.open())}),e._uU(3,"Click here to scan"),e.qZA()}}let U=(()=>{class i{constructor(t,o,n,r,s){this._DataService=t,this._ActivatedRoute=o,this._RecordsService=n,this._Location=r,this._MatDialog=s,this.patientId="",this.imageUrl="",this.previewFlag=!1,this.imageIndex=0}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:t=>{this.patientId=t.get("id")}}),this.getPatientById(this.patientId)}selectImage(t){this.imageIndex=t,console.log(this.imageIndex),console.log(this.records[t].url),this.previewFlag=!0,this.imageUrl=this.records[t].url}moveLeft(){this.imageIndex--,this.imageIndex<0&&(this.imageIndex=this.records.length-1),this.imageUrl=this.records[this.imageIndex].url}moveRight(){this.imageIndex+=1,this.imageIndex==this.records.length&&(this.imageIndex=0),this.imageUrl=this.records[this.imageIndex].url}stop(t){t.stopPropagation()}goBack(){this._Location.back()}getPatientById(t){this._DataService.getSpecificPatient().doc(t).get().subscribe({next:o=>{this.patient=o.data(),this.records=this.patient.medicalRecords,console.log(this.records)},error:o=>{console.log(o)}})}open(){this._MatDialog.open(I,{width:"800px",data:this.patientId}).afterClosed().subscribe(o=>{1==o&&this.getPatientById(this.patientId),console.log("The dialog was closed")})}static#e=this.\u0275fac=function(o){return new(o||i)(e.Y36(_.D),e.Y36(y.gz),e.Y36(h.$),e.Y36(l.Ye),e.Y36(g.uw))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-medical-records"]],standalone:!0,features:[e.jDz],decls:4,vars:3,consts:[["class","container my-4",4,"ngIf","ngIfElse"],["class","image-preview position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center",3,"click",4,"ngIf"],["msg",""],[1,"container","my-4"],["type","button",1,"btn","btn-primary","d-block","ms-auto",3,"click"],[1,"row","justify-content-center","g-4","mt-2"],["class","col-md-5",4,"ngFor","ngForOf"],[1,"col-md-5"],[1,"shadow","my-record","p-3","rounded-2","border","d-flex","flex-column","justify-content-between"],[1,"position-relative","mb-2"],[1,"text-center","me-3","text-uppercase"],[1,"rec-num","p-2","rounded-3","position-absolute","top-0","end-0"],[1,"row","align-items-center","justify-content-between"],[1,"col-md-7"],[1,"text-muted"],["height","150px","alt","disease image",1,"w-100","rounded-2",3,"src"],["type","button",1,"btn","btn-outline-info","d-block","m-auto","mt-4",3,"click"],[1,"image-preview","position-fixed","top-0","bottom-0","start-0","end-0","d-flex","justify-content-center","align-items-center",3,"click"],[1,"disease-image","position-relative",3,"click"],["height","500","alt","",1,"w-100",3,"src"],[1,"arrows"],[1,"fa","fa-arrow-left","fa-2x","text-white","position-absolute","top-50","translate-middle-y",3,"click"],[1,"fa","fa-arrow-right","fa-2x","text-white","position-absolute","top-50","translate-middle-y",3,"click"],[1,"text-center"],[1,"text-center","text-info","clickable",3,"click"]],template:function(o,n){if(1&o&&(e.YNc(0,R,5,1,"div",0),e.YNc(1,P,6,1,"div",1),e.YNc(2,S,4,0,"ng-template",null,2,e.W1O)),2&o){const r=e.MAs(3);e.Q6J("ngIf",n.records)("ngIfElse",r),e.xp6(1),e.Q6J("ngIf",n.previewFlag)}},dependencies:[l.ez,l.sg,l.O5,l.uU,g.Is],styles:[".row[_ngcontent-%COMP%]   .rec-num[_ngcontent-%COMP%]{background-color:var(--main-color);color:#fff;font-weight:500;font-size:1.0625rem}.my-record[_ngcontent-%COMP%]{height:330px}.clickable[_ngcontent-%COMP%]{cursor:pointer;transition:all .2s ease}.clickable[_ngcontent-%COMP%]:hover{color:#004e86!important}.image-preview[_ngcontent-%COMP%]{background-color:#00000080;z-index:3!important}.image-preview[_ngcontent-%COMP%]   .disease-image[_ngcontent-%COMP%]{width:600px}.image-preview[_ngcontent-%COMP%]   .disease-image[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer;transition:all .2s ease}.image-preview[_ngcontent-%COMP%]   .disease-image[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--tomato)!important}.image-preview[_ngcontent-%COMP%]   .disease-image[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1){left:-70px}.image-preview[_ngcontent-%COMP%]   .disease-image[_ngcontent-%COMP%]   .arrows[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2){right:-70px}"]})}return i})()}}]);