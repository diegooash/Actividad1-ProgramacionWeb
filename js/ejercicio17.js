const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
const mensajeError = document.getElementById('mensajeError');

const crearGestorTareas = () => {
    const obtenerTareas = () => {
        const tareasGuardadas = localStorage.getItem('mis_tareas');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    };

    const guardarTareas = (tareas) => {
        localStorage.setItem('mis_tareas', JSON.stringify(tareas));
    };

    return {
        agregar: (nuevaTareaTexto) => {
            const tareas = obtenerTareas();
            const nuevaTarea = {
                id: Date.now(),
                texto: nuevaTareaTexto
            };
            tareas.push(nuevaTarea);
            guardarTareas(tareas);
            return tareas;
        },

        eliminar: (idTarea) => {
            let tareas = obtenerTareas();
            tareas = tareas.filter(tarea => tarea.id !== idTarea);
            guardarTareas(tareas);
            return tareas;
        },

        listar: () => {
            return obtenerTareas();
        }
    };
};

const gestor = crearGestorTareas();

const renderizarTareas = () => {
    const tareas = gestor.listar();
    listaTareas.innerHTML = '';

    if (tareas.length === 0) {
        listaTareas.innerHTML = '<p><em>No hay tareas pendientes</em></p>';
        return;
    }

    tareas.forEach(tarea => {
        const divItem = document.createElement('div');
        divItem.className = 'item-tarea';

        const spanTexto = document.createElement('span');
        spanTexto.className = 'texto-tarea';
        spanTexto.textContent = tarea.texto;

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'boton-eliminar';
        btnEliminar.textContent = 'Eliminar';

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Estás seguro?',
                text: `¿Deseas eliminar la tarea: "${tarea.texto}"?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e74c3c',
                cancelButtonColor: '#0f6167',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    gestor.eliminar(tarea.id);
                    renderizarTareas(); 
                    Swal.fire({
                        title: '¡Eliminada!',
                        text: 'La tarea ha sido eliminada',
                        icon: 'success',
                        confirmButtonColor: '#0f6167',
                        timer: 1500
                    });
                }
            });
        });

        divItem.appendChild(spanTexto);
        divItem.appendChild(btnEliminar);
        listaTareas.appendChild(divItem);
    });
};

btnAgregar.addEventListener('click', () => {
    mensajeError.textContent = '';
    const texto = inputTarea.value.trim();

    if (texto === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacio',
            text: 'Por favor escribe una descripción para la tarea',
            confirmButtonColor: '#0f6167'
        });
        return;
    }

    gestor.agregar(texto);
    inputTarea.value = '';
    inputTarea.focus();
    
    renderizarTareas();
});

inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnAgregar.click();
    }
});

document.addEventListener('DOMContentLoaded', renderizarTareas);