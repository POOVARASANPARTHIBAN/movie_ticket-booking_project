import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allmovie: any;
  allmovieData: any=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getmovie("moviesdb").subscribe(res => {
      console.log("movies",res);
      this.allmovie = res;
      this.allmovie = this.allmovie.docs;
      for (const iterator of this.allmovie) {
        this.allmovieData.push(iterator);
      }
      console.log(this.allmovieData);
    })
  }
 
}
