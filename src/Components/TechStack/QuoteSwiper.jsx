import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const QuoteSwiper = () => {

  const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	};

  return (
		<>
			<div className="py-40gt">
				<Swiper
					pagination={pagination}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						Slide
						{/*one */}
					</SwiperSlide>
					<SwiperSlide>
						Slide
						{/* Two */}
					</SwiperSlide>
          <SwiperSlide>Slide
          {/* THREE */}
          </SwiperSlide>
          <SwiperSlide>Slide
          {/* FOURE */}
          </SwiperSlide>
          <SwiperSlide>Slide
          {/* FIVE */}
          </SwiperSlide>
					
				</Swiper>
			</div>
		</>
	);
}

export default QuoteSwiper

