import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { TheatreComponent } from './theatre/theatre.component';
import { MoviesComponent } from './movies/movies.component';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';
import { EventsComponent } from './events/events.component';
import { AdminLginComponent } from './admin/admin-lgin/admin-lgin.component';
import { CheckinComponent } from './admin/checkin/checkin.component';
import { TheatreCheckinComponent } from './admin/theatre-checkin/theatre-checkin.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"theatre", component:TheatreComponent},
  {path:"upcoming-movie", component:UpcomingMovieComponent},
  {path:"signup", component:SigninComponent},
  {path:"events", component:EventsComponent},
  {path:'movies',component:MoviesComponent},
  {path:'theatre',component:TheatreComponent},
  {path:'admin-lgin',component:AdminLginComponent},
  {path:'checkin', component:CheckinComponent},
  {path:'theatre-checkin', component:TheatreCheckinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
