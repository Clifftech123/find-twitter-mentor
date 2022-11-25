import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const SwiperComponent = () => {

// Swiper IMages on links 
 const Image1 = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  
  const Image2 = "https://images.unsplash.com/photo-1612117189122-6b065b74f4bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"


  const Image3 =
		"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";

  const Image4 =
		"https://images.unsplash.com/photo-1573167710701-35950a41e251?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
	return (
		<>
			<div className="    dark:bg-Dark_bg_color px-10 sm:px-20 grid grid-cols-1   md:gap-20 gap-5 sm:grid-cols-1 lg:grid-cols-2">
				{/* SWIPER WITH IMAGES */}
				<div>
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper rounded-lg "
					>
						<SwiperSlide>
							{/* FIRST IMAGE */}
							<div>
								<img
									className="object-cover object-center"
									src={Image1}
									alt="image"
								/>
							</div>
						</SwiperSlide>
						{/* SECOND IMAGE */}
						<SwiperSlide>
							<div>
								<img
									className="object-cover object-center"
									src={Image2}
									alt="image"
								/>
							</div>
						</SwiperSlide>
						{/* THIRD IMAGE */}
						<SwiperSlide>
							<div>
								<img
									className="object-cover object-center"
									src={Image3}
									alt="image"
								/>
							</div>
						</SwiperSlide>
						{/* FOURTH IMAGE */}
						<SwiperSlide>
							<div>
								<img
									className="object-cover object-center"
									src={Image4}
									alt="image"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				{/* TEXT  */}
				<div>
					<p className="  dark:bg-Dark_bg_color  text-lg shadow-sm rounded-md p-5 font-Poppins md:py-10  md:h-5/6  bg-blue-600 text-gray-100 dark:text-gray-400  leading-relaxed  tracking-wide">
						An important part of being a software developer is continuing your
						education. There are always new tools to acquire and better ways of
						developing software. Software developers need to spend a
						considerable amount of time keeping up to date with the latest news
						and developments in their industry so that they can create the best
						possible products. If you're someone who likes to learn new things,
						software development can be a rewarding field. You'll learn new
						programming languages, new ways to use old languages and new tools
						to make development easier. In addition, you'll be able to learn new
						things about the industry you are working in.
					</p>
				</div>
			</div>
		</>
	);
};

export default SwiperComponent;

