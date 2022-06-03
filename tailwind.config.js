const colors = require("tailwindcss/colors");
module.exports = {
	// mode: "jit",
	content: [
		"./pages/**/*.{html,js,ts,tsx}",
		"./components/**/*.{html,js,ts,tsx}",
		"./public/cachedata/**/*.json",
	],
	container: {
		center: true,
	},
	darkMode: "class",
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			maxWidth: {
				"8xl": "1620px",
				"3xl": "1460px",
				kbcontainer: "1110px",
				lpcontainer:"1280px",
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
				kbportal: {
					lightest: "#19181B",
					light: "#69d3a0",
					DEFAULT: "#024E31",
					dark: "#19181B",
					darkest: "#19181B",
					title: "#19181B",
				},
				zoho: {
					lightest: "#8edeb8",
					light: "#69d3a0",
					DEFAULT: "#2C88FF",
					dark: "#2C2C51",
					darkest: "#010e28",
					darkestBlue: "#0d275b",
				},
				weekly: {
					lightest: "#FFE833",
					light: "#FFCF1A",
					DEFAULT: "#FBB500",
					dark: "#E29C00",
					darkest: "#C88200",
				},
				cozy: {
					DEFAULT: "#54ACAE",
					second: "#ED975C",
				},
				help: {
					DEFAULT: "#699BF7",
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
				citizen: {
					lightest: "#FE3FD2",
					light: "#E526B9",
					DEFAULT: "#fff",
					dark: "#98006C",
					darkest: "#282828",
					gradientfinish: "#9147DC",
					blue: "#699BF7",
					title: "#585858",
					description: "#67748E",
				},
				citizenSecond: {
					lightest: "#776BFD",
					light: "#5E52E4",
					DEFAULT: "#585858",
					dark: "#2B1FB1",
					darkest: "#110597",
				},
				citizenBackground: {
					DEFAULT: "#F8F9FA",
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
				skybg: {
					DEFAULT: "#dbdbdb",
				},
				primary: "var(--primary)",
				"primary-2": "var(--primary-2)",
				secondary: "var(--secondary)",
				"secondary-2": "var(--secondary-2)",
				violet: "var(--violet)",
				"violet-light": "var(--violet-light)",
				"violet-dark": "var(--violet-dark)",
				cyan: "var(--cyan)",
				transparent: "transparent",
				current: "currentColor",
				blue: colors.blue,
				pink: colors.pink,
				green: colors.emerald,
				red: colors.red,
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				yellow: colors.amber,
				indigo: colors.indigo,
				purple: colors.violet,
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
				serif: ["Merriweather", "serif"],
				roboto: ["Roboto", "sans-serif"],
				segoe: ["Segoe UI", "sans-serif"],
				segoeBold: ["Segoe UI Bold", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				robotoslab: ["Roboto Slab", "serif"],
				robotocondensed: ["Roboto Condensed", "sans-serif"],
			},
			boxShadow: {
				magical:
					"rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
				citizen: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)",
			},
			scale: {
				120: "1.2",
			},
			lineClamp: {
				1: "1",
				2: "2",
				3: "3",
				7: "7",
				8: "8",
				9: "9",
				10: "10",
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
			spacing: {
				112: "28rem",
				128: "32rem",
				144: "36rem",
				156: "40rem",
			},
		},
		aspectRatio: {
			none: 0,
			square: [1, 1], // or 1 / 1, or simply 1
			"16/9": [16, 9], // or 16 / 9
			"4/3": [4, 3], // or 4 / 3
			"21/9": [21, 9], // or 21 / 9
			"9/16": [9, 16], // or 16 / 9
			"3/4": [3, 4], // or 4 / 3
			"3/5": [3, 5],
			"9/21": [9, 21],
			"6/9": [6, 9],
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
		fontSize: {
			xss: ".5rem",
			xsss: ".3rem",
			xs: ".75rem",
			sm: ".875rem",	
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"15px": "15px",
			13: "13px",
		},
		screens: {
			xs: "340px",
			sm: "540px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1300px",
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			2: "2px",
			3: "3px",
			4: "4px",
			6: "6px",
		},
		// colors: {
		// 	transparent: "transparent",
		// 	current: "currentColor",
		// 	black: colors.black,
		// 	white: colors.white,
		// 	gray: colors.gray,
		// 	emerald: colors.emerald,
		// 	indigo: colors.indigo,
		// 	yellow: colors.yellow,
		// 	lime: colors.lime,
		// },
	},
	variants: {
		lineClamp: ["responsive", "hover"],
		extend: {},
		aspectRatio: ["responsive"], // defaults to ['responsive']
	},

	plugins: [
		require("autoprefixer"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("tailwind-scrollbar"),
	],
};
