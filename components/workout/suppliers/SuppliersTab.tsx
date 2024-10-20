import Add from "@/public/addsupplier.png";
import Down from "@/public/down.png";
import Hoc from "@/public/hoc.png";
import Skan from "@/public/image 12.png";
import Ncc from "@/public/ncc.png";
import Stra from "@/public/strabag.png";
import Zcr from "@/public/zcr.png";
import Zublin from "@/public/zublin.svg";
import Image from "next/image";
import SupplierCard from "./SupplierCard";
import Plus from "@/public/add.png";

const SuppliersTab = () => {
	return (
		<div className="flex flex-col ">
			<div className="my-20 space-y-8">
				<h1 className="max-w-full text-3xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Suppliers{" "}
				</h1>
				<p className="text-base md:text-lg font-normal leading-[26px] max-w-[34rem]">
					On this page, you can find the ideal suppliers to obtain all the
					materials, equipment, and supplements necessary for your journey.
				</p>
				<div className="flex items-center flex-col md:flex-row gap-y-4">
					<p className="mr-3">Filter By:</p>
					<div className="flex gap-6 justify-center md:justify-start items-center flex-wrap">
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
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-7">
				<SupplierCard image={Skan} />
				<SupplierCard image={Ncc} />
				<SupplierCard image={Stra} />
				<SupplierCard image={Zcr} />
				<SupplierCard image={Zublin} />
				<SupplierCard image={Hoc} />
				<button className="w-[280px] flex justify-center items-center h-[140px] borderButton">
					<Image src={Plus} alt="add" />
				</button>
			</div>
		</div>
	);
};

export default SuppliersTab;
