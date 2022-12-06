import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

const MeanStackLinks = ( { MeanIsVisible, MeanOnclose } ) => {
	

		const MongoDB =
			"https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png";
		const Expressjs =
			"https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png";
		const Angularjs =
			"https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1096617/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png";
		const Nodejs =
		"https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=700&fm=webp";
	
	
	if (!MeanIsVisible) return null;
	return (
		<>
			<div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center bg-black">
				<div className="">
					{/* CLOSING BUTTON */}
					<div className=" flex flex-col  ">
						<button
							onClick={() => MeanOnclose()}
							className="text-5xl text-white place-self-end"
						>
							<AiFillCloseCircle />
						</button>
					</div>

					{/* 	THE MAIN CONTENT  */}
					<div class=" lg:w-[600px] w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-Dark_bg_color  dark:border-gray-700">
						{/* HEADING  */}
						<h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
							Welcome To MEAN STACK
						</h5>
						{/* INSTRUCTION TEXT */}
						<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
							Click on any of the Technology to read more about
						</p>
						<ul class="my-4 space-y-3">
							{/* ====== MongoDB (NoSQL database) ====== */}
							<li>
								<a
									href="https://www.mongodb.com/nosql-explained"
									class="flex items-center dark:font-normal  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800  dark:border-gray-600 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex dark:group-hover:bg-gray-800 items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={MongoDB}
											alt="MongoDB"
										/>
									</span>

									<span className=" dark:text-blue-200  text-lg">
										MongoDB (NoSQL database)
									</span>
								</a>
							</li>
							{/*MongoDB (NoSQL database)*/}
							{/* ===========   Express.js backend web framework ========= */}
							<li>
								<a
									href="https://expressjs.com/"
									class="flex items-center p-3 text-base  dark:font-normal font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100  dark:border-gray-600 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Expressjs}
											alt="Expressjs"
										/>
									</span>

									<span className=" dark:text-blue-200 text-lg">
										Express.js backend web framework
									</span>
								</a>
							</li>
							{/*   END OF  Express.js backend web framework */}

							{/*Angular.js frontend framework*/}

							<li>
								<a
									href="https://docs.angularjs.org/tutorial"
									class="flex items-center p-3  dark:font-normal text-base font-bold  dark:border-gray-600 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900  dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Angularjs}
											alt="Angularjs"
										/>
									</span>

									<span className="  dark:text-blue-200  text-lg">
										Angular.js frontend framework
									</span>
								</a>
							</li>
							{/* END OF Angular.js frontend framework */}

							{/* =========  Node.js server side JavaScript ========== */}
							<li>
								<a
									href="https://nodejs.org/en/docs/"
									class="flex items-center  dark:font-normal p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group  dark:border-gray-600 border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center  px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800  group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Nodejs}
											alt=" Nodejs "
										/>
									</span>

									<span className=" dark:text-blue-200   text-lg">
										Node.js server side JavaScript
									</span>
								</a>
							</li>

							{/*  Node.js server side JavaScript */}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default MeanStackLinks

