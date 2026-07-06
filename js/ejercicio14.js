const inputNumeros = document.getElementById('inputNumeros');
const resultadoMayor = document.getElementById('resultadoMayor');
const resultadoMenor = document.getElementById('resultadoMenor');
const resultadoPromedio = document.getElementById('resultadoPromedio');
const btnCalcular = document.getElementById('btnCalcular');
const mensajeError = document.getElementById('mensajeError');

btnCalcular.addEventListener('click', function() {
    mensajeError.textContent = '';
    resultadoMayor.value = '';
    resultadoMenor.value = '';
    resultadoPromedio.value = '';

    const textoIngresado = inputNumeros.value.trim();

    if (textoIngresado === '') {
        mensajeError.textContent = 'Por favor, ingresa valores.';
        return;
    }

    const arregloCadenas = textoIngresado.split(',');

    const numeros = arregloCadenas.map(item => Number(item.trim()));

    if (numeros.some(isNaN)) {
        mensajeError.textContent = 'Por favor, ingresa numeros nada mas';
        return;
    }

    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / numeros.length;

    resultadoMayor.value = maximo;
    resultadoMenor.value = minimo;

    resultadoPromedio.value = promedio.toFixed(2);
});