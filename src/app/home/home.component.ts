import { Component, OnInit } from '@angular/core';
import { HomeapiService } from '../services/homeapi.service';
import { HomeApiClass } from '../classes/home-api-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HomeapiService:HomeapiService) {

   }
   lstUpComingMovies: HomeApiClass[] | any;

  ngOnInit(){
    this.HomeapiService.getUpComingMovies()
    .subscribe
    (
      data=>
      {
        this.lstUpComingMovies= data.items;
        console.log(data)

      }

    );
  }

}
