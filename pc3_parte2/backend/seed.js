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
