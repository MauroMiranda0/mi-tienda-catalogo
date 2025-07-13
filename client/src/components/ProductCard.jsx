import React from 'react';
import { Link } from 'react-router-dom'; // --- ¡IMPORTANTE! ---
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
      {/* --- ¡CAMBIO CLAVE! --- */}
      {/* Usamos el componente Link para la navegación */}
      {/* La URL se construye dinámicamente con el ID del producto */}
      <Link to={`/producto/${product.id}`} className={styles.button}>
        Ver más
      </Link>
    </li>
  );
}

export default ProductCard;
