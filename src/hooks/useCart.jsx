import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

/**
 * Convenience hook so screens/components never need to import
 * CartContext + useContext directly.
 */
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
};
