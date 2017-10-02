import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


import { UserFormComponent } from "./form/userForm.component";
import { CardComponent }          from './card/card.component';

@NgModule({
  imports: [ ReactiveFormsModule,CommonModule],
  declarations: [UserFormComponent,CardComponent],
  exports: [UserFormComponent,CardComponent]
})
export class UserFormModule { }
