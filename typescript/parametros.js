"use strict";
(function () {
    //obligatorio - opcional - por defecto
    function activar(quien, //obligatorio siempre al inicio
    momento, //opcional = ?
    objeto // por defecto siempre al final
    ) {
        if (objeto === void 0) { objeto = "batiseñal"; }
        console.log(quien + " activ\u00F3 la " + objeto);
    }
    activar("Bryan Solares", "hola");
})();
