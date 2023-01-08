import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './Core/guards/auth.guard';
import { SharedModule } from './Shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [
		SharedModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgbModule,
		HttpClientModule,
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
