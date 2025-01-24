import { useEffect, useState } from 'react';
import styles from './PageLayout.module.css';
import Catalog from './Catalog/Catalog';
import {
  categories as initialCategories,
  products as initialProducts,
} from '../fake-data';

export function PageLayout() {
  const [page, setPage] = useState('catalog');
  const [basket, setBasket] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState([]);

  function handleSelectCategory(id) {
    setCurrentCategoryId(id);
    setProducts(initialProducts.filter(p => p.categoryId === id));
  }

  useEffect(() => {
    const defaultCategoryId = initialCategories[0].id

    setCategories(initialCategories);
    setProducts(initialProducts.filter(p => p.categoryId === defaultCategoryId));
    setCurrentCategoryId(defaultCategoryId);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        {page === 'catalog' && (
          <Catalog
            categories={categories}
            products={products}
            currentCategoryId={currentCategoryId}
            setProducts={setProducts}
            handleSelectCategory={handleSelectCategory}
          />
        )}
      </main>
      <footer className={styles.header}>footer</footer>
    </div>
  );
}
