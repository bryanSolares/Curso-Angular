import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio iniciado');
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC6NibP0_TUvaXCkAzymjgF4BbkiTHAnptUTn2OOfcPAF8OjILw5dhA_YX8c2n7jCdquvWZAi2yWxHxReg',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map((data) => data['albums'].items));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map((data) => data['artists'].items));
  }
}
