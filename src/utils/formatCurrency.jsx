/**
 * Formats a number as a USD currency string, e.g. 21.04 -> "$21.04"
 */
export const formatCurrency = (amount) => {
  const value = Number(amount) || 0;
  return `$${value.toFixed(2)}`;
};
