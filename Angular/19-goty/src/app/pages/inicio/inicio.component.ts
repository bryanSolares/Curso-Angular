import { Component, OnInit } from '@angular/core';

import { Game } from '../../interfaces/interfaces';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  juegos: any[] = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore
      .collection('goty')
      .valueChanges()
      .pipe(
        map(
          (response: Game[]) =>
            response.map(({ name, votos }) => ({ name, value: votos }))
          // {return response.map(game => {
          //   return {
          //     name: game.name,
          //     value: game.votos
          //   }
          // })}
        )
      )
      .subscribe((juegos) => {
        // console.log(response);
        this.juegos = juegos;
      });
  }
}
