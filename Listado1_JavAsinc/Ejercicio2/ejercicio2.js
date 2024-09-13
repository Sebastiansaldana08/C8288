const fs = require('fs').promises; // Modulo 'fs' (Operaciones de E/S de disco) y accedemos a su API de promesas
const axios = require('axios'); // Modulo 'axios'(cliente HTTP basado en promesas)

// Funcion para leer el archivo JSON que contiene nuestra informacion de usuarios
function leerArchivoUsuarios() {
    // Leemos el archivo .json y especificamos 'uft8' para recibir el texto como string.
    return fs.readFile('usuarios.json','utf8')
        // Entonces (then), convertimos el text JSON en un t/d objeto de JS.(JSON.parse)
        .then(data => JSON.parse(data))
        // Si ocurre un error en la lectura entonces ...
        .catch(err => {
            // Creamos un mensaje de error si algo falla, usando
            // throw: palabra clave para lanzar un error en JS--
            throw new Error('Error al leer el archivo: ' + err.message);
        });
}

// Funcion para obtener mas informacion de cada usuario haciendo una solic. HTTP
function obtenerDatosAdicionales(usuario) {
    // Definimos/creamos una URL para hacer la solic. usando el ID del usuario
    const url = `http://api.externa.com/usuarios/${usuario.id}`;
    // Realizamos una solicitud HTTP (get) a la API externa usando 'axios' 
    // get: solicitud para leer o obtener datos
    return axios.get(url)
        // Combinamos la informacion del usuario original con la respuesta de la API (spread operator)
        .then(res => ({...usuario, ...res.data}))
        // Si ocurre un error durante la solicitud HTTP, lanzamos el error (throw)
        .catch(err => {
            throw new Error('Error al obtener datos adicionales: ' + err.message);
        });
}

// Funcion para guardar los datos combinados en un archivo JSON
function guardarDatosCombinados(usuarios) {
    // Escribimos los datos de usuarios en un archivo (fs.writeFile)
    // Convertimos el objeto usuarios a cad de text en format JSON (stringify)
    // no se nesecita filtrar nada asi que ponemos el parametro null; ponemos 2 de espacio de indentacion en el archi. json
    return fs.writeFile('usuarios_combinados.json', JSON.stringify(usuarios, null, 2))    
    .then(() => 'Datos guardados correctamente')
    .catch(err => {
        throw new Error('Error al guardar los datos: ' + err.message);
    });
}

// Encadenamos las operaciones utilizando promesas.

// Primero leemos el archivo json con la lista de usuarios
leerArchivoUsuarios()
    .then(usuarios => {
        // Por cada usuario, hacemos un solic. HTTP para obtener info. adicional del usuario
        // Usando map para crear una promesa por cada usuario.
        const promesasUsuarios = usuarios.map(usuario => obtenerDatosAdicionales(usuario));
        // Finalmente, usamos promise.all para esperar a que todas nuestras promesas se completen
        return Promise.all(promesasUsuarios); // array de promesas -> unica promesa
    })
    .then(usuariosCombinados => {
        // Guardamos los datos combi. en un nuevo archivo, llamando a la 2da funcion
        return guardarDatosCombinados(usuariosCombinados);
    })
    .then(mensaje => {
        // Imprimimos el mensaje de exito si todo salio bien.
        console.log(mensaje);
    })
    .catch(err => {
        // Mostramos cualquier error que ocurra en el proceso COMPLETO
        console.error('Error en el proceso: ', err.mensaje);
    })
