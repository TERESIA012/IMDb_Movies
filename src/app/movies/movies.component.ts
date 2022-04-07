import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../services/moviesapi.service';
import { HomeApiClass } from '../classes/home-api-class';
import { TheaterApiClass } from '../classes/theater-api-class';
import { PopularTvApi } from '../classes/popular-tv-api-class';
import { PopularMoviesApi } from '../classes/popular-movies-api-class';
import { Top250MoviesApi } from '../classes/top250-movies-api-class';
import { Top250TvShowsApi } from '../classes/top250-tv-shows-api-class';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  
  constructor(private MoviesapiService: MoviesapiService) {}

  lstUpComingMovies: HomeApiClass[] | any;
  lstOfThearters: TheaterApiClass[] | any;
  lstOfPopularTvs: PopularTvApi[] | any;
  lstOfPopularMovies: PopularMoviesApi[] | any;
  lstOfTop250Movies:  Top250MoviesApi[] | any;
  lstOfTop250TvShows:  Top250TvShowsApi[] | any;
  

  ngOnInit() {
    // Coming Movies Function

    this.MoviesapiService.getUpComingMovies().subscribe((data) => {
      this.lstUpComingMovies = data.items;
    });

    // Thearter Movies function

    this.MoviesapiService.getInTheaters().subscribe((data) => {
      this.lstOfThearters = data.items;
      // console.log(data)
    });

    // Popular Tv Shows Function

    this.MoviesapiService.getPopularTv().subscribe((data) => {
      this.lstOfPopularTvs = data.items;
    });

    // Popular  Movies Function

    this.MoviesapiService.getPopularMovies().subscribe((data) => {
      this.lstOfPopularMovies = data.items;
    });

    // Top 250 Movies

    this.MoviesapiService.getTop250Movies().subscribe((data) => {
      this.lstOfTop250Movies= data.items;
    });

    // Top 250 Tv Shows
    this.MoviesapiService.getTop250TvShows().subscribe((data) => {
      this.  lstOfTop250TvShows= data.items;
    });

  }
}
