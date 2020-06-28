import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _heroesServicio: HeroesService, private router:Router) {}

  heroes: Heroe[];

  ngOnInit(): void {
    this.heroes = this._heroesServicio.getHeroes();
  }

  verHeroe(indice: number){
    this.router.navigate(['/heroe', indice]);
  }
}

