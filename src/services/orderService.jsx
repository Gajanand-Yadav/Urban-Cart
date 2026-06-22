import { getProductById } from './productService';

const ORDERS_RAW = [
  {
    id: 'UC-10532',
    date: 'June 2, 2026',
    status: 'Delivered',
    productIds: ['gaming-headset', 'insulated-tumbler'],
  },
  {
    id: 'UC-10487',
    date: 'May 21, 2026',
    status: 'Delivered',
    productIds: ['baby-bodysuits'],
  },
  {
    id: 'UC-10410',
    date: 'April 30, 2026',
    status: 'Cancelled',
    productIds: ['ski-helmet', 'ski-goggles'],
  },
  {
    id: 'UC-10355',
    date: 'April 12, 2026',
    status: 'Delivered',
    productIds: ['hothands-warmers', 'dino-pajama-set', 'kids-storybook'],
  },
];

export const getOrders = () =>
  ORDERS_RAW.map((order) => {
    const items = order.productIds.map((id) => getProductById(id));
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return { ...order, items, total };
  });
