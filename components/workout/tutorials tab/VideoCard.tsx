import Image, { StaticImageData } from "next/image";
import Play from "@/public/button-play.png";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const VideoCard = ({
	image,
	title,
	setChecked,
}: {
	image: StaticImageData;
	title: string;
	setChecked: Dispatch<SetStateAction<boolean>>;
}) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div
			className={`bg-white rounded-[20px] overflow-hidden shadow-lg max-w-[570px] ${
				isChecked ? "border-[2px] border-[#3D2278]" : ""
			}`}
		>
			<div className="relative">
				<Image
					className="w-full object-cover"
					src={image}
					alt="Product Image"
				/>
			</div>
			<div className="p-7">
				<h3 className="text-xl font-bold pb-3 text-[#0F0A19]">{title}</h3>
				<p className="font-medium text-base leading-6 text-[#858585] pb-5">
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras feugiat
					quam ex sit amet rhoncus sapien non Mauris tincidunt nibh at
					euismodconsectetur adipiscing elit.
				</p>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-4">
						<Image src={Play} alt="play" />
						<p className="font-medium text-base">Watch</p>
					</div>
					<input
						type="checkbox"
						checked={isChecked}
						onChange={(e) => {
							setIsChecked(e.target.checked);
							setChecked(e.target.checked);
						}}
						className="w-7 h-7 border-[1.5px] border-[#d1d1d1] rounded-md checked:accent-[#3D2278]"
					/>
				</div>
			</div>
		</div>
	);
};
export default VideoCard;
