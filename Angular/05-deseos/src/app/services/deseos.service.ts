import { Lista } from "./../models/lista.model";
import { Injectable } from "@angular/core";
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: Lista[] = [];
  constructor() {
    this.cargarStorage();
  }

  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  obtenerLista(idLista: string | number): Lista {
    idLista = Number(idLista);
    return this.listas.find((listaData) => listaData.id === idLista);
  }

  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }

  borrarLista(lista: Lista){
    this.listas = this.listas.filter(elementos => elementos.id !== lista.id);
    this.guardarStorage();
  }
}
