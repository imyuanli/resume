module.exports = {
  purge: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    ".src/pages/**/*.{js,ts,jsx,tsx}",
    ".src/components/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
