import Image, { StaticImageData } from "next/image";

const WorkoutTabCard = ({
	image,
	title,
}: {
	image: StaticImageData;
	title: string;
}) => {
	return (
		<div className="bg-white rounded-[20px] overflow-hidden shadow-lg max-w-full mb-12">
			<div className="relative bg-black">
				<Image
					className="w-full md:h-[500px] h-full"
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
