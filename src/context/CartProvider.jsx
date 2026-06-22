import { createContext, useState, useMemo, useCallback } from 'react';
import { getSubtotal, getShipping, getTax, getTotal } from '../services/cartService';
import { getProductById } from '../services/productService';

// eslint-disable-next-line react-refresh/only-export-components -- context and provider are intentionally co-located
export const CartContext = createContext(null);

const seedItem = (id, qty, detail) => {
  const product = getProductById(id);
  return {
    id: product.id,
    title: product.title,
    detail,
    price: product.price,
    image: product.image,
    qty,
  };
};

const INITIAL_ITEMS = [
  seedItem('hothands-warmers', 1, 'Value pack, 8 pairs'),
  seedItem('insulated-bottle', 2, '32oz, Steel'),
];

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const addToCart = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          detail: product.volume || '',
          price: product.price,
          image: product.image,
          qty,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))
    );
  }, []);

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQty,
      itemCount: items.reduce((sum, item) => sum + item.qty, 0),
      subtotal: getSubtotal(items),
      shipping: getShipping(items),
      tax: getTax(items),
      total: getTotal(items),
    }),
    [items, addToCart, removeFromCart, updateQty]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
