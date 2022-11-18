// Ths components  render all the homepage content

import React from "react";
import Hero from "../../Components/HeroSection/Hero";

const HomPage = () => {
	return (
		<>
			<div className=" font-Poppins dark:bg-slate-900 duration-100">
				<Hero />
			</div>
		</>
	);
};

export default HomPage;
