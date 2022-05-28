import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  } from '@angular/forms';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  checkinForm!: FormGroup;

  movieRecord: any = {
    movietitle: '',
    director: '',
    producer: '',
    date: '',
    staring: '',
    image: '',
    type: '',
    
  };
  alluser: any;
  alluserData: any;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.checkinForm = this.fb.group({
      movietitle: [this.movieRecord.movietitle],
      director: [this.movieRecord.director],
      producer: [this.movieRecord.producer],
      date: [this.movieRecord.date],
      staring: [this.movieRecord.staring],
      image: [this.movieRecord.image],
      type: 'movie'
    
    });
  }

  ngOnInit(): void {
  }
  get movietitle() {
    return this.checkinForm.get('movietitle')!;
  }

  get director() {
    return this.checkinForm.get('director')!;
  }
  get producer() {
    return this.checkinForm.get('producer')!;
  }
  get date() {
    return this.checkinForm.get('date')!;
  }
  get staring() {
    return this.checkinForm.get('staring')!;
  }
  get image() {
    return this.checkinForm.get('image')!;
  }
  movies(Formvalue: any) {
    console.log("movie form", Formvalue);
    this.api.dbstore(Formvalue).subscribe((data) => {
      console.log("server movie data is returned", data);
    })
  }
}
