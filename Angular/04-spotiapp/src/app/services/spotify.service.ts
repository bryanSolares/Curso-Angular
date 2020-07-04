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
        'Bearer BQDTogj2hgfgJKAgZ1f6dTfTzHPqbVILnbMl0wc6T9mI8QVtOBCXUcIDYFG-s6WttsYIaZv3qxgg-1JkgRQ',
    });

    return this.http.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(idAutor: string){
    return this.getQuery(`artists/${idAutor}/top-tracks?country=es`)
    .pipe(map(data => data['tracks']));
  }
}
