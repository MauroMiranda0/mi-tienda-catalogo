import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// --- ¡NUEVO! ---
import productImages from '../../assets/images/index.js'; // Ajusta la ruta ../..
import styles from './DetalleProducto.module.css';

function DetalleProducto() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        // --- ¡CAMBIO CLAVE! ---
        // Enriquecemos el producto con su imagen
        const productWithImage = {
          ...data,
          imageUrl: productImages[data.id]
        };
        setProduct(productWithImage);
      })
      .catch(() => {
        // ...
      });
  }, [id]);
  // ... (la lógica de loading y error se mantiene igual)

  if (!product) {
    return <p className={styles.error}>Producto no encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>← Volver al catálogo</Link>
      <div className={styles.card}>
        {/* --- ¡NUEVO! Añadimos la imagen --- */}
        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1>{product.name}</h1>
          <p className={styles.price}>Precio: ${product.price}</p>
          <p>Categoría: {product.category}</p>
          <p className={styles.description}>
            Aquí iría una descripción detallada del producto. Como aún no la tenemos en nuestros datos, ponemos un texto de ejemplo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className={styles.addToCartButton}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;