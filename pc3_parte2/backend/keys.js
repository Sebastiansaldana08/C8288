// backend/keys.js
const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

const key = new NodeRSA({ b: 512 });
const privateKey = key.exportKey('private');
const publicKey = key.exportKey('public');

// Guardar las claves en archivos locales
fs.writeFileSync(path.join(__dirname, 'private.key'), privateKey);
fs.writeFileSync(path.join(__dirname, 'public.key'), publicKey);

console.log('Claves RSA generadas y guardadas en archivos');
