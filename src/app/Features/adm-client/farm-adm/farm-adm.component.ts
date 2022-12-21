import { Component } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { decoded } from 'src/app/Core/models/jwt';
import jwt_decode from 'jwt-decode';

@Component({
	selector: 'app-farm-adm',
	templateUrl: './farm-adm.component.html',
	styleUrls: ['./farm-adm.component.css'],
})
export class FarmAdmComponent {
	public decoded: decoded;
	public faPlus = faSquarePlus;

	ngOnInit() {
		this.decoded = new decoded();

		const token = localStorage.getItem('token');
		this.decoded = jwt_decode(token);
	}
}
