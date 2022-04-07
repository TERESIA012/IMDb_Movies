import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../services/moviesapi.service';
import { PopularMoviesApi } from '../classes/popular-movies-api-class';

@Component({
  selector: 'app-popmovies',
  templateUrl: './popmovies.component.html',
  styleUrls: ['./popmovies.component.css']
})
export class PopmoviesComponent implements OnInit {

  constructor(private MoviesapiService: MoviesapiService) {}

  lstOfPopularMovies: PopularMoviesApi[] | any;



  ngOnInit(): void {

     // Popular  Movies Function

     this.MoviesapiService.getPopularMovies().subscribe((data) => {
      this.lstOfPopularMovies = data.items;
    });



  }

}
