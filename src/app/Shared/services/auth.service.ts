import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestLogin, ResponseLogin, TokenSend, ValidTokenResponse } from '../../Core/models/auth';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
	
  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(environment.api_url + '/auth/login', requestLogin)
  }

  public verifyToken(tokenSend: TokenSend): Observable<ValidTokenResponse>{
    return this.http.post<ValidTokenResponse>(environment.api_url + '/auth/login/verifica', tokenSend)
  }

}
