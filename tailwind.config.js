import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // NEXTUI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1920px',
      },
      backgroundImage: {
        'noise-effect': "url('/noise.png')",
      },
      fontFamily: {
        headingExtraLight: ['Heading Pro Trial Extra Light', 'sans-serif'],
        headingLight: ['Heading Pro Trial Light', 'sans-serif'],
        heading: ['Heading Pro Trial', 'sans-serif'],
        headingThin: ['Heading Pro Trial Thin', 'sans-serif'],
        headingBold: ['Heading Pro Trial Bold', 'sans-serif'],
        headingExtraBold: ['Heading Pro Trial Extra Bold', 'sans-serif'],
        headingHeavy: ['Heading Pro Trial Heavy', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserratLight: ['Montserrat Light', 'sans-serif'],
        robotoRegular: ['Roboto Regular', 'sans-serif'],
        robotoBold: ['Roboto Bold', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

