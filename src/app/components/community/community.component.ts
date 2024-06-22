import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit{
constructor(private _DataService:DataService){}
  diseases:any;
  endPoint!:string;

  ngOnInit(): void {
    this.getData();

  }
  getData(){
    this._DataService.newApi(this.endPoint).subscribe({
      next:data=>{
        console.log(data);
        this.diseases = data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
