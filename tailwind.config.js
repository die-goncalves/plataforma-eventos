/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    screens: {
      'max-640px': { max: '640px' },
      sm: { min: '640px', max: '1024px' },
      lg: { min: '1024px', max: '1280px' }
    },
    listStyleType: {
      disc: 'disc',
      circle: 'circle',
      square: 'square',
      decimal: 'decimal',
      roman: 'upper-roman',
      alpha: 'lower-alpha'
    },
    extend: {
      keyframes: {
        'bar-progress': {
          from: {
            left: '-100px'
          },
          to: {
            left: '100%'
          }
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        }
      },
      animation: {
        'infinite-loading': 'bar-progress 1s linear infinite',
        'waving-hand': 'wave 2s linear infinite'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43'
        },
        blue: {
          500: '#81D8F7'
        },
        orange: {
          500: '#FBA94C'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      }
    }
  },
  plugins: []
}
