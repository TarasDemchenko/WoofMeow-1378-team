import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './Products.module.css';
import ProductsControls from './ProductsControls';

function Products({ products, currentCategoryId, setProducts }) {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedProducts =
    sortOrder === 'asc'
      ? [...products].sort((a, b) => a.price * 1 - b.price * 1)
      : [...products].sort((a, b) => b.price * 1 - a.price * 1);

  return (
    <div className={styles.container}>
      <ProductsControls
        setSortOrder={setSortOrder}
        currentCategoryId={currentCategoryId}
        setProducts={setProducts}
      />

      <ul className={styles.products}>
        {sortedProducts.map(product => (
          <ProductCard
            product={product}
            key={'product-' + product.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Products;
