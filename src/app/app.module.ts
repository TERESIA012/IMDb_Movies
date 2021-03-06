import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeapiService } from './services/homeapi.service';
import { MoviesComponent } from './movies/movies.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { ToptvsComponent } from './toptvs/toptvs.component';
import { PopmoviesComponent } from './popmovies/popmovies.component';
import { PoptvsComponent } from './poptvs/poptvs.component';
import { TheaterComponent } from './theater/theater.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TopmoviesComponent,
    ToptvsComponent,
    PopmoviesComponent,
    PoptvsComponent,
    TheaterComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,

  ],
  providers: [HomeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
