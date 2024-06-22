import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { GeminiService } from 'src/app/services/gemini.service.spec';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterLink,MatFormFieldModule, MatInputModule, ReactiveFormsModule,FormsModule,MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private _AuthService:AuthService){}
  user:any;
  email:string = ''
  ngOnInit(): void {
      this.getUserData()
  }
  
  getUserData(){
    this._AuthService.getUserInfo().subscribe({
      next:data=>{
        console.log(data);
        this.user = data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
