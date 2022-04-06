import { Component, OnInit } from '@angular/core';
import { HomeapiService } from '../services/homeapi.service';
import { HomeApiClass } from '../classes/home-api-class';
import { TheaterApiClass } from '../classes/theater-api-class';
import { PopularTvApi } from '../classes/popular-tv-api-class';
import { PopularMoviesApi } from '../classes/popular-movies-api-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HomeapiService:HomeapiService) {

   }
   lstUpComingMovies: HomeApiClass[] | any;
   lstOfThearters: TheaterApiClass[] | any;
   lstOfPopularTvs: PopularTvApi[] | any;
   lstOfPopularMovies: PopularMoviesApi[] | any;

  ngOnInit(){

    // Coming Movies Function

    this.HomeapiService.getUpComingMovies()
    .subscribe
    (
      data=>
      {
        this.lstUpComingMovies= data.items;
       

      }

    );

    // Thearter Movies function

    this.HomeapiService.getInTheaters()
    .subscribe
    (
      data=>{
        this.lstOfThearters=data.items;
        console.log(data)
      }
    );

    // Popular Tv Shows Function

    this.HomeapiService.getPopularTv()
    .subscribe
    (
      data=>
      {
        this. lstOfPopularTvs= data.items;
       

      }

    );

    // Popular  Movies Function

    this.HomeapiService.getPopularMovies()
    .subscribe
    (
      data=>
      {
        this.lstOfPopularMovies= data.items;
       

      }

    );


  }

}
