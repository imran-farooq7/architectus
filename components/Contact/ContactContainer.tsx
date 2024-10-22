import Image, { StaticImageData } from "next/image";

const ContactContainer = ({
	icon,
	title,
	text,
	maxWidth,
}: {
	icon: StaticImageData;
	title: string;
	text: string;
	maxWidth?: boolean;
}) => {
	return (
		<div className="flex items-center gap-4">
			<Image src={icon} alt="icon" className="shrink-0" />
			<div className="flex flex-col gap-[10px]">
				<h3 className="font-semibold text-base leading-5 text-left text-[#0F0A19]">
					{title}
				</h3>
				<p
					className={`text-sm leading-5 text-left text-[#0F0A19B2]/70 ${
						maxWidth && "md:max-w-[26rem] max-w-[17rem]"
					}`}
				>
					{text}
				</p>
			</div>
		</div>
	);
};

export default ContactContainer;
