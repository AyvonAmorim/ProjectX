import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateColabAdmComponent } from './create-colab-adm/create-colab-adm.component';
import { UserService } from '../../../Shared/services/user.service';
import { Decoded } from 'src/app/Core/models/jwt-models';
import jwt_decode from 'jwt-decode';
import { ColabAdmPageComponent } from './colab-adm-page/colab-adm-page.component';

@Component({
	selector: 'app-colab-adm',
	templateUrl: './colab-adm.component.html',
	styleUrls: ['./colab-adm.component.css'],
})
export class ColabAdmComponent {
	public UserList: any;
	public decoded: Decoded;

	constructor(public dialog: MatDialog, private userService: UserService) {}

	ngOnInit() {
		this.decoded = new Decoded();

		const token = localStorage.getItem('token');
		this.decoded = jwt_decode(token);

		this.GetList(this.decoded.client_id);
	}

	public createColab() {
		const dialogRef = this.dialog.open(CreateColabAdmComponent, {
			width: '350px',
			height: 'auto',
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.GetList(this.decoded.client_id);
		});
	}

	private GetList(client_id: string) {
		this.userService.GetListNoAdm(client_id).subscribe((data) => {
			this.UserList = data;
		});
	}

	public openColabAdm() {
		const dialogRef = this.dialog.open(ColabAdmPageComponent, {
			width: '350px',
			height: 'auto',
		});
	}

	UpperCase(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
}
