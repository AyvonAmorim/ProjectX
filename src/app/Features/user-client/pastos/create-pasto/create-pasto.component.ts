import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PastoCreate } from 'src/app/Core/models/pasto-models';
import { PastoService } from 'src/app/Shared/services/pasto.service';
import { JwtService } from '../../../../Shared/services/jwt.service';
import { AlertService } from 'src/app/Shared/services/alert.service';

@Component({
	selector: 'app-create-pasto',
	templateUrl: './create-pasto.component.html',
	styleUrls: ['./create-pasto.component.css'],
})
export class CreatePastoComponent {
	public pastoCreate: PastoCreate;
	public decoded: any;

	constructor(
		public dialogRef: MatDialogRef<CreatePastoComponent>,
		private pastoService: PastoService,
		private jwtService: JwtService,
		private alertService: AlertService,
		@Inject(MAT_DIALOG_DATA) public ret_id: string
	) {}

	ngOnInit() {
		this.pastoCreate = new PastoCreate();
	}

	getIds() {
		this.decoded = this.jwtService.Decode(localStorage.getItem('token'));
		this.pastoCreate.client_id = this.decoded.client_id;
		this.pastoCreate.farm_id = localStorage.getItem('selectedOption');
		this.pastoCreate.retiro_id = this.ret_id;
	}

	CreatePasto() {
		this.getIds();

		if (!this.pastoCreate.PastoName) {
			this.alertService.warning('Insira todos os dados', '');
		} else {
			this.pastoService.createPasto(this.pastoCreate).subscribe(
				(response) => {
					const preToken = response.headers.get('Authorization');
					const token = preToken && preToken.split(' ')[1];
					localStorage.setItem('token', token);
					this.alertService.successReload(
						response.body.message,
						response.body.name
					);
				},
				(error) => {
					this.alertService.error(error.error.message, '');
					const preToken = error.headers.get('Authorization');
					const token = preToken && preToken.split(' ')[1];
					localStorage.setItem('token', token);
				}
			);
		}
	}
}
