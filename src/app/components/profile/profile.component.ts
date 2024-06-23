import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { finalize } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,SharedModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  constructor(private _AuthService:AuthService,private _AngularFireAuth:AngularFireAuth,private _AngularFireStorage:AngularFireStorage,private _ToastrService:ToastrService){}
  user!:any;
  email:string = ''
  acivate:boolean= true;
  newName:string =''
  showInfo:boolean = false;
  files:File [] =[]
  selectedPhoto:any
  photoUrl:string =''
  showEditPhoto:boolean = false;
  photoLoadingFlag:boolean = false;
  disableButton:boolean = true;


  toggleShowPhoto(){
    this.showEditPhoto = !this.showEditPhoto
  }

  onSelect(event:any){
    console.log(event);
    this.files.push(event.addedFiles[0])
    this.selectedPhoto = event.addedFiles[0]
    this.disableButton = false
  }
  onRemove(event:any){
    this.files.splice(this.files.indexOf(event), 1);
    this.disableButton = true

  }

  async uploadPhoto(file: File): Promise<string> {
    this.photoLoadingFlag=true;
    const user = await this._AngularFireAuth.currentUser;
    if (!user) {
      throw new Error('No user is currently logged in.');
    }

    const filePath = `users/${user.uid}/profile.jpg`;
    const fileRef = this._AngularFireStorage.ref(filePath);
    const task = await this._AngularFireStorage.upload(filePath, file);

    return await fileRef.getDownloadURL().toPromise();
  }


  async sendImage(){
    if(this.selectedPhoto){
      this.photoUrl = await this.uploadPhoto(this.selectedPhoto)
      const user = await this._AngularFireAuth.currentUser;
      if(user){
        user.updateProfile({
          photoURL:this.photoUrl
        })
        this.photoLoadingFlag = false;
        this.showEditPhoto = false;
        this.files =[]
        this._ToastrService.success("profile photo updated successfully")
      }
      console.log("done");
      console.log(this.photoUrl);
    }
    else{
      console.log("erroror");
      this._ToastrService.error("can't update profile photo right now")
      
    }
  }
  ngOnInit(): void {
      this.getUserData()      
  }
  toggleInfo(){
    this.showInfo = !this.showInfo
  }
  getUserData(){
    this._AuthService.getUserInfo().subscribe({
      next:data=>{
        console.log(data);
        this.user = data;
        this.newName=this.user.displayName
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  editName(){
    this.acivate=true;
    this.updateName(this.newName)
  }

  async updateName(newName:string){
    const user = await this._AngularFireAuth.currentUser
    if(user){
      user.updateProfile({
        displayName:newName
        
      })
      console.log('name updated')
    }
    else{
      throw new Error("failed updating name")
    }
  }

  stop(event:any){
    event.stopPropagation()
  }
}
