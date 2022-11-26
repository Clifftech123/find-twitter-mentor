// This component focus on why you need tech stack

import React from 'react'

const Content = () => {
  return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6 py-10 mx-auto">
					<div className="lg:flex lg:items-center">
						<div className="w-full space-y-12 lg:w-1/2 ">
							{/* HEADING */}
							<div>
								<h1 className="text-3xl font-bold  leading-relaxed tracking-wide text-gray-800 capitalize lg:text-4xl dark:text-white">
									Why do you Tech Stack?
								</h1>

								<div className="mt-2">
									<span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
									<span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
									<span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
								</div>
							</div>
							{/* end of heading  */}
							{/* First Reasons */}
							<div className="md:flex md:items-start md:-mx-4">
								<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
									{/* SVG ICON */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
										/>
									</svg>
								</span>

								<div className="mt-4 md:mx-4 md:mt-0">
									<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
										Dependability
									</h1>

									<p className="mt-3  leading-relaxed tracking-wide text-gray-500 dark:text-gray-300">
										Technologies that create stacks may be common which means
										that the developer community has experience and information
										you can use. Selecting the correct tools, with multiple
										examples of successful implementation, lowers the risk of a
										website or application crashing or failing during
										production. Researching dependable technologies in
										open-source communities and with other IT colleagues
										increases the dependability of your stack.
									</p>
								</div>
							</div>
							{/* second Reasons */}
							<div className="md:flex md:items-start md:-mx-4">
								<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
									{/* SVG ICON */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										/>
									</svg>
								</span>

								<div className="mt-4 md:mx-4 md:mt-0">
									<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
										Scalability
									</h1>

									<p className="mt-3   leading-relaxed tracking-wide text-gray-500 dark:text-gray-300">
										An effective technology stack allows you to add more storage
										and users quickly and simply with scalability that adapts as
										needs change. IT professionals may use multiple frameworks
										and languages to create an app or site that is more
										scalable. Paying attention to the components of a stack in
										terms of its ability to scale saves resources in rewriting
										code as the company expands or changes its focus.
									</p>
								</div>
							</div>

							{/* Third  Reasons */}
							<div className="md:flex md:items-start md:-mx-4">
								<span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
									{/* SVG ICON */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
										/>
									</svg>
								</span>

								<div className="mt-4 md:mx-4 md:mt-0">
									<h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
										Performance and speed
									</h1>

									<p className="mt-3  leading-relaxed tracking-wide text-gray-500 dark:text-gray-300">
										Creating websites and applications using certain frameworks
										can help them run efficiently and perform reliably for end
										users. Technologies that you select carefully can also help
										improve the performance of apps where many users demand data
										or store and retrieve data quickly. Checking end-user needs
										for speed and performance helps choose a combination of
										technologies that are compatible with these project
										requirements.
									</p>
								</div>
							</div>
						</div>
						{/* MD: right side image */}
						<div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
							<img
								className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
								src="https://images.unsplash.com/photo-1622676017526-4a8e99f5fdf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
								alt=""
							/>
                      </div>
                      {/* end of image */}
					</div>
                   {/*Line */}
					<hr className="my-12 border-gray-200 dark:border-gray-700" />
				</div>
			</section>
		</>
	);
}

export default Content
