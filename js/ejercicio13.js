const inputEdad = document.getElementById('inputEdad');
const resultado = document.getElementById('resultado');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');


btnConvertir.addEventListener('click', function() {
    mensajeError.textContent = '';
    resultado.value = '';

    const edad = inputEdad.value.trim();

    if (edad === '') {
        mensajeError.textContent = 'Por favor, ingresa un valor.';
        return;
    }

    const ed = parseFloat(edad);

    if (isNaN(ed)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        return;
    }

    if (ed < 18) {
        resultado.value = 'Aun no puedes votar';
    } else {
        resultado.value = 'Ya puedes votar';
    }

});