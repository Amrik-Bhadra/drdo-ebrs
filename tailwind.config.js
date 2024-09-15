/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html, ejs}", "./public/components/**/*.{js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define a custom font family
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      },
      boxShadow: {
        'shadow1': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
    },
  },
  plugins: [],
}

