import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. Cambiamos el estado para que guarde un array de productos
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // 2. useEffect para pedir los productos
  useEffect(() => {
    // 3. Apuntamos al nuevo endpoint '/api/products'
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data); // Guardamos el array de productos en el estado
        setLoading(false); // Cambiamos el estado de carga a falso
      })
      .catch(err => {
        console.error("Error al obtener los productos:", err);
        setLoading(false); // También paramos la carga si hay un error
      });
  }, []); // Se ejecuta solo una vez

  return (
    <div className="App">
      <header>
        <h1>Mi Tienda - Catálogo de Productos</h1>
      </header>
      <main>
        {/* 4. Mostramos un mensaje de carga o la lista de productos */}
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ul>
            {/* 5. Mapeamos el array de productos para renderizar cada uno */}
            {products.map(product => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
                <p>Categoría: {product.category}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;