import Image from "next/image";
import Line from "@/public/linewrk.png";
import WorkoutTabCard from "./WorkoutTabCard";
import Img1 from "@/public/image 10.svg";
import Img2 from "@/public/image 8.svg";
import Img3 from "@/public/image 11.svg";
import ButtonsGroup from "@/components/shared ui/ButtonsGroup";
import Carousel from "@/components/shared ui/Carousel";

const WorkoutTab = () => {
	return (
		<div>
			<div className="flex flex-col gap-6 md:gap-8 my-14 md:my-20">
				<h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Your{" "}
					<span className="relative">
						<span className="text-[#3D2278]">Plan</span>
						<Image
							src={Line}
							alt="ai"
							className="absolute left-0 top-[45px] md:top-[65px] lg:top-[76px]"
						/>
					</span>{" "}
				</h1>
				<p className="text-sm md:text-lg font-normal leading-[26px] max-w-[20rem] md:max-w-[35rem]">
					Now that you've visualized the body you want, be as specific as
					possible: What type of training suits your goals, aesthetics,
					bodybuilding or something else? Let's start today!
				</p>
				<button className="bg-[#3D2278] self-start font-medium text-lg text-white px-10 md:px-[4.35rem] py-3 rounded-xl">
					Create
				</button>
			</div>
			<Carousel slides={3}>
				<WorkoutTabCard title="1° Month" image={Img1} />
				<WorkoutTabCard title="2° Month" image={Img2} />
				<WorkoutTabCard title="3° Month" image={Img3} />
			</Carousel>
			<ButtonsGroup />
		</div>
	);
};

export default WorkoutTab;
