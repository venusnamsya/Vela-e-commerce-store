
import { useState, useContext } from 'react';
import ShopContext from './ShopContext';
import { useNavigate } from 'react-router-dom';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const { login } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setValidationError('All form fields are strictly required.');
      return;
    }
    setValidationError('');
    login({ email });
    navigate('/checkout');
  };

  const styles = {
    container: { padding: '60px 20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' },
    form: { display: 'flex', flexDirection: 'column', gap: '15px', background: '#FFFFFF', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', borderTop: '4px solid #D4AF37' },
    input: { padding: '12px', fontSize: '16px', border: '1px solid #CCCCCC', borderRadius: '4px' },
    button: { background: '#0B1B3D', color: '#FFFFFF', border: 'none', padding: '12px', fontSize: '16px', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' },
    error: { color: '#FF4D4D', fontSize: '14px', margin: '0' }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={{ color: '#0B1B3D', margin: '0 0 10px 0' }}>Sign In</h2>
        {validationError && <p style={styles.error}>{validationError}</p>}
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}