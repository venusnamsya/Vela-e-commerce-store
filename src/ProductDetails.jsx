
import { useParams, Link, Outlet } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const styles = {
    container: { padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' },
    tabNav: { display: 'flex', gap: '20px', borderBottom: '2px solid #0B1B3D', paddingBottom: '10px', marginBottom: '20px' },
    tabLink: { textDecoration: 'none', color: '#0B1B3D', fontWeight: 'bold' }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#0B1B3D' }}>Premium Product Collection / Item #{id}</h2>
      
      <nav style={styles.tabNav}>
        <Link to="overview" style={styles.tabLink}>Overview</Link>
        <Link to="reviews" style={styles.tabLink}>Reviews</Link>
        <Link to="specifications" style={styles.tabLink}>Specifications</Link>
      </nav>

      <div style={{ padding: '20px', background: '#F9F9F9', borderRadius: '4px' }}>
        <Outlet />
      </div>
    </div>
  );
}