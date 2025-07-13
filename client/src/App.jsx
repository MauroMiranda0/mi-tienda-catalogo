import { useState, useEffect } from 'react';
import ProductList from './components/ProductList'; // Importamos ProductList
import './App.css';

// --- ¡NUEVO! Importamos las imágenes ---
import laptopImage from './assets/images/laptop.jpg';
import tecladoImage from './assets/images/teclado.jpg';
import monitorImage from './assets/images/monitor.jpg';
import mouseImage from './assets/images/mouse.jpg';
import sillaImage from './assets/images/silla.jpg';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Un mapa para asociar el ID del producto con su imagen importada
    const productImages = {
      1: laptopImage,
      2: tecladoImage,
      3: monitorImage,
      4: mouseImage,
      5: sillaImage
    };
    fetch('/api/products')
      .then(res => res.json())
      .then(serverProducts => {
        // --- ¡CAMBIO CLAVE! ---
        // Mapeamos los productos del servidor y le añadimos la propiedad 'imageUrl'
        const productsWithImages = serverProducts.map(product => ({
          ...product, // Copiamos todas las propiedades del producto original
          imageUrl: productImages[product.id] // Añadimos la URL de la imagen
        }));

        setProducts(productsWithImages); // Guardamos los productos "enriquecidos"
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