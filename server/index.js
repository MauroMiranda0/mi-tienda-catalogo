// 1. Importar la librería Express
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();
app.use(express.json()); // <-- ¡MUY IMPORTANTE! Middleware para parsear JSON
// ...

// 3. Definir el puerto en el que escuchará nuestro servidor
const PORT = 3001; // Usamos 3001 para no chocar con el puerto de React (que suele ser 3000 o 5173)

// DATOS DE MUESTRA (MOCK DATA)
const products = [
  { id: 1, name: 'Laptop Gamer XYZ', price: 1200, category: 'Electrónica' },
  { id: 2, name: 'Teclado Mecánico RGB', price: 150, category: 'Accesorios' },
  { id: 3, name: 'Monitor Curvo 27"', price: 400, category: 'Monitores' },
  { id: 4, name: 'Mouse Inalámbrico Pro', price: 80, category: 'Accesorios' },
  { id: 5, name: 'Silla Ergonómica', price: 300, category: 'Mobiliario' }
];

// 4. Crear nuestra primera "ruta" (endpoint)
//    Cambiamos la ruta a '/api'
app.get('/api', (req, res) => {
  // Ahora enviamos un objeto JSON, que es más común en las APIs
  res.json({ message: '¡Hola desde la API del servidor!' });
});

// NUEVA RUTA: Endpoint para obtener todos los productos
app.get('/api/products', (req, res) => {
  res.json(products); // Enviamos el array de productos como respuesta JSON
});

// --- NUEVA RUTA ---
// Endpoint para obtener un producto por su ID
// :id es un parámetro dinámico
app.get('/api/products/:id', (req, res) => {
  // Obtenemos el ID de los parámetros de la URL
  const productId = parseInt(req.params.id);
  // Buscamos el producto en nuestro array
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product); // Si lo encontramos, lo enviamos
  } else {
    // Si no, enviamos un error 404 (No Encontrado)
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// ...
// Endpoint para recibir datos del formulario de contacto
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('--- Nuevo Mensaje de Contacto ---');
  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mensaje: ${message}`);
  console.log('-------------------------------');

  // En una app real, aquí enviarías un email o guardarías en la BD.
  // Por ahora, solo confirmamos que lo recibimos.
  res.status(200).json({ success: true, message: '¡Mensaje recibido! Gracias por contactarnos.' });
});
// ...

// 5. Poner el servidor a "escuchar" peticiones en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
}); 