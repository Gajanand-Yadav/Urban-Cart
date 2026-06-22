import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { getProductById, getRelatedProducts } from '../services/productService';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { HeartIcon } from '../components/icons';
import { formatCurrency } from '../utils/formatCurrency';
import ratingImg from '../assets/rating_img.png';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const product = getProductById(id);
  const related = getRelatedProducts(product);
  const [qty, setQty] = useState(1);
  const saved = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, qty);
    navigate('/cart');
  };

  return (
    <>
      <Header />
      <main className="container">
        <div className="product-detail-wrapper">
          {/* Left: Product Image */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="product-info">
            <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>
              {product.category}
            </p>
            <h1>{product.title}</h1>

            <div className="product-rating-row">
              <img src={ratingImg} alt={`${product.rating ?? '4.8'} stars`} />
              <span>{product.rating ?? '4.8'}</span>
              <span>|</span>
              <span>{(product.reviews ?? 120).toLocaleString()} Reviews</span>
              <span>|</span>
              <span>{(product.orders ?? 340).toLocaleString()} Orders</span>
            </div>

            <div className="price-large">{formatCurrency(product.price)}</div>

            <p style={{ marginBottom: '30px', lineHeight: '1.6', color: '#555' }}>
              {product.description ||
                'A reliable everyday pick, backed by thousands of happy customers.'}
            </p>

            <div className="product-options">
              <label>Quantity:</label>
              <input
                type="number"
                value={qty}
                min="1"
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              />
            </div>

            <div className="action-buttons">
              <button
                className={`btn-outline ${saved ? 'is-active' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                <HeartIcon size={16} filled={saved} />
                {saved ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
              <button className="btn-orange" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            <div
              style={{
                marginTop: '30px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-color)',
                fontSize: '0.9rem',
                color: '#555',
              }}
            >
              <p>
                🚚 <strong>Shipping:</strong> Ships within 48 hours.
              </p>
              <p style={{ marginTop: '10px' }}>
                🛡️ <strong>Buyer Protection:</strong> 30-day return guarantee.
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <Reveal>
            <h2 className="section-title">You may also like</h2>
            <section className="product-grid" style={{ marginBottom: '60px' }}>
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </section>
          </Reveal>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
