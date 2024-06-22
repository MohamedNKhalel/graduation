import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Patient } from '../interfaces/patient';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _HttpClient:HttpClient,private _AngularFirestore:AngularFirestore,private _AuthService:AuthService) { }

  state:BehaviorSubject<boolean> = new BehaviorSubject(false);
  diseaseName:BehaviorSubject<any> = new BehaviorSubject(null);
  userToken:any =localStorage.getItem('token');
  // patientId:any ='';
  
  
  addPatient(patient:Patient){
    this._AngularFirestore.createId();
    return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients`).add(patient);
  }
  
  getAllPatients(){
    this.userToken =localStorage.getItem('token');
    return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients`).snapshotChanges();
  }


  getSpecificPatient()
  {
    return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients`)
  }

  updateDiseaseProperty(){
    return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients`)
  }
  updatePatientId(){
    return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients`)

  }
  deletePatient(patient:Patient){
    return this._AngularFirestore.doc(`users/${JSON.parse(this.userToken)}/Patients/${patient.id}`).delete();
    
  }

  updatePatient(){
    return this._AngularFirestore.collection(`users/${JSON.parse(this.userToken)}/Patients`)
  }

  newApi(endpoint:any ="medical" ):Observable<any>
  { 
    return this._HttpClient.get(`https://6657d6d45c3617052645ffd9.mockapi.io/health/v1/${endpoint}`)
}
}
