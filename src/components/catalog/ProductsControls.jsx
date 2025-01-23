import styles from './ProductsControls.module.css';
import { products as initialProducts } from '../../fake-data';
import { useRef } from 'react';

function ProductsControls({ currentCategoryId, setProducts, setSortOrder }) {
  const searchFieldRef = useRef(null);

  function searchProducts() {
    const searchText = searchFieldRef.current.value.toLowerCase();

    const filteredProducts = initialProducts.filter(
      p =>
        p.categoryId === currentCategoryId &&
        p.title.toLowerCase().includes(searchText)
    );

    setProducts(filteredProducts);
  }

  function clearProducts() {
    searchFieldRef.current.value = '';

    const filteredProducts = initialProducts.filter(
      p => p.categoryId === currentCategoryId
    );

    setProducts(filteredProducts);
  }

  return (
    <div className={styles.controls}>
      <div className={styles.searchContainer}>
        <input
          ref={searchFieldRef}
          type='text'
          className={styles.search}
          placeholder='Введіть назву товару'
        />
        <button
          className={styles.button}
          onClick={searchProducts}
        >
          Шукати
        </button>
        <button
          className={styles.button}
          onClick={clearProducts}
        >
          Очистити
        </button>
      </div>
      <select
        className={styles.sort}
        onChange={e => setSortOrder(e.target.value)}
      >
        <option value='asc'>Від дешевих до дорогих</option>
        <option value='desc'>Від дорогих до дешевих</option>
      </select>
    </div>
  );
}

export default ProductsControls;
