/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      platinum: "var(--color-platinum)",
      raisinblack: 'var(--color-raisinblack)',
      night: 'var(--color-night)',
      amaranth: 'var(--color-amaranth)',
    },
  },
};
