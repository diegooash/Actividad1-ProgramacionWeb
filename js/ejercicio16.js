const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error no se puede dividir entre 0';

const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const inputResultado = document.getElementById('resultado');

const calcularOperacion = (operacion) => {
    inputResultado.value = '';

    const valor1 = inputNumero1.value.trim();
    const valor2 = inputNumero2.value.trim();

    if (valor1 === '' || valor2 === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor rellena los campos',
            confirmButtonColor: '#0f6167'
        });
        return;
    }

    const a = parseFloat(valor1);
    const b = parseFloat(valor2);

    if (isNaN(a) || isNaN(b)) {
        Swal.fire({
            icon: 'error',
            title: 'Dato inválido',
            text: 'Por favor ingresa solo numeros',
            confirmButtonColor: '#e74c3c'
        });
        return;
    }

    let res;
    switch (operacion) {
        case 'suma':
            res = sumar(a, b);
            break;
        case 'resta':
            res = restar(a, b);
            break;
        case 'multiplicacion':
            res = multiplicar(a, b);
            break;
        case 'division':
            res = dividir(a, b);
            if (typeof res === 'string') {
                Swal.fire({
                    icon: 'error',
                    title: 'Operación no permitida',
                    text: res,
                    confirmButtonColor: '#e74c3c'
                });
                return;
            }
            break;
        default:
            return;
    }

    inputResultado.value = res;
};

document.getElementById('btnSumar').addEventListener('click', () => calcularOperacion('suma'));
document.getElementById('btnRestar').addEventListener('click', () => calcularOperacion('resta'));
document.getElementById('btnMultiplicar').addEventListener('click', () => calcularOperacion('multiplicacion'));
document.getElementById('btnDividir').addEventListener('click', () => calcularOperacion('division'));