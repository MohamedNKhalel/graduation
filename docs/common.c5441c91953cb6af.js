"use strict";(self.webpackChunkgraduation=self.webpackChunkgraduation||[]).push([[592],{5501:(d,o,t)=>{t.d(o,{j:()=>i});var r=t(5879),n=t(9862);let i=(()=>{class s{constructor(e){this._HttpClient=e}diseaseApi(e){return this._HttpClient.post("http://127.0.0.1:5000/skinCancer",e)}static#t=this.\u0275fac=function(l){return new(l||s)(r.LFG(n.eN))};static#e=this.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},3387:(d,o,t)=>{t.d(o,{O:()=>r});class r{constructor(i){this.id="",this.name="",this.size=0,this.prediction="",this.url="",this.scannedAt="",this.file=i}}},2401:(d,o,t)=>{t.d(o,{e:()=>i});var r=t(9862),n=t(5879);let i=(()=>{class s{constructor(e){this.http=e,this.apiUrl="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",this.apiKey="AIzaSyC_L958W5m-lKzjmHsBiUsg8vg0UuW78Ic",this.headers=(new r.WM).set("Content-Type","application/json").set("x-goog-api-key",this.apiKey),this.context=[]}generateContent(e){return this.http.post(this.apiUrl,{contents:[{role:"user",parts:[{text:e}]}]},{headers:this.headers})}static#t=this.\u0275fac=function(l){return new(l||s)(n.LFG(r.eN))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},6989:(d,o,t)=>{t.d(o,{$:()=>h});var r=t(5776),n=t(5879),i=t(4186),s=t(7104);let h=(()=>{class e{constructor(a,c){this._AngularFireStorage=a,this._AngularFirestore=c,this.userToken=localStorage.getItem("token")}saveFileMetaData(a,c){const u={id:"",name:a.name,size:a.size,url:a.url,prediction:a.prediction,scannedAt:this.getFormattedDate()};u.id=this._AngularFirestore.createId(),this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients/`).doc(c).update({medicalRecords:(0,r.vr)(u)})}getFormattedDate(){const a=new Date;return`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")} ${String(a.getHours()).padStart(2,"0")}:00`}getAllFiles(){return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Upload`)}static#t=this.\u0275fac=function(c){return new(c||e)(n.LFG(i.Q1),n.LFG(s.ST))};static#e=this.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);