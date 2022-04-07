import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../services/moviesapi.service';
import { PopularTvApi } from '../classes/popular-tv-api-class';

@Component({
  selector: 'app-poptvs',
  templateUrl: './poptvs.component.html',
  styleUrls: ['./poptvs.component.css']
})
export class PoptvsComponent implements OnInit {

  constructor(private MoviesapiService: MoviesapiService) {}

  lstOfPopularTvs: PopularTvApi[] | any;



  ngOnInit(): void {

    // Popular Tv Shows Function

    this.MoviesapiService.getPopularTv().subscribe((data) => {
      this.lstOfPopularTvs = data.items;
    });


  }

}
