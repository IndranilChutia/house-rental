/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ["Encode Sans"],
    },
    container: {
      padding: {
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
  },
  plugins: [],
}

