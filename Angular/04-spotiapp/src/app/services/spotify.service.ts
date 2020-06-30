import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio iniciado');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBjnRXm4jN9yTvM4mJdK9zk8B4CJHrk-h2MMlmOfgdv3Y25GXEeJZwNcHlb1FPxx7zKqo0E_wpD75_o5CQ',
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
