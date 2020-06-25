(function () {
  //obligatorio - opcional - por defecto
  function activar(
    quien: string, //obligatorio siempre al inicio
    momento?: string, //opcional = ?
    objeto: string = "batiseñal" // por defecto siempre al final
  ) {
    console.log(`${quien} activó la ${objeto}`);
  }

  activar("Bryan Solares", "hola");
})();
