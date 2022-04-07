import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../services/moviesapi.service';
import { Top250TvShowsApi } from '../classes/top250-tv-shows-api-class';

@Component({
  selector: 'app-toptvs',
  templateUrl: './toptvs.component.html',
  styleUrls: ['./toptvs.component.css']
})
export class ToptvsComponent implements OnInit {

  constructor(private MoviesapiService: MoviesapiService) {}

  lstOfTop250TvShows:  Top250TvShowsApi[] | any;

  ngOnInit(): void {
    
    // Top 250 Tv Shows
    this.MoviesapiService.getTop250TvShows().subscribe((data) => {
      this.  lstOfTop250TvShows= data.items;
    });

    



  }

}
