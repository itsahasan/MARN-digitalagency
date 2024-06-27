/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '575px',
      'md': '768px',
      'tab': '720px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      'violet-blue-crayola': 'hsla(234, 50%, 64%, 1)',
      'dark-cornflower-blue_a7': 'hsla(214, 88%, 27%, 0.07)',
      'white': 'hsla(0, 0%, 100%, 1)',
      'white_a3': 'hsla(0, 0%, 100%, 0.03)',
      'white_a8': 'hsla(0, 0%, 100%, 0.08)',
      'white_a12': 'hsla(0, 0%, 100%, 0.12)',
      'white_a70': 'hsla(0, 0%, 100%, 0.7)',
      'cultured': 'hsla(220, 20%, 97%, 1)',
      'lavender-web': 'hsla(233, 52%, 94%, 1)',
      'cadet-blue-crayola': 'hsla(220, 12%, 70%, 1)',
      'cadet-blue-crayola_a20': 'hsla(222, 23%, 71%, 0.2)',
      'charcoal': 'hsla(218, 22%, 26%, 1)',
      'raisin-black': 'hsla(216, 14%, 14%, 1)',
      'light-gray': 'hsla(0, 0%, 79%, 1)',
      'blue-crayola': 'hsla(219, 72%, 56%, 1)',
      'black-coral': 'hsla(220, 12%, 43%, 1)',
    },
    extend: {
      boxshadow: {
        'shadow-1': '0 0 20px hsla(216, 14%, 14%, 0.05)',
        'shadow-2': '0 0 0 0.05rem hsla(214, 88%, 27%, 0.08), 0 0 1.25rem hsla(216, 14%, 14%, 0.06)',
        'shadow-3': '0 0 1.25rem hsla(216, 14%, 14%, 0.04)',
      },
      borderradius: {
        'radius-circle': '50%',
        'radius-pill': '100px',
        'radius-10': '10px',
        'radius-8': '8px',
        'radius-6': '6px',
      },
      transition: {
        'transition-1': '0.25s ease',
        'transition-2': '0.5s ease',
        'transition-3': '0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}

