/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        aachen: {
          blue: '#003D73',
          gold: '#C8A951',
          light: '#E8F0F9',
        }
      }
    }
  },
  plugins: [],
}
