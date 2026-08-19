// src/views/CheckoutView.jsx
import { useContext } from 'react';
import  ShopContext  from './ShopContext';

export default function Checkout() {
  const { cart } = useContext(ShopContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const styles = {
    container: { padding: '40px 20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', textAlign: 'center' },
    successBox: { background: '#F9F9F9', padding: '40px', borderRadius: '8px', border: '1px solid #D4AF37' }
  };

  return (
    <div style={styles.container}>
      <div style={styles.successBox}>
        <h2 style={{ color: '#0B1B3D' }}>Secure Checkout Portal</h2>
        <p>Your secure transaction session is active.</p>
        <hr style={{ border: '0', borderTop: '1px solid #E0E0E0', margin: '20px 0' }} />
        <h3>Grand Total Due: <span style={{ color: '#D4AF37' }}>${total.toFixed(2)}</span></h3>
        <button style={{ background: '#D4AF37', color: '#0B1B3D', border: 'none', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer', marginTop: '15px' }}>
          Place Order Now
        </button>
      </div>
    </div>
  );
}