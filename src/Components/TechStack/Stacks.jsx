
// This component contain  the full details of the all the tech  the usee needs to know 
import React, { useState } from "react";
import JavaStackLinks from "./JavaStackLinks";
import LampStackLinks from "./LampStackLinks";
import MeanStackLinks from "./meanStackLinks";
import MernStackLinks from "./MernStackLinks";


const Stacks = () => {
	const [ modalOpen, setModalOpen ] = useState( false ); // State to colone and open read more modal for the LAmp STACK
	
	const [MeanOpen, setMeanOpen] = useState( false ); // This close and open  MEAN stack read more external links 
	const [ MernOpne, setMernOpen ] = useState( false ); // This close and open MEAstack read more

	const [JavaOpen , setJavaOpen ] = useState( false ); // This close and open





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

	const mongoDB =
		"https://www.educative.io/v2api/collection/10370001/5227455105204224/image/6349680696885248";
	const node =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&usqp=CAU";
	const express = "https://miro.medium.com/max/805/0*m1VOQP0FtcQufLgw.png";


	// JAVA  STACK
	const Java =
		"https://www.mycollegepuzzle.com/wp-content/uploads/2020/12/Java.jpg";
	const Spring =
		"https://lilly021.com/wp-content/uploads/2019/07/springBoot_featured_image-1024x549.png";
	const Wildfly = "https://miro.medium.com/max/854/1*LCEfq27ik1RsjXKDEWAIYg.jpeg";

	const NGINX = "https://www.linuxadictos.com/wp-content/uploads/nginx-1.jpg";

	return (
		<>
			<section className=" bg-gray-50    dark:bg-Dark_bg_color  duration-100">
				{/* MAIN CONTAINER */}
				<div className="container xl:max-w-7xl mx-auto px-4 py-1  lg:py-10">
					<div className="grid grid-cols-1 gap-10  sm:grid-cols-1 lg:grid-cols-2">
						{/* LAMP  STACK */}
						<div className="p-5 bg-white  leading-relaxed   tracking-wide   dark:border-gray-700    dark:bg-gray-900     border-gray-100 shadow-sm   border-2     transition rounded-lg">
							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-50">
								LAMP STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-50  text-gray-600">
								LAMP is an industry-standard when it comes to tech stack models.
								In web development, it delivers the best cost efficiency,
								flexibility, and performance. It is an acronym that stands for:
							</p>

							{/*  LAMP  Langues Icons  */}
							<div className="flex flex-row   space-x-20  align-middle  md:space-x-32 justify-center  ">
								{/* Linux */}
								<div className="flex items-center mt-8 ">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Linux}
										alt="Linux"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Linux
										</h1>
									</div>
								</div>

								{/* Apache  */}
								<div className="flex items-center  mt-8 ">
									<img
										className="object-cover  bg-white mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Apache}
										alt="Apache"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											Apache
										</h1>
									</div>
								</div>
							</div>

							{/* second row  icons */}
							<div className="flex  flex-row space-x-20 md:space-x-32  align-middle justify-center">
								{/* MySQL */}
								<div className="flex items-center mt-8    ">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10  mx-2 rounded-full  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={MySQL}
										alt="MySQl"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											MySQL
										</h1>
									</div>
								</div>

								{/* PHP */}
								<div className="flex items-center mt-8 ">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={PHP}
										alt="PHP"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											PHP
										</h1>
									</div>
								</div>
							</div>
							{/*    Read More button that will help the user to read more about lamp stack from external links  */}
							<button
								onClick={() => setModalOpen(true)}
								type="button"
								className="bg-blue-800  hover:bg-blue-700  text-white w-full  mt-10 p-2.5 dark:bg-blue-900 rounded-lg"
							>
								Read More
							</button>
						</div>
						{/* END OF LAMP STACK  */}
						{/* ==== SECOND CARD  MEAN STACK   ===== */}
						{/* MEAN STACK */}
						<div className="p-5  bg-white  leading-relaxed   tracking-wide    dark:border-gray-700   dark:bg-gray-900  border-gray-100    border-2  shadow-sm  transition rounded-lg">
							{/* LAMP  STACK */}

							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-50">
								MEAN STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-50  text-gray-600">
								One of the well-known tech stacks, MEAN brings numerous benefits
								to web developers. Among these benefits are the use of a single
								language (JavaScript) and the underlying technologies are open
								source and free. MEAN consists of:
							</p>

							{/*  MERN STACK  Langues Icons  */}
							<div className="flex flex-row  space-x-20  align-middle md:space-x-32  justify-center ">
								{/* MongoDB */}
								<div className="flex items-center mt-8 ">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={MongoDB}
										alt="MongoDB"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											MongoDB
										</h1>
									</div>
								</div>

								{/* Express js   */}
								<div className="flex items-center  mt-8 ">
									<img
										className="object-cover  mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Expressjs}
										alt="Express.js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											Express
										</h1>
									</div>
								</div>
							</div>

							{/* second row  */}
							<div className="flex flex-row  align-middle  space-x-20  md:space-x-32 justify-center ">
								{/*  Angular js */}
								<div className="flex items-center mt-8 ">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10  mx-2 rounded-full  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Angularjs}
										alt=" Angularjs"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Angular
										</h1>
									</div>
								</div>

								{/* Node.js server */}
								<div className="flex items-center mt-8 ">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Nodejs}
										alt="Node.js "
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Node
										</h1>
									</div>
								</div>
							</div>
							{/* Read more button that will help the user the to read more about all the MEAN Stack technologies  */}
							<button
								onClick={() => setMeanOpen(true)}
								type="button"
								className="bg-blue-800 text-white w-full   hover:bg-blue-700  mt-10 p-2.5 dark:bg-blue-900 rounded-lg"
							>
								Read More
							</button>
						</div>{" "}
						{/*  END OF THE SECOND CARD  MEAN STACK */}
						{/*============= THIRD CARD MERN STCK============ */}
						{/* MERN  STACK */}
						<div className="p-5 b  bg-white leading-relaxed   tracking-wide     dark:bg-gray-900   dark:border-gray-700   border-gray-100    border-2      shadow-sm    transition rounded-lg">
							{/* LAMP  STACK */}

							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-50">
								MERN STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-50  text-gray-600">
								Essentially MERN is similar to MEAN. The difference is that you
								change Angular.js with React. The key benefits of using MERN are
								the React integration, the ability to use codes on browsers and
								servers simultaneously, powerful library, and full-stack
								development option (frontend and backend).
							</p>

							{/*  MERN STCK  Langues Icons  */}
							<div className="flex flex-row space-x-20  md:space-x-32  justify-center   ">
								{/* React.js */}
								<div className="flex items-center mt-8 ">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={ReactJs}
										alt="ReactJs"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											React
										</h1>
									</div>
								</div>

								{/* MongoDB   */}
								<div className="flex items-center  mt-8 -mx-2">
									<img
										className="object-cover  bg-white mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-2 ring-gray-300 dark:ring-gray-700"
										src={mongoDB}
										alt="MongoDB"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											MongoDB
										</h1>
									</div>
								</div>
							</div>

							{/* second row  */}
							<div className=" flex flex-row space-x-20  md:space-x-32  justify-center ">
								{/*  Node */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10  mx-2 rounded-full  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={node}
										alt=" Node js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Node
										</h1>
									</div>
								</div>

								{/* Express.js */}
								<div className="flex items-center mt-8  ">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={express}
										alt=" Express.js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Express
										</h1>
									</div>
								</div>
							</div>
							{/*    READ  MOR BUTTON */}
							<button
								onClick={() => setMernOpen(true)}
								type="button"
								className="bg-blue-800 text-white w-full   hover:bg-blue-700  mt-10 p-2.5 dark:bg-blue-900 rounded-lg"
							>
								Read More
							</button>
						</div>
						{/* END OF THE  THIRD CARD MERN STACK */}
						{/* ===== FOURTH CARD  JAVA STACK ===== */}
						<div className="p-5 bg-white  leading-relaxed   tracking-wide     dark:bg-gray-900   dark:border-gray-700   border-gray-100    border-2      shadow-sm     transition rounded-lg">
							{/* JAVA STACK */}

							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-50">
								JAVA STACK
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-50  text-gray-600">
								Java is not as popular as it once used to be. It is popular for
								enterprise applications but many new projects tend to gravitate
								to newer and lighter weight application stacks like Node.js and
								ASP.NET. Java is still heavily used and there are lots of Java
								developers all over the world.
							</p>

							{/*  JAVA  STCK  Langues Icons  */}
							<div className="flex flex-row space-x-20 justify-center  md:space-x-32">
								{/* JAVA */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Java}
										alt="Java"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Java
										</h1>
									</div>
								</div>

								{/* Spring  */}
								<div className="flex items-center  mt-8 -mx-2">
									<img
										className="object-cover  bg-white mx-2 rounded-full  shrink-0 sm:h-20 h-10 sm:w-20 w-10  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Spring}
										alt="Spring"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-sm md:text-md text-gray-800 dark:text-white">
											Spring
										</h1>
									</div>
								</div>
							</div>

							{/* second row  */}
							<div className=" flex flex-row space-x-20  justify-center md:space-x-32 ">
								{/*  Wildfly */}
								<div className="flex items-center mt-8 -mx-2">
									<img
										className="object-cover sm:h-20 h-10 sm:w-20 w-10 sm:ml-10 mx-2 rounded-full  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={Wildfly}
										alt=" Wildfly"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											Wildfly
										</h1>
									</div>
								</div>

								{/* NGINX */}
								<div className="flex items-center mt-8 -mx-5">
									<img
										className="object-cover mx-2 rounded-full sm:h-20 h-10 sm:w-20 w-10  shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
										src={NGINX}
										alt=" Express.js"
									/>

									<div className="mx-2">
										<h1 className="font-semibold text-gray-800 dark:text-white">
											NGINX
										</h1>
									</div>
								</div>
							</div>
							{/*    READ  MOR BUTTON */}
							<button
								onClick={() => setJavaOpen(true)}
								type="button"
								className="bg-blue-800 text-white w-full  hover:bg-blue-700 mt-10 p-2.5 dark:bg-blue-900 rounded-lg"
							>
								Read More
							</button>
						</div>
						{/* END OF FOURTH CARD  */}
					</div>
				</div>
			</section>
			{/* MODAL FUNCTIONALITIES THAT WILL HELP THE USER TO READ MORE ABOUT  LAMP  STACK */}
			<LampStackLinks
				isVisible={modalOpen}
				onclose={() => setModalOpen(false)}
			/>
			{/* THE MODAL THE HELP THE USER THE READ MORE THE MEAN STACK */}
			<MeanStackLinks
				MeanIsVisible={MeanOpen}
				MeanOnclose={() => setMeanOpen(false)}
			/>
			{/* {/* THE MODAL THE HELP THE USER THE READ MORE THE MERN STACK */}
			<MernStackLinks
				MernisVisible={MernOpne}
				MernOnclose={() => setMernOpen(false)}
			/>
			{/* {/* THE MODAL THE HELP THE USER THE READ MORE THE JAVA STACK */}
			<JavaStackLinks
				JavaisVisible={JavaOpen}
				JavaOnclose={() => setJavaOpen(false)}
			/>
		</>
	);
};

export default Stacks;
