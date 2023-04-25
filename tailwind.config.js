/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops) 25%)",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-stripes":
            "linear-gradient(90deg , hsl(231, 53%, 75%, .5) 50%, hsl(226, 39%, 10%) 50%)",
        },
  
        colors: {
          "dark-color": "var(--dark)",
          "light-color": "var(--light)",
          violet: "var(--violet)",
          "violet-dark": "var(--violet-dark)",
        },
        boxShadow: {
          "link-light-fat": "0rem 0rem 2rem 2px var(--dark)",
          "link-light": "0rem 0rem 1rem var(--dark)",
          "link-dark-fat": "0rem 0rem 2rem 2px var(--light)",
          "link-dark": "0rem 0rem 1rem var(--light)",
          "link-violet": "0rem 0rem 1rem var(--violet)",
          "link-violet-dark": "0rem 0rem 1rem var(--violet-dark)",
        },
        keyframes: {
          slide: {
            "0%": { transform: "translate(-8rem) rotate(45deg)" },
            "100%": { transform: "translate(5rem) rotate(45deg)" },
          },
          logo_slide: {
            "0%": { transform: "translate(-12rem) rotate(45deg)" },
            "100%": { transform: "translate(7.5rem) rotate(45deg)" },
          },
          light_toggle1: {
            "0%, 50%, 100%": {
              backgroundColor: "var(--light)",
            },
            "25%": {
              backgroundColor: "var(--dark)",
            },
          },
          light_toggle2: {
            "0%, 25%, 75%, 100%": {
              backgroundColor: "var(--light)",
            },
            "50%": {
              backgroundColor: "var(--dark)",
            },
          },
          light_toggle3: {
            "0%, 50%, 100%": {
              backgroundColor: "var(--light)",
            },
            "75%": {
              backgroundColor: "var(--dark)",
            },
          },
          dark_toggle1: {
            "0%, 50%, 100%": {
              backgroundColor: "var(--dark)",
            },
            "25%": {
              backgroundColor: "var(--light)",
            },
          },
          dark_toggle2: {
            "0%, 25%, 75%, 100%": {
              backgroundColor: "var(--dark)",
            },
            "50%": {
              backgroundColor: "var(--light)",
            },
          },
          dark_toggle3: {
            "0%, 50%, 100%": {
              backgroundColor: "var(--dark)",
            },
            "75%": {
              backgroundColor: "var(--light)",
            },
          },
        },
        animation: {
          slide: "slide 1s cubic-bezier(.98,.12,.12,.98) infinite",
          logo_slide: "logo_slide 1.5s cubic-bezier(.98,.12,.12,.98) infinite",
          light_toggle1: "light_toggle1 3s ease-out infinite",
          light_toggle2: "light_toggle2 3s ease-out infinite",
          light_toggle3: "light_toggle3 3s ease-out infinite",
          dark_toggle1: "dark_toggle1 3s ease-out infinite",
          dark_toggle2: "dark_toggle2 3s ease-out infinite",
          dark_toggle3: "dark_toggle3 3s ease-out infinite",
        },
      },
    },
    plugins: [],
    darkMode: "class",
  };
  