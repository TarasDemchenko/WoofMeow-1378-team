import styles from './Categories.module.css';

function Categories({ categories, handleSelectCategory }) {
  return (
    <ul className={styles.categories}>
      {categories.map(cat => (
        <li
          className={styles.item}
          key={'category' + cat.id}
        >
          <button
            className={styles.button}
            onClick={() => handleSelectCategory(cat.id)}
          >
            {cat.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
