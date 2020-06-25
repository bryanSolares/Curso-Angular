/*(() => {
  console.log("Inicio");

  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Se terminó el timer");
    }, 1000);
  });

  prom1
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.warn(error));

  console.log("Fin");
})();*/

(() => {
  const retirarDinero = (montoRetirar: number):Promise<number> => {
    let dineroActual = 1000;

    return new Promise((resolve, reject) => {
      if (montoRetirar > dineroActual) {
        reject("No hay suficientes fondos");
      } else {
        dineroActual -= montoRetirar;
        resolve(dineroActual);
      }
    });
  };

  retirarDinero(600)
  .then(res => console.log(res))
  .catch(console.warn);


})();
