import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import { getOrders } from '../services/orderService';
import { formatCurrency } from '../utils/formatCurrency';
import Reveal from '../components/Reveal';
import './Profile.css';

const TABS = ['Orders', 'Addresses', 'Payment Methods', 'Account Details'];

const ADDRESSES = [
  {
    id: 1,
    label: 'Home',
    name: 'Jordan Lee',
    line: '128 Maple Street, Apt 4B',
    city: 'New York, NY 10001',
    phone: '(212) 555-0142',
    isDefault: true,
  },
  {
    id: 2,
    label: 'Work',
    name: 'Jordan Lee',
    line: '450 Park Avenue, Floor 9',
    city: 'New York, NY 10022',
    phone: '(212) 555-0199',
    isDefault: false,
  },
];

const CARDS = [
  { id: 1, brand: 'Visa', last4: '4242', expiry: '08/28', isDefault: true },
  { id: 2, brand: 'Mastercard', last4: '8821', expiry: '11/27', isDefault: false },
];

const OrdersTab = () => {
  const orders = getOrders();
  return (
    <div className="profile-panel">
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-card-header">
            <div>
              <p className="order-id">Order #{order.id}</p>
              <p className="order-date">{order.date}</p>
            </div>
            <span className={`order-status order-status-${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>
          <div className="order-items">
            {order.items.map((item) => (
              <img key={item.id} src={item.image} alt={item.title} className="order-item-img" />
            ))}
          </div>
          <div className="order-card-footer">
            <span>{order.items.length} item(s)</span>
            <strong>{formatCurrency(order.total)}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

const AddressesTab = () => (
  <div className="profile-panel">
    {ADDRESSES.map((address) => (
      <div key={address.id} className="info-card">
        <div className="info-card-header">
          <span className="info-card-label">
            {address.label}
            {address.isDefault && <span className="default-badge">Default</span>}
          </span>
          <div className="info-card-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <p>{address.name}</p>
        <p>{address.line}</p>
        <p>{address.city}</p>
        <p>{address.phone}</p>
      </div>
    ))}
    <button className="btn-outline add-new-btn">+ Add New Address</button>
  </div>
);

const PaymentTab = () => (
  <div className="profile-panel">
    {CARDS.map((card) => (
      <div key={card.id} className="info-card">
        <div className="info-card-header">
          <span className="info-card-label">
            {card.brand} •••• {card.last4}
            {card.isDefault && <span className="default-badge">Default</span>}
          </span>
          <div className="info-card-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <p>Expires {card.expiry}</p>
      </div>
    ))}
    <button className="btn-outline add-new-btn">+ Add New Card</button>
  </div>
);

const AccountTab = ({ user }) => (
  <div className="profile-panel">
    <form className="account-form" onSubmit={(e) => e.preventDefault()}>
      <div className="account-form-row">
        <div className="account-form-group">
          <label>Full Name</label>
          <input type="text" defaultValue={user.name} />
        </div>
        <div className="account-form-group">
          <label>Email Address</label>
          <input type="email" defaultValue={user.email} />
        </div>
      </div>
      <div className="account-form-row">
        <div className="account-form-group">
          <label>Phone Number</label>
          <input type="tel" defaultValue="(212) 555-0142" />
        </div>
        <div className="account-form-group">
          <label>Date of Birth</label>
          <input type="text" defaultValue="04/15/1994" />
        </div>
      </div>
      <button type="submit" className="btn-orange">
        Save Changes
      </button>
    </form>
  </div>
);

const SignedOutPrompt = () => (
  <div className="profile-signed-out box-panel">
    <p className="signed-out-title">You're not signed in</p>
    <p className="signed-out-text">
      Sign in to view your orders, saved addresses, payment methods, and account details.
    </p>
    <div className="signed-out-actions">
      <Link to="/login" className="btn-orange">
        Sign In
      </Link>
      <Link to="/register" className="btn-outline">
        Create Account
      </Link>
    </div>
  </div>
);

const Profile = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Orders');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Orders':
        return <OrdersTab />;
      case 'Addresses':
        return <AddressesTab />;
      case 'Payment Methods':
        return <PaymentTab />;
      default:
        return <AccountTab user={user} />;
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="page-title">My Profile</h2>

        {!isLoggedIn ? (
          <Reveal>
            <SignedOutPrompt />
          </Reveal>
        ) : (
          <Reveal>
            <div className="profile-layout">
              <aside className="profile-sidebar">
                <div className="profile-identity">
                  <div className="profile-avatar">
                    {user.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <p className="profile-name">{user.name}</p>
                  <p className="profile-email">{user.email}</p>
                </div>
                <ul className="profile-tabs">
                  {TABS.map((tab) => (
                    <li key={tab}>
                      <button
                        className={tab === activeTab ? 'is-active' : ''}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </aside>

              <section className="profile-content">{renderTab()}</section>
            </div>
          </Reveal>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
