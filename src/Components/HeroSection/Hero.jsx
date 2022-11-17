// This component  render all the here sub components

import React from 'react'
import Content from './Content'
import Search from './Search'

const Hero = () => {
  return (
		<>
			{/* Adding background image to the search button */}
			<div class="w-full bg-center bg-cover bg-Hero h-[28rem]">
				<div class=" h-full bg-gray-900 bg-opacity-50">
					<Search />
				</div>
			</div>
			{/* End of  the search button component */}

			<Content />
		</>
	);
}

export default Hero
