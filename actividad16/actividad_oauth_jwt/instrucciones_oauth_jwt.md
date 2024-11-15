# Instrucciones de OAuth y JWT

## Actividad: Implementación de OAuth 2.0 y JWT en Ubuntu

### Objetivo
Implementar el flujo de autorización de OAuth 2.0 y la obtención de tokens JWT para acceder a un recurso protegido en una API. Esta actividad explora el Authorization Code Grant para la autenticación y autorización de usuarios mediante cURL en la terminal de vscode.

---

## Pasos Realizados

### 1. Preparación del Entorno
- **Requisitos previos**: Configurar el entorno de trabajo en Ubuntu y verificar la versión de `curl`.
- **Directorio de trabajo**: Creamos un directorio de trabajo llamado `actividad_oauth_jwt` y lo usamos para documentar y almacenar archivos relevantes, incluyendo credenciales y comandos utilizados.

#### Verificar versión de cURL
```bash
curl --version
```
---
### 2. Registro y Configuración del Cliente OAuth
- **Registro de cliente OAuth**: Nos registramos en el servidor OAuth y obtuvimos el `Client ID` y el `Client Secret`.

#### Datos obtenidos:
- **Client ID**: `client-1731552003088`
- **Client Secret**: `d78989c30e6403bc7bb1d5861bd84137`
- **Redirect URI**: `http://localhost:3000/oauth/callback`

#### Archivo seguro para credenciales
Guardamos las credenciales en un archivo llamado `credenciales_oauth.txt` en el directorio `actividad_oauth_jwt`.

#### Documentación de Credenciales
```plaintext
Client ID: client-1731552003088
Client Secret: d78989c30e6403bc7bb1d5861bd84137
Redirect URI: http://localhost:3000/oauth/callback
```
---
### 3. Intento de Acceso sin Autenticación
Probamos el acceso al recurso protegido sin autenticación para confirmar que se requiere un token de acceso.

#### Comando
```bash
curl -i -X GET 'https://www.usemodernfullstack.dev/protected/resource' -H 'Accept: text/html'
```
Respuesta esperada
```bash
HTTP/2 401
Content-Type: text/html; charset=utf-8
<h1>Unauthorized request: no authentication given</h1>
```
---

### 4. Obtención del Código de Autorización
Para obtener el código de autorización, realizamos una solicitud de autenticación con el Client ID, `redirect_uri`, y credenciales del usuario.

#### Comando
```bash
curl -i -X POST 'https://www.usemodernfullstack.dev/oauth/authenticate' \
    -H 'Accept: text/html' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d "response_type=code&client_id=client-1731552003088&state=4nBjkh31&scope=read&redirect_uri=http://localhost:3000/oauth/callback&username=sebas080602&password=Sebas1011"
```

Respuesta esperada
```bash
HTTP/2 302
location: http://localhost:3000/oauth/callback?code=d1e07b8efe3af6dbf04fda175445b5d59c5b6643&state=4nBjkh31
```
---
### 5. Intercambio del Código de Autorización por un Token de Acceso
Intercambiamos el código de autorización obtenido en el paso anterior por un `access_token`.

#### Comando
```bash
curl -i -X POST 'https://www.usemodernfullstack.dev/oauth/access_token' \
    -H 'Accept: text/html, application/json' \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d "code=d1e07b8efe3af6dbf04fda175445b5d59c5b6643&grant_type=authorization_code&redirect_uri=http://localhost:3000/oauth/callback&client_id=client-1731552003088&client_secret=d78989c30e6403bc7bb1d5861bd84137"
```
Respuesta
```bash
{
    "access_token": "5340c21a938857cdb8f019a5ba08173a32ab4e31",
    "token_type": "Bearer",
    "expires_in": 3599,
    "refresh_token": "4cf0b73470175cea33e97718d83b565a05c1dc89",
    "scope": "read"
}
```
---

### 6. Acceso al Recurso Protegido con el Token de Acceso
Utilizamos el `access_token` obtenido para acceder al recurso protegido, confirmando el acceso autorizado.

#### Comando
```bash
curl -i -X GET 'https://www.usemodernfullstack.dev/protected/resource' \
    -H 'Accept: text/html' \
    -H 'Authorization: Bearer 5340c21a938857cdb8f019a5ba08173a32ab4e31'
```
Respuesta:

```bash
HTTP/2 200 
x-powered-by: Express
```

#### Notas Finales
- Este flujo confirma que hemos configurado correctamente el proceso de OAuth con Authorization Code Grant, desde la autenticación hasta el acceso exitoso a un recurso protegido.