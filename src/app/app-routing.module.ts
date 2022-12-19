import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/guards/auth.guard';

const routes: Routes = [
	//Auth Required
	{
		path: 'client',
		loadChildren: () =>
			import('./Features/adm-client/adm-client.module').then(
				(m) => m.AdmClientModule
			), canActivate: [AuthGuard],
	},
  //Public Routes
	{
		path: 'login',
		loadChildren: () =>
			import('./Features/login/login.module').then((m) => m.LoginModule),
	},
  //Redirect
	{ path: '**', redirectTo: 'client' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
