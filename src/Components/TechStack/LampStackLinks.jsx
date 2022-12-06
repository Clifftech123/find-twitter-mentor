
// THhis component contain all rhw external links that will help the user to read more about the LAMP stack 

import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";


// onclose is prop accepting from the stack component to close the modal 
const LampStackLinks = ( { isVisible, onclose } ) => {
	
    //    Technology images links 
		const Linux =
			"https://e7.pngegg.com/pngimages/1013/132/png-clipart-linux-distribution-tux-free-software-linux-kernel-linux-logo-bird.png";

		const Apache =
			"https://www.logo.wine/a/logo/Apache_HTTP_Server/Apache_HTTP_Server-Logo.wine.svg";

		const MySQL =
			"https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg";

		const PHP = "https://www.php.net/images/meta-image.png";
	if (!isVisible) return null;

	return (
		<>
			<div className="fixed inset-0   bg-opacity-25 backdrop-blur-sm flex justify-center items-center bg-black">
				<div className=" ">
					{/* CLOSING BUTTON */}
					<div className=" flex flex-col  ">
						<button
							onClick={() => onclose()}
							className="text-5xl text-white place-self-end"
						>
							<AiFillCloseCircle />
						</button>
					</div>

					{/* 	THE MAIN CONTENT  */}
					<div class=" lg:w-[600px] w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-Dark_bg_color  dark:border-gray-700">
						{/* HEADING  */}
						<h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
							Welcome To LAMP Stack
						</h5>
						{/* INSTRUCTION TEXT */}
						<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
							Click on any of the Technology to read more about
						</p>
						<ul class="my-4 space-y-3">
							{/* ====== Linux (operating system) ====== */}
							<li>
								<a
									href="https://www.linux.com/what-is-linux/"
									class="flex items-center dark:font-normal  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800  dark:border-gray-600 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex dark:group-hover:bg-gray-800 items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Linux}
											alt="Linux"
										/>
									</span>

									<span className=" dark:text-blue-200  text-lg">
										Linux (operating system)
									</span>
								</a>
							</li>
							{/* END OF  Linux (operating system) */}
							{/* =========== Apache (HTTP server)========= */}
							<li>
								<a
									href="https://httpd.apache.org/"
									class="flex items-center p-3 text-base  dark:font-normal font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100  dark:border-gray-600 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Apache}
											alt="Apache"
										/>
									</span>

									<span className=" dark:text-blue-200 text-lg">
										Apache (HTTP server)
									</span>
								</a>
							</li>
							{/*   END OF  Apache (HTTP server) */}

							{/* MySQL (relational database management) */}

							<li>
								<a
									href="https://www.mysql.com/"
									class="flex items-center p-3  dark:font-normal text-base font-bold  dark:border-gray-600 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900  dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={MySQL}
											alt="MySQL"
										/>
									</span>

									<span className="  dark:text-blue-200  text-lg">
										MySQL (relational database )
									</span>
								</a>
							</li>
							{/* END OF MySQL (relational database management) */}

							{/* =========   PHP (programming language ) ========== */}
							<li>
								<a
									href="https://www.php.net/"
									class="flex items-center  dark:font-normal p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group  dark:border-gray-600 border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center  px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800  group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={PHP}
											alt="PHP"
										/>
									</span>

									<span className=" dark:text-blue-200   text-lg">
										PHP (programming language )
									</span>
								</a>
							</li>

							{/*  END  OF  PHP (programming language ) */}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default LampStackLinks;
