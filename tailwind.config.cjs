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

			colors: {
				LogoColor: "#F7DF1E",
				Nav_Bg_Color: "#1e40af",
				Navbar_text_color: "#f3f3ee",
				lightprimary: "#ECF3FF",
				primary: "#3E82FC",
				Nav_text_hover_color: "#1d4ed8",
			},
			backgroundImage: {
				Hero: "url('assets/Hero.avif')",
				FindMentor: "url('assets/FindMentor.png')",
			},
		},
	},
	plugins: [],
};
