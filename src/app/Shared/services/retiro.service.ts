import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {
	CreateRetiro,
	ResponseCreateRetiro,
} from '../../Core/models/retiro-models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class RetiroService {
	constructor(private http: HttpClient) {}

	public createRetiro(createRetiro: CreateRetiro) {
		const token = localStorage.getItem('token');
		const reqHeader = new HttpHeaders({ authorization: `Bearer ${token}` });

		return this.http.post<ResponseCreateRetiro>(
			environment.api_url + '/retiro',
			createRetiro,
			{ observe: 'response', headers: reqHeader }
		);
	}
}
