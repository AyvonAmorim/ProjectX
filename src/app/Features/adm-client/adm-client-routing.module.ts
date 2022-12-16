import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmClientComponent } from './adm-client.component';

const routes: Routes = [
  { path: '', component: AdmClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmClientRoutingModule { }
