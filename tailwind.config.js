module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif']
      },
      colors: {
        ink: '#08111f',
        lagoon: '#0fb5a3',
        saffron: '#f5a524',
        cobalt: '#3157ff'
      }
    }
  },
  plugins: []
};
