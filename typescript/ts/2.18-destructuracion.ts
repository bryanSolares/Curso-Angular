(() => {
  const avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Pelea",
  };

  const extraer = ({ clave, nombre, poder }: any) => {
    //const { clave, nombre, poder } = avenger;
    console.log(clave, nombre, poder);
  };

  extraer(avenger);



  //arreglos destructurados
  const avengers:string[] = ["Capitán América","Thor","Ironman"];
  const [nombre1, nombre2, nombre3]= avengers; 
  const [, , hierro]= avengers; 
  console.log(nombre1, nombre2, nombre3)
  console.log(hierro)


  const extraeArr = ([a,b,c]:string[])=>{
    console.log(a, b, c)
  }

  extraeArr(avengers);

})();
