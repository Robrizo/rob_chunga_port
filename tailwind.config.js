/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' }
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        }
      },
      animation: {
        scale: 'scale 2s ease-in-out infinite',
        blink: 'blink 1s step-end infinite'
      },
      colors: {
        primaryColor: '#00B8FF',
        secondaryColor: '#001F2B',
        shadesOfBlue: 'rgba(0, 113, 156, 1)', // Fixing the color definition
        mainGray: '#e5e5e5'
      }
    }
  },
  plugins: [require('preline/plugin'), require('flowbite/plugin')]
}

