import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allmovie: any;
  allmovieData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get("moviesdb").subscribe(res => {
      console.log(res);
      this.allmovie = res;
      this.allmovie = this.allmovie.rows;
      this.allmovieData = this.allmovie.map((el: any) => el.doc);
    })
  }
 
}
