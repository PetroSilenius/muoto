/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // https://coolors.co/6ccff6-f28123-001427-faf4d3-e94f37
      colors: {
        muoto: {
          blue: '#6CCFF6',
          orange: '#F28123',
          red: '#E94F37',
          dark: '#001427',
          light: '#FAF4D3',
        },
      },
      keyframes: ({ theme }) => ({
        rerender: {
          '0%': {
            ['border-color']: theme('colors.muoto.orange'),
          },
          '40%': {
            ['border-color']: theme('colors.muoto.orange'),
          },
        },
        highlight: {
          '0%': {
            background: theme('colors.muoto.orange'),
            color: theme('colors.white'),
          },
          '40%': {
            background: theme('colors.muoto.orange'),
            color: theme('colors.white'),
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        translateXReset: {
          '100%': {
            transform: 'translateX(0)',
          },
        },
        fadeToTransparent: {
          '0%': {
            opacity: 1,
          },
          '40%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
      }),
    },
  },
};
