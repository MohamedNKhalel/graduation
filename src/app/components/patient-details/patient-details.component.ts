import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
  styleUrls: ['./patient-details.component.scss'],
  providers:[DatePipe]
})
export class PatientDetailsComponent implements OnInit{
  constructor(private _DatePipe:DatePipe,private _DataService:DataService , private _ActivatedRoute:ActivatedRoute,private _AngularFirestore:AngularFirestore){}
  patient:any
  patientId:any;
  showEdit:boolean = false;
  editRatesDisabled:boolean = true
  bloodPressure:string ='';
  SugarPressure:string ='';
  temprature:string ='';
  rates:any = {};
  age:any ;
  birthDate:any;
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
        this.birthDate = this.patient.date_of_birth.split('/').reverse().join("-")
        // console.log(this.birthDate);
        this.rates = this.patient.rates;
        this.bloodPressure = this.rates?.blood;
        this.SugarPressure = this.rates?.glucose;
        this.temprature = this.rates?.Temperature;
        this.calculateAge(this.birthDate)
      },
      error:err=>{
        console.log(err);
      }
    })
  } 
  calculateAge(birthDate:any): void {
    const birthdate = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    
    this.age = age;
    
  }
}
