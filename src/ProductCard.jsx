
import { useContext } from 'react';
import ShopContext from './ShopContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(ShopContext);

  const styles = {
    card: {
      background: '#FFFFFF',
      border: '1px solid #E0E0E0',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'between',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
      fontFamily: 'sans-serif',
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'contain',
      marginBottom: '15px',
    },
    title: {
      fontSize: '16px',
      color: '#0B1B3D', // Navy
      fontWeight: '600',
      margin: '10px 0',
      height: '40px',
      overflow: 'hidden',
    },
    price: {
      fontSize: '18px',
      color: '#D4AF37', // Gold
      fontWeight: 'bold',
      margin: '10px 0',
    },
    button: {
      background: '#0B1B3D', // Navy
      color: '#FFFFFF',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background 0.2s',
      marginTop: 'auto',
    }
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title.substring(0, 45)}...</h3>
      <p style={styles.price}>${product.price}</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
        Add To Cart
      </button>
    </div>
  );
}