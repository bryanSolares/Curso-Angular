import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Cartelera } from "../interfaces/cartelera-response";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCartelera(): Observable<Cartelera>{
    return this.http.get<Cartelera>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}&language=es-ES&page=1`);
  }


}
