const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const { Schema } = mongoose;
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


app.use(cors({ origin: 'http://localhost:3000' }));


const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/secureFilesDB';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));


const fileSchema = new Schema({
    filename: String,
    data: Buffer,
    contentType: String,
    uploadedBy: String,
});

const File = mongoose.model('File', fileSchema);


const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);


const authenticateUser = async (req, res, next) => {
    const { username, password } = req.headers;

    const user = await User.findOne({ username });
    if (!user || !(await user.isValidPassword(password))) {
        return res.status(401).json({ error: 'Autenticación fallida' });
    }

    req.user = user;
    next();
};


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


app.get('/public-key', (req, res) => {
    res.sendFile(path.join(__dirname, 'public.key'));
});


const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = { app, server };
