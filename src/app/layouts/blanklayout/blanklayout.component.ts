import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlanknavComponent } from 'src/app/components/blanknav/blanknav.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';

@Component({
  selector: 'app-blanklayout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,BlanknavComponent,FooterComponent,SideNavComponent],
  templateUrl: './blanklayout.component.html',
  styleUrls: ['./blanklayout.component.scss']
})
export class BlanklayoutComponent {

  state!:boolean;
  changeLayoutClicked(data:boolean):void{
    this.state = data;
    console.log("clicked from layout",data);
  }
}
