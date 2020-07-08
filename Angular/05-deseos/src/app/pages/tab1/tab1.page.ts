import { Component } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Lista } from "src/app/models/lista.model";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
})
export class Tab1Page {
  constructor(
    private deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: "Nueva Lista",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
          },
        },
        {
          text: "Crear",
          handler: (data) => {
            if (data.titulo.length === 0) {
              return;
            }
            //Crear lista
            const listaId = this.deseosService.crearLista(data.titulo);
            this.router.navigate(["/tabs/tab1/agregar", listaId]);
          },
        },
      ],
    });

    alert.present();
  }
}
