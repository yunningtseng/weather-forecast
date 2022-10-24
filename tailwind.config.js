/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5C969E', //深背景色
        secondary: '#1AA6B7', //深文字色
        third: '#3D7EA6', //內文文字
      },
      animation: {
        barChart: 'barChart 1s ease-in-out',
        // keyframes: {
        //   barChart: {
        //     '0%': { height: 0 },
        //   },
        // },
      },
    },
    screens: {
      xs: '360px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
  },
  plugins: [],
};
