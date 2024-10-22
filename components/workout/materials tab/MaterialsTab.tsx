import Image from "next/image";
import Line from "@/public/linewrk.png";
import Button from "@/components/shared ui/Button";
import MaterialsFaqs from "./MaterialsFaqs";

const MaterialsTab = () => {
	return (
		<div className="flex flex-col">
			<div className="my-14 md:my-20">
				<h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Materials{" "}
					<span className="relative">
						<span className="text-[#3D2278]">List</span>
						<Image
							src={Line}
							alt="ai"
							className="absolute left-0 top-[45px] md:top-[65px] lg:top-[76px]"
						/>
					</span>{" "}
				</h1>
				<p className="text-sm mt-5 md:mt-8 md:text-lg font-normal leading-[26px] max-w-[20rem] md:max-w-[34rem]">
					Now that you have the vision and the plan, on this page you'll find
					the list of materials needed to start your journey without excuses.
				</p>
			</div>
			<MaterialsFaqs />
			<div className="flex justify-center mt-8 md:mt-[60px]">
				<Button text="Download" />
			</div>
		</div>
	);
};

export default MaterialsTab;
