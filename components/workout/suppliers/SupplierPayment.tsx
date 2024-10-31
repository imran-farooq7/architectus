import Image from "next/image";
import Cross from "@/public/close.png";
import { Dispatch, SetStateAction } from "react";

const SupplierPayment = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="flex relative flex-col p-5 md:p-8">
			<h1 className="font-bold text-xl  md:text-2xl text-[#0B0B0B] text-left">
				Supplier Plan
			</h1>
			<p className="mt-4 text-[#6D6D6D] w-[275px] md:w-full text-left text-sm">
				Don’t miss out grab our exclusive discount before the official launch!
			</p>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-5 right-5 absolute cursor-pointer"
			/>
			<div className="supplierPayment p-5 md:p-8 rounded-[20px] mt-5 md:mt-8 mb-5">
				<h3 className="text-[#0F0A19] text-xl md:text-2xl font-semibold mb-7">
					Premium Supplier Plan
				</h3>
				<div className="flex flex-col gap-5">
					<div className="flex justify-between">
						<p className="text-[#0F0A19]">Orignal Price:</p>
						<p className="line-through text-lg font-medium text-[#FF3A5E]">
							€19,90
						</p>
					</div>
					<div className="flex justify-between">
						<p className="text-[#0F0A19] text-sm md:text-base">
							Pre Launch Discount:
						</p>
						<p className="text-base md:text-lg font-medium">50%</p>
					</div>
					<div className="flex justify-between">
						<p className="text-[#0F0A19]">Final Price:</p>
						<p className="text-[32px] font-bold text-[#3D2278]">€9,95</p>
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
