import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any = {};
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
      },
      (errorServicio) => {
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      }
    );

    this.loading = false;
  }
}
