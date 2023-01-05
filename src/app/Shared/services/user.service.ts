import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessListForSelect, BaseResponse, CreateUser, ResponseCreateUser, UpdateAdmList, UserNoAdmList } from '../../Core/models/user-models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	public createUser(createUser: CreateUser): Observable<ResponseCreateUser> {
		let formData = new FormData();

		formData.append('nome', createUser.nome);
		formData.append('sobrenome', createUser.sobrenome);
		formData.append('email', createUser.email);
		formData.append('senha', createUser.senha);
		formData.append('AdmAccess', 'false');
		formData.append('client_id', createUser.client_id);
		formData.append('img', createUser.img, createUser.img.name);

		return this.http.post<ResponseCreateUser>(
			environment.api_url + '/user',
			formData
		);
	}

	public GetListNoAdm(client_id: string): Observable<UserNoAdmList> {
		return this.http.get<UserNoAdmList>(environment.api_url + '/user/' + client_id);
	}

	public updateAccessList(updateAdmList: UpdateAdmList): Observable<BaseResponse> {
		return this.http.post<BaseResponse>(environment.api_url + '/user/update', updateAdmList);
	}

	public getListAccess(user_id: string): Observable<AccessListForSelect> {
		return this.http.get<AccessListForSelect>(environment.api_url + '/user/list/' + user_id);
	}
}
