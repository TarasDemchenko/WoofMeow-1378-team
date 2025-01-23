import styles from './Catalog.module.css';
import Categories from './Categories';
import Products from './Products';

export default function Catalog({
  categories,
  products,
  currentCategoryId,
  setProducts,
  handleSelectCategory,
}) {
  return (
    <div className={styles.catalog}>
      <Categories
        categories={categories}
        currentCategoryId={currentCategoryId}
        handleSelectCategory={handleSelectCategory}
      />
      <Products
        products={products}
        setProducts={setProducts}
        currentCategoryId={currentCategoryId}
      />
    </div>
  );
}
