/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				darkBlack: "#121212",
				darkGrayShade1: "#343434",
				lightBlack: "#1e1e1f",
				lightYellow: "#fbd56c",
				lightOrange: "#febd5d",
				lightGray: "#353535",
				darkGrayShade2: "#282829",
				
			},
			colors: {
				darkBlack: "#121212",
				darkGrayShade1: "#343434",
				darkGrayShade2: "#282829",
				lightBlack: "#1e1e1f",
				lightYellow: "#fbd56c",
				lightOrange: "#febd5d",
				lightGray: "#353535",
			},
			boxShadow:{
				iconShadow: "#febd5d40 -1px -1px 2px",
				innerShadow: "inset 4px 4px 40px #febd5d40"
			}
		},
	},
	plugins: [],
};
