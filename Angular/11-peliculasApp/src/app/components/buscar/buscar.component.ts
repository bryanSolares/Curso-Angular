import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  buscar: string = '';

  constructor(
    public _peliculasService: PeliculasService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(params => {
      if (params) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    })
  }

  ngOnInit(): void {}

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }

    this._peliculasService
      .buscarPelicula(this.buscar)
      .subscribe((data) => console.log(data));
  }
}
