import React from 'react';
// 1. Importa el módulo CSS. Vite lo convertirá en un objeto 'styles'.
import styles from './ProductCard.module.css';

function ProductCard({ product, image, tilted }) {
  return (
      // 2. Usa el objeto 'styles' para aplicar las clases.
      // La clase '.card' en el CSS se convierte en 'styles.card'.
    <li className={`${styles.card} ${tilted ? styles.tilted : ''}`}>
      <img src={image} alt={product.name} className={styles.image} />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>Precio: ${product.price}</p>
      <p className={styles.category}>Categoría: {product.category}</p>
      <button className={styles.button}>Ver más</button>
    </li>
  );
}

export default ProductCard;
