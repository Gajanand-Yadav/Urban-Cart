import { useEffect, useState } from 'react';
import './PromoRotator.css';

/**
 * A single promo tile that cycles through a small set of background
 * images on a timer, used in the 3-up "shop the look" row on the homepage.
 */
const PromoRotator = ({ label, images, intervalMs = 2600, onClick }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <button className="promo-card" onClick={onClick} type="button">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`promo-card-img ${i === index ? 'is-active' : ''}`}
        />
      ))}
      <div className="promo-card-overlay">
        <span className="promo-card-label">{label}</span>
        <span className="promo-card-cta">Shop now →</span>
      </div>
    </button>
  );
};

export default PromoRotator;
