
import { Link } from 'react-router-dom';

export default function NotFoundView() {
  const styles = {
    container: {
      padding: '80px 20px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
    title: {
      fontSize: '72px',
      color: '#0B1B3D', // Navy
      margin: '0',
    },
    heading: {
      fontSize: '24px',
      color: '#D4AF37', // Gold
      margin: '10px 0 20px 0',
    },
    link: {
      color: '#0B1B3D',
      fontWeight: 'bold',
      textDecoration: 'underline',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <h2 style={styles.heading}>Oops! Page Not Found</h2>
      <p>The collection path you are looking for does not exist.</p>
      <Link to="/products" style={styles.link}>Return to Shop Catalog</Link>
    </div>
  );
}