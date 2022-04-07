import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../services/moviesapi.service';
import { Top250MoviesApi } from '../classes/top250-movies-api-class';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {

  constructor(private MoviesapiService: MoviesapiService) {}

  lstOfTop250Movies:  Top250MoviesApi[] | any;


  ngOnInit(): void {

     // Top 250 Movies

     this.MoviesapiService.getTop250Movies().subscribe((data) => {
      this. lstOfTop250Movies= data.items;
    });
    
  }

}
