/**
 * @jest-environment node
 */
const request = require('supertest');
const { app, server } = require('../../server');
const mongoose = require('mongoose');

describe('API de subida y descarga de archivos', () => {
  afterAll((done) => {
    mongoose.connection.close();
    server.close(done);
  });

  it('sube y luego descarga un archivo cifrado', async () => {
    const uploadRes = await request(app)
      .post('/upload')
      .set('username', 'sebas10')
      .set('password', 'password1')
      .attach('file', Buffer.from('contenido de prueba'), 'testfile.txt');

    expect(uploadRes.statusCode).toBe(200);
    const { fileId } = uploadRes.body;

    const downloadRes = await request(app)
      .get(`/download/${fileId}`)
      .set('username', 'sebas10')
      .set('password', 'password1');

    expect(downloadRes.statusCode).toBe(200);
    expect(downloadRes.headers['content-type']).toContain('text/plain'); // Acepta coincidencia parcial
    expect(downloadRes.text).toContain('contenido de prueba');
  });
});
