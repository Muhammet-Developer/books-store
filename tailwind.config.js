/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: { max: '324px' },      
      ssm: { max: '500px' },      
      sm: { max: '639px' },
      md: { max: '768px' },
      mlg: { max: '960px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
      '2xl': { max: '1536px' },
    },
  },
  plugins: [],
};

