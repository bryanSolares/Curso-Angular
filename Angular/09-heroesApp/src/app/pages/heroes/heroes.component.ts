import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  cargando = false;

  constructor(private heroesServcice: HeroesService) {}

  ngOnInit(): void {
    this.cargando = true;
    this.heroesServcice.obtenerHeroes().subscribe((response) => {
      this.heroes = response;
      this.cargando = false;
    });
  }

  borrarHeroe(heroe: HeroeModel, index: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Está seguro de querer eliminar al heroe ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((response) => {
      if (response.value) {
        this.heroes.splice(index, 1);
        this.heroesServcice.borrarHeroe(heroe.id).subscribe();
      }
    });
  }
}
