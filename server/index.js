// 1. Importar la librería Express
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto en el que escuchará nuestro servidor
const PORT = 3001; // Usamos 3001 para no chocar con el puerto de React (que suele ser 3000 o 5173)

// 4. Crear nuestra primera "ruta" (endpoint)
//    Cambiamos la ruta a '/api'
app.get('/api', (req, res) => {
  // Ahora enviamos un objeto JSON, que es más común en las APIs
  res.json({ message: '¡Hola desde la API del servidor!' });
});

// 5. Poner el servidor a "escuchar" peticiones en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});