import { Component } from '@angular/core';
import { decoded } from 'src/app/Core/models/jwt-models';
import jwt_decode from 'jwt-decode';
import { FarmService } from '../../../Shared/services/farm.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateFarmAdmComponent } from './create-farm-adm/create-farm-adm.component';

@Component({
	selector: 'app-farm-adm',
	templateUrl: './farm-adm.component.html',
	styleUrls: ['./farm-adm.component.css'],
})
export class FarmAdmComponent {
	public decoded: decoded;
	public farmList: any;

	constructor(private farmService: FarmService, public dialog: MatDialog) {}

	ngOnInit() {
		this.decoded = new decoded();

		const token = localStorage.getItem('token');
		this.decoded = jwt_decode(token);

		console.log(this.decoded.client_id);
		this.getList(this.decoded.client_id);
	}

	public getList(client_id: string) {
		this.farmService.getList(client_id).subscribe((data) => {
			this.farmList = data;
		});
	}

	public createFarm() {
		const dialogRef = this.dialog.open(CreateFarmAdmComponent, {
			width: '300px',
			height: '250px',
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.getList(this.decoded.client_id);
		});
	}
}
