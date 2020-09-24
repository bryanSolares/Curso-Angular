import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cartelera, Movie } from '../interfaces/cartelera-response';
import { MovieDetails } from '../interfaces/movie-detail';
import { Cast, CreditsMovie } from '../interfaces/credits-movie';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseURL = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  cargando = false;

  constructor(private http: HttpClient) {}

  get params(): { api_key: string; language: string; page: string } {
    return {
      api_key: environment.apiKey.toString(),
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }

  getCartelera(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    return this.http
      .get<Cartelera>(`${this.baseURL}/movie/now_playing`, {
        params: this.params,
      })
      .pipe(
        map((response) => response.results),
        tap(() => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
  }

  searchMovie(movie: string): Observable<Movie[]> {
    const params = { ...this.params, page: '1', query: movie };

    return this.http
      .get<Cartelera>(`${this.baseURL}/search/movie`, { params })
      .pipe(map((response) => response.results));
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getMovieDetail(id: string): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>(`${this.baseURL}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((error) => of(null)));
  }

  getCreditsMovie(id: string): Observable<Cast[]> {
    return this.http
      .get<CreditsMovie>(`${this.baseURL}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((response) => response.cast),
        catchError((error) => of([]))
      );
  }
}
