/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      custom: ['CustomFont', 'sans-serif'],
    },
    colors: {
      yellow: {
        50: '#FFFBF0',
        100: '#FCF2DD',
        200: '#FFE7B5',
      },
      'regal-blue': {
        100: '#D4EFFF',
        200: '#E7EDF1',
      },
    },
    boxShadow: {
      main: '0px 10px 20px 0px rgba(17, 127, 195, 0.10)',
    },
  },
  plugins: [flowbite],
}
