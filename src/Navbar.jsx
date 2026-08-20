
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext }  from './ShopContext';

export default function Navbar() {
  const { cart, user, logout } = useContext(ShopContext);
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      background: '#0B1B3D', 
      borderBottom: '3px solid #D4AF37', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif',
    },
    logo: {
      color: '#D4AF37', 
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
      letterSpacing: '1px',
    },
    linksContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    link: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'color 0.2s',
    },
    cartBadge: {
      background: '#D4AF37', 
      color: '#0B1B3D', 
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '5px',
    },
    button: {
      background: 'transparent',
      border: '1px solid #D4AF37',
      color: '#D4AF37',
      padding: '6px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>VELA STORE</Link>
      
      <div style={styles.linksContainer}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>
          Cart 
          {cart.length > 0 && <span style={styles.cartBadge}>{cart.length}</span>}
        </Link>
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#FFFFFF', fontSize: '14px' }}>Hi, {user.email.split('@')[0]}</span>
            <button onClick={logout} style={styles.button}>Logout</button>
          </div>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </div>
    </nav>
  );
}