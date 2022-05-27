import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { 

  }
  signindata(formobject:any){
    return this.http.post('http://localhost:8000/postquery/',formobject);
}
}
