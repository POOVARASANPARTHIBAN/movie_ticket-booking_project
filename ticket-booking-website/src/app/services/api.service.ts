import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Urlpwd = 'https://apikey-v2-15a2mog1stn0kv0gjnidlq2eoth4psp58f8ov9zs42i6:aabcfd48d07fe38f4760f6cd11b83b4a@b4af4ef2-55e1-4a9b-9b02-8168e5964652-bluemix.cloudantnosqldb.appdomain.cloud/'
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
  storeData(formData: any) {
    console.log("From api", formData);
    return this.http.post<any>('http://localhost:8000/postdata/', formData)
  }
  get(db: string): Observable<{}> {
    const url = this.url + db + '/_all_docs?include_docs=true';
    return this.http.get(url, this.httpOptions)

    // }
    // getDocsByID(db: string, id: string): Observable<{}> {
    //   const url = this.url + db + '/' + id;
    //   return this.http.get(url, this.httpOptions)
    // }





  }
}
