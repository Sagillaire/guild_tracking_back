# Sistema de Seguimiento de Mapas de Albion Online para Gremios con Node.js, Express y MongoDB
La aplicación garantiza un sistema de autenticación sólido, permitiendo a los gremios y alianzas acceder de manera segura a la información relevante para ellos. Los niveles de acceso personalizados aseguran que cada usuario vea solo los mapas y datos pertinentes. Facilita la comunicación y la planificación conjunta al permitir que gremios y alianzas compartan información sobre movimientos, estrategias y objetivos en el juego.

## Requisitos
Antes de poder ejecutar la aplicación, es necesario tener instalado Node.js y MongoDB. Puede descargar e instalar Node.js desde la página oficial y MongoDB desde.

## Instalación
Para instalar la aplicación, clone este repositorio y, en la raíz del proyecto, ejecute el siguiente comando para instalar las dependencias:
[npm install o yarn]

## Configuración
Antes de poder ejecutar la aplicación, es necesario configurar las variables de entorno correspondientes. Cree un archivo .env en la raíz del proyecto y agregue las siguientes variables:

### PORT:
El puerto en el que se ejecutará la aplicación.

### DB_URI:
La URL de conexión a la base de datos de MongoDB.

### JWT_SECRET:
La clave secreta que se utilizará para firmar los tokens JWT.