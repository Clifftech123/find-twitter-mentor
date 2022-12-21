import React from "react";
  import HashNode from '../.././assets/HashNode.png'
  import Freecodecmap from "../.././assets/FreeCodeCamp.png";
  import Dev from "../.././assets/DevTo.png";
  import discord from "../.././assets/Discord.png";
  import CodePen from "../.././assets/Codepen.png";
  import CodeNewbie from "../.././assets/codeNewbie.png";
  
  

const Content = () => {

// communities links 
    const Hashnode = "https://hashnode.com/";
    const FreeCodeCamp = "https://www.freecodecamp.org/";
    const DevTo = 'https://dev.to/';
    const Discord = "https://discord.com/";
    const codePen = "https://codepen.io/";
    const codeNewbie  = 'https://www.codenewbie.org/'
     


	return (
		<>
			<div className=" bg-Nav_Bg_Color     dark:bg-Dark_bg_color  duration-100">
				<div className="container px-6 py-10 mx-auto">
					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
						{/*  ========= FIRST COMMUNITY  Hashnode   =========*/}
						<section id=" Hashnode">
							<div class="max-w-2xl relative overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
								<img
									class="object-cover w-full h-64 hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={HashNode}
									alt="HashNode"
								/>

								<div class="p-6">
									<div>
										<a
											href={Hashnode}
											class="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform  hover:text-gray-600  dark:hover:text-white underline dark:text-blue-500 text-blue-800"
											target={"_blank"}
											rel="noreferrer"
										>
											Hashnode
										</a>
										<p class="mt-2 text-sm text-gray-600 dark:text-gray-100">
											Hashnode provides a great way to discover and digest tech
											blogs. The platform allows you to follow individual tech
											bloggers and connect with them. They have a lot of
											programming challenges and explanations of the basics, so
											it’s a good place to get grounded and stretch the
											application of your skills.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/*  =========  END OF   FIRST COMMUNITY   Hashnode   =========*/}
						{/*  =========  FreeCodeCamp  =========*/}
						<section id="FreeCodeCamp ">
							<div class="max-w-2xl relative overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
								<img
									class="object-cover w-full h-64 hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={Freecodecmap}
									alt=" FreeCodeCamp"
								/>

								<div class="p-6">
									<div>
										<a
											href={FreeCodeCamp}
											class="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform dark:text-blue-500 dark:hover:text-white hover:text-gray-600 underline text-blue-800"
											target={"_blank"}
											rel="noreferrer"
										>
											FreeCodeCamp
										</a>
										<p class="mt-2 text-sm text-gray-600 dark:text-gray-100">
											FreeCodeCamp is a platform where anyone can learn coding
											basics for free! I love their mission and they have an
											absolute glut of information that you can sift through on
											almost any coding topic. That said, their forum is of
											particular interest, it’s one of the best coding
											communities you can find online.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/*  ========= END OF FreeCodeCamp    =========*/}
						{/*  =========  DEV.to   =========*/}
						<section id=" DEVto ">
							<div class="max-w-2xl relative overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
								<img
									class="object-cover w-full h-64 hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={Dev}
									alt=" DevTo"
								/>

								<div class="p-6">
									<div>
										<a
											href={DevTo}
											class="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform dark:text-blue-500 dark:hover:text-white hover:text-gray-600 underline text-blue-800"
											target={"_blank"}
											rel="noreferrer"
										>
											DEV.to
										</a>
										<p class="mt-2 text-sm text-gray-600 dark:text-gray-100">
											DEV does have a social media aspect, so you can post
											questions and get answers via comments and tag with #help.
											The format is similar to Facebook’s timeline feed with
											comments for answers, and the articles are more like what
											you’d find in the tech topics on Medium. As far as finding
											a group of people to support you in your journey, DEV
											lacks the 1:1 connection ability and has grown too large
											to help you on an individual level and provide you with
											tailored support or advice.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/*  ========= END OF DEV.to    =========*/}
						{/*  =========  Discord =========*/}
						<section id="Discord">
							<div class="max-w-2xl relative overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
								<img
									class="object-cover w-full h-64 hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={discord}
									alt=" discord "
								/>

								<div class="p-6">
									<div>
										<a
											href={Discord}
											class="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform dark:text-blue-500 dark:hover:text-white hover:text-gray-600 underline text-blue-800"
											target={"_blank"}
											rel="noreferrer"
										>
											Discord
										</a>
										<p class="mt-2 text-sm text-gray-600 dark:text-gray-100">
											Discord is a community-based chat app originally developed
											for gamers. That said, these days they’ve expanded and now
											there are a lot of prominent, popular Discord “servers”
											for coding. A “server” is an individual community focused
											on one topic. There are servers like Boot.dev’s back-end
											learning community, where people learning to code can go
											to find support, advice, and experience in languages like
											JavaScript, Python and Go. There are also topic-specific
											servers for JavaScript, TensorFlow, Python.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/*  ========= END OF Discord    =========*/}
						{/*  =========   CodePen =========*/}
						<section id="Discord">
							<div class="max-w-2xl relative overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
								<img
									class="object-cover w-full h-64 hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={CodePen}
									alt=" codePen "
								/>

								<div class="p-6">
									<div>
										<a
											href={codePen}
											class="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform dark:text-blue-500 dark:hover:text-white hover:text-gray-600 underline text-blue-800"
											target={"_blank"}
											rel="noreferrer"
										>
											CodePen
										</a>
										<p class="mt-2 text-sm text-gray-600 dark:text-gray-100">
											Another great option for a community to help you learn to
											code is CodePen. CodePen is mainly focused on front-end
											content, so depending on the direction you want to take
											your programming career in, this can be a benefit or a
											drawback. However, it’s important to know where to look
											for information, so even if you aren’t currently
											interested in front-end development, there may come a day
											when that will change or your future team assigns you a
											random UX bug to deal with.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/*  ========= END OF  CodePen    =========*/}
						{/*  =========  codeNewbie   =========*/}
						<section id="Discord">
							<div class="max-w-2xl relative overflow-hidden  bg-white rounded-lg shadow-md dark:bg-gray-800">
								<img
									class="object-cover w-full h-64 hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={CodeNewbie}
									alt=" codeNewbie  "
								/>

								<div class="p-6">
									<div>
										<a
											href={codeNewbie}
											class="block mt-2 text-2xl font-semibold  transition-colors duration-300 transform dark:text-blue-500 dark:hover:text-white hover:text-gray-600 underline text-blue-800"
											target={"_blank"}
											rel="noreferrer"
										>
											Codenewbie
										</a>
										<p class="mt-2 text-sm text-gray-600 dark:text-gray-100">
											What started as a weekly TwitterChat has become an
											international community of people learning to code and
											supporting each other. CodeNewbie looks to support
											developers in need of early-career mentorship. They want
											to arm you with the knowledge of how to launch your career
											from the post-bootcamp stage to senior software
											engineer.CodeNewbie has tons of content in different
											formats, including podcasts, Twitter chats, the CodeLand
											conference, hackathons, and more. They have managed to
											attract a good amount of experts to their platform.
										</p>
									</div>
								</div>
							</div>
						</section>
						{/*  ========= END OF  codeNewbie     =========*/}
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
