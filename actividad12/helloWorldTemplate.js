import express from 'express';
import path from 'path';
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Middlewares para procesar datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Este es un app de Express',
        subtitle: 'usando EJS como plantilla'
    });
});

// Rutas estáticas
app.get('/users', (req, res) => {
    res.send('Lista de usuarios');
});

app.get('/about', (req, res) => {
    res.send('Página Acerca de');
});

// Ruta dinámica
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Usuario con ID: ${userId}`);
});

// Ruta con parámetro opcional
app.get('/invoice/:id?', (req, res) => {
    const invoiceId = req.params.id;
    res.send(invoiceId ? `Mostrando factura con ID: ${invoiceId}` : 'Mostrando todas las facturas');
});

// Ruta con expresión regular
app.get(/.*fly$/, (req, res) => {
    res.send('Ruta que termina en "fly"');
});

// Manejo de respuestas HTTP
app.get('/headers', (req, res) => {
    res.set({
        'Content-Type': 'text/html',
        'x-powered-by': 'Express'
    });
    res.send('<h1>Encabezados configurados en la respuesta</h1>');
});

app.get('/success', (req, res) => {
    res.status(200).send('Todo salió bien');
});

app.get('/not-found', (req, res) => {
    res.status(404).send('Recurso no encontrado');
});

app.get('/error', (req, res) => {
    res.status(500).send('Error interno del servidor');
});

// Redirecciones
app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
});

app.get('/about-redirect', (req, res) => {
    res.redirect('/about');
});

// Respuestas en diferentes formatos (texto y json)
app.get('/text', (req, res) => {
    res.send('Respuesta en texto simple');
});

app.get('/json', (req, res) => {
    res.json({ message: 'Respuesta en formato JSON' });
});

// Enviar archivo (no está en uso)
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'archivo.txt');
    res.download(filePath, 'archivo.txt', (err) => {
        if (err) {
            res.status(500).send('Error al enviar el archivo');
        }
    });
});

// Ruta para procesar datos de formulario (no está en uso)
app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    res.send(`Formulario recibido: Nombre - ${name}, Email - ${email}`);
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('¡Noooo, algo salió mal en el servidor!');
});

app.listen(port, () => {
    console.log(`App corriendo en http://localhost:${port}`);
});
