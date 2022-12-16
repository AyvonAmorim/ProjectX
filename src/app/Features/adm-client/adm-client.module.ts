import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmClientRoutingModule } from './adm-client-routing.module';
import { AdmClientComponent } from './adm-client.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdmBaseComponent } from 'src/app/Core/components/administrator/adm-base/adm-base.component';
import { AdmSidebarComponent } from 'src/app/Core/components/administrator/adm-sidebar/adm-sidebar.component';
import { NavbarComponent } from 'src/app/Core/components/navbar/navbar.component';


@NgModule({
  declarations: [
    AdmClientComponent,
    AdmSidebarComponent,
    NavbarComponent,
    AdmBaseComponent,
  ],
  imports: [
    SharedModule,
    AdmClientRoutingModule,  
  ]
})
export class AdmClientModule { }
