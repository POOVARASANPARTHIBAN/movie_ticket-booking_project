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
    

  };
  alluser: any;
  alluserData: any;
  store: any = []
  obj: any;
  idValue: any;
  val: any;


  //   this.alluser = res;
  // this.alluser = this.alluser.rows;
  // this.alluserData = this.alluser.map((el: any) => el.doc);
  // console.log(this.alluserData[0]);
  // this.api.array(this.alluserData);
  // this.data.store(this.alluserData);

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.checkinForm = this.fb.group({
      movietitle: [this.movieRecord.movietitle],
      director: [this.movieRecord.director],
      producer: [this.movieRecord.producer],
      date: [this.movieRecord.date],
      staring: [this.movieRecord.staring],
      image: [this.movieRecord.image],
    
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

 
  storing(Formvalue: any) {
    console.log("from form", Formvalue);
    this.api.storeData(Formvalue).subscribe((data) => {
      console.log("data returned from server", data);

    })
  }

  get() {
    this.api.get("moviesdb").subscribe(res => {
      console.log(res);
      this.alluser = res;
      this.alluser = this.alluser.rows;
      this.alluserData = this.alluser.map((el: any) => el.doc);
    })
  }
}
