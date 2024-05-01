/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
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
        disabled: '#C3D0FC',
        // 'signin-button': '#C6F5FB',
        sidebar: '#E7EFF9',
        inputfield: '#F3EEEE',
        placeholdertext: '#837C7C',
        bordercolor: '#9A8C8C',
        warning: '#FF0000',
        control: '#627DD9',
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
      },
      fontFamily: {
        // main: ['Actor'],
        main: ['Actor', ...defaultTheme.fontFamily.sans],
        tableheader: ['Alef', ...defaultTheme.fontFamily.sans],
        tabledata: ['Anaheim', ...defaultTheme.fontFamily.sans],
        time: ['Adamina', ...defaultTheme.fontFamily.serif],
        date: defaultTheme.fontFamily.sans,
        control: ['"Advent Pro"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

