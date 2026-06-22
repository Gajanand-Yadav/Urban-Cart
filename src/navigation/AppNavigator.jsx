import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../screens/Home'));
const Cart = lazy(() => import('../screens/Cart'));
const Checkout = lazy(() => import('../screens/Checkout'));
const Login = lazy(() => import('../screens/Login'));
const Register = lazy(() => import('../screens/Register'));
const Wishlist = lazy(() => import('../screens/Wishlist'));
const Profile = lazy(() => import('../screens/Profile'));
const ProductDetail = lazy(() =>
  import('../screens/ProductDetail')
);

const AppNavigator = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            fontSize: '18px',
          }}
        >
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppNavigator;