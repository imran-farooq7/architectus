import Image from "next/image";
import Cross from "@/public/close.png";
import { Dispatch, SetStateAction, useRef } from "react";
import QrCode from "@/public/qrcode.svg";
import Clipboard from "@/public/clipboard.svg";

const Download = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	const textRef = useRef<HTMLParagraphElement>(null);
	return (
		<div className="">
			<h1 className="font-bold text-2xl mb-10 text-[#0B0B0B] text-left">
				Download
			</h1>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-[30px] right-[30px] absolute cursor-pointer"
			/>
			<div className="px-0 md:px-20">
				<div className="download py-10 mb-8 px-16 rounded-[20px]">
					<Image src={QrCode} alt="qr code" />
				</div>
				<div className="clipboard items-center flex mb-5 rounded-[10px] py-4 px-5 justify-between">
					<p ref={textRef} className="text-[#0F0A19] text-xs md:text-base">
						workoutcreator.ai/download/3718
					</p>
					<Image
						src={Clipboard}
						alt="clip board"
						className="cursor-pointer"
						onClick={() =>
							navigator.clipboard.writeText(textRef?.current!.textContent!)
						}
					/>
				</div>
				<button className="bg-transparent border border-[#3D2278] md:text-lg text-[#3D2278]  w-full h-[52px] rounded-[10px]  transition-all ease-in-out text-sm">
					Download
				</button>
			</div>
		</div>
	);
};

export default Download;
