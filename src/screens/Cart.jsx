import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import { HomeIcon } from '../components/icons';
import Reveal from '../components/Reveal';
import cartBanner from '../assets/cart_banner.png';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQty, subtotal, shipping, tax, total } = useCart();

  return (
    <>
      <Header />
      <main className="container">
        <div className="cart-page-header">
          <h2 className="page-title">Shopping Cart ({items.length} Items)</h2>
          <Link to="/" className="home-link">
            <HomeIcon size={16} />
            Home
          </Link>
        </div>

        {items.length > 0 && (
          <Reveal>
            <img
              src={cartBanner}
              alt="Get $50 off instantly upon approval"
              className="cart-promo-banner"
            />
          </Reveal>
        )}

        <Reveal>
          <div className="split-layout">
          {/* Left: Cart Items */}
          <div className="box-panel">
            {items.length === 0 && <p>Your cart is empty.</p>}

            {items.map((item, index) => (
              <div
                className="cart-item"
                key={item.id}
                style={
                  index === items.length - 1
                    ? { borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }
                    : undefined
                }
              >
                <div className="cart-item-info">
                  <div className="cart-item-img">
                    {item.image && <img src={item.image} alt={item.title} />}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '5px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      {item.detail}
                    </p>
                  </div>
                </div>
                <div className="cart-item-price">{formatCurrency(item.price)}</div>
                <div className="cart-item-qty">
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) => updateQty(item.id, Number(e.target.value))}
                  />
                </div>
                <div>
                  <button
                    style={{ border: 'none', background: 'transparent', color: 'red', cursor: 'pointer' }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✖ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="box-panel">
            <h3 style={{ marginBottom: '25px' }}>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping Estimate</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>{formatCurrency(tax)}</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <button
              className="btn-orange"
              style={{ width: '100%', marginTop: '25px', padding: '15px', fontSize: '1.1rem' }}
              disabled={items.length === 0}
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>
          </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
