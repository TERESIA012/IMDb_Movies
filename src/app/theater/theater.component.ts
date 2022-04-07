import { Component, OnInit } from '@angular/core';
import { MoviesapiService } from '../services/moviesapi.service';
import { TheaterApiClass } from '../classes/theater-api-class';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {


  constructor(private MoviesapiService: MoviesapiService) {}


  lstOfThearters: TheaterApiClass[] | any;



  ngOnInit(): void {
    // Thearter Movies function

    this.MoviesapiService.getInTheaters().subscribe((data) => {
      this.lstOfThearters = data.items;
      // console.log(data)
    });


  }

}
