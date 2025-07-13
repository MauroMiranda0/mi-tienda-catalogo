import React from 'react';
import ProductCard from './ProductCard'; // Importamos nuestro nuevo componente

function ProductList({ products }) {
  return (
    <ul className="product-list">
      {products.map(product => (
        // Por cada producto en el array, renderizamos un componente ProductCard
        // Le pasamos el objeto 'product' completo como una prop.
        // La 'key' todavía debe estar aquí, en el primer elemento del bucle.
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;