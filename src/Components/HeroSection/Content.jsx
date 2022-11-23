import React from 'react'
import HereContentImage from '../../assets/WebDevolopmentPng.png'

const Content = () => {
    return (
			<section className="bg-white  dark:bg-Dark_bg_color">
				<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16            lg:flex-row  lg:items-center">
					<div className="w-full lg:w-1/2">
						<div className="lg:max-w-lg">
							<h1 className="text-3xl font-semibold tracking-wide  text-gray-600 dark:text-white lg:text-5xl">
								Easiest way to start your Tech Journey
							</h1>
							{/* what we offer to users and how we can help them to start their tech journey. */}
							<div className="mt-8 space-y-5">
								<p className="flex items-center -mx-2 text-gray-500 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span className="mx-2">Find Mentor</span>
								</p>

								<p className="flex items-center -mx-2 text-gray-500 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span className="mx-2">Get Start with Tech Stack </span>
								</p>

								<p className="flex items-center -mx-2 text-gray-500 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span className="mx-2">Start Build Your Dream Project </span>
								</p>
								<p className="flex items-center -mx-2 text-gray-500 dark:text-gray-200">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6 mx-2 text-blue-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>

									<span class="mx-2"> Meet New People </span>
								</p>
							</div>
						</div>
					</div>
					{/* end of the offer  */}
					{/* Content image  */}
					<div className="flex items-center justify-center w-full h-96 lg:w-1/2">
						<img
							className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
							src={HereContentImage}
						/>
					</div>
				</div>
			</section>
		);
}

export default Content

