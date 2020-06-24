"use strict";
//Funcion anónima autoinvocada.
(function () {
    function saludar(nombre) {
        console.table("Hola " + nombre + " como est\u00E1s");
    }
    var wolverine = { nombre: "Logan" };
    saludar(wolverine.nombre);
})();
