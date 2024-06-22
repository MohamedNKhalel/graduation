import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"",loadComponent:()=>import ("./layouts/blanklayout/blanklayout.component").then((m)=>m.BlanklayoutComponent),canActivate:[authGuard],children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",loadComponent:()=>import("./components/home/home.component").then((m)=>m.HomeComponent),title:"Home"},
    {path:'patients',loadComponent:()=>import('./components/patients/patients.component').then((m)=>m.PatientsComponent),title:"Patients"},
    // {path:'add',loadComponent:()=>import('./components/add-patient/add-patient.component').then((m)=>m.AddPatientComponent)},
    {path:'details/:id',loadComponent:()=>import('./components/patient-details/patient-details.component').then((m)=>m.PatientDetailsComponent),title:"details"},
    {path:'profile',loadComponent:()=>import('./components/profile/profile.component').then((m)=>m.ProfileComponent),title:'Profile'},
    {path:'community',loadComponent:()=>import('./components/community/community.component').then((m)=>m.CommunityComponent),title:'Community'},
    {path:'records/:id',loadComponent:()=>import('./components/medical-records/medical-records.component').then((m)=>m.MedicalRecordsComponent),title:'Medical Records'}
    // {path:'addrecord',loadComponent:()=>import('./components/add-record/add-record.component').then((m)=>m.AddRecordComponent),title:'records'}
  ]},
  {path:"",loadComponent:()=>import("./layouts/authlayout/authlayout.component").then((m)=>m.AuthlayoutComponent),children:[
    {path:"",redirectTo:'landing',pathMatch:"full"},
    {path:"login",loadComponent:()=>import("./components/login/login.component").then((m)=>m.LoginComponent),title:"Login"},
    {path:"register",loadComponent:()=>import("./components/register/register.component").then((m)=>m.RegisterComponent),title:"Register"},
    {path:"verify-email",loadComponent:()=>import("./components/verify-email/verify-email.component").then((m)=>m.VerifyEmailComponent),title:"Verification"},
    {path:"landing",loadComponent:()=>import("./components/landing/landing.component").then((m)=>m.LandingComponent),title:"Home"}

    
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
