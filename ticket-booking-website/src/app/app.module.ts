import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { TheatreComponent } from './theatre/theatre.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeatingComponent } from './seating/seating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowTimeComponent } from './show-time/show-time.component';
import { SeatsComponent } from './seats/seats.component';
import { CheckinComponent } from './admin/checkin/checkin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    MoviesComponent,
    FooterComponent,
    LocationComponent,
    TheatreComponent,
    EventsComponent,
    NavbarComponent,
    SeatingComponent,
    ShowTimeComponent,
    SeatsComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
