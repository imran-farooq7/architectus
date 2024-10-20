"use client";
import { reviews } from "@/lib/constants";
import Image from "next/image";
import { RatingStar } from "react-ts-rating-star";
import Review from "./Review";
import Down from "@/public/down.png";
import LoadMore from "@/public/loadmore.png";

const Reviews = () => {
	return (
		<div className="relative px-10 lg:px-28 xl:px-32 my-24">
			<h1 className="text-base  md:text-[32px] font-semibold leading-8">
				Reviews
			</h1>
			<div className="text-base font-normal leading-6 my-8 text-[#0F0A19] flex gap-32 items-center">
				<div>
					Total Reviews <span className="font-semibold">(160)</span>
				</div>
				<div className="flex items-center flex-col md:flex-row gap-y-4">
					<p className="mr-3">Filter By:</p>
					<div className="flex gap-6 justify-center md:justify-start items-center flex-wrap">
						<div className="relative">
							<select
								defaultValue="All Ratings"
								className="py-3 pl-5 pr-12 rounded-[10px] w-[180px] h-12  text-[#0F0A19]/80 border border-black/[0.12]"
							>
								<option>All Ratings</option>
							</select>
							<Image
								src={Down}
								alt="down"
								className="absolute top-5 right-[10px]"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-x-28 gap-y-8 flex-col lg:flex-row">
				<div>
					<div>
						<div className="-my-10">
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
				<div className="reviewbg rounded-3xl p-8 max-h-[520px]">
					{/* <Image fill src={BG} alt="bg" /> */}
					<h1 className="text-base  md:text-[32px] font-semibold leading-8">
						Add Rating & Review
					</h1>
					<p className="py-7">Tell Us What You Think</p>
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
						className="border pl-5 pt-4 border-[#0000001F] w-full md:w-[400px] rounded-[10px] h-32"
					/>
					<button className="bg-[#3D2278] mt-8 font-medium py-4 text-base text-white w-full md:w-[400px] rounded-[10px]">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Reviews;
