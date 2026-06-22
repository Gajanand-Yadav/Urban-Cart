import gamingHeadset from '../assets/product_img.jpg';
import ipad from '../assets/ipad_img.jpg';
import smartphone from '../assets/box2-2.jpg';
import smartTv from '../assets/box3-4.jpg';

import handWarmers from '../assets/product1-7.jpg';
import dumbbells from '../assets/product1-2.jpg';
import skiGoggles from '../assets/product1-3.jpg';
import skiHelmet from '../assets/product1-6.jpg';
import waterBottle from '../assets/product1-9.jpg';
import fireBlanket from '../assets/product1-4.jpg';
import insulatedTumbler from '../assets/product1-5.jpg';

import babyBodysuits from '../assets/product2-1.jpg';
import dinoPajamas from '../assets/product2-4.jpg';
import storybook from '../assets/product2-6.jpg';
import weeklyPlanner from '../assets/product2-8.jpg';
import swimSet from '../assets/product2-2.jpg';

/**
 * Mock product catalog service.
 * In a real app these functions would call a backend API.
 * Swapping the implementation here is enough to plug in real data later.
 */

const PRODUCTS = [
  // ---- Electronics ----
  {
    id: 'gaming-headset',
    title: 'BENGOO G9000 Pro Gaming Headset with Noise-Cancelling Mic',
    shortTitle: 'BENGOO G9000 Pro Gaming Headset...',
    category: 'Electronics',
    price: 29.99,
    image: gamingHeadset,
    rating: 4.6,
    reviews: 2840,
    orders: 9100,
    description:
      'Surround-sound gaming headset with a noise-cancelling microphone, LED lighting, and a padded headband built for long sessions across PC, PS4/PS5, and Xbox.',
  },
  {
    id: 'ipad-9th-gen',
    title: 'Apple iPad 10.2-inch (9th Generation), Wi-Fi, 64GB',
    shortTitle: 'Apple iPad 10.2-inch (9th Gen)...',
    category: 'Electronics',
    price: 329.0,
    image: ipad,
    rating: 4.8,
    reviews: 15200,
    orders: 41000,
    description:
      'The 10.2-inch Retina display, A13 Bionic chip, and all-day battery life make this iPad fast enough for everything from browsing to light editing.',
  },
  {
    id: 'galaxy-smartphone',
    title: 'Galaxy Ultra Smartphone, 256GB, Unlocked',
    shortTitle: 'Galaxy Ultra Smartphone, 256GB...',
    category: 'Electronics',
    price: 899.0,
    image: smartphone,
    rating: 4.7,
    reviews: 6400,
    orders: 12300,
    description:
      'A flagship smartphone with a pro-grade camera system, all-day battery, and a smooth high-refresh display for gaming, photos, and everything in between.',
  },
  {
    id: 'smart-tv-bundle',
    title: '55" 4K Smart TV + Streaming Game Console Bundle',
    shortTitle: '55" 4K Smart TV + Game Console...',
    category: 'Electronics',
    price: 399.0,
    image: smartTv,
    rating: 4.5,
    reviews: 1870,
    orders: 3200,
    description:
      'Turn movie night into an event with a crisp 4K smart display, paired here with a streaming game console controller for built-in entertainment.',
  },

  // ---- Sports & Outdoors ----
  {
    id: 'hothands-warmers',
    title: 'HotHands Hand Warmers Value Pack, Long Lasting Heat',
    shortTitle: 'HotHands Hand Warmers Value Pack...',
    category: 'Sports',
    price: 9.99,
    image: handWarmers,
    rating: 4.8,
    reviews: 9300,
    orders: 26000,
    description:
      'Air-activated, odorless hand warmers that provide up to 10 hours of soothing heat — ideal for skiing, hiking, hunting, or just a cold commute.',
  },
  {
    id: 'neoprene-dumbbells',
    title: '10 LB Neoprene Coated Dumbbell Set (Pair)',
    shortTitle: '10 LB Neoprene Dumbbell Set (Pair)...',
    category: 'Sports',
    price: 24.5,
    image: dumbbells,
    rating: 4.7,
    reviews: 3100,
    orders: 8400,
    description:
      'A soft-grip neoprene coating protects your floors and your hands, making this pair a great addition to any home strength routine.',
  },
  {
    id: 'ski-goggles',
    title: 'Anti-Fog UV-Protective Snow Ski Goggles',
    shortTitle: 'Anti-Fog UV-Protective Ski Goggles...',
    category: 'Sports',
    price: 19.99,
    image: skiGoggles,
    rating: 4.6,
    reviews: 1450,
    orders: 5200,
    description:
      'Wide-vision anti-fog lenses with full UV protection, designed to fit comfortably over glasses on the slopes or the trail.',
  },
  {
    id: 'ski-helmet',
    title: 'OutdoorMaster Ski & Snowboard Helmet',
    shortTitle: 'OutdoorMaster Ski & Snowboard Helmet...',
    category: 'Sports',
    price: 44.99,
    image: skiHelmet,
    rating: 4.8,
    reviews: 2670,
    orders: 7100,
    description:
      'Lightweight ABS shell with adjustable ventilation and a removable liner, built to keep you safe and comfortable on every run.',
  },
  {
    id: 'insulated-bottle',
    title: 'Insulated Stainless Steel Water Bottle, 32oz',
    shortTitle: 'Insulated Stainless Steel Bottle, 32oz...',
    category: 'Sports',
    price: 27.0,
    image: waterBottle,
    rating: 4.7,
    reviews: 4200,
    orders: 11000,
    description:
      'Double-wall vacuum insulation keeps drinks cold for 24 hours or hot for 12 — a daily carry for the gym, trail, or office.',
  },
  {
    id: 'fire-blanket',
    title: 'Prepared Hero Emergency Fire Blanket',
    shortTitle: 'Prepared Hero Emergency Fire Blanket...',
    category: 'Sports',
    price: 16.95,
    image: fireBlanket,
    rating: 4.9,
    reviews: 980,
    orders: 2600,
    description:
      'A compact, easy-pull fire suppression blanket for the kitchen, garage, or campsite — simple enough to use under pressure.',
  },

  // ---- Baby & Kids ----
  {
    id: 'baby-bodysuits',
    title: "Baby Boys' 4-Pack Long-Sleeve Bodysuits",
    shortTitle: "Baby Boys' 4-Pack Long-Sleeve Bodysuits...",
    category: 'Baby',
    price: 18.99,
    image: babyBodysuits,
    rating: 4.8,
    reviews: 5300,
    orders: 14200,
    description:
      'Soft, breathable cotton bodysuits in everyday stripes and solids, with easy snap closures for quick changes.',
  },
  {
    id: 'dino-pajama-set',
    title: 'Toddler Dino-Print 2-Piece Pajama Set',
    shortTitle: 'Toddler Dino-Print Pajama Set...',
    category: 'Baby',
    price: 14.99,
    image: dinoPajamas,
    rating: 4.7,
    reviews: 1890,
    orders: 4100,
    description:
      'Snug-fit cotton pajamas with a playful dinosaur print, designed for comfortable sleep and easy bedtime routines.',
  },
  {
    id: 'kids-storybook',
    title: 'Crossroads of Destiny Cooperative Adventure Game',
    shortTitle: 'Crossroads of Destiny Adventure Game...',
    category: 'Baby',
    price: 9.99,
    image: storybook,
    rating: 4.9,
    reviews: 760,
    orders: 1500,
    description:
      'A cooperative adventure game for 2-4 players, ages 10+ — an easy pick-up-and-play option for family game night.',
  },
  {
    id: 'weekly-planner',
    title: 'Floral 52-Week Daily Planner & Journal',
    shortTitle: 'Floral 52-Week Daily Planner...',
    category: 'Baby',
    price: 12.99,
    image: weeklyPlanner,
    rating: 4.8,
    reviews: 2200,
    orders: 5600,
    description:
      'An undated weekly planner with space for goals, notes, and habit tracking — a sweet gift alongside any kids or family bundle.',
  },

  // ---- Featured in homepage banners ----
  {
    id: 'insulated-tumbler',
    title: 'Insulated Tumbler with Handle & Straw, 40oz',
    shortTitle: 'Insulated Tumbler with Handle, 40oz...',
    category: 'Sports',
    price: 32.99,
    image: insulatedTumbler,
    rating: 4.8,
    reviews: 7600,
    orders: 21000,
    description:
      'A double-wall insulated tumbler with a comfortable carry handle and reusable straw — keeps drinks cold for hours on the go.',
  },
  {
    id: 'swim-set',
    title: "Baby Boys' 2-Piece Rash Guard & Swim Trunks Set",
    shortTitle: "Baby Boys' Rash Guard & Swim Set...",
    category: 'Baby',
    price: 16.99,
    image: swimSet,
    rating: 4.7,
    reviews: 1340,
    orders: 3700,
    description:
      'UPF-rated rash guard paired with quick-dry swim trunks — built for pool days, beach trips, and everything in between.',
  },
];

export const getProducts = () => PRODUCTS;

export const getProductsByCategory = (category) =>
  PRODUCTS.filter((product) => product.category === category);

export const getProductById = (id) =>
  PRODUCTS.find((product) => product.id === id) || PRODUCTS[0];

// A curated "most viewed" list spanning every category, used on the homepage.
const MOST_VIEWED_IDS = [
  'ipad-9th-gen',
  'gaming-headset',
  'baby-bodysuits',
  'hothands-warmers',
  'ski-helmet',
  'dino-pajama-set',
];

export const getMostViewedProducts = () =>
  MOST_VIEWED_IDS.map((id) => getProductById(id));

export const getRelatedProducts = (product, limit = 3) =>
  PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(
    0,
    limit
  );
