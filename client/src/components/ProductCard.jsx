import React from 'react';
// 1. Importa el módulo CSS. Vite lo convertirá en un objeto 'styles'.
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    // 2. Usa el objeto 'styles' para aplicar las clases.
    // La clase '.card' en el CSS se convierte en 'styles.card'.
    <li className={styles.card}>
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
    </li>
  );
}

export default ProductCard;