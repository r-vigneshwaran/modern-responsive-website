module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      sl: '480px',
      md: '568px',
      ml: '650px',
      mm: '775px',
      ms: '850px',
      mxl: '900px',
      mx: '975px',
      lg: '1150px',
      lm: '1270px',
      xl: '1346px',
      '2xl': '1500px',
      '3xl': '2000px'
    },
    extend: {
      colors: {
        primary: '#dcca87'
      },
      letterSpacing: {
        primary: '0.04em'
      }
    }
  },
  plugins: []
};
