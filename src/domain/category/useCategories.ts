import { useEffect, useState } from 'react';
import { Category } from './category';
import { initialCategories } from './initialCategories';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCategories(getFromLocalStorage());

    function handleStorageEvent(e: StorageEvent) {
      console.log(e.key);
    }
    window.addEventListener('storage', handleStorageEvent);

    return () => window.removeEventListener('storage', handleStorageEvent);
  }, []);

  return categories;
}

const storageKey = 'categories';

function getFromLocalStorage() {
  const persistedCategoryString: string | null = localStorage.getItem(storageKey);
  if (!persistedCategoryString) {
    return initialCategories;
  }
  try {
    return JSON.parse(persistedCategoryString) as Category[];
  } catch (e) {
    return initialCategories;
  }
}
