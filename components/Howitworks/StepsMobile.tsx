import Image, { StaticImageData } from "next/image";

const StepsMobile = ({
	img,
	text,
	step,
	title,
	imgOrder,
	textOrder,
	stepOrder,
}: {
	img: StaticImageData;
	text: string;
	step: number;
	title: string;
	imgOrder: string;
	textOrder: string;
	stepOrder: string;
}) => {
	return (
		<div className="flex lg:hidden flex-col lg:flex-row justify-between gap-5">
			<Image src={img} alt="steps" className={`order-${imgOrder}`} />
			<div
				className={`flex flex-row gap-5 justify-between items-center order-${textOrder}`}
			>
				<div className="space-y-4">
					<h2 className="text-lg  font-semibold text-[#0F1017] ">{title}</h2>
					<p className="leading-5 text-sm text-[#0F0A19B2] max-w-[14.5rem]">
						{text}
					</p>
				</div>
				<p className={`text-[#3D227824] text-6xl font-bold order-${stepOrder}`}>
					{step}
				</p>
			</div>
		</div>
	);
};

export default StepsMobile;
