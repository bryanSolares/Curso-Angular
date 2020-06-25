( ()=> {
  const miFuncion = function (a: string) {
    return a.toUpperCase();
  };

  const miFuncionF = (a: string) => a.toUpperCase();


    console.log(miFuncion("hola"))
    console.log(miFuncionF("hola"))

    const sumaN = function(a:number, b:number){ return a + b}
    const sumaF = (a:number,b:number) => a+b;

    const hulk = {
        nombre:"hulk",
        smash(){

            setTimeout(()=>{
                console.log(this.nombre + " smash!!")
            }, 1000);

        }
    }

    hulk.smash();

})();
