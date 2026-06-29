const URL_API = 'http://localhost:3000/api/libros';

// 1. Fetch para obtener libros y renderizarlos
const cargarLibros = async () => {
    try {
        const respuesta = await fetch(URL_API);
        const libros = await respuesta.json();
        console.log("Datos recibidos del servidor:", libros); // Esto es para ver en la consola si llegan

        const contenedor = document.getElementById('lista-libros');
        if (!contenedor) return;
        contenedor.innerHTML = ''; 

        if (libros.length === 0) {
            contenedor.innerHTML = '<p style="text-align:center; color:#7f8c8d;">No hay libros registrados todavía.</p>';
            return;
        }

        libros.forEach(libro => {
            // Súper control: acepta tanto 'Disponible' como 'disponible'
            const esDisponible = libro.Disponible !== undefined ? libro.Disponible : libro.disponible;
            const elTitulo = libro.Titulo || libro.titulo || "Sin título";
            const elAutor = libro.Autor || libro.autor || "Sin autor";

            const claseCard = esDisponible ? 'libro-disponible' : 'libro-no-disponible';
            const claseBadge = esDisponible ? 'badge-disponible' : 'badge-no-disponible';
            const estadoTexto = esDisponible ? 'Disponible' : 'No Disponible';
            
            contenedor.innerHTML += `
                <div class="card-libro ${claseCard}">
                    <div>
                        <h3>${elTitulo}</h3>
                        <p><strong>Autor:</strong> ${elAutor}</p>
                    </div>
                    <p><span class="badge ${claseBadge}">${estadoTexto}</span></p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error al cargar listado:", error);
    }
};

// 2. Fetch para registrar un nuevo libro
document.getElementById('form-libro').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const nuevoLibro = {
        Titulo: document.getElementById('titulo').value,
        Autor: document.getElementById('autor').value,
        Disponible: document.getElementById('disponible').checked ? 1 : 0
    };

    try {
        const respuesta = await fetch(URL_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoLibro)
        });

        if (respuesta.ok) {
            alert('¡Libro registrado con éxito!');
            document.getElementById('form-libro').reset(); 
            cargarLibros(); // Recarga automática
        } else {
            alert('Error al intentar registrar el libro');
        }
    } catch (error) {
        console.error("Error en el registro:", error);
    }
});

// Arrancar cargando los libros existentes al abrir la web
cargarLibros();