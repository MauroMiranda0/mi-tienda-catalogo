import { useState, useEffect } from 'react';
import ProductList from './components/ProductList'; // Importamos ProductList
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener los productos:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Mi Tienda - Catálogo de Productos</h1>
      </header>
      <main>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          // Simplemente renderizamos ProductList y le pasamos los datos
          <ProductList products={products} />
        )}
      </main>
    </div>
  );
}

export default App;