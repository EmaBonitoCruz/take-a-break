import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl:string = "";

  constructor(private http:HttpClient) {
    if(environment && environment.apiUrl){
      this.apiUrl = environment.apiUrl;
    }
  }

  getJoke():Observable<Joke>{
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Joke>(`${this.apiUrl}`, {headers:headers})
  }
}
