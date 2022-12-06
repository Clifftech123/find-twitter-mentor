import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const MernStackLinks = ( { MernisVisible, MernOnclose } ) => {
		const ReactJs =
			"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124";

		const mongoDB =
			"https://www.educative.io/v2api/collection/10370001/5227455105204224/image/6349680696885248";
		const node =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5rLh0Ed_H4b8ZM08EK6JZ1gBjVYVDmfmRQ&usqp=CAU";
		const express = "https://miro.medium.com/max/805/0*m1VOQP0FtcQufLgw.png";

	if (!MernisVisible) return null;
	return (
		<>
			<div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center bg-black">
				<div className="">
					{/* CLOSING BUTTON */}
					<div className=" flex flex-col  ">
						<button
							onClick={() => MernOnclose()}
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
											src={mongoDB}
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
											src={express}
											alt="Expressjs"
										/>
									</span>

									<span className=" dark:text-blue-200 text-lg">
										Express.js backend web framework
									</span>
								</a>
							</li>
							{/*   END OF  Express.js backend web framework */}

							{/*React .js frontend framework*/}

							<li>
								<a
									href="https://beta.reactjs.org/"
									class="flex items-center p-3  dark:font-normal text-base font-bold  dark:border-gray-600 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900  dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={ReactJs}
											alt="ReactJs"
										/>
									</span>

									<span className="  dark:text-blue-200  text-lg">
										React.js frontend framework
									</span>
								</a>
							</li>
							{/* END OF React.js frontend framework */}

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
											src={node}
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

export default MernStackLinks

