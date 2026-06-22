import { SHIPPING_ESTIMATE, TAX_RATE } from '../utils/constants';

/**
 * Pure cart math helpers, kept separate from React state (context/hooks)
 * so they're easy to unit test and reuse.
 */

export const getSubtotal = (items) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0);

export const getShipping = (items) => (items.length === 0 ? 0 : SHIPPING_ESTIMATE);

export const getTax = (items) => getSubtotal(items) * TAX_RATE;

export const getTotal = (items) =>
  getSubtotal(items) + getShipping(items) + getTax(items);
