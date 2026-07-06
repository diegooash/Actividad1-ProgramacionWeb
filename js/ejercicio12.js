const inputMXN = document.getElementById('inputMXN');
const inputUSD = document.getElementById('inputUSD');
const btnConvertir = document.getElementById('btnConvertir');
const mensajeError = document.getElementById('mensajeError');


btnConvertir.addEventListener('click', function() {
    mensajeError.textContent = '';
    inputUSD.value = '';

    const valorMXN = inputMXN.value.trim();

    if (valorMXN === '') {
        mensajeError.textContent = 'Por favor, ingresa un valor.';
        return;
    }

    const mxn = parseFloat(valorMXN);

    if (isNaN(mxn)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        return;
    }

    if (valorMXN < 0) {
        mensajeError.textContent = 'Por favor, solo valores positivos, gracias.';
        return;
    }

    const usd = (mxn * 0.055);

    inputUSD.value = usd.toFixed(2) + ' USD';
});