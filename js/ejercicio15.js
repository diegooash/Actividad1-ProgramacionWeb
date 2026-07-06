const inputNombre = document.getElementById('inputNombre');
const inputCalificacion = document.getElementById('inputCalificacion');
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const listaEstudiantes = document.getElementById('listaEstudiantes');
const mensajeError = document.getElementById('mensajeError');

const resultadoPromedio = document.getElementById('resultadoPromedio');
const resultadoMayor = document.getElementById('resultadoMayor');
const resultadoMenor = document.getElementById('resultadoMenor');

let estudiantes = [];

btnAgregar.addEventListener('click', function() {
    mensajeError.textContent = '';
    
    const nombre = inputNombre.value.trim();
    const calificacionStr = inputCalificacion.value.trim();

    if (nombre === '' || calificacionStr === '') {
        mensajeError.textContent = 'Por favor, complete todos los campos';
        return;
    }

    const calificacion = parseFloat(calificacionStr);

    if (isNaN(calificacion) || calificacion < 0) {
        mensajeError.textContent = 'Por favor, ingresa una calificacion correctamente';
        return;
    }

    const nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    
    estudiantes.push(nuevoEstudiante);
    actualizarListaVisual();

    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();
});

function actualizarListaVisual() {
    listaEstudiantes.innerHTML = '';
    estudiantes.forEach(est => {
        const item = document.createElement('p');
        item.textContent = `${est.nombre} - Calificación: ${est.calificacion}`;
        listaEstudiantes.appendChild(item);
    });
}

btnCalcular.addEventListener('click', function() {
    mensajeError.textContent = '';
    
    if (estudiantes.length === 0) {
        mensajeError.textContent = 'Agrega al menos un estudiante para poder calcular.';
        return;
    }

    const sumaTotal = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const promedio = sumaTotal / estudiantes.length;

    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    const estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

    resultadoPromedio.value = promedio.toFixed(2);
    resultadoMayor.value = `${estudianteMayor.nombre} (${calificacionMaxima})`;
    resultadoMenor.value = `${estudianteMenor.nombre} (${calificacionMinima})`;
});