import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateFarm, FarmList, ResponseCreateFarm } from 'src/app/Core/models/farm-models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  constructor(private http : HttpClient) { }

  public getList(client_id: string): Observable<FarmList> {
    return this.http.get<FarmList>(environment.api_url + '/farm/' + client_id)
  }

  public createFarm(createFarm: CreateFarm): Observable<ResponseCreateFarm> {
    return this.http.post<ResponseCreateFarm>(environment.api_url + '/farm', createFarm)
  }

}
