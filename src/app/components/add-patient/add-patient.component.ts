import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { Patient } from 'src/app/interfaces/patient';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [MatRadioModule,CommonModule,RouterLink,MatFormFieldModule, MatInputModule, ReactiveFormsModule,FormsModule,MatSelectModule,MatSnackBarModule],
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
  providers:[]
})

export class AddPatientComponent implements OnInit{
  constructor(private _MatSnackBar:MatSnackBar,private _DataService:DataService,public _MatDialogRef: MatDialogRef<AddPatientComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private _ToastrService:ToastrService){}
  disease:any;
  state:any ;
  
  ngOnInit(): void {
    console.log(this.data);
    
    this._DataService.diseaseName.subscribe({
      next:data=>{
        console.log(this._DataService.diseaseName.getValue())
        this.createPatientForm.get('disease')?.setValue(this._DataService.diseaseName.getValue());
      },
      error:err=>{
        console.log(err);
      }
    })   
    this._DataService.state.subscribe({
      next:data=>{
        this.state =  data;
      }
    }) 
  }
  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
  createPatientForm:FormGroup= new FormGroup({
    id:new FormControl(''),
    name:new FormControl( this.data?.name ||'',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    gender:new FormControl( this.data?.gender ||'',[Validators.required]),
    birthDate:new FormControl( this.data?.birthDate ||'',[Validators.required]),
    email:new FormControl( this.data?.email ||'',[Validators.email]),
    phone:new FormControl( this.data?.phone ||'',[Validators.required,Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
    medicalRecords:new FormControl(),
    rate:new FormControl()
  })
  addPatient(){
    this._DataService.addPatient(this.createPatientForm.value);
    this._MatDialogRef.close(true);
    this._ToastrService.success('patient added Successfully','Done');
  }
  close(){
    this._MatDialogRef.close(true)
  }

  updatePatient(){
    console.log(this.createPatientForm.value);
    this._DataService.updatePatient().doc(this.data?.id).update({
      name:this.createPatientForm.get('name')?.value,
      gender:this.createPatientForm.get('gender')?.value,
      birthDate:this.createPatientForm.get('birthDate')?.value,
      email:this.createPatientForm.get('email')?.value,
      phone:this.createPatientForm.get('phone')?.value,
    })
    this._MatDialogRef.close(true);
    this._ToastrService.success('patient Updated Successfully','Done');
  }
}
