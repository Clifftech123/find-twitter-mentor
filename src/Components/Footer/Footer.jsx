import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs";





const Footer = () => {

// SOCIAL ICONS LINKS 
    const Github = "https://github.com/Clifftech123";
    const Twitter = "https://twitter.com/Clifftech_Dev";
    const Linkedin ='https://www.linkedin.com/in/isaiah-clifford-opoku-a506a51b2'

    return (
			<>
				<div   id='Connect' className=" dark:bg-nav_dark_bg_color py-2  mt-10  bg-Dark_bg_color ">
					<div className="  dark:bg-nav_dark_bg_color mt-3 dark:text-white  align-middle text-white leading-loose tracking-wider    justify-center text-center  ">
						<div className="">
							<h4> Made by : Isaiah Clifford Opoku </h4>
							<br />
						</div>
					</div>

					<div className=" flex space-x-4 align-middle text-center justify-center     dark:bg-nav_dark_bg_color bg-Dark_bg_color ">
						{/* SOCAIL ICONS */}
						{/* GITHUB */}
						<div className="text-center text-2xl  text-white">
							<button type="button" className="hover:text-gray-300">
								<a href={Github} target={"_blank"} rel="noreferrer">
									<VscGithub />
								</a>
							</button>
						</div>
						{/* TWITTER  */}
						<div className="text-center  text-2xl   text-white">
							<button type="button" className="hover:text-gray-300 ">
								<a href={Twitter} target={"_blank"} rel="noreferrer">
									<BsTwitter />
								</a>
							</button>
						</div>
						{/* LINKDE  */}
						<div className="text-center   text-2xl  text-white">
							<button type="button" className="hover:text-gray-300">
								<a href={Linkedin} target={"_blank"} rel="noreferrer">
									<BsLinkedin />
								</a>
							</button>
						</div>
					</div>
				</div>
			</>
		);
}

export default Footer

