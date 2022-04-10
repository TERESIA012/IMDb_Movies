import { Component, OnInit } from '@angular/core';
import { HomeapiService } from '../services/homeapi.service';
import { HomeApiClass } from '../classes/home-api-class';
import { TheaterApiClass } from '../classes/theater-api-class';
import { PopularTvApi } from '../classes/popular-tv-api';
import { PopularMoviesApi } from '../classes/popular-movies-api-class';
import { MovieTitle } from '../classes/movie-title';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private HomeapiService: HomeapiService) {}

  lstUpComingMovies: HomeApiClass[] | any;
  lstOfThearters: TheaterApiClass[] | any;
  lstOfPopularTvs: PopularTvApi[] | any;
  lstOfPopularMovies: PopularMoviesApi[] | any;
  lstOfMovieTitles:MovieTitle[] | any;
  

  movieTitle:"" | any;
  
  ngOnInit() {
    // Coming Movies Function

    this.HomeapiService.getUpComingMovies().subscribe((data) => {
      this.lstUpComingMovies = [];
      for (let i = 0; i < 8; i++) {
        this.lstUpComingMovies.push(data.items[i]);
      }
    });

    // Thearter Movies function

    this.HomeapiService.getInTheaters().subscribe((data) => {
      this.lstOfThearters = [];
      for (let i = 0; i < 8; i++) {
        this.lstOfThearters.push(data.items[i]);
      }
    });
    // Popular Tv Shows Function

    this.HomeapiService.getPopularTv().subscribe((data) => {
      this.lstOfPopularTvs = [];
      for (let i = 0; i < 10; i++) {
        this.lstOfPopularTvs.push(data.items[i]);
      }
    });

    // Popular  Movies Function

    this.HomeapiService.getPopularMovies().subscribe((data) => {
      this.lstOfPopularMovies = [];
      for (let i = 0; i < 10; i++) {
        this.lstOfPopularMovies.push(data.items[i]);
      }
    });


  }


    // Search Movie Function
    getMovie(){
      console.log(this.movieTitle)
      this.HomeapiService.searchMovie(this.movieTitle).subscribe(
        (data) =>{
          console.log(data)
          this.lstOfMovieTitles=data.results
          console.log(this.lstOfMovieTitles)
        }
      )
    }

}
