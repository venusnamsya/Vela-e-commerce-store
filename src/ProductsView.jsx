
import { useState, useEffect, useContext } from 'react';
import  { ShopContext }  from './ShopContext';
import ProductCard from './ProductCard';
import Filter from './Filter';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filters } = useContext(ShopContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong fetching catalog products.');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filters.search.toLowerCase())
  );

  const styles = {
    container: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'sans-serif',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '30px',
    },
    statusText: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#0B1B3D',
      padding: '40px',
    }
  };

  if (loading) return <p style={styles.statusText}>Loading luxury collection items...</p>;
  if (error) return <p style={styles.statusText} style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <Filter />
      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}