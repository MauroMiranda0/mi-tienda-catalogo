import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Estado para guardar el mensaje del servidor
  const [message, setMessage] = useState('');

  // 2. useEffect para ejecutar la petición a la API cuando el componente se carga
  useEffect(() => {
    // 3. Hacemos la petición a nuestra API.
    //    Gracias al proxy, no necesitamos escribir 'http://localhost:3001'
    fetch('/api')
      .then(res => res.json()) // Convertimos la respuesta a JSON
      .then(data => setMessage(data.message)) // Guardamos el mensaje en el estado
      .catch(err => console.error(err)); // Manejo de errores
  }, []); // El array vacío [] significa que este efecto se ejecuta solo una vez

  return (
    <div className="App">
      <h1>Mi Tienda Catálogo</h1>
      {/* 4. Mostramos el mensaje del servidor o un texto de carga */}
      <p>{message || "Cargando mensaje desde el servidor..."}</p>
    </div>
  );
}

export default App;