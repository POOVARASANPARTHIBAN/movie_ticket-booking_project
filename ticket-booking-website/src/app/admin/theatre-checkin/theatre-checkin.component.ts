import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-theatre-checkin',
  templateUrl: './theatre-checkin.component.html',
  styleUrls: ['./theatre-checkin.component.css']
})
export class TheatreCheckinComponent implements OnInit {
  theatreCheckin!: FormGroup;

  theatreRecord: any = {
    theatrename: '',
    location: '',
    performane: '',
    features: '',
    address: '',
    contact: '',
    type: '',
    
  };
  alltheatre: any;
  alltheatreData: any;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.theatreCheckin = this.fb.group({
      theatrename: [this.theatreRecord.theatrename],
      location: [this.theatreRecord.location],
      performane: [this.theatreRecord.performane],
      features: [this.theatreRecord.features],
      address: [this.theatreRecord.address],
      contact: [this.theatreRecord.contact],
      type: 'theatre',
    
    });
  }

  ngOnInit(): void {
  }
  get theatrename() {
    return this.theatreCheckin.get('theatrename')!;
  }

  get location() {
    return this.theatreCheckin.get('location')!;
  }
  get performane() {
    return this.theatreCheckin.get('performane')!;
  }
  get features() {
    return this.theatreCheckin.get('features')!;
  }
  get address() {
    return this.theatreCheckin.get('address')!;
  }
  get contact() {
    return this.theatreCheckin.get('contact')!;
  }
 
  theatre(Formvalue: any) {
    console.log("theatre form", Formvalue);
    this.api.dbstore(Formvalue).subscribe((data) => {
      console.log("server theatre data is returned", data);
    })
  }
}
