// This component is contain for the here background image
import React from 'react'
import Typed from "react-typed";

const Text = () => {
  return (
		<div className="text-center text-white align-middle  md:text-5xl font-bold text-3xl  px-20 md:px-10  py-40">
			<Typed
				strings={[
					"Welcome to  Find Mentor.com",
					"Start Your Tech Journey  From Here",
					" Find Your Stack Mentor",
					" Join a Community to improve you experience",
					" With Find Mentor.com Your Tech Journey is easy",
				]}
				typeSpeed={100}
				backSpeed={50}
				loop
			/>
		</div>
	);
}

export default Text

