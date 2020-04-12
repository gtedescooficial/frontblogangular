import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import GLOBAL  from './global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
url = GLOBAL.url;

  constructor( 
    private _http: HttpClient,
  
  ) { 

  }

  getRecents(): Observable<any>{
   return this._http.get(`${this.url}posts`).pipe(
     map( (resp: any) =>{
       return resp.data['data']
     })
   )


  }
}
