import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [],
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  regresarA: string;
  constructor(
    public _peliculaSevice: PeliculasService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.regresarA = params['page'];
      this._peliculaSevice.getPelicula(params['id']).subscribe((data) => {
        this.pelicula = data;
        console.log(data);
      });
    });
  }

  ngOnInit(): void {}
}
