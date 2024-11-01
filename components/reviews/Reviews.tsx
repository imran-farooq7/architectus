"use client";
import { reviews } from "@/lib/constants";
import Image from "next/image";
import { RatingStar } from "react-ts-rating-star";
import Review from "./Review";
import Down from "@/public/down.png";
import LoadMore from "@/public/loadmore.png";

const Reviews = ({ isCoach }: { isCoach: boolean }) => {
	return (
		<div className={`relative px-0 ${isCoach ? "mt-8" : "md:my-20 my-10"}`}>
			{/* <div className="flex flex-col md:flex-row items-start md:items-center max-w-[600px] mb-9 justify-between">
				<h1 className="text-xl md:text-[32px] font-semibold leading-8">
					Reviews (160)
				</h1>
				<div className="relative my-8 md:my-0 w-full md:w-[180px]">
					<select
						defaultValue="All Ratings"
						className="py-3 pl-5 pr-6 md:pr-12 rounded-[10px] w-full md:w-[180px] h-12  text-[#0F0A19]/80 border border-black/[0.12]"
					>
						<option>All Ratings</option>
					</select>
					<Image
						src={Down}
						alt="down"
						className="absolute top-5 right-[20px]"
					/>
				</div>
			</div> */}
			<div className="flex gap-x-28 gap-y-6 flex-col xl:flex-row">
				<div>
					<div>
						<div>
							<div className="flex flex-col md:flex-row items-start md:items-center xl:max-w-[600px] mb-0 md:mb-8 justify-between">
								<h1 className="text-xl md:text-[32px] font-semibold leading-8">
									Reviews (160)
								</h1>
								<div
									className={`relative ${
										isCoach ? "hidden" : "inline-flex"
									} my-8 md:my-0 w-full md:w-[180px]`}
								>
									<select
										defaultValue="All Ratings"
										className="py-3 pl-5 pr-6 md:pr-12 rounded-[10px] w-full md:w-[180px] h-12  text-[#0F0A19]/80 border border-black/[0.12]"
									>
										<option>All Ratings</option>
									</select>
									<Image
										src={Down}
										alt="down"
										className="absolute top-5 right-[20px]"
									/>
								</div>
							</div>
							{reviews.map((review) => (
								<Review review={review} key={review.id} />
							))}
						</div>
					</div>
					<button className="bg-transparent mx-auto mt-8 flex gap-3 items-center justify-center border border-[#3D2278] text-[#3D2278] w-32 md:w-36 h-10 rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:scale-105 hover:text-white transition-all ease-in-out text-sm">
						<Image src={LoadMore} alt="load more" />
						<span>Load More</span>
					</button>
				</div>
				<div className="reviewbg rounded-3xl p-6 md:p-8 max-h-[520px]">
					<h1 className="text-xl  md:text-[32px] font-semibold leading-8">
						Add Rating & Review
					</h1>
					<p className=" py-5 md:py-7">Tell Us What You Think</p>
					<RatingStar
						iconWidth="40px"
						iconHeight="40px"
						iconColor="#FFBC11"
						backgroundColor="rgba(0, 0, 0, 0.12)"
					/>
					<p className="text-base italic text-[#0F0A19]/70 py-6">
						Tap to add your rating
					</p>

					<textarea
						placeholder="Add your review"
						className="border pl-5 py-5  md:py-4 border-[#0000001F] w-full md:w-[400px] rounded-[10px] h-32"
					/>
					<button className="bg-[#3D2278] mt-5  md:mt-8 font-medium py-4 text-base text-white w-full md:w-[400px] rounded-[10px]">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
