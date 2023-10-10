
// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx}',
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'error-Image': "url('/public/images/fondo-error.jpg')",
      'pages-Image': "url('/public/images/fondo-pages.jpg')",
    },
    backdropBlur: {
      xs: '1px',
    }
  },
};
export const darkMode = "class";
export const plugins = [nextui()];