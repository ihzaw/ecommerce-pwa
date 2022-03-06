

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: '#0ACF83',
        grey: {
          primary: '#BABABA',
          dark: '#7F7F7F',
          light: '#F3F3F3',
          lighter: '#F6F6F6',
        },
        yellow: {
          accent: '#FFC120'
        }
      },
      fontFamily: {
        dmsans: 'DM Sans, sans-serif'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')]
}
