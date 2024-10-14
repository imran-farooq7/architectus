import { InsightsProps } from "@/lib/types";
import Image from "next/image";
import RC from "@/public/rchev.svg";

const InsightsCard = ({ image, statement, title }: InsightsProps) => {
	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-[360px]">
			<div className="relative">
				<Image className="w-full" src={image} alt="Product Image" />
			</div>
			<div className="p-6">
				<h3 className="text-lg font-semibold mb-4 text-[#0F0A19]">{title}</h3>
				<p className="text-[#787481] text-sm mb-6">{statement}</p>
				<div className="flex gap-4">
					<p className="font-semibold text-base text-[#3D2278]">Read More</p>
					<Image src={RC} alt="arrow" />
				</div>
			</div>
		</div>
	);
};

export default InsightsCard;
