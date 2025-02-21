//let moduloConvertidorMonetario;
let moduloInformacionDolarFix
let moduloPacientes;
let modulo2;
let modulo3;
/*
function cargarModuloConvertidorMonetario(){

    fetch("../views/moduloPesoDolar.html").then(
        function(response) {
            return response.text();
        }
    ).then(
        function(myHtml) {
            document.getElementById("contenedorPrincipal").innerHTML = myHtml;
            import ("./moduloPesoDolar.js").then(
                function(controller) {
                    moduloConvertidorMonetario = controller;
                }
            )
        }
    )
};*/

function cargarModuloDolarFIX() {
    fetch("../views/moduloPesoDolar.html").then(
        function (response) {
            return response.text();
        }
    ).then(
        function (myHtml) {
            document.getElementById("contenedorPrincipal").innerHTML = myHtml;

            import("./moduloPesoDolar.js").then(
                function (controller) {
                    moduloInformacionDolarFix = controller;
                    asignarEventosModuloDolar();
                }
            );
        }
    );
}

function asignarEventosModuloDolar() {
    if (moduloInformacionDolarFix) {
        document.getElementById("botonTipoCambio").onclick = moduloInformacionDolarFix.obtenerInformacionDolar;
        document.getElementById("botonConvertirPesos").onclick = moduloInformacionDolarFix.convertirADolares;
        document.getElementById("botonConvertirDolares").onclick = moduloInformacionDolarFix.convertirAPesos;
        console.log("Eventos de conversión asignados correctamente.");
    } else {
        console.error("Error: moduloInformacionDolarFix no está cargado.");
    }
}



function cargarModuloPacientes() {
    //DEFINIR PETICION A RECURSO DEL SERVIDOR
    fetch("../views/moduloPacientes.html").then(
        function (response) {
            return response.text();
        }
    ).then(
        function (myHtml) {
            document.getElementById("contenedorPrincipal").innerHTML = myHtml;
            import("./moduloPacientes.js").then(
                function (controller) {
                    //CARGAMOS EL CONTROLADOR JS A UNA VARIABLE ESPECIFICA A CADA MODULO
                    moduloPacientes = controller;
                }
            )
        }
    )
}

function cargarModulo2() {
    fetch("../views/modulo2.html").then(
        function (response) {
            console.log("Módulo 2 HTML cargado exitosamente.");
            return response.text();
        }
    ).then(
        function (myModule2) {
            document.getElementById("contenedorPrincipal").innerHTML = myModule2;
            import("./modulo2.js").then(
                function (controller) {
                    modulo2 = controller;
                    console.log("Controlador de Módulo 2 importado exitosamente.");
                }
            ).catch(error => console.error("Error al importar módulo2.js:", error));
        }
    ).catch(error => console.error("Error al cargar modulo2.html:", error));
}

function cargarModulo3() {
    fetch("../views/modulo3.html").then(
        function (response) {
            console.log("Módulo 3 HTML cargado exitosamente.");
            return response.text();
        }
    ).then(
        function (myModule3) {
            document.getElementById("contenedorPrincipal").innerHTML = myModule3;
            import("./modulo3.js").then(
                function (controller) {
                    modulo3 = controller;
                    console.log("Controlador de Módulo 3 importado exitosamente.");
                }
            ).catch(error => console.error("Error al importar módulo3.js:", error));
        }
    ).catch(error => console.error("Error al cargar modulo3.html:", error));
}
