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
        "gradient-grid":
          "linear-gradient(90deg , var(--violet) 1%, transparent 5%), linear-gradient(270deg, var(--violet) 1%, transparent 5%), linear-gradient(180deg , var(--violet) 1%, transparent 5%), linear-gradient(0deg, var(--violet) 1%, transparent 5%)",
          "gradient-grid-dark":
          "linear-gradient(90deg , var(--violet) 1%, transparent 5%), linear-gradient(270deg, var(--violet) 1%, transparent 5%), linear-gradient(180deg , var(--violet) 1%, transparent 5%), linear-gradient(0deg, var(--violet) 1%, transparent 5%)", 
        "gradient-tri-violet":
          "conic-gradient(from 330deg at 50% 60%, var(--violet-dark) 60deg, transparent 60deg) ,conic-gradient(from 150deg at 50% 30%, var(--violet) 60deg, transparent 60deg)",
        "gradient-tri-dark":
          "conic-gradient(from 330deg at 50% 60%, var(--dark) 60deg, transparent 60deg) ,conic-gradient(from 150deg at 50% 30%, var(--dark-a80) 60deg, transparent 60deg)",
      },
      backgroundSize: {
        "3x3": "3rem 3rem",
        "5x5": "5rem, 5rem",
        "15x15": "15rem 15rem",
        "30x30": "30rem 30rem",
        "30x60": "30rem 60rem",
      },
      backgroundPosition: {
        "tri-offset": "0 0, 1.5rem -0.5rem",
      },
      colors: {
        "dark-color": "var(--dark)",
        "dark-a80": "var(--dark-a80)",
        "dark-a40": "var(--dark-a80)",
        "light-color": "var(--light)",
        "light-a80": "var(--light-a80)",
        "violet": "var(--violet)",
        "violet-dark": "var(--violet-dark)",
        "violet-a40": "var(--violet-a40)",
        "violet-dark-a40": "var(--violet-dark-a40)",
        "violet-a80": "var(--violet-a80)",
        "violet-dark-a80": "var(--violet-dark-a80)",
        "react-logo": "#61DBFB",
        "node-logo":  "#679267",
        "mongo-logo": "#4DB33D",
        "git-logo": "#F1502F",
        "render-logo":"#5EDCB6",
      },
      boxShadow: {
        "link-light-fat": "0rem 0rem 2rem 2px var(--dark)",
        "link-light": "0rem 0rem 1rem var(--dark)",
        "link-dark-fat": "0rem 0rem 2rem 2px var(--light)",
        "link-dark": "0rem 0rem 1rem var(--light)",
        "link-violet": "0rem 0rem 1rem var(--violet)",
        "link-violet-dark": "0rem 0rem 1rem var(--violet-dark)",
      },
      dropShadow: {
        "blob1-light": "-2.2rem 4rem 1rem var(--dark)",
        "blob2-light": "2.2rem 4rem 1rem var(--dark)",
        "blob1-dark": "-2.2rem 4rem 1rem var(--violet-dark)",
        "blob2-dark": "2.2rem 4rem 1rem var(--violet-dark)",
        "basic-light":"0rem 0rem 1rem var(--light)"
      },
      keyframes: {
        translateLeft: {
          "0%":{
            transform: "translateX(0%)"
          },
          "100%":{
            transform: "translateX(-100%)"
          }
        },
        bloberize1: {
          "11%, 89%": {
            borderRadius: "42% 58% 48% 52% / 18% 66% 34% 82%",
          },
          "30%, 72%": {
            borderRadius: "54% 46% 55% 45% / 52% 51% 49% 28%",
          },

          "50%": {
            borderRadius: "55% 45% 35% 65% / 33% 50% 50% 67%",
          },
          "0%": {
            transform: "translate(-15rem, -20rem)",
          },

          "25%": {
            transform: "translate(5rem, -5rem)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "75%": {
            transform: "translate(5rem, -5rem)",
          },
          "100%": {
            transform: "translate(5rem, -20rem)",
          },
        },
        bloberize2: {
          "11%, 89%": {
            borderRadius: "57% 43% 35% 65% / 51% 41% 59% 49%",
          },
          "30%, 72%": {
            borderRadius: "61% 39% 71% 29% / 46% 60% 40% 54%",
          },

          "50%": {
            borderRadius: "61% 39% 47% 53% / 46% 60% 40% 54% ",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        bloberize3: {
          "0%, 100%": {
            transform: "rotate(0deg)"
          },
          "22%, 78%": {
            borderRadius: "46% 54% 63% 37% / 46% 68% 32% 54%",
            transform: "rotate(15deg)",
            transform: "scale(0.9)",
          },
          "33%, 62%": {
            borderRadius: "63% 37% 73% 27% / 44% 49% 31% 56%",
            transform: "rotate(22deg)"
          },

          "51%": {
            borderRadius: "33% 67% 37% 63% / 65% 46% 54% 35%",
            transform: "rotate(31deg)"
          },
          "40%": {
            transform: "scale(1.2) rotate(44deg)",
            
          },
        },
        gridMove: {
          "0%, 100%": {
            backgroundPosition: "100% 0%",
          },
          "25%": {
            backgroundPosition: "0% 100%"
          },
          "50%": {
            backgroundPosition: "-100% 0%"
          },
          "75%":{
            backgroundPosition: "0% -100%"
          },
        },
        slideIn: {
          "0%": {
            transform: "translateY(-20rem )",
          },
          "100%": {
            transform: "translateY(10rem )",
          },
        },
        slideIn2: {
          "0%": {
            transform: "translateX(30rem )",
          },
          "100%": {
            transform: "translateX(7rem )",
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },

        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
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
        upperBurger: {
          "0%": {
            transform: "translate(0rem, 0rem) rotate(0deg)",
          },
          "100%": {
            transform: "translate(0rem, 1rem) rotate(45deg)",
          },
        },
        lowerBurger: {
          "0%": {
            transform: "translate(0rem, 0rem) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-0.5rem, -1rem) rotate(-45deg)",
          },
        },
        medBurger: {
          "0%": {
            width: "3rem",
          },
          "100%": {
            width: "0rem",
          },
        },
        normalizeUpperBurger: {
          "0%": {
            transform: "translate(0rem, 1rem) rotate(45deg)",
          },
          "100%": {
            transform: "translate(0rem, 0rem) rotate(0deg)",
          },
        },

        normalizeLowerBurger: {
          "0%": {
            transform: "translate(-0.5rem, -1rem) rotate(-45deg)",
          },
          "100%": {
            transform: "translate(0rem, 0rem) rotate(0deg)",
          },
        },
        normalizeMidBurger: {
          "0%": {
            width: "0rem",
          },
          "100%": {
            width: "3rem",
          },
        },
        neonPoizone: {
          "0%": {
            textShadow:
              "0px 0px 4px var(--violet), 0px 0px 11px var(--violet), 0px 0px 20px var(--violet), 0px 0px 40px var(--violet), 0px 0px 80px var(--violet), 0px 0px 100px var(--violet), 0px 0px 120px var(--violet), 0px 0px 140px var(--violet) ",
          },
          "100%": {
            textShadow:
              "0px 0px 4px var(--violet), 0px 0px 10px var(--violet), 0px 0px 18px var(--violet), 0px 0px 38px var(--violet), 0px 0px 76px var(--violet), 0px 0px 80px var(--violet), 0px 0px 90px var(--violet), 0px 0px 100px var(--violet)  ",
          },
        },
        bump:{
          "0%, 100%":{
            transform: "translateY(0rem)"
          },
          "50%":{
            transform: "translateY(-1rem)"
          }
        },
        heartPulse: {
          "0%, 15%, 30%, 100%": {
            transform: "scale(1)",
          },
          "20%": {
            transform: "scale(0.7)",
          },
          "25%": {
            transform: "scale(1.3)",
          },
        },
      },
      animation: {
        slide: "slide 1s cubic-bezier(.98,.12,.12,.98) infinite",
        logo_slide: "logo_slide 1.5s cubic-bezier(.98,.12,.12,.98) infinite",
        light_toggle1: "light_toggle1 2s ease-out infinite",
        light_toggle2: "light_toggle2 2s ease-out infinite",
        light_toggle3: "light_toggle3 2s ease-out infinite",
        dark_toggle1: "dark_toggle1 2s ease-out infinite",
        dark_toggle2: "dark_toggle2 2s ease-out infinite",
        dark_toggle3: "dark_toggle3 2s ease-out infinite",
        burger_up: "upperBurger ease-in 200ms forwards",
        burger_down: "lowerBurger ease-in 200ms forwards",
        burger_mid: "medBurger ease-in 200ms forwards",
        normalize_upper_burger: "normalizeUpperBurger ease-out 200ms forwards",
        normalize_lower_burger: "normalizeLowerBurger ease-out 200ms forwards",
        normalize_mid_burger: "normalizeMidBurger ease-out 200ms forwards",
        neonPoizone: "neonPoizone ease 0.15ms infinite alternate",
        heartPulse: "heartPulse ease-out 1.2s infinite",
        gridMove: "gridMove linear 150s infinite",
        gridMoveDark: "gridMove linear 150s infinite",
        slideIn: "slideIn ease-out 1s 2s forwards ",
        fadeIn3s: "fadeIn ease-in 1s 3s forwards",
        fadeIn4s: "fadeIn ease-in 1s 4s forwards",
        fadeIn5s: "fadeIn ease-in 1s 5s forwards",
        fadeInOut: "fadeIn ease-out 0.5s forwards, fadeOut ease-in 0.5s 1.5s forwards",
        blobAround1: "fadeIn ease-in 1s 4s forwards, bloberize1 ease-in-out 90s infinite",
        blobAround2: "slideIn2 ease-out 3s 2s forwards,  bloberize2 ease-in-out 30s infinite",
        blobAround3: "fadeIn ease-in 1s 5s forwards, bloberize3 ease-in-out 35s infinite",
        bump: "bump cubic-bezier(.94,.03,.11,1.01) 1s forwards",
        translateLeft: "translateLeft linear 20s infinite"
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
