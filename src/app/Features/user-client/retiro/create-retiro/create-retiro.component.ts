import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Decoded } from 'src/app/Core/models/jwt-models';
import { CreateRetiro } from 'src/app/Core/models/retiro-models';
import { RetiroService } from 'src/app/Shared/services/retiro.service';
import jwt_decode from 'jwt-decode';
import { AlertService } from 'src/app/Shared/services/alert.service';

@Component({
	selector: 'app-create-retiro',
	templateUrl: './create-retiro.component.html',
	styleUrls: ['./create-retiro.component.css'],
})
export class CreateRetiroComponent {
	public createRetiro: CreateRetiro;
	public decoded: Decoded;

	constructor(
		public dialogRef: MatDialogRef<CreateRetiroComponent>,
		private retiroService: RetiroService,
		private alertSerVice: AlertService
	) {}

	ngOnInit() {
		this.createRetiro = new CreateRetiro();
		this.decoded = new Decoded();

		const token = localStorage.getItem('token');
		this.decoded = jwt_decode(token);
	}

	close(): void {
		this.dialogRef.close();
	}

	doCreateRetiro() {
		this.createRetiro.client_id = this.decoded.client_id;
		this.createRetiro.farm_id = localStorage.getItem('selectedOption');

		if (
			!this.createRetiro.client_id ||
			!this.createRetiro.farm_id ||
			!this.createRetiro.retName
		) {
			this.alertSerVice.warning('Insira todos os dados', '');
		} else {
			this.retiroService.createRetiro(this.createRetiro).subscribe(
				(response) => {
					const preToken = response.headers.get('Authorization')
					const token = preToken && preToken.split(" ")[1];
					localStorage.setItem('token', token)
					this.alertSerVice.successReload(response.body.message, response.body.name);
				},
				(error) => {
					this.alertSerVice.error(error.error.message, '');
					const preToken = error.headers.get('Authorization')
					const token = preToken && preToken.split(" ")[1];
					localStorage.setItem('token', token)
				}
			);
		}
	}
}
