/**
 * Mock supplier directory. Real photography wasn't available for this
 * demo, so each supplier renders as an initials badge instead of a logo.
 */
const SUPPLIERS = [
  { id: 1, name: 'Northwind Outdoor Co.', category: 'Sports & Outdoors', years: 8, rating: 4.8, verified: true },
  { id: 2, name: 'Brightline Electronics', category: 'Electronics', years: 12, rating: 4.7, verified: true },
  { id: 3, name: 'Little Acorn Baby Co.', category: 'Baby & Kids', years: 5, rating: 4.9, verified: true },
  { id: 4, name: 'Summit Gear Supply', category: 'Sports & Outdoors', years: 10, rating: 4.6, verified: true },
  { id: 5, name: 'Pixel & Wire Tech', category: 'Electronics', years: 6, rating: 4.5, verified: false },
  { id: 6, name: 'Cloudnine Nursery', category: 'Baby & Kids', years: 4, rating: 4.8, verified: true },
  { id: 7, name: 'Trailblazer Supply Co.', category: 'Sports & Outdoors', years: 9, rating: 4.7, verified: true },
  { id: 8, name: 'Circuit & Co.', category: 'Electronics', years: 7, rating: 4.6, verified: true },
];

export const getTopSuppliers = () => SUPPLIERS;
