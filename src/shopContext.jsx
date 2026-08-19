
import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); 
  const [filters, setFilters] = useState({ search: '' });

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <ShopContext.Provider value={{ cart, user, filters, setFilters, addToCart, removeFromCart, login, logout }}>
      {children}
    </ShopContext.Provider>
  );
};