module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'full-typeface': ['Josefin Sans', 'sans-serif'],
        regular: ['Lato', 'sans-serif'],
      },
      colors: {
        pink: '#FB2E86',
        'off-navy-blue': '#3F509E',
        'navy-blue': '#151875',
        purple: '#7E33E0',
        'off-purple': '#9F63B5',
        red: '#FB2448',
        blue: '#2F1AC4',
        'pantone-purple': '#E0D3F5',
        'off-blue': '#151875',
        'sky-blue': '#F3F9FF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
