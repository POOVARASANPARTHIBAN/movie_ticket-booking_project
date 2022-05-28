import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  alltheatre: any;
  alltheatreData: any=[];

  constructor(private api:ApiService) { }
//   ngOnInit(): void {
//     this.api.gettheatre("moviesdb").subscribe(res => {
//       console.log(res);
//       this.alltheatre = res;
//       this.alltheatre = this.alltheatre.rows;
//       this.alltheatreData = this.alltheatre.map((el: any) => el.doc);
//     })
//   }
// }

ngOnInit(): void {
  this.api.gettheatre("moviesdb").subscribe(res => {
    console.log("theatre",res);
    this.alltheatre = res;
    this.alltheatre = this.alltheatre.docs;
    for (const iterator of this.alltheatre) {
      this.alltheatreData.push(iterator);
    }
    console.log(this.alltheatreData);
  })
}
}