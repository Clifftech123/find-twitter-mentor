// NAV component on the homepage
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { AiTwotoneContacts } from "react-icons/ai";
import { SiStackshare } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
	const navigate = useNavigate();

	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
	);
	const element = document.documentElement;

	//  Light and dark theme ions
	const options = [
		{
			icons: "sunny",
			text: "light",
		},
		{
			icons: "moon",
			text: "dark",
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
	}, [theme]);

	return (
		<>
			<nav>
				{/* Page Header */}
				<header
					id="page-header"
					className="  
					   
						 flex flex-none items-center dark:text-gray-100 dark:bg-nav_dark_bg_color duration-100 bg-Nav_Bg_Color   shadow-5xl z-1"
				>
					<div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
						<div className="flex justify-between py-4">
							{/* Left Section */}
							<div className="flex items-center">
								{/* Logo */}
								<a
									href="#"
									className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide  text-Nav_text_hover_color dark:text-gray-100 hover:text-blue-600 active:text-gray-700"
								>
									<svg
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										className="opacity-90   text-Nav_text_hover_color transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"
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
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded  hover:text-white  hover:bg-Nav_text_hover_color    dark:hover:bg-slate-700  dark:bg-nav_dark_bg_color dark:text-gray-300 dark:border-none  text-gray-700 "
									>
										<AiOutlineHome />
										<span>Home</span>
									</button>
									{/* Teach Stacks */}
									<button
										onClick={() => navigate("/techStack")}
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded  text-gray-700   border border-transparent hover:text-white  hover:bg-Nav_text_hover_color dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none  dark:hover:bg-slate-700"
									>
										<SiStackshare />
										<span>Tech stack </span>
									</button>

									{/* Communities */}
									<button
										onClick={() => navigate("/communities")}
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded  text-gray-700  border border-transparent hover:text-white hover:bg-Nav_text_hover_color dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none    dark:hover:bg-slate-700 "
									>
										<AiOutlineTeam />
										<span> communities </span>
									</button>

									{/* About */}
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded   text-gray-700  border-transparent  hover:text-white hover:bg-Nav_text_hover_color  dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none dark:hover:bg-slate-700  "
									>
										<FcAbout />
										<span>
											<HashLink smooth to="/#Connect">
												Connect
											</HashLink>
										</span>
									</button>
									{/* Fined Mentor */}
									<button
										onClick={() => navigate("/fineMentor")}
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded  text-gray-700  border border-transparent   hover:text-white hover: hover:bg-Nav_text_hover_color  dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none dark:hover:bg-slate-700 "
									>
										<MdOutlinePersonalInjury />
										<span> Find Mentor </span>
									</button>

									{/* Contact */}
									<button
										type="button"
										className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded   text-gray-700  border border-transparent  
											hover:text-white  hover:bg-Nav_text_hover_color  dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none dark:hover:bg-slate-700 "
									>
										<AiTwotoneContacts />

										<span> Resources </span>
									</button>
								</nav>
								{/* END Desktop Navigation */}

								{/* LIGHT AND  DARK MODE */}
								<div className="  hidden  relative md:inline-block ">
									<div className="inline-flex justify-center dark:shadow-lg dark:bg-nav_dark_bg_color  items-center space-x-5  font-semibold focus:outline-none px-3 mr-10  md:ml-20 md:mr-0 py-2 leading-5 text-2xl rounded  bg-Nav_Bg_Color  text-gray-600    ">
										{/* Looping through all the icons */}
										{options.map((opt) => (
											<button
												onClick={() => setTheme(opt.text)}
												key={opt.text}
												className={`h-8 w-8 ${
													theme === opt.text && "text-primary"
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
										className="inline-flex transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 leading-6 rounded dark:bg-gray-300  bg-white text-gray-800  hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300  focus:ring-opacity-25 active:bg-white  active:shadow-none"
										onClick={() => setMobileNavOpen(!mobileNavOpen)}
									>
										{mobileNavOpen ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 "
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										)}
									</button>
								</div>
								{/* END Toggle Mobile Navigation */}
							</div>
							{/* END Right Section */}
						</div>

						{/* Mobile view Navigation This section will show on only mobile devices */}
						<div
							className={`     dark:bg-slate-900   bg-white shadow-2xl   fixed top-0 z-50  w-2/3 h-screen  md:hidden flex flex-col gap-10  text-medium  p-7 pt-20 right-0  duration-500lg:hidden ${
								mobileNavOpen ? "right-0 text-center" : "right-[-100%]"
							}`}
						>
							{/* Toggle Mobile Navigation  on small device */}
							<div className="md:hidden   dark:bg-slate-900 ">
								<button
									type="button"
									className="inline-flex  dark:bg-slate-900   transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 leading-6 rounded    text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-200 focus:ring-opacity-25 "
									onClick={() => setMobileNavOpen(!mobileNavOpen)}
								>
									{mobileNavOpen ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6   dark:text-white"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
							</div>
							{/* END OF TOGGLE ICON */}

							<nav className="flex   transition duration-300  flex-col space-y-2 py-4 border-t   ">
								{/* home */}
								<button
									onClick={() => navigate("/")}
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded   hover:text-white   hover:bg-Nav_text_hover_color    dark:bg-slate-900  text-gray-700   dark:hover:bg-slate-700 dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none"
								>
									<AiOutlineHome />
									<span>Home</span>
								</button>
								{/* Teach Stack */}
								<button
									onClick={() => navigate("/techStack")}
									type="button"
									className="text-sm   font-medium flex items-center space-x-2 px-3 py-2 rounded   text-gray-700 border border-transparent  hover:text-white   hover:bg-Nav_text_hover_color dark:bg-nav_dark_bg_color     dark:hover:bg-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:border-none "
								>
									<SiStackshare />
									<span>Tech stack </span>
								</button>
								{/* Communities */}
								<button
									onClick={() => navigate("/communities")}
									type="button"
									className="   dark:bg-slate-900 text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded   text-gray-700 border border-transparent  hover:text-white   hover:bg-Nav_text_hover_color  dark:bg-nav_dark_bg_color     dark:hover:bg-slate-700  dark:text-gray-300 dark:border-none "
								>
									<AiOutlineTeam />
									<span> communities </span>
								</button>
								{/* About */}
								<button
									type="button"
									className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded   text-gray-700 border border-transparent hover:text-white   hover:bg-Nav_text_hover_color dark:bg-nav_dark_bg_color  dark:bg-slate-900    dark:hover:bg-slate-700  dark:text-gray-300 dark:border-none "
								>
									<FcAbout />
									<HashLink smooth to="/#Connect">
										Connect
									</HashLink>
								</button>

								{/* Fined Mentor */}
								<button
									onClick={() => navigate("/fineMentor")}
									type="button"
									className="   dark:bg-slate-900 text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded   text-gray-700  border border-transparent hover:text-white  hover:bg-Nav_text_hover_color  dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none dark:hover:bg-slate-700  "
								>
									<MdOutlinePersonalInjury />
									<span> Find Mentor </span>
								</button>
								{/* contact */}
								<button
									type="button"
									className="   dark:bg-slate-900 text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded  text-gray-700  border border-transparent hover:text-white       hover:bg-Nav_text_hover_color      dark:hover:bg-slate-900 dark:bg-nav_dark_bg_color  dark:text-gray-300 dark:border-none "
								>
									<AiTwotoneContacts />
									<span> Contact </span>
								</button>

								{/* DARK MODE SHOWING ON SMALL DEVICES  */}
								{/* LIGHT AND  DARK MODE */}
								<div className="relative inline-block ">
									<div className="inline-flex justify-center    dark:bg-slate-900 dark:shadow-sm dark:bg-nav_dark_bg_color  items-center space-x-5  font-semibold focus:outline-none     mt-10 py-2 leading-5 text-2xl rounded    text-gray-600    ">
										{/* Looping through all the icons */}
										{options.map((opt) => (
											<button
												onClick={() => setTheme(opt.text)}
												key={opt.text}
												className={`h-8 w-8 ${
													theme === opt.text && "text-primary"
												}  `}
											>
												<ion-icon name={opt.icons}></ion-icon>
											</button>
										))}
									</div>
								</div>
								{/* END OF DARK MODE */}
							</nav>
						</div>
						{/* END Mobile Navigation */}
					</div>
				</header>
				{/* END Page Header */}
			</nav>
		</>
	);
};

export default Nav;
