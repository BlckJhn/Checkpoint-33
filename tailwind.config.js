/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // This is how you include flowbite's content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // Properly include the plugin
  ],
}
