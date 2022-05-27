import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { TheatreComponent } from './theatre/theatre.component';
import { MoviesComponent } from './movies/movies.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"theatre", component:TheatreComponent},
  {path:"movies", component:MoviesComponent},
  {path:"upcoming-movie", component:UpcomingMovieComponent},
  {path:"signup", component:SigninComponent},
  {path:"events", component:EventsComponent},
  {path:'movies',component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
