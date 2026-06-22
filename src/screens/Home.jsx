import { useEffect, useMemo} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import HeroCarousel from '../components/HeroCarousel';
import PromoRotator from '../components/PromoRotator';
import SupplierSlider from '../components/SupplierSlider';
import Reveal from '../components/Reveal';
import {
  getMostViewedProducts,
  getProductsByCategory,
  getProductById,
} from '../services/productService';
import { getTopSuppliers } from '../services/supplierService';
import { goToSection } from '../utils/goToSection';
import './Home.css';

import heroImage from '../assets/hero_image.jpg';
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';
import header3 from '../assets/header3.jpg';
import header4 from '../assets/header4.jpg';
import header5 from '../assets/header5.jpg';
import header6 from '../assets/header6.jpg';

import box1_1 from '../assets/box1-1.jpg';
import box1_2 from '../assets/box1-2.jpg';
import box1_3 from '../assets/box1-3.jpg';
import box1_4 from '../assets/box1-4.jpg';
import box2_1 from '../assets/box2-1.jpg';
import box2_2 from '../assets/box2-2.jpg';
import box2_3 from '../assets/box2-3.jpg';
import box2_4 from '../assets/box2-4.jpg';
import box3_1 from '../assets/box3-1.jpg';
import box3_2 from '../assets/box3-2.jpg';
import box3_3 from '../assets/box3-3.jpg';
import box3_4 from '../assets/box3-4.jpg';

const HERO_SLIDES = [heroImage, header1, header2, header3, header4, header5, header6];
const PROMO_SETS = [
  { label: 'Top Gift Ideas', images: [box1_1, box1_2, box1_3, box1_4], target: 'most-viewed' },
  { label: 'Daily Essentials', images: [box2_1, box2_2, box2_3, box2_4], target: 'electronics' },
  { label: 'Work & Play', images: [box3_1, box3_2, box3_3, box3_4], target: 'sports' },
];

const sideBannerOne = getProductById('insulated-tumbler');
const sideBannerTwo = getProductById('swim-set');

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mostViewed = useMemo(() => getMostViewedProducts(), []);

  const electronics = useMemo(
    () => getProductsByCategory('Electronics'),
    []
  );

  const sports = useMemo(
    () => getProductsByCategory('Sports'),
    []
  );

  const suppliers = useMemo(
    () => getTopSuppliers(),
    []
  );

  // If we arrived here from the category drawer (or a promo tile) on
  // another page, scroll to the requested section once mounted.
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <main className="container">
        {/* HERO SECTION */}
        <Reveal>
          <section className="hero-section">
            <div className="main-banner">
              <HeroCarousel slides={HERO_SLIDES} />
            </div>

            <div className="side-banners">
              <Link to={`/product/${sideBannerOne.id}`} className="side-banner-card">
                <img src={sideBannerOne.image} alt={sideBannerOne.title} />
                <span className="btn-orange">View More</span>
              </Link>
              <Link to={`/product/${sideBannerTwo.id}`} className="side-banner-card">
                <img src={sideBannerTwo.image} alt={sideBannerTwo.title} />
                <span className="btn-orange">View More</span>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* ROTATING CATEGORY PROMOS */}
        <Reveal>
          <section className="promo-row">
            {PROMO_SETS.map((set) => (
              <PromoRotator
                key={set.label}
                label={set.label}
                images={set.images}
                onClick={() => goToSection(navigate, location.pathname, set.target)}
              />
            ))}
          </section>
        </Reveal>

        {/* MOST VIEWED PRODUCTS */}
        <Reveal>
          <h2 className="section-title" id="most-viewed">
            Most Viewed Products
          </h2>
          <section className="product-grid">
            {mostViewed.map((product, i) => (
              <Reveal key={product.id} delay={i * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </section>
        </Reveal>

        {/* ELECTRONICS */}
        <Reveal>
          <h2 className="section-title" id="electronics">
            Electronics
          </h2>
          <section className="product-grid">
            {electronics.map((product, i) => (
              <Reveal key={product.id} delay={i * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </section>
        </Reveal>

        {/* SPORTS & OUTDOORS */}
        <Reveal>
          <h2 className="section-title" id="sports">
            Sports & Outdoors
          </h2>
          <section className="product-grid">
            {sports.map((product, i) => (
              <Reveal key={product.id} delay={i * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </section>
        </Reveal>

        {/* TOP SUPPLIERS */}
        <Reveal>
          <h2 className="section-title" id="suppliers">
            Top Suppliers
          </h2>
          <SupplierSlider suppliers={suppliers} />
        </Reveal>
      </main>
      <Footer />
    </>
  );
};

export default Home;
