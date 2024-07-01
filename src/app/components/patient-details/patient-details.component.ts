import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MedicalRecordsComponent } from '../medical-records/medical-records.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { Patient } from 'src/app/interfaces/patient';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [CommonModule,RouterLink,MedicalRecordsComponent,SharedModule],
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit{
  constructor(private _DataService:DataService , private _ActivatedRoute:ActivatedRoute,private _AngularFirestore:AngularFirestore){}
  patient:any
  patientId:any;
  showEdit:boolean = false;
  editRatesDisabled:boolean = true
  bloodPressure:string ='';
  SugarPressure:string ='';
  temprature:string ='';
  rates:any = {}
  ngOnInit(): void {
      

      this._ActivatedRoute.paramMap.subscribe({
        next:params=>{
          let patientId = params.get('id');
          this.getPatientById(patientId);
          this.patientId = patientId
          this.updatePtientId(this.patientId)
        }
      })
  }
  toggleEditButton(){
    this.showEdit = !this.showEdit
    this.editRatesDisabled = !this.editRatesDisabled
  }

  updatePatientRates(){
    this.showEdit = !this.showEdit
    this.editRatesDisabled = !this.editRatesDisabled
    this._DataService.updatePatient().doc(this.patientId).update({
      rates:{
        blood : this.bloodPressure,
        glucose : this.SugarPressure,
        Temperature : this.temprature
      }
    }
  )
  this.getPatientById(this.patientId)
  }
  updatePtientId(patientId:any){
    this._DataService.updatePatientId().doc(patientId).update({
      id:this.patientId
    })

  }
  getPatientById(patientId:any){
    this._DataService.getSpecificPatient().doc(patientId).get().subscribe({
      next:res=>{
        this.patient = res.data()
        console.log(res.data());
        console.log(this.patient.rates);
        this.rates = this.patient.rates;
        this.bloodPressure = this.rates?.blood;
        this.SugarPressure = this.rates?.glucose;
        this.temprature = this.rates?.Temperature;
        
      },
      error:err=>{
        console.log(err);
      }
    })
  } 
  
}
