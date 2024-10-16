import Image, { StaticImageData } from "next/image";
import React from "react";

const WorkoutTabCard = ({
	image,
	title,
}: {
	image: StaticImageData;
	title: string;
}) => {
	return (
		<div className="bg-white rounded-[20px] overflow-hidden shadow-lg max-w-[373px]">
			<div className="relative">
				<Image
					className="w-full object-cover"
					src={image}
					alt="Product Image"
				/>
			</div>
			<div className="py-6 text-center">
				<h3 className="text-2xl font-medium text-[#0F0A19]">{title}</h3>
			</div>
		</div>
	);
};

export default WorkoutTabCard;
