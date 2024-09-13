const fs = require('fs'); // Def modulo fs, esto para interactuar con el Sist de archivos
const fetch = require('node-fetch'); //  Def modulo node fetch para hacer solicit HTTP

// Funcion para leer el archivo .json
function leerArchivoUsuarios(callback) {
    fs.readFile('usuarios.json','utf8', (err, data) => { // creamos una funcion que actua como callback
    // Esto para manejar la respuesta
        if (err) {
            return callback(err); // SI hay error, lo pasamos al callback
        }
        try {
            // Convertimos el contenido del archivo (string JSON) en un objeto JS.
            const usuarios = JSON.parse(data);
            callback(null,usuarios) // Si no hay errores, devuelve el 2do param usuarios
        } catch (error) {
            callback(error); // SI ocurre un error al parsear el JSON, lo pasamos al callback
        }
    });
}

// Funcion para obtener los datos adici. de cada usuario
function obtenerDatosAdicionales(usuario, callback) {
    const url = `https://api.externa.com/users/${usuario.id}`;

    // Hacemos una solicitud HTTP usando 'fetch'
    fetch(url)
        .then(res => res.json()) // // Convertimos la respuesta a formato JSON
        .then(data => {
            // Combinamos o pasamos los datos del usuario original con los datos obtenidos
            const usuarioConDatos = {...usuario, ...data};
            // Pasamos el nuevo usuario con los datos adicionales al callback
            callback(null, usuarioConDatos);
        })
        .catch(err => {
            callback(err); // Si hay error en la solicitud HTTP
        });
}

function guardarDatosCombinados(usuarios, callback) {
    // Convertirmos el objeto de usuarios a un format JSON sin filtro (null) pero con sangria de 2
    const datosCombinados = JSON.stringify(usuarios, null,2);

    // Guardamos el JSON en el archivo por ejem 'usuarios_combinados.json'
    fs.writeFile('usuarios_combinados.json', datosCombinados, 'utf8', (err) => {
        if (err) {
            return callback(err);
        }
        callback(null, 'Datos guardados correctamente.');
    });
}

// Aqui viene la comparacion de eficiencia

function procesarUsuarios() {
    // Primero tenemos que leer el archivo json con los usuarios
    leerArchivoUsuarios((err, usuarios) => {
        if (err) {
            return console.error('Error al leer el archivo:', err.message);
        }

        // Definimos un contador para seguir el proceso de todos los usuarios
        let contador = 0;
        // Aqui guardamos los datos con sus datos personales unicos
        const usuarioConDatos = [];

        // Iteramos sobre cada usuario
        usuarios.forEach(usuario => {
            // Obtenemos los datos adici de cada usuario
            obtenerDatosAdicionales(usuario, (err, usuarioConDatos) => {
                if (err) {
                    return console.error('Error obteniendo datos adicionales:', err.mensage);
                }
                // Añadimos el usuario con datos adicionales a la lista
                usuarioConDatos.push(usuarioConDatos);

                contador++; // Aumentamos el contador cada vez que se procesa un usuario

                // cuando todo los usuarios ya han sido procesados
                if (contador === usuarios.length) {
                    // guardamos los datos combinados en un archivo
                    guardarDatosCombinados(usuarioConDatos, (err, mensage) => {
                        if (err) {
                            // si hay un error al guardar, lo mostramos en la consola
                            return console.error('Error guardando datos:', err.mensage);
                        }
                        // Si todo salio bien, mostramos un mensaje de exito.
                        console.log(mensage);
                    });
                }
            });
        });
    });

}

procesarUsuarios();