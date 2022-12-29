import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-colab-adm-page',
	templateUrl: './colab-adm-page.component.html',
	styleUrls: ['./colab-adm-page.component.css'],
})
export class ColabAdmPageComponent {
	constructor(
		public dialogRef: MatDialogRef<ColabAdmPageComponent>,
		@Inject(MAT_DIALOG_DATA) public client_id: string  
	) {}

  ngOnInit() {
    console.log(this.client_id)
  }
}
