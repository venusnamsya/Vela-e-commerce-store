
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from './ShopContext';
import Navbar from './Navbar';
import ProductsView from './ProductsView';
import ProductDetails from './ProductDetails'
import ProductCard from './ProductCard';
import CartView from './CartView';
import LoginView from './LoginView';
import Checkout from './Checkout';
import NotFoundView from './NotFoundView'; 
import Filter from './Filter';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(ShopContext);
  return user ? children : <Navigate to="/login" replace />;
};

const Home = () => (
  <div style={{ padding: '80px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
    <h1 style={{ color: '#0B1B3D', fontSize: '42px', marginBottom: '10px' }}>Welcome to Vela Store!</h1>
    <h2 style={{ color: '#D4AF37', fontSize: '20px', fontWeight: 'bold' }}>Your Gateway to Premium Elegance.</h2>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsView />} />
        
     
        <Route path="/products/:id" element={<ProductDetails />}>
          <Route path="overview" element={<div> This is the luxury design overview detail section.</div>} />
          <Route path="reviews" element={<div>5/5 Stars - Handcrafted premium durability materials.</div>} />
          <Route path="specifications" element={<div> Dimensions: Standard Fit | Material: Premium Craft.</div>} />
        </Route>
        
        <Route path="/cart" element={<CartView />} />
        <Route path="/login" element={<LoginView />} />
        
        <Route path="/checkout" element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        } />

        
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}