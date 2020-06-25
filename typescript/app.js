"use strict";
() => {
    /*class Avenger {
          nombre:string;
          equipo:string;
          nombreReal:string;
          puedePelear:boolean;
          peleasGanadas:number;
  
          constructor(nombre:string, equipo:string, nombreReal:string,puedePelear:boolean,peleasGanadas:number){
              this.nombre = nombre;
              this.equipo = equipo;
              this.nombreReal = nombreReal;
              this.puedePelear = puedePelear;
              this.peleasGanadas = peleasGanadas;
          }
      }*/
    class Avenger {
        constructor(nombre, equipo, nombreReal, peleasGanadas = 0, puedePelear) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanadas;
            this.puedePelear = puedePelear;
        }
    }
    const antman = new Avenger("Antman", "Cap", "Steve");
    console.log(antman);
};
