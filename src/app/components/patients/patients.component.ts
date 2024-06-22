import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataService } from 'src/app/services/data.service';
import { Patient } from 'src/app/interfaces/patient';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [ AddPatientComponent,MatDialogModule,MatButtonModule,CommonModule,RouterLink,FormsModule,MatSelectModule,SharedModule,MatSnackBarModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'], 
  providers:[],
})
export class PatientsComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _DataService:DataService,public _MatDialog: MatDialog,private _MatSnackBar:MatSnackBar){}

  patientList :Patient[] =[];
  searchName:string = '';
  searchGender:string = '';
  searchPhone:string = '';

  ngOnInit(): void {
    this.getAllPatients();
}

  createPatientForm:FormGroup= new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    lastName:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    gender:new FormControl(null,[Validators.required]),
    birthDate:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)])
  })

  getAllPatients(){
    this._DataService.getAllPatients().subscribe({
      next:res=>{
        // console.log(res);
        
        this.patientList = res.map((e:any)=>{
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
        console.log(this.patientList);
        
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  deleteItem(patient:any,event:any) {
    event.stopPropagation();
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete ${patient.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.performDeletion(patient);
        Swal.fire(
          'Deleted!',
          'Patient has been deleted.',
          'success'
        );
      }
    });
  }
  performDeletion(patient:Patient) {
    this._DataService.deletePatient(patient);
  }



  updatePatient(patient:Patient,event:any){
    event.stopPropagation();
    this._DataService.state.next(true);
    const dialogRef = this._MatDialog.open(AddPatientComponent, {
      data:patient
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.getAllPatients()
      }
      console.log('The dialog was closed');
    });
  }
  addPatient(){
    this._DataService.state.next(false)
    const dialogRef = this._MatDialog.open(AddPatientComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.getAllPatients()
      }
      console.log('The dialog was closed');
    });
  }
}
