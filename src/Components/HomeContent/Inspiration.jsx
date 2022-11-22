
// THS component contain  content on inspiration 

import React from 'react'


const Image =
	"https://www.theglobeandmail.com/resizer/r4NbqvbwLZHIWVv3h-M-zBc_MKM=/600x0/filters:quality(80):format(jpeg)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/ZGPHF55TGBEUJCNKT5KK4PMIPY";

const Inspiration = () => {
  return (
		<>
			<section class=" dark:bg-gray-900">
				<div class="container px-6 py-10 mx-auto">
					<div class="lg:-mx-6 lg:flex lg:items-center">
						{/* IMAGE */}
						<img
							class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
							src={Image}
							alt=""
						/>

						<div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
							<p class="text-5xl font-semibold text-blue-500 ">“</p>

							<h1 class="text-2xl font-semibold text-gray-800 dark:text-white xl:text-4xl lg:w-96">
								Why do you need to learn how to code?
							</h1>
							{/* TEXT CONTENT */}
							<p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
								“Whether you want to uncover the secrets of the universe, or you
								want to pursue a career in the 21st century, basic computer
								programming is an essential skill to learn ”
							</p>

							<h3 class="mt-6 text-lg font-medium text-blue-500">
								{" "}
								Stephen Hawking{" "}
							</h3>
							<p class="text-gray-600 dark:text-gray-300">
								Theoretical Physicist
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* TEXT */}

			{/*  Some Questions beginners ask */}
			<div className="  dark:bg-gray-900">
				<div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
					{/* Heading */}
					<div className="text-center">
						<h2 className="text-3xl  dark:text-white text-gray-600 tracking-wide leading-relaxed md:text-4xl font-extrabold mb-4">
							Questions Beginners Ask
						</h2>
					</div>
					{/* END Heading */}

					{/* QUESTIONS */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 ">
						<div className="   dark:bg-gray-900  bg-Nav_Bg_Color  dark:border-gray-500 border-2 border-gray-100 p-5    text-gray-600 tracking-wide leading-relaxed">
							<h4 className="font-bold dark:text-gray-300">
								Am I old to start learn how to code?
							</h4>
							<p className=" dark:text-gray-400">
								Are You Too Old to Learn Programming? Let's get this out of the
								way: no, you are not too old to program. There isn't an age
								limit on learning to code, and there never was. But all too
								often, insecurity and uncertainty compel older adults to put a
								ceiling on their achievement potential.
							</p>
						</div>
						<div className="   dark:bg-gray-900 bg-Nav_Bg_Color  dark:border-gray-500 border-2 border-gray-100 p-5  text-gray-600 tracking-wide leading-relaxed">
							<h4 className="font-bold  dark:text-gray-300">
								Do I need degree Start coding ?
							</h4>
							<p className=" dark:text-gray-400">
								Modern employers aren’t looking for people who have a degree in
								coding. They are more focused on portfolio examples and coding
								tests. They want to know that you can do the job, not if you
								have earned a degree in coding.
							</p>
						</div>
						<div className="   dark:bg-gray-900 bg-Nav_Bg_Color  dark:border-gray-500 border-2 border-gray-100 p-5  text-gray-600 tracking-wide leading-relaxed">
							<h4 className="font-bold  dark:text-gray-300">
								How Long Does It Take to Learn Coding ?
							</h4>
							<p className=" dark:text-gray-400">
								Most coders agree that it takes three to six months to be
								comfortable with the basics of coding. But you can learn coding
								faster or slower depending on your preferred pace.
							</p>
						</div>
						<div className="  dark:bg-gray-900   bg-Nav_Bg_Color  dark:border-gray-500 border-2 border-gray-100 p-5   text-gray-600 tracking-wide leading-relaxed">
							<h4 className="font-bold  dark:text-gray-300">
								Skills Needed for Coding ?
							</h4>
							<p className=" dark:text-gray-400">
								Coding is a skill you’ll have for life. There’s no limit to what
								can be automated by putting together lines of code in the right
								programming language. But when you’re just starting out, it can
								feel a little daunting. Below is a brief guide to the key skills
								you’ll need to bring to the table as you get a handle on coding
								for the first time.
							</p>
						</div>
						<div className="   dark:bg-gray-900 dark:border-gray-500  bg-Nav_Bg_Color   border-2 border-gray-100 p-5  text-gray-600 tracking-wide leading-relaxed">
							<h4 className="font-bold  dark:text-gray-300">
								Does it matter what operating system I use ?
							</h4>
							<p className=" dark:text-gray-400">
								When it comes to learning to code for the first time. I think
								what matters much more than which operating system you have, is
								that you get started learning as soon as possible with what you
								have.
							</p>
						</div>
						<div className="   dark:bg-gray-900 border-2 border-gray-100 p-5    bg-Nav_Bg_Color  dark:border-gray-500  text-gray-600 tracking-wide leading-relaxed ">
							<h4 className="font-bold  dark:text-gray-400">
								How do IFigure out what to learn ?
							</h4>

							<p className=" dark:text-gray-400">
								The most important thing is that you want to learn something
								that interests you, because once you start learning, you’ll be
								with this topic for a while. Choosing something just because
								it’s popular or what others are doing isn’t the way to go
								because if you don’t have a true interest in it, you’ll lose the
								motivation to learn!
							</p>
						</div>
					</div>
					{/* END FAQ */}
				</div>
			</div>
			{/* END FAQ Section: Simple */}
		</>
	);
}

export default Inspiration;

