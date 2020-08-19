import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private apiKey: string = 'fe67bda7b02bb6b8b3b59457e29221bb';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];

  constructor(private http: HttpClient) {}

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear}-${
      desde.getMonth() + 1
    }-${desde.getDay()}`;
    let hastaStr = `${hasta.getFullYear}-${
      hasta.getMonth() + 1
    }-${hasta.getDay()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es`;
    return this.convertirData(url);
  }

  getMejoresDelAnio() {
    let url = `${this.urlMoviedb}/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`;
    return this.convertirData(url);
  }

  getPopularesKids() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.convertirData(url);
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.convertirData(url);
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url).pipe(
      map((data: any) => {
        this.peliculas = data.results;
        return data.results;
      })
    );
  }

  getPelicula(id: string) {
    let url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apiKey}&language=es`;
    return this.http.get(url);
  }

  private convertirData(url: string) {
    return this.http.get(url).pipe(map((data: any) => data.results));
  }
}
