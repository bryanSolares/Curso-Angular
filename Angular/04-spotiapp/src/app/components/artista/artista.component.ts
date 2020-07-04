import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any = {};
  loadingArtist: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loadingArtist = true;
    this.activatedRoute.params.subscribe((params) => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id'])
    });
  }

  ngOnInit(): void {}

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService
      .getArtista(id)
      .subscribe((data: any) => {
        this.artista = data;
        this.loadingArtist = false;
      });
  }

  getTopTracks(idArtista: string){
    this.spotifyService.getTopTracks(idArtista)
    .subscribe(topTracks => {
        this.topTracks = topTracks;
    });
  }
}
