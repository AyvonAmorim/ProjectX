import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Features/login/login.component';

const routes: Routes = [
  //Redirect
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  //Public Routes
  { path: 'login', component: LoginComponent },
  //Auth Required
  {
    path: 'client',
    loadChildren: () =>
      import('./Features/adm-client/adm-client.module').then(
        (m) => m.AdmClientModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
