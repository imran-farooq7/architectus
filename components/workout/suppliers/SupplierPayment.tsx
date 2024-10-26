import Image from "next/image";
import Cross from "@/public/close.png";
import { Dispatch, SetStateAction } from "react";

const SupplierPayment = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="flex relative flex-col">
			<h1 className="font-bold text-2xl text-[#0B0B0B] text-left">
				Supplier Plan
			</h1>
			<p className="mt-4 text-[#6D6D6D] text-left text-sm">
				Don’t miss out grab our exclusive discount before the official launch!
			</p>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-[5px] right-[10px] absolute cursor-pointer"
			/>
			<div className="supplierPayment p-8 rounded-[20px] mt-8 mb-5">
				<h3 className="text-[#0F0A19] font-semibold mb-7">
					Premium Supplier Plan
				</h3>
				<div className="flex flex-col gap-5">
					<div className="flex justify-between">
						<p className="text-[#0F0A19]">Orignal Price:</p>
						<p className="line-through text-lg font-medium text-[#FF3A5E]">
							€300
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-[#0F0A19]">Pre Launch Discount:</p>
						<p className="text-lg font-medium">60% Off</p>
					</div>
					<div className="flex justify-between">
						<p className="text-[#0F0A19]">Final Price:</p>
						<p className="text-[32px] font-bold text-[#3D2278]">€120</p>
					</div>
				</div>
			</div>
			<div className="gap-5 flex flex-col items-center gap-y-5">
				<button
					onClick={() => setOpen(false)}
					className="bg-transparent order-2 border border-[#3D2278] md:text-lg text-[#3D2278]  w-full h-[52px] rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:text-white hover:scale-105 transition-all ease-in-out text-sm"
				>
					Edit Details
				</button>
				<button className="bg-[#3D2278] order-1 md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm">
					Pay Now
				</button>
			</div>
		</div>
	);
};

export default SupplierPayment;
