import { Fragment, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiTwotoneContacts} from "react-icons/ai";
import { SiStackshare } from "react-icons/si";
import { CiDark } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";


import { Menu, Transition } from "@headlessui/react";

 const Nav =() => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
		<>
			{/* Page Container */}
			<nav>
				{/* Page Header */}
				<header
					id="page-header"
					className="flex flex-none items-center bg-white shadow-sm z-1"
				>
					<div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
						<div className="flex justify-between py-4">
							{/* Left Section */}
							<div className="flex items-center">
								{/* Logo */}
								<a
									href="#"
									className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 hover:text-blue-600 active:text-gray-700"
								>
									<svg
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										className="opacity-90 text-blue-600 transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"
									>
										<path
											fillRule="evenodd"
											d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
											clipRule="evenodd"
										/>
									</svg>
									<span>FindMentor</span>
								</a>
								{/* END Logo */}
							</div>

							{/* END Left Section */}

							{/* Right Section */}
							<div className="flex items-center space-x-1 lg:space-x-5">
								{/* Desktop Navigation */}
								<nav className="hidden lg:flex lg:items-center lg:space-x-2">
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50 text-blue-500"
									>
										<AiOutlineHome />
										<span>Home</span>
									</button>
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
									>
										<SiStackshare />
										<span>Tech stack </span>
									</button>

									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
									>
										<AiOutlineTeam />
										<span> communities </span>
									</button>
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
									>
										<FcAbout />
										<span>About </span>
									</button>
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
									>
										<AiTwotoneContacts />

										<span> Contact </span>
									</button>
								</nav>
								{/* END Desktop Navigation */}

								{/* User Dropdown */}
								<Menu as="div" className="relative inline-block">
									{/* Dropdown Toggle Button */}
									<Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 mr-5  md:ml-20 md:mr-0 py-2 leading-5 text-sm rounded  bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:shadow-none">
										{/* Them icon */}
										<BsMoonStarsFill />
									</Menu.Button>
									{/* END Dropdown Toggle Button */}

									{/* Dropdown */}
									<Transition
										as={Fragment}
										enter="transition ease-out duration-150"
										enterFrom="transform opacity-0 scale-75"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-100"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-75"
									>
										<Menu.Items className="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1">
											<div className="bg-white ring-1  ring-black ring-opacity-5 rounded divide-y divide-gray-100">
												<div className="p-2 space-y-1">
													<Menu.Item>
														{({ active }) => (
															<button
																type="button"
																className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
																	active
																		? "text-gray-700 bg-gray-100"
																		: "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
																}`}
															>
																<CiDark className="hi-solid hi-inbox inline-block w-5 h-5 opacity-50" />
																<span>Dark </span>
															</button>
														)}
													</Menu.Item>
												</div>
												<div className="p-2 space-y-1">
													<Menu.Item>
														{({ active }) => (
															<button
																type="button"
																className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
																	active
																		? "text-gray-700 bg-gray-100"
																		: "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
																}`}
															>
																<FiSun className="hi-solid hi-inbox inline-block w-5 h-5 opacity-50" />
																<span>Light </span>
															</button>
														)}
													</Menu.Item>
												</div>
											</div>
										</Menu.Items>
									</Transition>
									{/* END Dropdown */}
								</Menu>
								{/* END User Dropdown */}

								{/* Toggle Mobile Navigation */}
								<div className="lg:hidden">
									<button
										type="button"
										className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
										onClick={() => setMobileNavOpen(!mobileNavOpen)}
									>
										<svg
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											className="hi-solid hi-menu inline-block w-5 h-5"
										>
											<path
												fillRule="evenodd"
												d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
								{/* END Toggle Mobile Navigation */}
							</div>
							{/* END Right Section */}
						</div>

						{/* Mobile Navigation */}
						<div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
							<nav className="flex flex-col space-y-2 py-4 border-t">
								<button
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50 text-blue-500"
								>
									<AiOutlineHome />
									<span>Home</span>
								</button>
								<button
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
								>
									<SiStackshare />
									<span>Tech stack </span>
								</button>

								<button
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
								>
									<AiOutlineTeam />
									<span> communities </span>
								</button>
								<button
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
								>
									<FcAbout />
									<span>About </span>
								</button>
								<button
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 active:border-blue-100"
								>
									<AiTwotoneContacts />
									<span> Contact </span>
								</button>
							</nav>
						</div>
						{/* END Mobile Navigation */}
					</div>
				</header>
				{/* END Page Header */}
			</nav>
		</>
	);
}


export default Nav
