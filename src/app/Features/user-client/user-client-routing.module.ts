import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBaseComponent } from 'src/app/Core/components/user/user-base/user-base.component';
import { PastosComponent } from './pastos/pastos.component';
import { RetiroComponent } from './retiro/retiro.component';

const routes: Routes = [
  {path: '', component: UserBaseComponent, children: [
    {path: 'retiro', component: RetiroComponent},
    {path: 'pastos', component: PastosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserClientRoutingModule { }
