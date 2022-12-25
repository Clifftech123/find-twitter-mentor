import React from 'react'


const QuoteSwiper = () => {
	const Dan_Luu ="https://pbs.twimg.com/profile_images/1472713753464500227/HJQvY70g_400x400.png";
	const _CristinaVeale = "https://pbs.twimg.com/profile_images/1241790212981903361/49LQw3ps_400x400.jpg";
	const _Shlomi_Fish = "https://s.hdnux.com/photos/51/34/21/10863719/4/rawImage.jpg";
	const _Tania_Rascia =
		"https://pbs.twimg.com/profile_images/1413331583218634752/HnrLTzso_400x400.jpg";
	
	

  return (
		<>
			<section className=" dark:bg-Dark_bg_color  dark:text-gray-100 border-t border-gray-200 dark:border-gray-700">
				<div className="container px-6  py-12 mx-auto">
					<div className="grid items-center gap-4 xl:grid-cols-5">
						{/* ======= SIDE TEXT ========== */}
						<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
							<h2 className="text-4xl font-bold font-Poppins">
								'How I became a developer' stories
							</h2>
							<p className="dark:text-gray-50 font-Poppins leading-normal tracking-wide">
								People can become developers from almost any background, whether
								they started programming at an early age and majored in computer
								science (CS), or they taught themselves how to code later in
								life. These stories focus on how the authors went from being
								beginning coders to getting that first job.
							</p>
						</div>
						{/* ----- End of Side  Text -----  */}
						{/* CARD MAIN  */}
						<div className="p-6 xl:col-span-3">
							<div className="grid gap-10 md:grid-cols-2">
								<div className="grid content-center gap-10">
									{/*  ======   FIRST CARD ======= */}
									<div className="p-6 shadow-lg bg-gray-50 dark:border-gray-600 rounded border border-gray-100   dark:bg-gray-900">
										<p className=" font-Poppins ">
											The saga of Dan Luu's programming career is a lengthy but
											enthralling read. It tells the story of his learning some
											programming in the '80s, '90s, and early 2000s. He ended
											up going to grad school twice before he moved from
											hardware engineering to software engineering. Along the
											way, he dealt with family troubles and bad work
											environments. Although he has worked at companies such as
											IBM, Google, and Microsoft, he doesn't claim that the
											reader should try to mimic his path to success.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src={Dan_Luu}
												alt="Dan_Luu"
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">—Dan Luu</p>
											</div>
										</div>
									</div>
									{/* ----- End of first Card */}

									{/* ======== SECOND CARD ========= */}
									<div className="p-6 rounded bg-gray-50 border border-gray-100 shadow-lg dark:border-gray-600 dark:bg-gray-900">
										<p className="font-Poppins">
											Cristina Veale was a technical recruiter before she became
											a developer. That may not be the most common background
											for developers, but it gave her an uncommon edge in the
											job-seeking process. She knew which skills employers were
											looking for, how in-demand developers were (and still
											are), and that she didn't need a CS degree to have a
											programming career.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src={_CristinaVeale}
												alt="_CristinaVeale"
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">—Cristina Veale</p>
											</div>
										</div>
									</div>
								</div>
								{/* ------ End of first card ----- */}
								{/*======== THIRD CARD ========== */}
								<div className="grid content-center gap-10">
									<div className="p-6 rounded shadow-lg  dark:border-gray-600  bg-gray-50 border border-gray-100 dark:bg-gray-900">
										<p className="font-Poppins">
											This story isn't focused on a career change or grinding to
											become a developer like many of the other articles in this
											list. Instead, it's an interesting peek into Shlomi Fish's
											programming hobby, which eventually became his job, and
											the old-school tech that was used back in the '90s and
											early 2000s.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src={_Shlomi_Fish}
												alt="_Shlomi_Fish "
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">Shlomi Fish's </p>
											</div>
										</div>
									</div>
									{/* ------ END of third card  ------- */}
									{/* ====== FOURTH CARD ======= */}
									<div className="p-6 rounded shadow-lg border border-gray-100 bg-gray-50  dark:border-gray-600  dark:bg-gray-900">
										<p className=" font-Poppins ">
											Tania Rascia's story offers some helpful advice and
											resources for helping you decide the right career for you,
											regardless of whether it ends up being in programming.
											Rascia worked in the culinary industry for many years
											before deciding she wanted a career change. She remembered
											her high school hobby of modifying web pages in the
											notepad editor and decided to start by doing the cheapest
											web design jobs on Craigslist, until she finally landed an
											internship where she could learn programming.
										</p>
										<div className="flex items-center mt-4 space-x-4">
											<img
												src={_Tania_Rascia}
												alt=" _Tania_Rascia"
												className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
											/>
											<div>
												<p className="text-lg font-semibold">Tania Rascia's </p>
											</div>
										</div>
									</div>
									{/* ------- END of Fourth card -------  */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default QuoteSwiper

