// 1. Importar la librería Express
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto en el que escuchará nuestro servidor
const PORT = 3001; // Usamos 3001 para no chocar con el puerto de React (que suele ser 3000 o 5173)

// 4. Crear nuestra primera "ruta" (endpoint)
//    Cuando alguien visite la raíz de nuestro servidor (http://localhost:3001/),
//    se ejecutará esta función.
app.get('/', (req, res) => {
  // req: objeto que representa la petición del cliente (request)
  // res: objeto que representa la respuesta que le enviaremos (response)
  res.send('¡Hola desde el servidor de mi-tienda-catalogo!');
});

// 5. Poner el servidor a "escuchar" peticiones en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});