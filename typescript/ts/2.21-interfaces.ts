(()=>{
    
    interface Xmen {
        nombre:string;
        edad:number
        poder?:string;
      }
      
      function saludar(xmen:Xmen) {
        console.table(`Hola ${xmen.nombre} como estás`);
      }
    
      function regresarCuartel(xmen:Xmen) {
        console.table(`Hola ${xmen.nombre} regresa al cuartel`);
      }
    
      const wolverine:Xmen = { nombre: "Logan", edad: 35 };
      saludar(wolverine);
      regresarCuartel(wolverine)
    
})()