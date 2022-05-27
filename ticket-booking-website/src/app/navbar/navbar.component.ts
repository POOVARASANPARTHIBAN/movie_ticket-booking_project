import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // allmovie: any;
  // allmovieData: any;
  // store: any = []
  // obj: any;
  // idValue: any;
  // val: any;
  constructor(private fb: FormBuilder, private api: ApiService,private route:Router) { }

  ngOnInit(): void {
  }
 get(){
   this.route.navigate(['movies'])
 }
}
