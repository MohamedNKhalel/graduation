import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _Renderer2:Renderer2){}
  @ViewChild('sideNav') sideNav!: ElementRef;
  // show:boolean = true;


  @Output() mynav = new EventEmitter<boolean>();
  
  layOutVar:boolean = false;
  
  changeLayout():void
  {
    
    this.mynav.emit(this.layOutVar = !this.layOutVar);
  }


  ngOnInit(): void {
    
  }
  logOut(){
    this._AuthService.signOut();
  }
  
}
