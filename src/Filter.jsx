// src/components/FilterSection.jsx
import { useContext } from 'react';
    import { ShopContext } from './ShopContext';

export default function Filter() {
  const { filters, setFilters } = useContext(ShopContext);

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const styles = {
    container: {
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'center',
    },
    input: {
      width: '100%',
      maxWidth: '400px',
      padding: '12px 20px',
      fontSize: '16px',
      border: '2px solid #0B1B3D', // Navy Blue border
      borderRadius: '25px',
      outline: 'none',
      transition: 'box-shadow 0.2s',
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search product items..."
        value={filters.search} // Controlled input component bind
        onChange={handleSearchChange}
        style={styles.input}
      />
    </div>
  );
}