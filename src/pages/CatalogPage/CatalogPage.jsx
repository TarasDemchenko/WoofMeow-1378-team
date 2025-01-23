import Catalog from "../../components/Catalog/Catalog"

import { useEffect, useState } from 'react';
import {
  categories as initialCategories,
  products as initialProducts,
} from '../../fake-data';


export default function CatalogPage () {
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
    <>
      <Catalog 
        categories={categories}
        products={products}
        currentCategoryId={currentCategoryId}
        setProducts={setProducts}
        handleSelectCategory={handleSelectCategory}
      />
    </>
  )
}