/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: "Poppins",
			},
			backgroundImage: {
				Hero: "url('assets/Hero.avif')",
				
			},
		},
	},
	plugins: [],
};
