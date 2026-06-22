import { useEffect, useState, useCallback } from 'react';
import './HeroCarousel.css';

/**
 * Auto-advancing hero carousel. Slides are full-bleed images (the
 * promotional text is already baked into each banner image).
 */
const HeroCarousel = ({ slides, intervalMs = 4500 }) => {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i) => setIndex((i + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), intervalMs);
    return () => clearInterval(timer);
  }, [index, goTo, intervalMs]);

  return (
    <div className="hero-carousel">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`hero-slide ${i === index ? 'is-active' : ''}`}
        />
      ))}

      <button
        className="hero-nav hero-nav-prev"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hero-nav hero-nav-next"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((src, i) => (
          <button
            key={src}
            className={`hero-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
