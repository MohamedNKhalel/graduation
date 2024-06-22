import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { GenderSearchPipe } from 'src/app/pipes/gender-search.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PhoneSearchPipe } from 'src/app/pipes/phone-search.pipe';


@NgModule({
  declarations: [SearchPipe,GenderSearchPipe,PhoneSearchPipe],
  imports: [
    CommonModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,SweetAlert2Module.forRoot()
  ],
  exports:[PhoneSearchPipe,SearchPipe,GenderSearchPipe,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,SweetAlert2Module]
})
export class SharedModule { }
