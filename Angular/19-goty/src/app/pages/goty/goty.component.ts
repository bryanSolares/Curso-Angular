import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";

import { Game } from "../../interfaces/interfaces";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe(games => {
      console.log(games);
      this.juegos = games;
    });
  }

  votar(id: number){
    this.gameService.votarJuego(id).subscribe((response: {ok:boolean, message:string}) => {
      if (response.ok) {
        Swal.fire({
          title: 'Gracias',
          text: response.message,
          icon: 'success'
        })
      }else{
        Swal.fire({
          title: 'Oooppppsss!',
          text: response.message,
          icon: 'error'
        })
      }
    });
  }

}
