import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { useWishlist } from '../hooks/useWishlist';
import './Wishlist.css';

const Wishlist = () => {
  const { items } = useWishlist();

  return (
    <>
      <Header />
      <main className="container">
        <h2 className="page-title">My Wishlist ({items.length})</h2>

        {items.length === 0 ? (
          <Reveal>
            <div className="box-panel empty-state">
              <p>You haven't saved anything yet.</p>
              <Link to="/" className="btn-orange" style={{ marginTop: '16px' }}>
                Browse Products
              </Link>
            </div>
          </Reveal>
        ) : (
          <section className="product-grid" style={{ marginBottom: '60px' }}>
            {items.map((product, i) => (
              <Reveal key={product.id} delay={i * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;
