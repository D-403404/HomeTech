/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#EDFCFF',
        primary: '#3A53A9',
        // 'signin-button': '#C6F5FB',
        sidebar: '#E7EFF9',
        inputfield: '#F3EEEE',
        placeholdertext: '#837C7C',
      },
      fontFamily: {
        main: ['Actor'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

