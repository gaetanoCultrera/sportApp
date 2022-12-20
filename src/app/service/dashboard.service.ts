import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject,Data } from '../modules/matchStats'
import {environment} from '../../environment/environment'

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  serieAId:string;
  key:string;

  constructor(private httpClient: HttpClient) { 
    this.serieAId="2100" // I'm using old code because the new one has problems, new code 3236
    this.key="c757e850-70dc-11ed-9db9-c16011d5dcb4"
  }


  getAllMatch(): Observable<RootObject>{
    return this.httpClient.get<RootObject>(`${environment.endPointMatchStats}${this.key}&season_id=${this.serieAId}`);
  }

}
