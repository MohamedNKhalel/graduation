import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{
  constructor(private _Renderer2:Renderer2){}
  @ViewChild('navbar') navelement!: ElementRef;
  @HostListener("window:scroll")
  onscroll(){
    this.animateCards();
    if(window.scrollY>=1000){
      $(".my-card").slideDown(2000)
    }
    else{
      $(".my-card").slideUp(1000);
    }
  }

  ngOnInit(): void {
    
    $(document).ready(()=>{
      $(".text").slideDown(2000)
      console.log("ready");
    })
  }
  animateCards(){
    if(window.scrollY>450){
      $(".about-content").slideDown(1000)
    }
    else{
      $(".about-content").slideUp(1000)
    }
  }
}
