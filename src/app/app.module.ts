import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeapiService } from './services/homeapi.service';
import { MoviesComponent } from './movies/movies.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TopmoviesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,

  ],
  providers: [HomeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
