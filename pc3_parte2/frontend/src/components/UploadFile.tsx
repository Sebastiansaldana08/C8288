import React, { useState } from 'react';
import { JSEncrypt } from 'jsencrypt';

const UploadFile: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return alert("Selecciona un archivo");

        const publicKeyResponse = await fetch('http://localhost:5000/public-key');
        const publicKey = await publicKeyResponse.text();

        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);

        const reader = new FileReader();
        reader.onload = async () => {
            const fileContent = reader.result as string;
            const encryptedContent = encrypt.encrypt(fileContent);

            if (!encryptedContent) return alert("Error en el cifrado");

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
