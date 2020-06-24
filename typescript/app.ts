
//Funcion anónima autoinvocada.
(function () {
  function saludar(nombre: string) {
    console.table(`Hola ${nombre} como estás`);
  }

  const wolverine = { nombre: "Logan" };
  saludar(wolverine.nombre);
})();
