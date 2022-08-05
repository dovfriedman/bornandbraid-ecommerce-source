/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('https://res.cloudinary.com/sequoia/image/upload/c_scale,w_400/v1642463318/bornandbraid.com/fstcfbvlq9dllf5jwdy4.png')",
      },
    },
  },
  plugins: [],
};
