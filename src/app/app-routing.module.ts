import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';
import { ToptvsComponent } from './toptvs/toptvs.component';
import { PopmoviesComponent } from './popmovies/popmovies.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'',component:MoviesComponent },
  { path:'',component:TopmoviesComponent },
  { path:'',component:ToptvsComponent },
  { path:'',component:PopmoviesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
