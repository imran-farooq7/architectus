import { ReviewProps } from "@/lib/types";
import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}
const Review = ({ review }: { review: ReviewProps }) => {
	return (
		<div key={review.id} className="flex space-x-4 text-sm text-gray-500">
			<div className="flex-none py-10">
				<img src={review.avatarSrc} alt="" className="h-12 w-12 rounded-full" />
			</div>
			<div
				className={classNames(
					review.id === 1 ? "" : "border-t border-gray-200",
					"flex-1 py-10"
				)}
			>
				<h3 className="font-bold leading-5 text-sm text-[#0F0A19]">
					{review.author}
				</h3>
				<p>
					<time dateTime={review.datetime} className="text-xs text-[#0F0A19]">
						{review.date}
					</time>
				</p>

				<p className="sr-only">{review.rating} out of 5 stars</p>

				<div
					className="prose prose-sm leading-6 mt-4 max-w-none text-[#0F0A19]"
					dangerouslySetInnerHTML={{ __html: review.content }}
				/>
				<div className="mt-4 flex items-center">
					{[0, 1, 2, 3, 4].map((rating) => (
						<StarIcon
							key={rating}
							className={classNames(
								review.rating > rating ? "text-yellow-400" : "text-gray-300",
								"h-5 w-5 flex-shrink-0"
							)}
							aria-hidden="true"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Review;
