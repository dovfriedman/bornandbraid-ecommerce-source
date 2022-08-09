module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('https://res.cloudinary.com/sequoia/image/upload/c_scale,w_400/v1642463318/bornandbraid.com/fstcfbvlq9dllf5jwdy4.png')",
      },
      colors: {
        'b-and-b-blue': {
          100: '#121E46',
          200: '#162657',
          300: '#1A2D68',
          400: '#1F357A',
          500: '#233c8b',
          600: '#3F549A',
          700: '#5A6DA8',
          800: '#7685B7',
          900: '#919EC5',
        },
      },
      fontFamily: {
        serif: ['Bitter', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};
