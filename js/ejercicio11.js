const inputKilometros = document.getElementById('inputKilometros');
const inputMillas = document.getElementById('inputMillas');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');


btnConvertir.addEventListener('click', function() {
    mensajeError.textContent = '';
    inputMillas.value = '';

    const valorKilometros = inputKilometros.value.trim();

    if (valorKilometros === '') {
        mensajeError.textContent = 'Por favor, ingresa un valor.';
        return;
    }

    const kilometros = parseFloat(valorKilometros);

    if (isNaN(kilometros)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        return;
    }

    if (valorKilometros < 0) {
        mensajeError.textContent = 'Por favor, solo valores positivos, gracias.';
        return;
    }

    const millas = (kilometros * 0.621371);

    inputMillas.value = millas.toFixed(5) + ' Millas';
});