import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddRecordComponent } from '../add-record/add-record.component';
import { RecordFile } from 'src/app/interfaces/record-file';

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule,RouterLink,AddRecordComponent,MatDialogModule],
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent implements OnInit{
  constructor(private _DataService:DataService,private _ActivatedRoute:ActivatedRoute,private _Location:Location,public _MatDialog: MatDialog){}
  
  patient!:any;
  records!:RecordFile[];
  patientId:any ='';
  imageUrl:string = ""
  previewFlag:boolean = false;
  imageIndex:number =0;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:params=>{
        this.patientId = params.get('id');
      }
    })
    this.getPatientById(this.patientId);
  }

  selectImage(i:any){
    this.imageIndex = i;
    console.log(this.imageIndex);
    console.log(this.records[i].url);
    this.previewFlag = true;
    this.imageUrl = this.records[i].url
      
  }
  moveLeft():void
  {
    this.imageIndex--
    if(this.imageIndex < 0){
      this.imageIndex = this.records.length -1
    }
    this.imageUrl = this.records[this.imageIndex].url
  }
  moveRight():void
  {
    this.imageIndex +=1
    if(this.imageIndex == this.records.length){
      this.imageIndex = 0;
    }
    this.imageUrl = this.records[this.imageIndex].url
  }


  stop(event:any){
    event.stopPropagation()
  }
  goBack(){
    this._Location.back()
  }
  getPatientById(patientId:any){
    this._DataService.getSpecificPatient().doc(patientId).get().subscribe({
      next:data=>{
        this.patient = data.data()
        this.records = this.patient.medicalRecords
        console.log(this.records);

      },
      error:err=>{
        console.log(err);
        
      }
    })
  }



  open(){
    const dialogRef = this._MatDialog.open(AddRecordComponent, {
      width:"800px",
      data:this.patientId
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.getPatientById(this.patientId)
      }
      console.log('The dialog was closed');
    });
  }
}
