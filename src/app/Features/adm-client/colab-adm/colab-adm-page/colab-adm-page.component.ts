import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Decoded } from 'src/app/Core/models/jwt-models';
import { FarmService } from '../../../../Shared/services/farm.service';
import jwt_decode from 'jwt-decode';
import { UpdateAdmList } from 'src/app/Core/models/user-models';

@Component({
	selector: 'app-colab-adm-page',
	templateUrl: './colab-adm-page.component.html',
	styleUrls: ['./colab-adm-page.component.css'],
})
export class ColabAdmPageComponent {
	public farmList: any;
	public decoded: Decoded;
	public activeFarms: any;
	public enabled = true;
	public updateAdmList: UpdateAdmList;

	constructor(
		public dialogRef: MatDialogRef<ColabAdmPageComponent>,
		@Inject(MAT_DIALOG_DATA) public id: any,
		private farmService: FarmService
	) {}

	ngOnInit(): void {
		this.updateAdmList = new UpdateAdmList();
    this.updateAdmList.ActiveFarms.splice(0,0);

		this.decoded = new Decoded();
		const token = localStorage.getItem('token');
		this.decoded = jwt_decode(token);

		this.getList();

		this.getActiveFarms();
	}

	private getList() {
		this.farmService.getList(this.decoded.client_id).subscribe((data) => {
			this.farmList = data;
		});
	}

	getAccessValeuSim(farm_id: string, index: any) {
		if (this.activeFarms.includes(farm_id)) {
			return true;
		} else {
			return false;
		}
	}

	public getAccessValeuNao(farm_id: string) {
		if (this.activeFarms.includes(farm_id)) {
			return false;
		} else {
			return true;
		}
	}

	getActiveFarms() {
		this.farmService.requestActiveFarms(this.id).subscribe((data) => {
			this.activeFarms = data;
		});
	}

	EnabledSave() {
		this.enabled = false;
	}

	SimEvent(event: any, index: any) {
		this.activeFarms[index] = event.currentTarget.value;

	}

	NaoEvent(index: any) {
		delete this.activeFarms[index];
	}

  save(){
    this.updateAdmList.ActiveFarms = this.activeFarms;

  }
}
