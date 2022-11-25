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
				Nav_Bg_Color: "#F0F2FB",
				lightprimary: "#ECF3FF",
				primary: "#1d4ed8",
				Nav_text_hover_color: "#1d4ed8",
				Dark_bg_color: "#09091b",
				nav_dark_bg_color: "#0b0a10;",
			},
			backgroundImage: {
				Hero: "url('assets/Hero.avif')",
				FindMentor: "url('assets/FindMentor.png')",
			},
		},
	},
	plugins: [],
};
