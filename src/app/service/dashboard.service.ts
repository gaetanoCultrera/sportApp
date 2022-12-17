import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../modules/matchStats'

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  worldCupId:string;
  key:string;

  constructor(private httpClient: HttpClient) { 
    this.worldCupId="3072"
    this.key="c757e850-70dc-11ed-9db9-c16011d5dcb4"
  }


  getAllMatch(): Observable<RootObject>{
    return this.httpClient.get<RootObject>(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${this.key}&season_id=${this.worldCupId}`);
  }

}
