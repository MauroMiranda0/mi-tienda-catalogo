import React from 'react';

// Este es un componente funcional. Recibe 'props' como argumento.
// Usamos desestructuración para acceder directamente a la propiedad 'product'.
function ProductCard({ product }) {
  return (
    <li className="product-card">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
    </li>
  );
}

export default ProductCard;