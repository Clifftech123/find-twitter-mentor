import React from "react";

const Stacks = () => {
	// Programing language links
	// FIRST CARD   LAMP  STACK

	const Linux =
		"https://e7.pngegg.com/pngimages/1013/132/png-clipart-linux-distribution-tux-free-software-linux-kernel-linux-logo-bird.png";

	const Apache =
		"https://www.logo.wine/a/logo/Apache_HTTP_Server/Apache_HTTP_Server-Logo.wine.svg";

	const MySQL =
		"https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg";

	const PHP = "https://www.php.net/images/meta-image.png";
	// END OF THE FIRST CARD LAMP  STACK

	// SECOND CARD   MEAN STACK
	const MongoDB =
		"https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png";
	const Expressjs =
		"https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png";
	const Angularjs =
		"https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1096617/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png";
	const Nodejs =
		"https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=700&fm=webp";

	// THIRD CARD MERN STCK
	const ReactJs =
        "https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124";
    
    const mongoDB = "https://www.educative.io/v2api/collection/10370001/5227455105204224/image/6349680696885248";
    const node =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&usqp=CAU";
    const express = "https://miro.medium.com/max/805/0*m1VOQP0FtcQufLgw.png";

	return (
		<>
			<section className=" bg-white    dark:bg-Dark_bg_color  duration-100">
				<div className="container xl:max-w-7xl mx-auto px-4 py-1  lg:py-10">
					<div className="grid grid-cols-1 gap-10  sm:grid-cols-1 lg:grid-cols-2">
						{/* LAMP  STACK */}
						<div className="p-5 bg-white  leading-relaxed   tracking-wide   dark:border-gray-700    dark:bg-gray-900     border-gray-100 shadow-sm   border-2     transition rounded-lg">
							{/* LAMP  STACK */}

							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-300">
								LAMP STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-400  text-gray-600">
								LAMP is an industry-standard when it comes to tech stack models.
								In web development, it delivers the best cost efficiency,
								flexibility, and performance. It is an acronym that stands for:
							</p>

							{/*  LAMP  Langues Icons  */}
							<div className="flex flex-row  space-x-20  md:space-x-32">
								{/* Linux */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={Linux}
										alt="Linux"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Linux
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>

								{/* Apache  */}
								<div className="flex items-center  mt-8 -mx-2">
									<img
										className="object-cover  bg-white mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-4 ring-gray-300 dark:ring-gray-700"
										src={Apache}
										alt="Apache"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											Apache
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>
							</div>

							{/* second row  icons */}
							<div className="flex flex-row space-x-20  md:space-x-32">
								{/* MySQL */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 mx-2 rounded-full  shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={MySQL}
										alt="MySQl"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											MySQL
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>

								{/* PHP */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={PHP}
										alt="PHP"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											PHP
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>
							</div>
						</div>

						{/* ==== SSECODN CARD  MEAN STACK */}
						{/* MEAN STACK */}

						<div className="p-5   leading-relaxed   tracking-wide    dark:border-gray-700   dark:bg-gray-900      border-gray-100    border-2      shadow-sm     transition rounded-lg">
							{/* LAMP  STACK */}

							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-300">
								MEAN STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-400  text-gray-600">
								One of the well-known tech stacks, MEAN brings numerous benefits
								to web developers. Among these benefits are the use of a single
								language (JavaScript) and the underlying technologies are open
								source and free. MEAN consists of:
							</p>

							{/*  MERN STCK  Langues Icons  */}
							<div className="flex flex-row space-x-20  md:space-x-32 ">
								{/* MongoDB */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={MongoDB}
										alt="MongoDB"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											MongoDB
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>

								{/* Express js   */}
								<div className="flex items-center  mt-8 -mx-2">
									<img
										className="object-cover  mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-4 ring-gray-300 dark:ring-gray-700"
										src={Expressjs}
										alt="Express.js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											Express.js
										</h1>
										<span className="text-sm text-blue-700 ">Read More</span>
									</div>
								</div>
							</div>

							{/* second row  */}
							<div className="flex flex-row   space-x-20  md:space-x-32">
								{/*  Angular js */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 mx-2 rounded-full  shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={Angularjs}
										alt=" Angularjs"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Angular.js
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>

								{/* Node.js server */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={Nodejs}
										alt="Node.js "
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Node.js
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>
							</div>
						</div>

						{/* THIRD CARD MERN STCK */}
						{/* MERN  STACK */}
						<div className="p-5 b  leading-relaxed   tracking-wide     dark:bg-gray-900   dark:border-gray-700   border-gray-100    border-2      shadow-sm     transition rounded-lg">
							{/* LAMP  STACK */}

							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-300">
								MERN STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-400  text-gray-600">
								Essentially MERN is similar to MEAN. The difference is that you
								change Angular.js with React. The key benefits of using MERN are
								the React integration, the ability to use codes on browsers and
								servers simultaneously, powerful library, and full-stack
								development option (frontend and backend).
							</p>

							{/*  MERN STCK  Langues Icons  */}
							<div className="flex flex-row space-x-20  md:space-x-32">
								{/* React.js */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={ReactJs}
										alt="ReactJs"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											React.js
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>

								{/* MongoDB   */}
								<div className="flex items-center  mt-8 -mx-2">
									<img
										className="object-cover  bg-white mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-4 ring-gray-300 dark:ring-gray-700"
										src={mongoDB}
										alt="MongoDB"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											MongoDB
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>
							</div>

							{/* second row  */}
							<div className=" flex flex-row space-x-20  md:space-x-32 ">
								{/*  Node */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 mx-2 rounded-full  shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={node}
										alt=" Node js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Node
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>

								{/* Express.js */}
								<div className="flex items-center mt-8 -mx-5">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-4 ring-gray-300 dark:ring-gray-700"
										src={express}
										alt=" Express.js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Express.js
										</h1>
										<span className="text-sm text-blue-700">Read More</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Stacks;
