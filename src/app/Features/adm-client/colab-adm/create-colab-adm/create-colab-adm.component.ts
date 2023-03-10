import { Component, ComponentFactoryResolver } from '@angular/core';
import { CreateUser } from '../../../../Core/models/user-models';
import { MatDialogRef } from '@angular/material/dialog';
import { Decoded } from 'src/app/Core/models/jwt-models';
import jwt_decode from 'jwt-decode';
import { AlertService } from '../../../../Shared/services/alert.service';
import { UserService } from '../../../../Shared/services/user.service';

@Component({
	selector: 'app-create-colab-adm',
	templateUrl: './create-colab-adm.component.html',
	styleUrls: ['./create-colab-adm.component.css'],
})
export class CreateColabAdmComponent {
	public createUser: CreateUser;
	public decode: Decoded;

	constructor(
		public dialogRef: MatDialogRef<CreateColabAdmComponent>,
		private alertService: AlertService,
		private userService: UserService
	) {}

	ngOnInit() {
		this.createUser = new CreateUser();
		this.decode = new Decoded();

		const token = localStorage.getItem('token');
		this.decode = jwt_decode(token);
	}

	close(): void {
		this.dialogRef.close();
	}

	fileEvent(event: any) {
		const selectedFile = <FileList>event.srcElement.files;
		this.createUser.img = selectedFile[0];
	}

	doCreateUser() {
		this.createUser.client_id = this.decode.client_id;

		if (
			!this.createUser.nome ||
			!this.createUser.sobrenome ||
			!this.createUser.email ||
			!this.createUser.senha ||
			!this.createUser.img
		) {
			this.alertService.warning('Insira todos os dados', '');
		} else {
			this.userService.createUser(this.createUser).subscribe(
				(data) => {
					this.alertService.success(
						'Acesso do Colaborador ' + data.user,
						'criado com sucesso'
					);
					this, this.dialogRef.close();
				},
				(error) => {
					this.alertService.error(error.error.message, '');
				}
			);
		}
	}
}
