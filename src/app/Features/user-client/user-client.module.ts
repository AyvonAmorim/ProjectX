import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserClientRoutingModule } from './user-client-routing.module';
import { UserClientComponent } from './user-client.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { UserBaseComponent } from 'src/app/Core/components/user/user-base/user-base.component';
import { UserSidebarComponent } from 'src/app/Core/components/user/user-sidebar/user-sidebar.component';
import { UserNavbarComponent } from 'src/app/Core/components/user/user-navbar/user-navbar.component';
import { RetiroComponent } from './retiro/retiro.component';
import { CreateRetiroComponent } from './retiro/create-retiro/create-retiro.component';
import { PastosComponent } from './pastos/pastos.component';
import { CreatePastoComponent } from './pastos/create-pasto/create-pasto.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    UserClientComponent,
    UserBaseComponent,
    UserSidebarComponent,
    UserNavbarComponent,
    RetiroComponent,
    CreateRetiroComponent,
    PastosComponent,
    CreatePastoComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserClientRoutingModule,
    MatPaginatorModule,
		MatTableModule,
		MatSortModule,
  ]
})
export class UserClientModule { }
