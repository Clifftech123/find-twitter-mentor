// Ths components  render all the homepage content

import React from "react";
import FirstCards from "../../Components/Content/Firstcards";
import Hero from "../../Components/HeroSection/Hero";
import Inspiration from "../../Components/Content/Inspiration";

const HomePage = () => {
	return (
		<>
			<div className=" font-Poppins dark:bg-slate-900 duration-100">
				<Hero />
				<FirstCards />
				<Inspiration/>
			</div>
		</>
	);
};

export default HomePage;
