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

        const privateKey = `-----BEGIN RSA PRIVATE KEY-----
        MIIBOQIBAAJBAKnQWzsLjj9weTj3bCx62VaeoEJl1n/jPDk1+KiHiTEJhxv5iKIP
        G25iNnLePY/4z/519pI4eM4clnJA+FxhQK0CAwEAAQJAYecWMfx/jmOx//3mB97r
        3tylWKKOAD1qQzGyordBiVscJfug68uEzElDGzYrdDaYoi8o7GxlGVQvi5NtzRYw
        oQIhANuC7f/U+yN0falP+GOixftRjtobAgyyhnCF1jjNQoZjAiEAxgqZ/KLurE9w
        ILNJGw/tvlaq3uvSMOElq9w+kEprAa8CIB0BjBmGNzlUJ1a8LoJb+/VdrZa8guTS
        olk0Fj6jQOspAiBI+680A3eh2MShyHCwoHYlJxthe9bCXLbdVxVXZ5V30QIgZfUi
        DcfU9H8LzvwxZVplBFqkW5eVbiwK90mmnC/GjZM=
        -----END RSA PRIVATE KEY-----`;


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
