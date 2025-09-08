/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backdropBlur: {
        32: '32px',
        34: '34px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px', // older Windows laptops or smaller MacBooks
        '2xl': '1440px', // MacBook Air 14", premium Windows
        '3xl': '1920px', // Full HD Windows laptops or external monitors
      },
    },
  },
  plugins: [],
};
