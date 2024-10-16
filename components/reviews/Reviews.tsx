"use client";
import { reviews } from "@/lib/constants";
import Review from "./Review";
import { RatingStar } from "react-ts-rating-star";

const Reviews = () => {
	return (
		<div className=" py-10 relative px-10 lg:px-28 xl:px-32 mt-20">
			<h1 className="text-base  md:text-[32px] font-semibold leading-8">
				Reviews
			</h1>
			<p className="text-base font-normal leading-6 my-8 text-[#0F0A19]">
				Total Reviews <span className="font-semibold">(160)</span>
			</p>
			<div className="flex gap-x-28 gap-y-8 flex-col lg:flex-row">
				<div>
					<div>
						<div className="-my-10">
							{reviews.map((review) => (
								<Review review={review} key={review.id} />
							))}
						</div>
					</div>
				</div>
				<div className="bg-white shadow-2xl rounded-3xl p-8">
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
