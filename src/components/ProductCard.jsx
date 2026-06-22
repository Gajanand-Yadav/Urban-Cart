import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';
import { useWishlist } from '../hooks/useWishlist';
import { HeartIcon } from './icons';
import ratingImg from '../assets/rating_img.png';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const saved = isWishlisted(product.id);

  const handleWishlistClick = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(product);
    },
    [product, toggleWishlist]
  );

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-img">
        <button
          className={`wishlist-btn ${saved ? 'is-active' : ''}`}
          onClick={handleWishlistClick}
          aria-label={
            saved
              ? 'Remove from wishlist'
              : 'Add to wishlist'
          }
        >
          <HeartIcon size={16} filled={saved} />
        </button>

        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <p className="product-title">
        {product.shortTitle || product.title}
      </p>

      {product.rating && (
        <div className="product-rating">
          <img
            src={ratingImg}
            alt={`${product.rating} stars`}
            loading="lazy"
          />
          <span>
            ({product.reviews?.toLocaleString() ?? 0})
          </span>
        </div>
      )}

      <div className="product-meta">
        <span>{product.category}</span>
        <span className="product-price">
          {formatCurrency(product.price)}
        </span>
      </div>
    </Link>
  );
};

export default memo(ProductCard);