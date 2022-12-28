import { NgModule } from '@angular/core';
import { AdmClientRoutingModule } from './adm-client-routing.module';
import { AdmClientComponent } from './adm-client.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdmBaseComponent } from 'src/app/Core/components/administrator/adm-base/adm-base.component';
import { AdmSidebarComponent } from 'src/app/Core/components/administrator/adm-sidebar/adm-sidebar.component';
import { NavbarComponent } from 'src/app/Core/components/navbar/navbar.component';
import { FarmAdmComponent } from './farm-adm/farm-adm.component';
import { ColabAdmComponent } from './colab-adm/colab-adm.component';
import { CreateFarmAdmComponent } from './farm-adm/create-farm-adm/create-farm-adm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CreateColabAdmComponent } from './colab-adm/create-colab-adm/create-colab-adm.component';
import { ColabAdmPageComponent } from './colab-adm/colab-adm-page/colab-adm-page.component';

@NgModule({
  declarations: [
    AdmClientComponent,
    AdmSidebarComponent,
    NavbarComponent,
    AdmBaseComponent,
    FarmAdmComponent,
    ColabAdmComponent,
    CreateFarmAdmComponent,
    CreateColabAdmComponent,
    ColabAdmPageComponent,

  ],
  imports: [
    MatDialogModule,
    FormsModule,
    SharedModule,
    AdmClientRoutingModule,
  
  ]
})
export class AdmClientModule { }
