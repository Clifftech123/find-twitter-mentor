import React from "react";

const Resources = () => {
	// LOGOS FROM ALL  Resources
	const w3SchoolLogo =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png";
	const FreeCodeCampLogo =
		"https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg";
	const CodecademyLogo =
        "https://w7.pngwing.com/pngs/559/730/png-transparent-codecademy-learning-learn-sql-computer-programming-centralisation-angle-text-rectangle.png";
    const YoutubeLogo =
        "https://1.bp.blogspot.com/-kR0cwNMsf2g/X9v_jO1Oj2I/AAAAAAAARo8/fijDADxYlUUftp8BH74i7akTy2r9T4WQQCLcBGAsYHQ/s0/Youtube%2BIcon%2B-%2BDownload%2BFree%2BVector%2BPNG.png";
    const odinProjectLogo =
        "https://www.theodinproject.com/assets/og-logo-022832d4cefeec1d5266237be260192f5980f9bcbf1c9ca151b358f0ce1fd2df.png";
    const UdemyLogo =
			"https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg";

	// Links the their Website
	const W3school = "https://www.w3schools.com/";
	const FreecodeCamp = "https://www.freecodecamp.org/learn";
    const codecademy = "https://www.codecademy.com/";
    const youTube = "https://www.youtube.com/results?search_query=web+development+full+course+"
    const OdinProject = "https://www.theodinproject.com/dashboard";
    const Udemy = "https://www.udemy.com/";

	return (
		<>
			<section className="   bg-gray-50 dark:bg-Dark_bg_color">
				<div className="py-40">
					<div class="grid grid-cols-1 gap-20 px-4  mx-auto  lg:px-5 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
						{/* FIRST ROW  */}

						{/*  ========W3School  ========= */}
						<div className="Shadow-lg hover:shadow-2xl hover:translate-y-2 transform bg-white p-10 shadow-lg">
							<img
								className="w-12 h-12 mb-4 "
								src={w3SchoolLogo}
								alt="w3SchoolLogo"
							/>
							<a
								class="mb-3 text-lg underline font-medium leading-tight  text-blue-700"
								href={W3school}
								target={"_blank"}
								rel="noreferrer"
							>
								w3schools
							</a>
							<p class="text-base leading-relaxed text-gray-600">
								W3Schools is optimized for learning, testing, and training.
								Examples might be simplified to improve reading and basic
								understanding. Tutorials, references, and examples are
								constantly reviewed to avoid errors, but we cannot warrant full
								correctness of all content.
							</p>
						</div>
						{/*  --------- end of  W3School -------- */}

						{/* ========== freeCodeCamp  ====== */}
						<div className="Shadow-lg hover:shadow-2xl hover:translate-y-2 transform  bg-white p-10 shadow-lg">
							<img
								className="w-12 h-12 mb-4"
								src={FreeCodeCampLogo}
								alt="FreeCodeCampLogo"
							/>
							<a
								class="mb-3 text-lg underline font-medium leading-tight  text-blue-700"
								href={FreecodeCamp}
								target={"_blank"}
								rel="noreferrer"
							>
								freeCodeCamp
							</a>
							<p class="text-base leading-relaxed text-gray-600">
								freeCodeCamp is a proven path to your first software developer
								job. More than 40,000 people have gotten developer jobs after
								completing this – including at big companies like Google and
								Microsoft. If you are new to programming, we recommend you start
								at the beginning and earn these certifications in order.
							</p>
						</div>
						{/*  --------- end of  freeCodeCamp -------- */}
						{/* ========== Codecademy ====== */}
						<div className="Shadow-lg hover:shadow-2xl hover:translate-y-2 transform bg-white p-10 shadow-lg">
							<img
								className="w-12 h-12 mb-4"
								src={CodecademyLogo}
								alt="Codecademy "
							/>
							<a
								class="mb-3 text-lg underline font-medium leading-tight  text-blue-700"
								href={codecademy}
								target={"_blank"}
								rel="noreferrer"
							>
								Codecademy
							</a>
							<p class="text-base leading-relaxed text-gray-600">
								We want to create a world where anyone can build something
								meaningful with technology, and everyone has the learning tools,
								resources, and opportunities to do so. Code contains a world of
								possibilities — all that’s required is the curiosity and drive
								to learn. At Codecademy, we are committed to empowering all
								people, regardless of where they are in their coding journeys,
								to continue to learn, grow, and make an impact on the world
								around them.
							</p>
						</div>
						{/*  --------- end of  Codecademy -------- */}

						{/* END OF THE  FIRST ROW  */}

						{/* SECOND ROW  */}

						{/* ======= YOUTUBE   ======= */}
						<div className="Shadow-lg hover:shadow-2xl hover:translate-y-2 transform  bg-white p-10 shadow-lg">
							<img
								className="w-12 h-12 mb-4"
								src={YoutubeLogo}
								alt=" Youtube "
							/>
							<a
								class="mb-3 text-lg underline font-medium leading-tight  text-blue-700"
								href={youTube}
								target={"_blank"}
								rel="noreferrer"
							>
								Youtube
							</a>
							<p class="text-base leading-relaxed text-gray-600">
								Some prefer an even more independent approach to learning
								coding. Luckily, the internet has no lack of free resources for
								people who want to become experts in coding. YouTube is a great
								place to start, as the site offers videos teaching the building
								blocks of code like HTML and CSS along with specialized skills
								and tools. If you've got the motivation and grit it takes to
								teach yourself coding, then check out some of the best YouTube
								channels to learn coding below.
							</p>
						</div>
						{/* -------    END OF THE YOUTUBE   --------*/}
						{/* ======= OdinProject    ======= */}
						<div className="Shadow-lg hover:shadow-2xl hover:translate-y-2 transform bg-white p-10 shadow-lg">
							<img
								className="w-12 h-12 mb-4"
								src={odinProjectLogo}
								alt=" odinProject "
							/>
							<a
								class="mb-3 text-lg underline font-medium leading-tight  text-blue-700"
								href={OdinProject}
								target={"_blank"}
								rel="noreferrer"
							>
								OdinProject
							</a>
							<p class="text-base leading-relaxed text-gray-600">
								The Odin Project provides a free open source coding curriculum
								that can be taken entirely online. Since its inception, it has
								helped many students get hired as developers and has assisted
								countless others in learning enough programming to work on their
								own personal projects.
							</p>
						</div>
						{/* -------    END OF THE  OdinProject   --------*/}
						{/* ============ Udemy  ============== */}
						<div className="Shadow-lg hover:shadow-2xl hover:translate-y-2 transform bg-white p-10 shadow-lg">
							<img
								className="w-12 h-12 mb-4"
								src={UdemyLogo}
								alt=" UdemyLogo "
							/>
							<a
								class="mb-3 text-lg underline font-medium leading-tight  text-blue-700"
								href={Udemy}
								target={"_blank"}
								rel="noreferrer"
							>
								Udemy
							</a>
							<p class="text-base leading-relaxed text-gray-600">
								Udemy offers thousands of free online courses when it comes to
								coding. With over 55,000 courses taught by instructors
								worldwide, students can master new skills and achieve their
								goals. Generally, Udemy is a great way to learn programming and
								web development.
							</p>
						</div>
						{/* ----  END OF THE demy  ------*/}
					</div>
				</div>
			</section>
		</>
	);
};

export default Resources;
