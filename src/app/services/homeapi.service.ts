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
  getPopularTv():Observable<any>{
    return this.httpClient.get(this.baseUrl+ 'MostPopularTvs/' + environment.apiKey)
  }
  getPopularMovies():Observable<any>{
    return this.httpClient.get(this.baseUrl+ 'MostPopularMovies/' + environment.apiKey)
  }

// Serach api url
// https://imdb-api.com/en/API/SearchTitle/k_bo7qtua2/inception%202010

  searchMovie(movieTitle:any):Observable<any>{
    console.log(movieTitle)
    return this.httpClient.get(this.baseUrl+ 'SearchTitle/' + environment.apiKey + '/' + movieTitle)
  }

  



}
