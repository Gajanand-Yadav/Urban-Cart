export const CartIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1.4" fill="currentColor" stroke="none" />
    <circle cx="18" cy="21" r="1.4" fill="currentColor" stroke="none" />
    <path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
  </svg>
);

export const HeartIcon = ({ size = 22, filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20.5s-7.5-4.6-10-9.3C0.3 7.8 1.7 4 5.4 3.2c2.2-0.5 4.3 0.6 5.6 2.5 1.3-1.9 3.4-3 5.6-2.5 3.7 0.8 5.1 4.6 3.4 8-2.5 4.7-10 9.3-10 9.3z" />
  </svg>
);

export const HomeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 9.5V20h13V9.5" />
  </svg>
);

export const CloseIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const SunIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2.5v2.7M12 18.8v2.7M4.2 4.2l1.9 1.9M17.9 17.9l1.9 1.9M2.5 12h2.7M18.8 12h2.7M4.2 19.8l1.9-1.9M17.9 6.1l1.9-1.9" />
  </svg>
);

export const MoonIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.2 14.6A8.5 8.5 0 1 1 9.4 3.8a7 7 0 0 0 10.8 10.8z" />
  </svg>
);
