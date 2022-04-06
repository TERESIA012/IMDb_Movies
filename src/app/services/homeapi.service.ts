import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HomeapiService {

  constructor(private httpClient:HttpClient){}

  baseUrl="https://imdb-api.com/en/API/"

  getUpComingMovies():Observable<any>{
    return this.httpClient.get(this.baseUrl+'ComingSoon/' + environment.apiKey)

  }
  getInTheaters():Observable<any>{
    return this.httpClient.get(this.baseUrl+ 'InTheaters/' + environment.apiKey)
  }

}
