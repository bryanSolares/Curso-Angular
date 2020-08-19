import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesKids: any;
  constructor(public _ps: PeliculasService) {
    this._ps.getMejoresDelAnio().subscribe((peliculas) => {
      this.cartelera = peliculas;
    });

    this._ps.getPopulares().subscribe((peliculas) => {
      this.populares = peliculas;
    });

    this._ps.getPopularesKids().subscribe((peliculas) => {
      this.popularesKids = peliculas;
    });
  }

  ngOnInit(): void {}
}
