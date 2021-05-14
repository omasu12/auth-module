import { useEffect, useState } from 'react';
import productApi from '../../../api/productsApi';

export default function useProduct(productsId) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
          setLoading(true)
          const result = await productApi.getNameCategoryById(productsId)
          setProducts(result)
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    })();
  },[productsId]);
  return { products, loading };
}
