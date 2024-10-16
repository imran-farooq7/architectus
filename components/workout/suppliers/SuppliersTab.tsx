import Image from "next/image";
import Down from "@/public/down.png";

const SuppliersTab = () => {
	return (
		<div className="flex flex-col gap-8 mb-16">
			<h1 className="max-w-full text-3xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
				Suppliers{" "}
			</h1>
			<p className="text-base md:text-lg font-normal leading-[26px] max-w-[34rem]">
				On this page, you can find the ideal suppliers to obtain all the
				materials, equipment, and supplements necessary for your journey.
			</p>
			<div className="flex items-center">
				<p className="mr-3">Filter By:</p>
				<div className="flex gap-6 items-center">
					<div className="relative">
						<select className="py-3 border border-black/[0.12] pl-5 rounded-[10px] w-56 h-12 placeholder:font-medium text-[#0F0A19] placeholder:text-base">
							<option value="supplementation">Supplementation</option>
						</select>
						<Image
							src={Down}
							alt="down"
							className="absolute top-5 right-[10px]"
						/>
					</div>
					<div className="relative">
						<select
							defaultValue="Australia"
							className="py-3 pl-5 pr-12 rounded-[10px] w-56 h-12 placeholder:font-medium text-[#0F0A19] border border-black/[0.12]"
						>
							<option>Australia</option>
						</select>
						<Image
							src={Down}
							alt="down"
							className="absolute top-5 right-[10px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuppliersTab;
