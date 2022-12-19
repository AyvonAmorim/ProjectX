import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
