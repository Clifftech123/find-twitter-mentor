
// This component contain  content on the find mentor page 
import React from 'react'
import Search from './Search'

const Mentor = () => {
  return (
		<>
			<div className='"w-full bg-center bg-cover bg-repeat-none    bg-FindMentor h-[40rem]"'>
				<div class=" h-full bg-gray-900 bg-opacity-50 py-20">
					<Search />
				</div>
			</div>
		</>
	);
}

export default Mentor
