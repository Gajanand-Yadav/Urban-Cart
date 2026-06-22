import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import Reveal from '../components/Reveal';
import './Checkout.css';

const Checkout = () => {
  const { items, subtotal, shipping, tax, total } = useCart();

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="page-title">Complete Your Order</h2>

        <Reveal>
          <div className="split-layout">
          {/* Left: Forms */}
          <div>
            {/* Shipping Address */}
            <div className="box-panel" style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '20px' }}>1. Shipping Address</h3>
              <div className="form-row">
                <div className="checkout-form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="checkout-form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="checkout-form-group">
                <label>Street Address</label>
                <input type="text" placeholder="123 Main Street" />
              </div>
              <div className="form-row">
                <div className="checkout-form-group">
                  <label>City</label>
                  <input type="text" placeholder="New York" />
                </div>
                <div className="checkout-form-group">
                  <label>Zip Code</label>
                  <input type="text" placeholder="10001" />
                </div>
              </div>
              <div className="checkout-form-group">
                <label>Country</label>
                <select>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                </select>
              </div>
            </div>

            {/* Payment Details */}
            <div className="box-panel">
              <h3 style={{ marginBottom: '20px' }}>2. Payment Method</h3>
              <div
                className="checkout-form-group"
                style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}
              >
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input type="radio" name="payment" defaultChecked /> Credit Card
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input type="radio" name="payment" /> PayPal
                </label>
              </div>

              <div className="checkout-form-group">
                <label>Card Number</label>
                <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
              </div>
              <div className="form-row">
                <div className="checkout-form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="checkout-form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="123" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Final Summary */}
          <div className="box-panel">
            <h3 style={{ marginBottom: '25px' }}>Order Summary</h3>

            <div
              style={{
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '15px',
                marginBottom: '15px',
              }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    fontSize: '0.9rem',
                  }}
                >
                  <span>
                    {item.qty}x {item.title}
                  </span>
                  <strong>{formatCurrency(item.price * item.qty)}</strong>
                </div>
              ))}
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>{formatCurrency(tax)}</span>
            </div>

            <div className="summary-total">
              <span>Total USD</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <button
              className="btn-orange"
              style={{
                width: '100%',
                marginTop: '25px',
                padding: '15px',
                fontSize: '1.1rem',
                background: '#28a745',
              }}
            >
              Place Order
            </button>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginTop: '15px',
              }}
            >
              By placing your order, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
