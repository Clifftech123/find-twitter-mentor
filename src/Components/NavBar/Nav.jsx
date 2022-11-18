import {  useState,useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiTwotoneContacts} from "react-icons/ai";
import { SiStackshare } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Nav = () => {
	  const navigate = useNavigate();

	 const [ mobileNavOpen, setMobileNavOpen ] = useState( false );
	 const [ theme, setTheme ] = useState( 
		 localStorage.getItem( "theme" ) ? localStorage.getItem( "theme") :""
	  );
	 const element = document.documentElement
	

	//  Light and dark theme ions
	 const options = [
		 {
			 icons: "sunny",
			 text: "light"
		 },
		 {
			 icons: "moon",
			 text: "dark"
		 },
		
	 ];

//    USE Effect that handle  Light and Dark theme
	 useEffect(() => {
		 switch (theme) {
				case "dark":
					element.classList.add("dark");
					localStorage.setItem("theme", "dark");
					break;
				case "light":
					element.classList.remove("dark");
					localStorage.setItem("theme", "light");
					break;

				default:
					localStorage.removeItem("theme");
					break;
			}
		
	 }, [ theme ] );

	
   return (
			<>
				<nav>
					{/* Page Header */}
					<header
						id="page-header"
						className="flex flex-none items-center dark:text-gray-100 dark:bg-slate-800 duration-100 bg-gray-50 shadow-sm z-1"
					>
						<div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
							<div className="flex justify-between py-4">
								{/* Left Section */}
								<div className="flex items-center">
									{/* Logo */}
									<a
										href="#"
										className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 dark:text-gray-100 hover:text-blue-600 active:text-gray-700"
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
										{/* Home */}
										<button
											onClick={() => navigate("/")}
											type="button"
											className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50  dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:border-none text-blue-500"
										>
											<AiOutlineHome />
											<span>Home</span>
										</button>
										{/* Teach Stacks */}
										<button
											type="button"
											className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50  dark:bg-slate-800 dark:text-gray-300 dark:border-none active:bg-blue-100 active:border-blue-100 dark:hover:bg-slate-700"
										>
											<SiStackshare />
											<span>Tech stack </span>
										</button>

										{/* Communities */}
										<button
											type="button"
											className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 dark:bg-slate-800 dark:text-gray-300 dark:border-none  hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 dark:hover:bg-slate-700 active:border-blue-100"
										>
											<AiOutlineTeam />
											<span> communities </span>
										</button>

										{/* About */}
										<button
											type="button"
											className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 500 dark:bg-slate-800 dark:text-gray-300 dark:border-none dark:hover:bg-slate-700  active:border-blue-100"
										>
											<FcAbout />
											<span>About </span>
										</button>
										{/* Fined Mentor */}
										<button
											onClick={() => navigate("/fineMentor")}
											type="button"
											className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 500 dark:bg-slate-800 dark:text-gray-300 dark:border-none dark:hover:bg-slate-700  active:border-blue-100"
										>
											<MdOutlinePersonalInjury />
											<span> Find Mentor </span>
										</button>

										{/* Contact */}
										<button
											type="button"
											className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 500 dark:bg-slate-800 dark:text-gray-300 dark:border-none dark:hover:bg-slate-700 active:border-blue-100"
										>
											<AiTwotoneContacts />

											<span> Contact </span>
										</button>
									</nav>
									{/* END Desktop Navigation */}

									{/* LIGHT AND  DARK MODE */}
									<div className="relative inline-block ">
										<div className="inline-flex justify-center dark:shadow-lg dark:bg-gray-700 items-center space-x-5  font-semibold focus:outline-none px-3 mr-10  md:ml-20 md:mr-0 py-2 leading-5 text-2xl rounded  bg-gray-50 text-gray-800    ">
											{/* Looping through all the icons */}
											{options.map((opt) => (
												<button
													onClick={() => setTheme(opt.text)}
													key={opt.text}
													className={`h-8 w-8 ${
														theme === opt.text && "text-sky-600"
													}  `}
												>
													<ion-icon name={opt.icons}></ion-icon>
												</button>
											))}
										</div>
									</div>
									{/*END LIGHT AND  DARK MODE */}

									{/* Toggle Mobile Navigation */}
									<div className="lg:hidden">
										<button
											type="button"
											className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded dark:bg-gray-300 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
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

							{/* Mobile view Navigation */}
							<div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
								<nav className="flex flex-col space-y-2 py-4 border-t">
									{/* home */}
									<button
										onClick={() => navigate("/")}
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-blue-50 bg-blue-50 text-blue-500   dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:border-none"
									>
										<AiOutlineHome />
										<span>Home</span>
									</button>
									{/* Teach Stack */}
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50  dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:border-none active:bg-blue-100 active:border-blue-100"
									>
										<SiStackshare />
										<span>Tech stack </span>
									</button>
									{/* Communities */}
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50   dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:border-none active:bg-blue-100 active:border-blue-100"
									>
										<AiOutlineTeam />
										<span> communities </span>
									</button>
									{/* About */}
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50   dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:border-none active:bg-blue-100 active:border-blue-100"
									>
										<FcAbout />
										<span>About </span>
									</button>

									{/* Fined Mentor */}
									<button
										onClick={() => navigate("/fineMentor")}
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50 active:bg-blue-100 500 dark:bg-slate-800 dark:text-gray-300 dark:border-none dark:hover:bg-slate-700  active:border-blue-100"
									>
										<MdOutlinePersonalInjury />
										<span> Find Mentor </span>
									</button>
									{/* contact */}
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-blue-500 hover:bg-blue-50 hover:border-blue-50   dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:border-none active:bg-blue-100 active:border-blue-100"
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
