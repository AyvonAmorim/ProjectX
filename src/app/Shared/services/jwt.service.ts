import { Injectable } from '@angular/core';
import { Decoded } from 'src/app/Core/models/jwt-models';
import { Observable } from 'rxjs';
import jwt_decode  from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  public decoded : Decoded

  constructor() { }

  public Decode(token: any){
    this.decoded = jwt_decode(token);
    return this.decoded;
  }
}
