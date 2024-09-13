const express = require('express');
const jwt = require('jsonwebtoken');

const server = express();
const port = 3000;

function authenticateToken(req,res,next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) {
		return res.status(401).json({message: 'Token no proporcionado' });
	}

	jwt.verify(token, 'mi_secreto', (err, user) => {
		if (err) {
			return res.status(401).json({ message: 'Token inválido' });
		}

		req.user = user;
		next();
	});
}

server.get('/protected', authenticateToken, (req,res) => {
	res.send('Esta es una ruta protegida.');
});

server.get('/hello', function (req,res) {
	res.send('Hello world!');
});

server.listen(port, function () {
	console.log('Listenning on ' + port);
});
