// Función para calcular el IMC
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

function mostrarPeso() {
    
    if (isNaN(peso.value) || isNaN(altura.value)) {
        return alert('Por favor, ingrese un valor numérico para peso y estatura');
    }

    let alturaEnMetros = altura.value / 100;
    let imc = peso.value / (alturaEnMetros * alturaEnMetros);
    
    let condicion = '';

    if (imc < 18.5) {
        condicion = 'Peso bajo';
    } else if (imc >= 18.5 && imc <= 24.99) {
        condicion = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.99) {
        condicion = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.99) {
        condicion = 'Obesidad leve';
    } else if (imc >= 35 && imc <= 39.99) {
        condicion = 'Obesidad media';
    } else if (imc >= 40) {
        condicion = 'Obesidad mórbida';
    }
    
    // Mostrar el resultado
    alert('IMC: ' + imc.toFixed(2));
    alert(condicion);
}
