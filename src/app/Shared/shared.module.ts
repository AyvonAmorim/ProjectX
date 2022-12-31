import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule,
		MatFormFieldModule,
	],
	exports: [
		FontAwesomeModule,
		CommonModule,
		FormsModule,
		MatFormFieldModule,
		NgbNavModule,
	],
})
export class SharedModule {}
