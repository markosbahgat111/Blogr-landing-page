module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circles': "url('/src/assets/images/bg-pattern-circles.svg')"
      },
      screens: {
        desktop: { 'min': '1000px', 'max': '4000px' },
        sm:{'max': '640px'}
      }
    },
  },
  plugins: [],
}
