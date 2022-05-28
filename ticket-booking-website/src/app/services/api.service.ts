import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  temp: any;
  pusharray: any = [];
  url = 'https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName = 'apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p';
  dbPassword = '58de0ca6ebd4250a97d0a7d300191f68';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

  constructor(private http: HttpClient) { }
  dbstore(formData: any) {
    console.log("From api", formData);
    return this.http.post<any>('http://localhost:8000/postdata/', formData)
  }
  getmovie(db: any): Observable<{}> {
    const url = this.url + db + "/_find";
    let data = {
      "selector":{
        type:"movie"
      }
    }
    return this.http.post(url,data,this.httpOptions)
  }
    gettheatre(db: any): Observable<{}> {
      const url = this.url + db + "/_find";
      let data = {
        "selector":{
          type:"theatre"
        }
      }
      return this.http.post(url,data,this.httpOptions)
  }
}
