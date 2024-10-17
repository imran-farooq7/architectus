import Image, { StaticImageData } from "next/image";

const Steps = ({
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
		<div className="hidden sm:gap-10 xl:gap-0 lg:flex flex-col lg:flex-row justify-between">
			<Image src={img} alt="steps" className={`order-${imgOrder} `} />
			<div className={`flex flex-col gap-5 justify-center order-${textOrder}`}>
				{" "}
				<h2 className="text-xl  font-bold text-[#0F1017] ">{title}</h2>
				<p className="leading-7 text-[#0F0A19B2] max-w-md">{text}</p>
			</div>
			<p
				className={`text-[#3D227824] hidden lg:inline-flex text-[100px] font-bold order-${stepOrder}`}
			>
				{step}
			</p>
		</div>
	);
};

export default Steps;
