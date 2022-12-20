import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmBaseComponent } from 'src/app/Core/components/administrator/adm-base/adm-base.component';
import { AdmClientComponent } from './adm-client.component';
import { FarmAdmComponent } from './farm-adm/farm-adm.component';

const routes: Routes = [
  { path: '', component: AdmBaseComponent, children: [
    {path: '', component: AdmClientComponent},
    {path: 'farm', component: FarmAdmComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmClientRoutingModule { }
