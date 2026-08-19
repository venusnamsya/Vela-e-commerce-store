
import { useContext } from 'react';
import  ShopContext  from './ShopContext';
import { Link } from 'react-router-dom';

export default function CartView() {
  const { cart, removeFromCart } = useContext(ShopContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const styles = {
    container: { padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' },
    itemRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #E0E0E0' },
    img: { width: '60px', height: '60px', objectFit: 'contain' },
    removeBtn: { background: '#FF4D4D', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' },
    checkoutBtn: { display: 'inline-block', background: '#0B1B3D', color: '#D4AF37', textDecoration: 'none', padding: '12px 25px', borderRadius: '4px', fontWeight: 'bold', marginTop: '20px' }
  };

  if (cart.length === 0) {
    return (
      <div style={styles.container}>
        <h2>Your Cart is Empty</h2>
        <Link to="/products" style={{ color: '#D4AF37' }}>Go browse products</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#0B1B3D' }}>Your Shopping Bag ({cart.length})</h2>
      <div>
        {cart.map((item, index) => (
          <div key={`${item.id}-${index}`} style={styles.itemRow}>
            <img src={item.image} alt={item.title} style={styles.img} />
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#0B1B3D' }}>{item.title.substring(0, 35)}...</h4>
              <span style={{ color: '#D4AF37', fontWeight: 'bold' }}>${item.price}</span>
            </div>
            <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>Remove</button>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'right', marginTop: '30px' }}>
        <h3>Total: <span style={{ color: '#D4AF37' }}>${total.toFixed(2)}</span></h3>
        <Link to="/checkout" style={styles.checkoutBtn}>Proceed to Checkout</Link>
      </div>
    </div>
  );
}