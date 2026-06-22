import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { CartIcon, HeartIcon, SunIcon, MoonIcon } from './icons';
import CategoryDrawer from './CategoryDrawer';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';
import searchIcon from '../assets/search_icon.png';
import userIcon from '../assets/user.png';
import dropdownIcon from '../assets/dropdown_icon.png';
import locationIconDark from '../assets/location_icon_dark.png';
import usFlag from '../assets/us_flag.png';
import './Header.css';

const Header = () => {
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const { isLoggedIn } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container main-header-inner">
          <Link to="/" className="logo" aria-label="UrbanCart home">
            <img src={theme === 'dark' ? logoDark : logo} alt="UrbanCart" className="logo-img" />
          </Link>

          <button type="button" className="header-location">
            <img src={locationIconDark} alt="" className="icon-img" />
            <span className="header-location-text">
              <small>Deliver to</small>
              <strong>New York 10001</strong>
            </span>
          </button>

          <div className="search-bar">
            <button
              type="button"
              className="search-category-trigger"
              onClick={() => setDrawerOpen(true)}
            >
              <span>{selectedCategory}</span>
              <img src={dropdownIcon} alt="" className="icon-img icon-img-tiny" />
            </button>
            <input type="text" placeholder="What are you looking for..." />
            <button aria-label="Search">
              <img src={searchIcon} alt="" className="icon-img" />
            </button>
          </div>

          <button type="button" className="header-language">
            <img src={usFlag} alt="" className="icon-img icon-img-round" />
            <span>EN</span>
            <img src={dropdownIcon} alt="" className="icon-img icon-img-tiny" />
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon size={19} /> : <MoonIcon size={19} />}
          </button>

          <div className="user-actions">
            {isLoggedIn ? (
              <Link to="/profile" className="action-item account-pill">
                <span className="account-avatar">
                  <img src={userIcon} alt="" className="icon-img" />
                </span>
                <span className="action-label">Account</span>
              </Link>
            ) : (
              <Link to="/login" className="action-item account-pill">
                <span className="account-avatar">
                  <img src={userIcon} alt="" className="icon-img" />
                </span>
                <span className="action-label">Sign In</span>
              </Link>
            )}
            <Link to="/wishlist" className="action-item cart-link">
              <HeartIcon size={22} />
              <span className="action-label">Wishlist</span>
              {wishlistCount > 0 && <span className="cart-badge">{wishlistCount}</span>}
            </Link>
            <Link to="/cart" className="action-item cart-link">
              <CartIcon size={22} />
              <span className="action-label">Cart</span>
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      <CategoryDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelect={setSelectedCategory}
      />
    </>
  );
};

export default Header;
