import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
	return (
		<>
			<section className=" px-10 md:px-20 py-10 ">
				<form className="flex items-center ">
					<div className="relative w-full">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<BsSearch className="w-5 h-5 text-gray-500 " />
						</div>

						<input
							type="text"
							id="voice-search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 active:outline-none active:border-none block w-full pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Search Mockups, Logos, Design Templates..."
							require/>
					</div>

					{/*Search button  */}
					<button
						type="submit"
						className="inline-flex items-center py-3 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<AiOutlineSearch className="w-5 h-5 mr-2 -ml-1" />
						Search
					</button>
				</form>
			</section>
		</>
	);
};

export default Search;
