export let precioDolar = 0.0;

export function obtenerInformacionDolar() {
    fetch(
        "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/oportuno?decimales=sinCeros&incremento=PorcAcumAnual&token=e9b414cf77fbe9b17173711a0fa32a4b44b03bce3a91b52db1fba880f7e6a2a8"
    )
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (datos) {
        document.getElementById("datosJSON").innerText = JSON.stringify(datos, null, 2);
        precioDolar = datos.bmx.series[0].datos[0].dato;
        alert("Tipo de cambio actualizado: " + precioDolar);
    })
    .catch(function (error) {
        console.error("Error al obtener Tipo de Cambio:", error);
        document.getElementById("datosJSON").innerText = "Error al cargar los datos.";
    });
}

export function convertirADolares() {
    const pesos = parseFloat(document.getElementById("entradaPesos").value);
    if (!isNaN(pesos) && precioDolar > 0) {
        const dolares = (pesos / precioDolar).toFixed(2);
        document.getElementById("salidaDolares").value = dolares;
    } else {
        alert("Por favor, ingrese un valor válido y obtenga el tipo de cambio.");
    }
}

export function convertirAPesos() {
    const dolares = parseFloat(document.getElementById("entradaDolares").value);
    if (!isNaN(dolares) && precioDolar > 0) {
        const pesos = (dolares * precioDolar).toFixed(2);
        document.getElementById("salidaPesos").value = pesos;
    } else {
        alert("Por favor, ingrese un valor válido y obtenga el tipo de cambio.");
    }
}



/*
export function getSerieInfo() {
  fetch(
      "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF63528?token=e9b414cf77fbe9b17173711a0fa32a4b44b03bce3a91b52db1fba880f7e6a2a8"
  )
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      document.getElementById("datosJSON").innerText = JSON.stringify(data, null, 2); // Mostrar JSON formateado en HTML
  })
  .catch(function (error) {
      console.error("Error al obtener Serie Historica:", error);
      document.getElementById("datosJSON").innerText = "Error al cargar los datos.";
  });
} */