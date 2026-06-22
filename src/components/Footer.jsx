
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Our company</h4>
          <ul>
            <li>About us</li>
            <li>My Account</li>
            <li>Shop</li>
            <li>Charity</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li>Help & Support</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Return Policy</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Buy</h4>
          <ul>
            <li>All Categories</li>
            <li>Request for Quotation</li>
            <li>For Buyers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Sell</h4>
          <ul>
            <li>Start Selling</li>
            <li>Supplier Memberships</li>
            <li>For Suppliers</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: '40px',
          borderTop: '1px solid #555',
          paddingTop: '20px',
          fontSize: '0.85rem',
          color: '#aaa',
        }}
      >
        Copyright © 2026 UrbanCart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
