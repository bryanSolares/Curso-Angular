import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = environment.apiKey;
  private playlist = environment.uploads;
  private nextPageToken = '';

  constructor(private http: HttpClient) { }

  getVideos() {

    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('key', this.apiKey)
      .set('playlistId', this.playlist)
      .set('pageToken', this.nextPageToken)
      .set('maxResults', '10');

    return this.http.get<YoutubeResponse>(`${url}`, { params })
      .pipe(
        map(response => {
          this.nextPageToken = response.nextPageToken;
          return response.items;
        }),
        map(items => items.map(video => video.snippet))
      );
  }
}
