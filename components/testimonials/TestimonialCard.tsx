import { TestimonialCard as Tcard } from "@/lib/types";
import Image from "next/image";

const TestimonialCard = ({
	avatar,
	designation,
	name,
	reviews,
	statement,
}: Tcard) => {
	return (
		<div className="tcard relative">
			<div className=" flex flex-col gap-6">
				<Image
					src={avatar}
					alt="avatar"
					className="absolute -top-8 object-cover"
					quality={100}
				/>
				<Image src={reviews} alt="reviews" className="self-end" />
				<p className="text-[#787481] font-normal leading-6">{statement}</p>
				<div className="flex flex-col">
					<h2 className="text-[#0F0A19] font-semibold text-sm">{name}</h2>
					<p className="text-[#787481] text-[10px] pt-1.5">{designation}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
