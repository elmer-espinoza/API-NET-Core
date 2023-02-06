import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {
    constructor(private http: HttpClient) { }

      createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic'); 
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Origin', 'Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');
      }

        public get(url:string) {
            let headers = new Headers();
            this.createAuthorizationHeader(headers);
            return this.http.get(url);
          //return this.http.get(url, {headers: headers});

        } 


    }

