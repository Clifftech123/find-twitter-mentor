import React from 'react'

const Hero = () => {
  return (
		<div>
			<div
				className="hero min-h-screen "
				style={{
					backgroundImage: `url("https://blog.boot.dev/img/800/pexels-photo-1595385.webp.webp")`,
				}}
			>
				<div className="hero-overlay opacity-80 bg-Dark_bg_color "></div>
				<div className="hero-content text-center text-white ">
					<div className="max-w-md">
						<h1 className="mb-5 text-3xl tracking-wide leading-relaxed  sm:text-5xl font-Poppins font-bold">
							Get Started with communities
						</h1>
						<p className="mb-5 font-Poppins tracking-wide leading-relaxed">
							Coding communities welcome everyone. Whether you’d like to learn
							to code so you can make changes to your website or you’re looking
							for some coding support.
						</p>
						{/*Get Start Button   */}
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero

