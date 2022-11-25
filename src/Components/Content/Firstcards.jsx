import React from 'react'
import { BsCodeSlash } from "react-icons/bs";
import { IoCodeDownloadSharp } from "react-icons/io5";
import { BsCodeSquare } from "react-icons/bs";
import { SiAndroidstudio } from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BiData } from "react-icons/bi";






const FirstCards = () => {
  return (
		<div>
			{/* Features Section: Boxes with Icons */}
			<div className="   bg-Nav_Bg_Color    dark:bg-Dark_bg_color  duration-100">
				<div className="container xl:max-w-7xl mx-auto px-4 py-1  lg:py-32">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
						{/* FONT-EDN DEVELOPER */}
						<div className="p-5 leading-relaxed  tracking-wide bg-white   dark:bg-gray-900   dark:hover:shadow-lg    hover:shadow-xl shadow-sm  rounded-lg">
							{/* FRONDE ICON */}
							<BsCodeSlash
								className="text-primary mb-5 hi-outline hi-template inline-block
                               w-12 h-12"
							/>

							<h4 className="text-lg text-gray-600 font-semibold   mb-2 dark:text-gray-300">
								Front-end Development
							</h4>
							<p className=" dark:text-gray-400 text-gray-600">
								Front-end web development, also known as client-side development
								is the practice of producing HTML, CSS and JavaScript for a
								website or Web Application so that a user can see and interact
								with them directly. The challenge associated with front end
								development is that the tools and techniques used to create the
								front end of a website change constantly and so the developer
								needs to constantly be aware of how the field is developing.
							</p>
						</div>
						{/* BACK-END DEVELOPMENT */}
						<div className="p-5 leading-relaxed   tracking-wide bg-white     dark:bg-gray-900      hover:shadow-xl shadow-sm transition rounded-lg">
							{/* BACK-END ICON */}
							<IoCodeDownloadSharp
								className="text-primary mb-5 hi-outline hi-template inline-block
                               w-12 h-12"
							/>
							<h4 className="text-lg font-semibold   text-gray-600 mb-2 dark:text-gray-300">
								Back-end Development
							</h4>
							<p className="leading-relaxed tracking-wide dark:text-gray-400 text-gray-600">
								Back-end development means working on server-side software,
								which focuses on everything you can’t see on a website. Back-end
								developers ensure the website performs correctly, focusing on
								databases, back-end logic, application programming interface
								(APIs), architecture, and servers. They use code that helps
								browsers communicate with databases, store, understand, and
								delete data.
							</p>
						</div>
						{/* FULL-STACK */}

						<div className="p-5 bg-white  leading-relaxed   tracking-wide   dark:bg-gray-900     dark:hover:shadow-lg     hover:shadow-xl shadow-sm  transition rounded-lg">
							{/* FULL-STACK ICON */}
							<BsCodeSquare
								className="text-primary  mb-5 hi-outline hi-template inline-block
                               w-12 h-12"
							/>
							<h4 className="text-lg font-semibold  text-gray-600  mb-2  dark:text-gray-300">
								Full-Stack Development
							</h4>
							<p className="leading-relaxed  tracking-wide dark:text-gray-400 text-gray-600">
								A full-stack developer is a developer or engineer who can build
								both the front end and the back end of a website. The front end
								(the parts of a website a user sees and interacts with) and the
								back end (the behind-the-scenes data storage and processing)
								require different skill sets. Since full-stack developers are
								involved with all aspects of the development process, they must
								have expertise in both.
							</p>
						</div>

						{/* SECOND CARDS  */}
						{/* MOBILE APP DEVELOPMENT */}

						<div className="p-5 bg-white   dark:bg-gray-900     dark:hover:shadow-lg     hover:shadow-xl shadow-sm  transition rounded-lg">
							{/* MOBILE ICON */}
							<SiAndroidstudio className="text-primary  mb-5 hi-outline hi-template inline-block  w-12 h-12" />
							<h4 className="text-lg font-semibold  text-gray-600   mb-2 2 dark:text-gray-300">
								Mobile App Development
							</h4>
							<p className="leading-relaxed tracking-wide dark:text-gray-400 text-gray-600">
								Mobile application development is the set of processes and
								procedures involved in writing software for small, wireless
								computing devices, such as smartphones and other hand-held
								devices. Like web application development, mobile application
								development has its roots in more traditional software
								development. One critical difference, however, is that mobile
								apps are often written specifically to take advantage of the
								unique features of a particular mobile device.
							</p>
						</div>
						{/* DATA SCIENCE */}
						<div className="p-5 bg-white  leading-relaxed   tracking-wide     dark:bg-gray-900     dark:hover:shadow-lg  border-gray-100   hover:shadow-xl shadow-sm   transition rounded-lg">
							{/* DATA SCIENCE ICON */}
							<BiData className="text-primary mb-5 hi-outline hi-template inline-block  w-12 h-12" />
							<h4 className="text-lg  mb-2  text-gray-600 font-semibold   dark:text-gray-300">
								Data Science
							</h4>
							<p className="leading-relaxed font-Poppins tracking-wide dark:text-gray-400  text-gray-600">
								Data science combines math and statistics, specialized
								programming, advanced analytics, artificial intelligence (AI),
								and machine learning with specific subject matter expertise to
								uncover actionable insights hidden in an organization’s data.
								These insights can be used to guide decision making and
								strategic planning. The accelerating volume of data sources, and
								subsequently data, has made data science is one of the fastest
								growing field across every industry.
							</p>
						</div>
						{/* DEVOPS */}
						<div className="p-5 bg-white  leading-relaxed   tracking-wide   dark:border-gray-700  dark:bg-gray-900   shadow-sm    hover:shadow-xl   dark:hover:shadow-lg  transition rounded-lg ">
							<AiOutlineCloudServer className="text-primary mb-5 hi-outline hi-template inline-block  w-12 h-12" />
							<h4 className="text-lg font-semibold   text-gray-600  mb-2 dark:text-gray-300">
								DevOps Developer
							</h4>
							<p className="leading-relaxed tracking-wide font-Poppins  dark:text-gray-400  text-gray-600">
								DevOps is the software development strategy and it involves a
								lot of development, testing and deployment of technologies. A
								DevOps Developer is someone who will have a full understanding
								of the software development life cycle. They will work with the
								developers and the IT staff of a business to bridge the gap and
								make sure that DevOps is implemented.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FirstCards

