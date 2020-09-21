import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados(){
    if (this.juegos.length > 0) {
      return of(this.juegos);
    }else{
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
      .pipe(tap(juegos => this.juegos = juegos));
    }
  }

  votarJuego(id: number){
    return this.http.post(`${environment.url}/api/goty/${id}`,{})
    .pipe(
      catchError(error => {
        return of(error.error)
      })
    )
  }


}
