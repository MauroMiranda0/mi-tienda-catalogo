import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css'; // Importamos su módulo

// ... dentro de ProductList.jsx ...
function ProductList({ products }) {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          // Pasamos la URL de la imagen que añadimos en App.jsx
          image={product.imageUrl}
        />
      ))}
    </ul>
  );
}
// ...

export default ProductList;