import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-heroesfiltrados',
  templateUrl: './heroesfiltrados.component.html',
  styles: [
  ]
})
export class HeroesfiltradosComponent implements OnInit {

  heroes: Heroe[];
  termino:string;

  constructor(private _heroesService: HeroesService, private activedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(indice: number){
    this.router.navigate(['/heroe', indice]);
  }

}
