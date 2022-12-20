import { NgModule } from '@angular/core';

import { AdmClientRoutingModule } from './adm-client-routing.module';
import { AdmClientComponent } from './adm-client.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdmBaseComponent } from 'src/app/Core/components/administrator/adm-base/adm-base.component';
import { AdmSidebarComponent } from 'src/app/Core/components/administrator/adm-sidebar/adm-sidebar.component';
import { NavbarComponent } from 'src/app/Core/components/navbar/navbar.component';
import { FarmAdmComponent } from './farm-adm/farm-adm.component';
import { ColabAdmComponent } from './colab-adm/colab-adm.component';


@NgModule({
  declarations: [
    AdmClientComponent,
    AdmSidebarComponent,
    NavbarComponent,
    AdmBaseComponent,
    FarmAdmComponent,
    ColabAdmComponent,
  ],
  imports: [
    SharedModule,
    AdmClientRoutingModule,  
  ]
})
export class AdmClientModule { }
