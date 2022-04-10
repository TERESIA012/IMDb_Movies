import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { ToptvsComponent } from './toptvs/toptvs.component';
import { PopmoviesComponent } from './popmovies/popmovies.component';
import { PoptvsComponent } from './poptvs/poptvs.component';
import { TheaterComponent } from './theater/theater.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'movies',component:MoviesComponent },
  { path:'topmovies',component:TopmoviesComponent },
  { path:'toptv',component:ToptvsComponent },
  { path:'popularmovies',component:PopmoviesComponent },
  { path:'populartv',component:PoptvsComponent },
  { path:'thearter',component:TheaterComponent },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
