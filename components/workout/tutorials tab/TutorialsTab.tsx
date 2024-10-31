"use client";
import Image from "next/image";
import Line from "@/public/linetuts.png";
import VideoCard from "./VideoCard";
import Video1 from "@/public/video1.png";
import { useState } from "react";
import Button from "@/components/shared ui/Button";
import SearchBar from "@/components/shared ui/SearchBar";
import Reviews from "@/components/reviews/Reviews";

const TutorialsTab = () => {
	const [checked, setChecked] = useState(false);
	return (
		<div className="flex flex-col ">
			<div className="my-14 md:my-20">
				{" "}
				<h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Video{" "}
					<span className="relative">
						<span className="text-[#3D2278]">Tutorials</span>
						<Image
							src={Line}
							alt="ai"
							className="absolute left-0 top-[45px] md:top-[65px] lg:top-[76px]"
						/>
					</span>{" "}
				</h1>
				<p className="text-sm mt-5 md:mt-8 md:text-lg font-normal leading-[26px] max-w-[21rem] md:max-w-[35rem]">
					Now that you have the vision and the plan, on this page you'll find
					the list of materials needed to start your journey without excuses.
				</p>
			</div>
			<SearchBar isTutorial />
			<div className="flex flex-wrap lg:flex-nowrap gap-10">
				<VideoCard
					image={Video1}
					title="Some Heading"
					setChecked={setChecked}
				/>
				<VideoCard
					image={Video1}
					title="Some Heading"
					setChecked={setChecked}
				/>
			</div>
			<div className="flex justify-center mt-8 md:mt-[60px]">
				<Button text="Download" disabled={!checked} />
			</div>
			<Reviews isCoach={false} />
		</div>
	);
};

export default TutorialsTab;
