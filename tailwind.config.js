/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        lg: '32px',
        xl: '32px',
        '2xl': '100px',
      },
      // padding: '100px',
    },
    fontSize: {
      sm: '12px',
      md: '14px',
      base: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        mainFont: ['Plus Jakarta Sans', 'sans-serif'],
        accentFont: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        mainWhite: '#FFFFFF',
        mainBlack: '#000000',
        accentGray: '#F0F0F0',
        blackOpacity: '#00000099',
      },
      backgroundImage: {
        checkbox: "url('./src/images/symbol-defs.svg#icon-chackbox')",
      },
      width: {
        modal: 'calc(100%-32px0)',
        xs: 'calc(50% - 1px)',
        sm: 'calc(50% - 8px)',
        md: 'calc(50% - 10px)',
      },
    },
    padding: {
      mainSide: '100px',
    },
    screens: {
      spec: { max: '365px' },
      xxs: { max: '479px' },
      xs: { max: '767px' },
      sm: { min: '480px', max: '767px' },
      xl: { min: '768px' },
      md: { min: '768px', max: '1439px' },
      lg: { min: '1440px' },
    },
  },
  plugins: [],
};
