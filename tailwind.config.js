const colors = require("tailwindcss/colors");
module.exports = {
  // mode: "jit",
  // purge: {
  //   content: [
  //     "./pages/**/*.{js,ts,jsx,tsx}",
  //     "./components/**/*.{js,ts,jsx,tsx}",
  //     "./middleware/**/*.{js,ts,jsx,tsx}",
  //     "./context/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   options: {
  //     safelist: {
  //       standard: ["outline-none"],
  //     },
  //     whitelist: ["h-52", "py-9", "max-w-2xl", "text-white", "h-screen"],
  //   },
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1620px",
      },
      gridAutoRows: {
        "2fr": "minmax(0, 2fr)",
      },
      colors: {
        moto: {
          lightest: "#8edeb8",
          light: "#69d3a0",
          DEFAULT: "#44C889",
          dark: "#36a06d",
          darkest: "#287852",
        },
        weekly: {
          lightest: "#FFE833",
          light: "#FFCF1A",
          DEFAULT: "#FBB500",
          dark: "#E29C00",
          darkest: "#C88200",
        },
        skyresort: {
          lightest: "#80C344",
          light: "#80C344", //ногоон өнгө
          DEFAULT: "#FCB714", //шар өнгө
          dark: "#1D9FD9", //хөх өнгө
          darkest: "#1D9FD9",
        },
        // https://www.cssfontstack.com/oldsites/hexcolortool/
        sso: {
          lightest: "#FE3FD2",
          light: "#E526B9",
          DEFAULT: "#CB0C9F",
          dark: "#B20086",
          darkest: "#98006C",
          gradientfinish: "#9147DC",
        },
        ssoSecond: {
          lightest: "#776BFD",
          light: "#5E52E4",
          DEFAULT: "#4338CA",
          dark: "#2B1FB1",
          darkest: "#110597",
        },
        ssoBackground: {
          DEFAULT: "#F8F9FA",
        },
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        secondary: "var(--secondary)",
        "secondary-2": "var(--secondary-2)",
        // hover: "var(--hover)",
        // "hover-1": "var(--hover-1)",
        // "hover-2": "var(--hover-2)",
        // "accent-0": "var(--accent-0)",
        // "accent-1": "var(--accent-1)",
        // "accent-2": "var(--accent-2)",
        // "accent-3": "var(--accent-3)",
        // "accent-4": "var(--accent-4)",
        // "accent-5": "var(--accent-5)",
        // "accent-6": "var(--accent-6)",
        // "accent-7": "var(--accent-7)",
        // "accent-8": "var(--accent-8)",
        // "accent-9": "var(--accent-9)",
        violet: "var(--violet)",
        "violet-light": "var(--violet-light)",
        "violet-dark": "var(--violet-dark)",
        // pink: "var(--pink)",
        // "pink-light": "var(--pink-light)",
        cyan: "var(--cyan)",
        // blue: "var(--blue)",
        // green: "var(--green)",
        // red: "var(--red)",
        transparent: "transparent",
        current: "currentColor",
        blue: colors.blue,
        pink: colors.pink,
        green: colors.emerald,
        red: colors.red,
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        yellow: colors.amber,
        indigo: colors.indigo,
        purple: colors.violet,
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
        citizen: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)",
      },
      scale: {
        120: "1.2",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
    },
    aspectRatio: {
      // defaults to {}
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      "16/9": [16, 9], // or 16 / 9
      "4/3": [4, 3], // or 4 / 3
      "21/9": [21, 9], // or 21 / 9
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
  },
  variants: {
    extend: {},
    aspectRatio: ["responsive"], // defaults to ['responsive']
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
