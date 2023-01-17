import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
	PastoCreate,
	ResponseCreatePasto,
	ResponseListPasto,
} from '../../Core/models/pasto-models';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class PastoService {
	constructor(private http: HttpClient) {}

	public createPasto(pastoCreate: PastoCreate) {
		const token = localStorage.getItem('token');
		const reqHeader = new HttpHeaders({ authorization: `Bearer ${token}` });

		return this.http.post<ResponseCreatePasto>(
			environment.api_url + '/pasto',
			pastoCreate,
			{ observe: 'response', headers: reqHeader }
		);
	}

	public getListByRetiro(retiro_id: string) {
		const token = localStorage.getItem('token');
		const reqHeader = new HttpHeaders({ authorization: `Bearer ${token}` });

		return this.http.get<ResponseListPasto>(
			environment.api_url + '/pasto/byretiro/' + retiro_id,
			{ observe: 'response', headers: reqHeader }
		);
	}

	public getListByFarm(farm_id: string){
		const token = localStorage.getItem('token');
		const reqHeader = new HttpHeaders({ authorization: `Bearer ${token}` });

		return this.http.get<ResponseListPasto>(
			environment.api_url + '/pasto/byfarm/' + farm_id,
			{ observe: 'response', headers: reqHeader }
		);
	}
}
