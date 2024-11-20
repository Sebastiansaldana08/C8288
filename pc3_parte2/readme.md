# Proyecto: Aplicación de Compartición de Archivos Segura con Cifrado Asimétrico

## Descripción General

Este proyecto consiste en desarrollar una aplicación web que permita la compartición segura de archivos entre dos usuarios predefinidos, implementando cifrado asimétrico en el cliente. La aplicación utiliza **Node.js** y **Express** para el backend, y **React** con **TypeScript** para el frontend. Los archivos cifrados se almacenan en **MongoDB** mediante **Mongoose**, y la autenticación básica controla el acceso de los usuarios.

El propósito de esta aplicación es asegurar que los archivos compartidos estén cifrados en tránsito y almacenamiento, implementando además contenedores con **Docker** para asegurar un entorno de despliegue estable y reproducible.

## Objetivo del Proyecto

La aplicación tiene como objetivo:
1. **Proporcionar un entorno seguro** para subir y descargar archivos mediante el cifrado asimétrico en el cliente.
2. **Permitir la autenticación básica** de usuarios, asegurando que solo usuarios autorizados puedan subir y descargar archivos.
3. **Almacenar archivos cifrados** en una base de datos **MongoDB** de manera segura.
4. **Implementar pruebas unitarias e integración** para verificar el correcto funcionamiento de las funcionalidades clave.
5. **Contenerizar la aplicación con Docker**, simplificando su despliegue y asegurando la reproducibilidad del entorno.

## Requisitos

1. **Frontend**:
   - Implementado con **React** y **TypeScript**.
   - Utilización de **JSEncrypt** para cifrar los archivos en el cliente antes de enviarlos al servidor.

2. **Backend**:
   - Servidor **Node.js** con **Express** para manejar las solicitudes de subida y descarga de archivos.
   - **MongoDB** como sistema de almacenamiento para los archivos cifrados.
   - **Autenticación básica** para verificar la identidad de los usuarios.

3. **Pruebas**:
   - Implementación de pruebas unitarias e integración con **Jest** para las funciones de cifrado y las APIs de subida/descarga.

4. **Contenerización**:
   - Creación de un **Dockerfile** para el backend y un **docker-compose.yml** que configuran y ejecutan tanto el backend como la base de datos MongoDB en contenedores separados.

## Estrategia de Desarrollo

1. Definir y priorizar las funcionalidades esenciales del proyecto.
2. Implementar el cifrado en el cliente utilizando **JSEncrypt**.
3. Configurar y probar el servidor Express y la conexión a MongoDB.
4. Implementar autenticación básica y control de acceso.
5. Crear el Dockerfile y docker-compose.yml para la contenerización.
6. Realizar pruebas unitarias e integración para verificar la funcionalidad.

---

## 2. Estructura del Proyecto

El proyecto está organizado en una estructura que facilita la separación de responsabilidades y el mantenimiento del código. A continuación, se describe la estructura de carpetas y archivos principales:

```
pc3_parte2  
│  
├── backend  
|   |── models
|       └──user.js                   # Define el esquema y el modelo de User en Mongoose
│   ├── Dockerfile                   # Dockerfile para contenerización
|   ├── keys.js                      # Genera un par de claves RSA (pública y privada) 
|   ├── seed.js                      # Población inicial de la base de datos MongoDB
│   ├── docker-compose.yml           # Archivo para levantar contenedores (backend y MongoDB)  
│   ├── package.json                 # Definición de dependencias y scripts  
│   ├── server.js                    # Configuración principal del servidor Express  
│   ├── jest.config.js               # Configuración de Jest para pruebas  
│   └── __tests__                    # Carpeta que contiene pruebas unitarias e integración  
│       ├── routes                   # Pruebas de endpoints del backend  
│       │   └── api.test.ts          # Prueba de las rutas de subida y descarga de archivos  
│       └── utils                    # Pruebas de funciones de cifrado y otras utilidades  
│           └── encryption.test.ts   # Prueba de cifrado y descifrado  
│  
└── frontend                          # Carpeta para el frontend desarrollado en React con TypeScript  
    ├── node_modules                 # Dependencias de Node.js para el frontend  
    ├── public                       # Archivos estáticos como imágenes y archivos de configuración  
    ├── src                          # Código fuente del frontend  
    │   ├── components               # Componentes reutilizables del frontend  
    │   │   ├── DownloadFile.tsx     # Componente para descargar archivos  
    │   │   └── UploadFile.tsx       # Componente para subir archivos  
    │   ├── App.css                  # Estilos principales de la aplicación  
    │   ├── App.test.tsx             # Prueba unitaria para el componente App  
    │   ├── App.tsx                  # Componente principal de la aplicación  
    │   ├── index.css                # Estilos globales  
    │   ├── index.tsx                # Punto de entrada principal del frontend  
    │   ├── react-app-env.d.ts       # Archivo de configuración de ambiente para TypeScript  
    │   ├── reportWebVitals.ts       # Archivo para medir métricas de rendimiento  
    │   └── setupTests.ts            # Configuración para pruebas con Jest  
    └── package.json                 # Dependencias y scripts del frontend  
```


### Descripción de Archivos Clave en el Backend

1. **`server.js`**: Archivo principal del servidor donde se configuran los endpoints, la conexión con MongoDB, y la autenticación básica. En este archivo, también se definen los esquemas de Mongoose para los usuarios y archivos que se almacenarán en MongoDB.
2. **`seed.js`**: Script diseñado para pre-poblar la base de datos con datos iniciales. Se utiliza para crear usuarios predefinidos con contraseñas encriptadas en la base de datos MongoDB.
3. **`models/user.js`**: Define el modelo de usuarios en MongoDB utilizando Mongoose. Este modelo permite gestionar usuarios en la aplicación, incluyendo la autenticación básica mediante contraseñas encriptadas.
4. **`key.js`**: Se utiliza para gestionar las claves pública y privada necesarias para el cifrado asimétrico en el proyecto. Estas claves son fundamentales para proteger la información y garantizar que los datos se cifren y descifren de manera segura.

5. **`Dockerfile`**: Contiene las instrucciones para construir la imagen del contenedor de Docker, incluyendo la instalación de dependencias, la configuración del entorno de trabajo, y el despliegue del servidor.

6. **`docker-compose.yml`**: Define los servicios y contenedores necesarios para la aplicación. Este archivo levanta dos contenedores: uno para el backend y otro para MongoDB.

7. **`jest.config.js`**: Configura el entorno de pruebas utilizando Jest, con el objetivo de asegurar que las pruebas unitarias e integradas se ejecuten correctamente en Node.js.

8. **Carpeta `__tests__`**:
    - **`routes/api.test.ts`**: Prueba de las rutas de subida y descarga de archivos, validando la correcta respuesta del backend y los códigos de estado.
    - **`utils/encryption.test.ts`**: Prueba de las funciones de cifrado y descifrado utilizando JSEncrypt, asegurando la integridad y seguridad de la encriptación.

En esta sección, también incluimos configuraciones para los paquetes necesarios en el backend y frontend, con el objetivo de facilitar el desarrollo y la integración entre ambos entornos.


---
## 3. Implementación del Backend

### Configuración de `server.js`

El archivo `server.js` configura el servidor Express, establece la conexión con MongoDB, define los esquemas de datos utilizando Mongoose y habilita el middleware de autenticación y manejo de archivos.

#### Importación de dependencias
```javascript
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const { Schema } = mongoose;
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
```
- **express**: Importa el framework Express, que permite crear un servidor web.
- **mongoose**: Biblioteca para interactuar con MongoDB, usada para gestionar y modelar datos.
- **bcryptjs**: Biblioteca para realizar el hash de contraseñas y compararlas (útil para autenticación segura).
- **body-parser**: Middleware que procesa los datos del cuerpo de las solicitudes HTTP, convirtiéndolos en objetos utilizables.
- **path**: Módulo nativo de Node.js para trabajar con rutas de archivos y directorios.
- **cors**: Middleware que habilita solicitudes desde dominios externos, necesario para permitir comunicación entre el frontend y el backend.
- **express-fileupload**: Middleware para manejar la subida de archivos en solicitudes HTTP.

#### Conexión a MongoDB

Utilizamos Mongoose para gestionar la conexión con MongoDB, creando esquemas de datos para almacenar archivos y usuarios en la base de datos.

```javascript
// Conexión con MongoDB
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/secureFilesDB';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));
```
Este fragmento establece la conexión entre la aplicación y la base de datos MongoDB utilizando Mongoose, una biblioteca de modelado de datos para Node.js.

#### Middleware de Autenticación
Para el control de acceso, se implementó autenticación básica usando username y password. El middleware authenticateUser verifica las credenciales en los encabezados de la solicitud y consulta la base de datos para validar al usuario.

```javascript
const authenticateUser = async (req, res, next) => {
    const { username, password } = req.headers;

    const user = await User.findOne({ username });
    if (!user || !(await user.isValidPassword(password))) {
        return res.status(401).json({ error: 'Autenticación fallida' });
    }

    req.user = user;
    next();
};
```
#### Rutas de la API

Las Rutas de la API son los puntos de acceso que el frontend utiliza para interactuar con el backend. En este proyecto, las rutas se implementaron con Express.js y están organizadas para cumplir con las funcionalidades requeridas. A continuación explicaremos las diferentes rutas que se implementaron en este proyecto:

##### Ruta para Subir Archivos

La ruta de subida permite a los usuarios autenticados subir archivos que se almacenan en MongoDB como documentos con datos binarios. Antes de almacenar, el archivo se cifra en el cliente mediante JSEncrypt.

```javascript	
app.post('/upload', authenticateUser, async (req, res) => {
    const { username } = req.headers;

    if (!req.files || !req.files.file) {
        return res.status(400).send('No se ha subido ningún archivo');
    }

    const uploadedFile = req.files.file;
    
    const file = new File({
        filename: uploadedFile.name,
        data: uploadedFile.data,
        contentType: uploadedFile.mimetype,
        uploadedBy: username,
    });

    try {
        const savedFile = await file.save();
        res.status(200).json({ message: 'Archivo subido y almacenado correctamente', fileId: savedFile._id });
    } catch (error) {
        res.status(500).send('Error al almacenar el archivo');
    }
});
```

##### Ruta para Descargar Archivos

La ruta de descarga permite a los usuarios autenticados recuperar archivos cifrados previamente almacenados en MongoDB. El archivo se envía en su formato cifrado, para que sea descifrado en el cliente.

```javascript
app.get('/download/:id', authenticateUser, async (req, res) => {
    const { id } = req.params;

    try {
        const file = await File.findById(id);

        if (!file) {
            return res.status(404).send('Archivo no encontrado');
        }

        res.set('Content-Type', file.contentType);
        res.send(file.data);
    } catch (error) {
        res.status(500).send('Error al descargar el archivo');
    }
});
```	

##### Ruta para la Clave Pública
Esta ruta permite al cliente obtener la clave pública necesaria para cifrar los archivos en el cliente antes de subirlos.

```javascript	
app.get('/public-key', (req, res) => {
    res.sendFile(path.join(__dirname, 'public.key'));
});
```

##### Ejecución del Servidor
El servidor escucha en el puerto 5000, permitiendo la comunicación entre el cliente y el servidor en este puerto.

```javascript
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```
Esta configuración y estructura de rutas permite una gestión básica de archivos con autenticación y manejo de cifrado de archivos en el cliente.

---

## 4. Gestión de Claves y Datos Iniciales en el Backend

### Configuración de `key.js`

El archivo `key.js` es crucial para la gestión de cifrado en el cliente y servidor. Aquí generamos las claves pública y privada para el cifrado asimétrico utilizando la biblioteca `node-rsa`. La clave pública se distribuye al cliente para cifrar los archivos antes de ser enviados al servidor.

**Código de `key.js`:**

```javascript
const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

const key = new NodeRSA({ b: 512 });

// Generación de claves pública y privada
const publicKey = key.exportKey('public');
const privateKey = key.exportKey('private');

// Guarda la clave pública en un archivo accesible para el cliente
fs.writeFileSync(path.join(__dirname, 'public.key'), publicKey);

// Guarda la clave privada en el servidor para descifrar archivos
fs.writeFileSync(path.join(__dirname, 'private.key'), privateKey);

console.log('Claves generadas y guardadas en public.key y private.key');
```

- **Clave pública** (public.key): se distribuye al cliente para cifrar archivos.
- **Clave privada** (private.key): se mantiene en el servidor y permite el descifrado en el backend.

##### Archivo `seed.js`
Para facilitar la autenticación en el sistema, creamos un archivo seed.js que genera usuarios predefinidos en la base de datos con nombres y contraseñas encriptadas. Esto permite realizar pruebas y demostraciones de la aplicación sin necesidad de registrar usuarios manualmente.

Código de seed.js:
```javascript	
// backend/seed.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/secureFilesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    console.log('Conectado a MongoDB');

    const users = [
        { username: 'sebas10', password: await bcrypt.hash('password1', 10) },
        { username: 'gonza10', password: await bcrypt.hash('password2', 10) },
    ];

    await User.insertMany(users);
    console.log('Usuarios insertados');
    process.exit();
}).catch((error) => console.error('Error:', error));

```

Este script realiza las siguientes tareas:

1. **Conexión a MongoDB**: El script establece una conexión con la base de datos secureFilesDB utilizando Mongoose, lo que permite interactuar con la base de datos MongoDB.
2. **Hash de Contraseñas**: Las contraseñas de los usuarios se cifran utilizando bcryptjs con un algoritmo de hash y una sal de tamaño 10, asegurando que no se almacenen en texto plano.
3. **Inserción de Usuarios**: Se crean dos usuarios predefinidos con contraseñas cifradas y se almacenan en la colección correspondiente utilizando el modelo User.
4. **Finalización del Proceso**: Después de insertar los usuarios en la base de datos, el script finaliza el proceso de ejecución utilizando process.exit() para cerrar de forma controlada.

Para ejecutar este archivo y generar los usuarios, se utiliza el siguiente comando en el directorio de backend:

```bash
node seed.js
```

**Explicación de la Autenticación con Usuarios Predefinidos**

- La autenticación básica implementada permite que solo los usuarios predefinidos puedan acceder a las rutas protegidas del sistema. Esto se logra almacenando las credenciales de acceso en la base de datos y verificándolas en cada solicitud a rutas protegidas. 
- La autenticación se realiza en el middleware authenticateUser, que valida el nombre de usuario y la contraseña antes de otorgar acceso a los recursos.

#### Models: Definición de Esquemas para MongoDB

En esta sección, documentamos el archivo `user.js`, que contiene el modelo para manejar los usuarios en nuestra aplicación. Este modelo utiliza Mongoose para definir un esquema de usuario y establecer métodos de utilidad para la validación de contraseñas.
#### Archivo: `user.js`

Este archivo define el esquema de usuarios y el modelo correspondiente para la base de datos MongoDB.

##### Descripción

El modelo de usuario tiene los siguientes campos y características:
- **`username`**: Almacena el nombre de usuario único.
- **`password`**: Almacena la contraseña encriptada del usuario.

Además, incluye un método para validar contraseñas utilizando `bcrypt`.

##### Código Fuente

```javascript
// backend/models/user.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Método para verificar la contraseña
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

##### Detalles del Código

###### Definición del esquema:

- Se define un esquema de Mongoose que contiene username y password, ambos como campos requeridos.
- username debe ser único para evitar duplicados.

###### Método isValidPassword:

- Verifica si una contraseña proporcionada coincide con la contraseña almacenada.
- Utiliza la función compare de bcrypt para comparar la contraseña ingresada con la contraseña encriptada almacenada.
  
**Exportación**:

- Se exporta como un modelo de Mongoose llamado User, que se utiliza para interactuar con la colección de usuarios en MongoDB.

#### Uso en el Proyecto
Este modelo es utilizado en las siguientes partes del backend:

**Autenticación básica**:
- En el middleware de autenticación, se utiliza el modelo User para buscar el usuario por username y verificar su contraseña con el método isValidPassword.

**Población inicial de usuarios**:
- En el archivo seed.js, se utiliza este modelo para insertar usuarios predefinidos en la base de datos.

---
## 5. Configuración y Desarrollo del Frontend

En el frontend, utilizamos React y TypeScript para crear una interfaz sencilla y funcional. El propósito de la interfaz es permitir a los usuarios autenticarse, subir y descargar archivos cifrados. No se utilizó `api.ts`, sino que se crearon componentes específicos para la subida y descarga de archivos.

### 5.1 Estructura del Frontend

El frontend contiene los siguientes componentes principales:

- **App.tsx**: Punto de entrada y configuración de la interfaz principal.
- **UploadFile.tsx**: Componente que maneja la subida de archivos.
- **DownloadFile.tsx**: Componente para gestionar la descarga de archivos.

Cada uno de estos componentes cumple funciones específicas, y se enlazan en `App.tsx` para crear la estructura de la aplicación.

### 5.2 Configuración de `App.tsx`

El archivo `App.tsx` organiza la estructura principal de la aplicación. Este archivo incluye los componentes de subida (`Upload`) y descarga (`Download`), y configura el uso de `React Router` para la navegación.

```typescript
// Importación de componentes y dependencias
import React from 'react';
import UploadFile from './components/UploadFile';
import DownloadFile from './components/DownloadFile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Compartición de Archivos Segura</h1>
        <UploadFile />
        <DownloadFile />
      </header>
    </div>
  );
}

export default App;
```
Este archivo configura el enrutamiento, lo cual permite a los usuarios acceder a las funcionalidades de subida y descarga mediante las rutas /upload y /download.

### 5.3 Componente UploadFile.tsx
El componente `UploadFile.tsx` permite a los usuarios seleccionar un archivo y cargarlo en el servidor. El archivo es cifrado en el cliente antes de ser enviado al backend, utilizando la clave pública generada en key.js.

1. **Carga de archivo**: Los usuarios pueden seleccionar un archivo mediante un formulario.
2. **Cifrado**: Se utiliza JSEncrypt para cifrar el contenido del archivo en el cliente.
3. **Envio al servidor**: El archivo cifrado es enviado al servidor mediante una solicitud HTTP POST.

```typescript
import React, { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';

const UploadFile: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    // Función para manejar la selección de archivo
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    // Función para cifrar y subir el archivo
    const handleUpload = async () => {
        if (!file) return alert("Selecciona un archivo");

        // Obtenemos la clave pública desde el backend
        const publicKeyResponse = await fetch('http://localhost:5000/public-key');
        const publicKey = await publicKeyResponse.text();

        // Creamos una instancia de JSEncrypt y cargar la clave pública
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);

        // Leemos el archivo y cifrar el contenido
        const reader = new FileReader();
        reader.onload = async () => {
            const fileContent = reader.result as string;
            const encryptedContent = encrypt.encrypt(fileContent);

            if (!encryptedContent) return alert("Error en el cifrado");

            // Enviar el archivo cifrado al backend
            const formData = new FormData();
            formData.append("file", new Blob([encryptedContent], { type: 'text/plain' }), file.name);

            await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    username: "sebas10",  
                    password: "password1"
                },
                body: formData
            }).then(response => {
                if (response.ok) {
                    alert("Archivo subido con éxito");
                } else {
                    alert("Error en la subida del archivo");
                }
            });
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Subir archivo</button>
        </div>
    );
};

export default UploadFile;
```

### 5.4 Componente DownloadFile.tsx

#### Descripción
Este componente es responsable de descargar un archivo cifrado desde el servidor utilizando su ID único, y luego descifrarlo en el cliente utilizando una clave privada RSA. 

#### Características principales
1. **Descarga de archivos**: Realiza una solicitud HTTP `GET` al servidor para obtener el contenido cifrado de un archivo.
2. **Descifrado en el cliente**: Utiliza la biblioteca `JSEncrypt` para descifrar el contenido del archivo con una clave privada.
3. **Autenticación básica**: Incluye credenciales de usuario para autenticación en la solicitud al servidor.
4. **Gestión de estado**: Maneja los estados del ID del archivo, contenido descifrado, y mensajes de error.

#### Código del Componente
```tsx
import React, { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';

const DownloadFile: React.FC = () => {
    const [fileId, setFileId] = useState<string>('');
    const [decryptedContent, setDecryptedContent] = useState<string | null>(null);

    const handleDownload = async () => {
        if (!fileId) return alert("Ingrese un ID de archivo");

        const response = await fetch(`http://localhost:5000/download/${fileId}`, {
            method: 'GET',
            headers: {
                username: "sebas10",  // Autenticación básica
                password: "password1"
            },
        });

        if (!response.ok) {
            return alert("Error al descargar el archivo");
        }

        const encryptedContent = await response.text();

        const privateKey = `tu_clave_privada`;

        const decrypt = new JSEncrypt();
        decrypt.setPrivateKey(privateKey);

        const decrypted = decrypt.decrypt(encryptedContent);

        if (!decrypted) {
            return alert("Error en el descifrado del archivo");
        }

        setDecryptedContent(decrypted);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="ID del archivo"
                value={fileId}
                onChange={(e) => setFileId(e.target.value)}
            />
            <button onClick={handleDownload}>Descargar y descifrar archivo</button>
            {decryptedContent && (
                <div>
                    <h3>Contenido del archivo:</h3>
                    <pre>{decryptedContent}</pre>
                </div>
            )}
        </div>
    );
};

export default DownloadFile;
```	

### 5.5 Dependencias y configuración adicional en el frontend
Para la implementación del frontend, configuramos las siguientes dependencias en el archivo `package.json`:

- **react-router-dom**: Para la configuración de rutas.
- **jsencrypt**: Para la gestión de cifrado asimétrico en el cliente.
  
Estas dependencias se instalan utilizando:
```bash
npm install react-router-dom jsencrypt
```
Con esto, hemos implementado la estructura principal del frontend, con componentes funcionales para la carga y descarga de archivos, integrando cifrado asimétrico en el cliente.

---
## 6. Pruebas Unitarias e Integradas

Para asegurar que el sistema funcione como se espera, implementamos pruebas unitarias para el cifrado y descifrado, así como pruebas integradas para las rutas de la API. Utilizamos **Jest** y **Supertest** como herramientas de pruebas.

### 6.1 Configuración de Jest y Supertest

En el archivo `jest.config.js`, configuramos el entorno de pruebas para ejecutar correctamente Jest con TypeScript y Node.js:

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  }
};
```
### 6.2 Configuración de jest.setup.js
El archivo jest.setup.js contiene configuraciones y preparaciones necesarias para las pruebas, como simulaciones globales o configuraciones adicionales para bibliotecas específicas. En nuestro caso, incluimos una configuración para manejar los valores de advertencias relacionadas con MongoDB y otras configuraciones necesarias para Jest.

```javascript
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
```




### 6.3 Pruebas de Cifrado y Descifrado (encryption.test.ts)
Implementamos pruebas unitarias para validar el proceso de cifrado y descifrado en el cliente, utilizando JSEncrypt. Estas pruebas aseguran que el contenido cifrado se pueda descifrar correctamente con la clave adecuada.

```typescript
import JSEncrypt from 'jsencrypt';

describe('Pruebas de Cifrado y Descifrado con JSEncrypt', () => {
  let encrypt: JSEncrypt;
  let decrypt: JSEncrypt;
  const testMessage = 'Mensaje de prueba para cifrado y descifrado';

  beforeAll(() => {
    // Clave pública y privada proporcionadas
    const publicKey = `tu_clave_publica`;

    const privateKey = `tu_clave_privada`;

    encrypt = new JSEncrypt();
    decrypt = new JSEncrypt();

    encrypt.setPublicKey(publicKey);
    decrypt.setPrivateKey(privateKey);
  });

  it('cifra y descifra correctamente el mensaje de prueba', () => {
    const encryptedMessage = encrypt.encrypt(testMessage);
    expect(encryptedMessage).toBeDefined();

    const decryptedMessage = decrypt.decrypt(encryptedMessage as string);
    expect(decryptedMessage).toBe(testMessage);
  });
});
```

### 6.4 Pruebas de Rutas de la API (api.test.ts)
Utilizamos Supertest para probar las rutas de subida y descarga de archivos. Estas pruebas integradas aseguran que las solicitudes a las rutas /upload y /download/:id operen correctamente, incluyendo autenticación y manejo de archivos.

Configuración de `api.test.ts`
```ts
/**
 * @jest-environment node
 */
const request = require('supertest');
const { app, server } = require('../../server'); // Importa `app` y `server` utilizando `require`
const mongoose = require('mongoose');

describe('API de subida y descarga de archivos', () => {
  afterAll((done) => {
    mongoose.connection.close(); // Cierra la conexión de MongoDB
    server.close(done); // Cierra el servidor después de todas las pruebas
  });

  it('sube y luego descarga un archivo cifrado', async () => {
    // Sube un archivo de prueba y verifica la respuesta
    const uploadRes = await request(app)
      .post('/upload')
      .set('username', 'sebas10')
      .set('password', 'password1')
      .attach('file', Buffer.from('contenido de prueba'), 'testfile.txt');

    expect(uploadRes.statusCode).toBe(200);
    const { fileId } = uploadRes.body; // Obtenemos el `fileId` del archivo subido

    // Descargamos el archivo utilizando el `fileId` recibido
    const downloadRes = await request(app)
      .get(`/download/${fileId}`)
      .set('username', 'sebas10')
      .set('password', 'password1');

    expect(downloadRes.statusCode).toBe(200);
    expect(downloadRes.headers['content-type']).toContain('text/plain'); // Acepta coincidencia parcial
    expect(downloadRes.text).toContain('contenido de prueba');
  });
});
```	

**Notas importantes**:

1. La prueba de descarga requiere un fileId válido para un archivo existente. Durante las pruebas, este ID se debe generar y asignar dinámicamente tras la carga exitosa de un archivo.
2. La autenticación básica se valida mediante los headers username y password.
   
### 6.5 Cobertura de Pruebas
Para verificar la cobertura de pruebas, ejecutamos el comando:
```bash
npx jest --coverage
```
- Esto genera un informe de cobertura de código que destaca las áreas cubiertas por las pruebas, asegurando que las funciones críticas de cifrado, subida y descarga estén completamente probadas.


Con estas pruebas unitarias e integradas, garantizamos que las funcionalidades esenciales de seguridad en el manejo de archivos funcionan como se espera. Además, los informes de cobertura permiten evaluar si hay áreas adicionales que necesiten pruebas.

---

## 7. Configuración de Docker

Para contenerizar el proyecto, se utilizó un Dockerfile para el backend y un archivo `docker-compose.yml` para definir los servicios necesarios. Esta configuración asegura que tanto el backend como la base de datos MongoDB se ejecuten en contenedores aislados.

### Dockerfile

El Dockerfile para el backend incluye los siguientes pasos:
- Configuración del entorno de trabajo en `/app`
- Instalación de dependencias desde `package.json`
- Copia del código fuente al contenedor
- Definición del comando de inicio para ejecutar el servidor

```Dockerfile
# Utilizar la imagen oficial de Node.js
FROM node:16

# Crear y definir el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración e instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto 5000 para el backend
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["npm", "start"]
```

#### docker-compose.yml
- En el archivo docker-compose.yml, se define la red de Docker y los servicios para el backend y MongoDB. MongoDB se configura para almacenar datos de manera persistente y garantizar la disponibilidad durante el ciclo de vida del contenedor.
```bash
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    container_name: mongodb
    ports:
      - '27017:27017'
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example

  backend:
    build: .
    container_name: secure-file-backend
    ports:
      - "5000:5000" 
    environment:
      MONGO_URI: mongodb://mongodb:27017/secureFilesDB
    depends_on:
      - mongodb
```

Con esta configuración, la aplicación puede iniciarse en contenedores Docker con los siguientes comandos:
```bash
docker-compose up --build
```
Este comando construye y ejecuta los contenedores de la aplicación backend y MongoDB en la red definida, permitiendo el desarrollo y la integración en un entorno controlado.

### 8. Referencias
A continuación se enumeran los enlaces a las referencias y documentación utilizadas en el desarrollo del proyecto:

- Plataforma del curso: Unidad 2 - Mongodb y Mongoose
- Repositorio del curso Actividad 15: Pruebas con Jest - https://github.com/kapumota/Actividades-C8288/blob/main/Semana7/Actividad16-C8288.md 

- Node.js - Entorno de ejecución de JavaScript: https://nodejs.org/en/docs/

- Express.js - Framework para aplicaciones web y API: https://expressjs.com/

- MongoDB - Base de datos NoSQL: https://docs.mongodb.com/

- Mongoose - ODM para MongoDB en Node.js: https://mongoosejs.com/docs/

- JSEncrypt - Biblioteca para cifrado asimétrico en el navegador: https://github.com/travist/jsencrypt

- bcryptjs - Biblioteca para hashing de contraseñas en Node.js: https://github.com/dcodeIO/bcrypt.js/

- Jest - Framework de pruebas para JavaScript: https://jestjs.io/docs/getting-started

- Docker - Plataforma para contenerización de aplicaciones: https://docs.docker.com/

- Docker Compose - Herramienta para definir y ejecutar aplicaciones multi-contenedor: https://docs.docker.com/compose/

- React - Biblioteca de JavaScript para la creación de interfaces de usuario: https://reactjs.org/docs/getting-started.html

- TypeScript - Lenguaje de programación que extiende JavaScript: https://www.typescriptlang.org/docs/

---
### 9. Conclusión
El desarrollo de la aplicación de compartición de archivos segura con cifrado asimétrico representa un paso significativo en la implementación de técnicas de seguridad modernas dentro de una arquitectura web completa. A lo largo de este proyecto, se lograron los siguientes objetivos clave:

- **Cifrado Seguro**: Se implementó cifrado asimétrico en el frontend para garantizar que los archivos subidos al servidor estén protegidos, incluso en caso de un acceso no autorizado.
- **Autenticación Básica**: Se integró autenticación básica para controlar el acceso a las funcionalidades principales, asegurando que solo los usuarios autorizados puedan interactuar con la aplicación.
- **Gestión de Archivos Cifrados**: Los archivos se almacenan cifrados en una base de datos NoSQL (MongoDB), garantizando confidencialidad y persistencia.
- **Pruebas Automatizadas**: Se implementaron pruebas unitarias y de integración con Jest, cubriendo las funcionalidades críticas de la aplicación.
- **Contenerización Básica**: Se configuró Docker y Docker Compose para facilitar la implementación y garantizar un entorno reproducible.
- **Frontend Interactivo**: Se desarrolló un frontend con React y TypeScript que permite a los usuarios subir y descargar archivos de manera eficiente y amigable.

#### Aprendizajes y Retos
Durante el desarrollo del proyecto, se adquirieron conocimientos profundos sobre:

- El uso práctico de criptografía en aplicaciones web.
- La integración de tecnologías modernas como React, Node.js, MongoDB y Docker.
- La importancia de pruebas automatizadas para garantizar la estabilidad del sistema.

Uno de los retos más significativos fue la configuración de las claves de cifrado y el manejo de las dependencias entre frontend y backend, que se solucionaron con una planificación cuidadosa y pruebas constantes.


Gracias por su atención!

**Curso**: Desarrollo web
**Docente**: Cesar Lara
**Alumno**: Sebastián Saldaña Rodríguez