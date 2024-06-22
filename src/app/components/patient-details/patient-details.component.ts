import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MedicalRecordsComponent } from '../medical-records/medical-records.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SharedModule } from 'src/app/shared/shared/shared.module';

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
  updatePtientId(patientId:any){
    this._DataService.updatePatientId().doc(patientId).update({
      id:this.patientId
    })

  }
  getPatientById(patientId:any){
    this._DataService.getSpecificPatient().doc(patientId).get().subscribe({
      next:res=>{
        this.patient = res.data()
      },
      error:err=>{
        console.log(err);
      }
    })
  } 
  
}
