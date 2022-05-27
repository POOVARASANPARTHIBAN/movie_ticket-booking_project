import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { SigninService } from '../services/signin.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  value:boolean=true;
  object = [];
  signup!: FormGroup;
  constructor(private formbuilder:FormBuilder,private api:SigninService) { 

  }

  ngOnInit(): void {
    this.signup = this.formbuilder.group({
      username:['',Validators.required],
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required],
  
    })
  }

 

  formdatastore(Formvalue:NgForm){
      console.log(Formvalue);
      this.api.signindata(Formvalue).subscribe(data =>{
        console.log(data);
      })
    }
}
