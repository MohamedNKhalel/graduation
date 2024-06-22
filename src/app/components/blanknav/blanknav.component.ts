import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blanknav',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './blanknav.component.html',
  styleUrls: ['./blanknav.component.scss']
})
export class BlanknavComponent implements OnInit{
  constructor(private _AuthService:AuthService,private _Renderer2:Renderer2){}
  options:boolean=false;
  ngOnInit(): void {
    this.getUserData();
    
  }
  user:any;
  @ViewChild('navbar') navelement!:ElementRef
  @HostListener('window:scroll')
  onScroll(){
    if(scrollY > 100){
      this._Renderer2.addClass(this.navelement.nativeElement , "bg-body-tertiary")
    }
    else{
      this._Renderer2.removeClass(this.navelement.nativeElement , "bg-body-tertiary")
    }
  }
  toggleOptions(){
    this.options = !this.options;
  }
  signOut(){
    this._AuthService.signOut();
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
