import React from "react";
// This is Search button that wil user search base on the content they want to se 

const Search = () => {
	return (
		<>
		
				<form>
					<div className="flex px-10 md:px-60 py-10 ">
						<div className="relative w-full">
							<input
								type="search"
								className="block p-2.5 w-full  text-sm text-gray-900 bg-gray-20  rounded-2xl border-l-gray-50 border-l-2 border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white active:outline-none focus:outline-none dark:focus:border-blue-500"
								placeholder="Search Mockups, Logos, Design Templates..."
								required
							/>
							<button
								type="submit"
								className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								<svg
									aria-hidden="true"
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
								<span className="sr-only">Search</span>
							</button>
						</div>
					</div>
				</form>
		</>
	);
};

export default Search;
