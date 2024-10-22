import Image from "next/image";
import Mic from "@/public/mic.png";
import { Dispatch, SetStateAction } from "react";
import Cross from "@/public/close.png";

const CreateCard = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="flex relative flex-col mx-8 bg-white rounded-2xl p-8 max-w-full">
			<h1 className="font-bold text-2xl text-[#0B0B0B] text-left">Create</h1>
			<p className="mt-4  text-[#6D6D6D] text-left text-sm">
				Lorem ipsum dolor sit amet consectetur adipiscing elit Vivamus.
			</p>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-[30px] right-[30px] absolute cursor-pointer"
			/>
			<div className="relative my-8">
				<textarea
					placeholder="Type"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 pt-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA] h-36"
				/>
				<button className="absolute bottom-4 right-4">
					<Image src={Mic} alt="mic" width={32} height={32} />
				</button>
			</div>
			<div className="gap-5 flex flex-col items-center gap-y-5">
				<button
					onClick={() => setOpen(false)}
					className="bg-transparent order-2 border border-[#3D2278] md:text-lg text-[#3D2278]  w-full h-[52px] rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:text-white hover:scale-105 transition-all ease-in-out text-sm"
				>
					Cancel
				</button>
				<button className="bg-[#3D2278] order-1 md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm">
					Create
				</button>
			</div>
		</div>
	);
};

export default CreateCard;
