import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser, ResponseCreateUser } from '../../Core/models/user-models';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createUser(createUser: CreateUser): Observable<ResponseCreateUser> {
    let formData = new FormData();
    
    formData.append('nome', createUser.nome);
    formData.append('sobrenome', createUser.sobrenome);
    formData.append('email', createUser.email);
    formData.append('senha', createUser.senha);
    formData.append('AdmAccess', 'false');
    formData.append('client_id', createUser.client_id);
    formData.append('img', createUser.img, createUser.img.name)

    return this.http.post<ResponseCreateUser>(environment.api_url + '/user', formData)
  }
}
