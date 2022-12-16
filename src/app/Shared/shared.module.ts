import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../Core/components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    FontAwesomeModule,
    CommonModule,
  ]
})
export class SharedModule { }
