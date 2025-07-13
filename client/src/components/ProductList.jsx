import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css'; // Importamos su módulo

function ProductList({ products }) {
  return (
    <ul className={styles.list}> {/* Aplicamos la clase del grid */}
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;