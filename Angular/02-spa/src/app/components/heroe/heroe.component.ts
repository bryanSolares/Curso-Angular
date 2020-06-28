import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activetedRoute: ActivatedRoute, private _heroeService: HeroesService) { 
    this.activetedRoute.params.subscribe(params => {
      const indice = params['Id'];
      this.heroe = _heroeService.getHeroe(indice);
    });
  }

  ngOnInit(): void {
  }

}
