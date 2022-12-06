import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';


const JavaStackLinks = ( { JavaisVisible, JavaOnclose } ) => {
	

	const Java =
		"https://www.mycollegepuzzle.com/wp-content/uploads/2020/12/Java.jpg";
	const Spring =
		"https://lilly021.com/wp-content/uploads/2019/07/springBoot_featured_image-1024x549.png";
	const Wildfly =
		"https://miro.medium.com/max/854/1*LCEfq27ik1RsjXKDEWAIYg.jpeg";

	const NGINX = "https://www.linuxadictos.com/wp-content/uploads/nginx-1.jpg";

	if (!JavaisVisible) return null;
  return (
		<>
			<div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center bg-black">
				<div className="">
					{/* CLOSING BUTTON */}
					<div className=" flex flex-col  ">
						<button
							onClick={() => JavaOnclose()}
							className="text-5xl text-white place-self-end"
						>
							<AiFillCloseCircle />
						</button>
					</div>
					<div class=" lg:w-[600px] w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-Dark_bg_color  dark:border-gray-700">
						{/* HEADING  */}
						<h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
							Welcome To JAVA STACK
						</h5>
						{/* INSTRUCTION TEXT */}
						<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
							Click on any of the Technology to read more about
						</p>
						<ul class="my-4 space-y-3">
							{/* ====== Java ====== */}
							<li>
								<a
									href="https://www.java.com/en/download/help/whatis_java.html"
									class="flex items-center dark:font-normal  p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800  dark:border-gray-600 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex dark:group-hover:bg-gray-800 items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Java}
											alt="Java"
										/>
									</span>

									<span className=" dark:text-blue-200  text-lg">Java</span>
								</a>
							</li>
							{/* End of Java*/}
							{/* =========== Spring ========= */}
							<li>
								<a
									href="https://spring.io/"
									class="flex items-center p-3 text-base  dark:font-normal font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100  dark:border-gray-600 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Spring}
											alt="Spring"
										/>
									</span>

									<span className=" dark:text-blue-200 text-lg">
										Spring backend JAVA framework
									</span>
								</a>
							</li>
							{/*   END OF  Spring Java backend web framework */}

							{/*Wildfly*/}

							<li>
								<a
									href="https://www.wildfly.org/"
									class="flex items-center p-3  dark:font-normal text-base font-bold  dark:border-gray-600 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800 group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900  dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={Wildfly}
											alt="Wildfly"
										/>
									</span>

									<span className="  dark:text-blue-200  text-lg">Wildfly</span>
								</a>
							</li>
							{/* END OF Wildfly */}

							{/* =========   NGINX ========== */}
							<li>
								<a
									href="https://www.nginx.com/resources/wiki/modules/java_handler/"
									class="flex items-center  dark:font-normal p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group  dark:border-gray-600 border border-gray-200 group-hover:shadow dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
									target="_blank"
								>
									<span class="inline-flex items-center justify-center  px-2 py-0.5 ml-3 text-xs font-medium text-gray-500  dark:group-hover:bg-gray-800  group-hover:bg-gray-100 bg-gray-50 rounded dark:bg-gray-900 dark:text-gray-400">
										<img
											className="object-cover mx-2 rounded-full md:h-20 md:w-20    h-10  w-10 shrink-0  ring-2 ring-gray-300 dark:ring-gray-700"
											src={NGINX}
											alt="  NGINX "
										/>
									</span>

									<span className=" dark:text-blue-200   text-lg">NGINX</span>
								</a>
							</li>

							{/*   NGINX*/}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default JavaStackLinks

