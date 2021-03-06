import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
})
export class ListasComponent implements OnInit {
  @ViewChild('lista') lista: IonList;
  @Input() terminada = true;
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    if (!this.terminada) {
      this.router.navigate(['/tabs/tab1/agregar', lista.id]);
    } else {
      this.router.navigate(['/tabs/tab2/agregar', lista.id]);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async modificarNombre(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Modifica Nombre',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          },
        },
        {
          text: 'Modificar',
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          },
        },
      ],
    });

    alert.present();
  }
}
