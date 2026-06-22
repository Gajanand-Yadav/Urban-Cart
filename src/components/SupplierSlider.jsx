import ratingImg from '../assets/rating_img.png';
import circleIcon from '../assets/circle_icon.png';
import './SupplierSlider.css';

const initials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const SupplierCard = ({ supplier }) => (
  <div className="supplier-card">
    <div className="supplier-avatar">{initials(supplier.name)}</div>
    <div className="supplier-name-row">
      <span className="supplier-name">{supplier.name}</span>
      {supplier.verified && (
        <img src={circleIcon} alt="Verified supplier" className="icon-img icon-img-tiny" />
      )}
    </div>
    <p className="supplier-category">{supplier.category}</p>
    <img src={ratingImg} alt={`${supplier.rating} stars`} className="supplier-rating-img" />
    <p className="supplier-years">{supplier.years} years on UrbanCart</p>
  </div>
);

/**
 * Continuously auto-scrolling row of supplier cards. The list is
 * duplicated once so the CSS marquee animation can loop seamlessly.
 */
const SupplierSlider = ({ suppliers }) => {
  const looped = [...suppliers, ...suppliers];

  return (
    <div className="supplier-slider">
      <div className="supplier-track">
        {looped.map((supplier, i) => (
          <SupplierCard key={`${supplier.id}-${i}`} supplier={supplier} />
        ))}
      </div>
    </div>
  );
};

export default SupplierSlider;
