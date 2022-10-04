/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				"auto-fit": "repeat(auto-fit, minmax(16rem, 1fr))",
				"auto-fill":
					"repeat(auto-fill, minmax(16rem, 1fr))",
			},
		},
	},
	plugins: [],
};
