const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');
const estadoVacio = document.getElementById('estadoVacio');

const verificarListaVacia = () => {
    if (lista.children.length === 0) {
        estadoVacio.style.display = 'block';
    } else {
        estadoVacio.style.display = 'none';
    }
};

function agregarElemento() {
    const texto = input.value.trim(); 

    if (texto !== '') {
        estadoVacio.style.display = 'none';

        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'py-3'); 

        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;
        li.appendChild(spanTexto);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-outline-danger', 'btn-sm', 'fw-semibold');

        botonEliminar.addEventListener('click', function() {
            li.remove();
            verificarListaVacia();
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Escribe algo para poder agregarlo a la lista',
            confirmButtonColor: '#0f6167'
        });
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        agregarElemento();
    }
});

verificarListaVacia();