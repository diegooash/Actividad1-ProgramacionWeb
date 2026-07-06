const inputCelsius = document.getElementById('inputCelsius');
const inputFahrenheit = document.getElementById('inputFahrenheit');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');


btnConvertir.addEventListener('click', function() {
    mensajeError.textContent = '';
    inputFahrenheit.value = '';

    const valorCelsius = inputCelsius.value.trim();

    if (valorCelsius === '') {
        mensajeError.textContent = 'Por favor, ingresa un valor.';
        return;
    }

    const celsius = parseFloat(valorCelsius);

    if (isNaN(celsius)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;

    inputFahrenheit.value = fahrenheit.toFixed(2) + ' °F';
});