import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";

const MeanStackLinks = ({ MeanIsVisible, MeanOnclose }) => {
	if (!MeanIsVisible) return null;
	return (
		<>
			<div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center bg-black">
				<div className="">
					{/* CLOSING BUTTON */}
					<div className=" flex flex-col  ">
						<button
							onClick={() => MeanOnclose()}
							className="text-5xl text-white place-self-end"
						>
							<AiFillCloseCircle />
						</button>
					</div>
					<div class="w-[600px] max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
						<h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
							Connect wallet
						</h5>
						<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
							Connect with one of our available wallet providers or create a new
							one.
						</p>
						<ul class="my-4 space-y-3">
							<li>
								<a
									href="#"
									class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
								>
									<span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
										Popular
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
								>
									<span class="flex-1 ml-3 whitespace-nowrap">
										Coinbase Wallet
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
								>
									<span class="flex-1 ml-3 whitespace-nowrap">
										Opera Wallet
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
								>
									<span class="flex-1 ml-3 whitespace-nowrap">
										WalletConnect
									</span>
								</a>
							</li>
							<li>
								<button
									href="#"
									class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
								>
									<span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
								</button>
							</li>
						</ul>
						<div>Why do I need to connect with my wallet</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MeanStackLinks

