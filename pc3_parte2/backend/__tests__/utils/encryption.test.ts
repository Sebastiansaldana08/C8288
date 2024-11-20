import JSEncrypt from 'jsencrypt';

describe('Pruebas de Cifrado y Descifrado con JSEncrypt', () => {
  let encrypt: JSEncrypt;
  let decrypt: JSEncrypt;
  const testMessage = 'Mensaje de prueba para cifrado y descifrado';

  beforeAll(() => {
    // Clave pública y privada proporcionadas
    const publicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKnQWzsLjj9weTj3bCx62VaeoEJl1n/j
PDk1+KiHiTEJhxv5iKIPG25iNnLePY/4z/519pI4eM4clnJA+FxhQK0CAwEAAQ==
-----END PUBLIC KEY-----`;

    const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJBAKnQWzsLjj9weTj3bCx62VaeoEJl1n/jPDk1+KiHiTEJhxv5iKIP
G25iNnLePY/4z/519pI4eM4clnJA+FxhQK0CAwEAAQJAYecWMfx/jmOx//3mB97r
3tylWKKOAD1qQzGyordBiVscJfug68uEzElDGzYrdDaYoi8o7GxlGVQvi5NtzRYw
oQIhANuC7f/U+yN0falP+GOixftRjtobAgyyhnCF1jjNQoZjAiEAxgqZ/KLurE9w
ILNJGw/tvlaq3uvSMOElq9w+kEprAa8CIB0BjBmGNzlUJ1a8LoJb+/VdrZa8guTS
olk0Fj6jQOspAiBI+680A3eh2MShyHCwoHYlJxthe9bCXLbdVxVXZ5V30QIgZfUi
DcfU9H8LzvwxZVplBFqkW5eVbiwK90mmnC/GjZM=
-----END RSA PRIVATE KEY-----`;

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
