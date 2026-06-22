import { createContext, useState, useMemo, useCallback } from 'react';

// eslint-disable-next-line react-refresh/only-export-components -- context and provider are intentionally co-located
export const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const isWishlisted = useCallback((id) => items.some((item) => item.id === id), [items]);

  const toggleWishlist = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemCount: items.length,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
    }),
    [items, isWishlisted, toggleWishlist, removeFromWishlist]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};
