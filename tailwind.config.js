/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#e2c81b',
        primaryDark: '#a89010',
        secondary: '#DEDDD5',
        secondaryLight: '#F5F4F4',
        font: '#28282C',
      }
    },
  },
  plugins: [],
}

