"use client";
import Reviews from "@/components/reviews/Reviews";
import ButtonsGroup from "@/components/shared ui/ButtonsGroup";
import Modal from "@/components/shared ui/Modal";
import Line from "@/public/linewrk.png";
import Img1 from "@/public/wot.svg";
import Image from "next/image";
import { useState } from "react";
import CreateCard from "../body/CreateCard";
import WorkoutTabCard from "./WorkoutTabCard";

const WorkoutTab = () => {
	const [open, setOpen] = useState(false);
	const [modalContent, setModalContent] = useState("");
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
				<p className="text-sm md:text-lg font-normal leading-[26px] max-w-[20rem] md:max-w-[37rem]">
					it's time to create your workout plan. Be as specific as
					possible— consider your sport discipline, training method, exercise
					type, skill level, full-body workouts, or focus on specific muscle
					groups.
				</p>
				<button
					onClick={() => {
						setModalContent("create");
						setOpen(true);
					}}
					className="bg-[#3D2278] self-start font-medium text-lg text-white px-10 md:px-[4.35rem] py-3 rounded-xl"
				>
					Create
				</button>
			</div>
			{/* <SearchBar isWorkout /> */}

			<WorkoutTabCard title="90 Days Workout Plan" image={Img1} />

			<ButtonsGroup
				isWorkout
				setModalContent={setModalContent}
				setOpen={setOpen}
			/>
			<Reviews isCoach={false} />
			<Modal open={open} setOpen={setOpen}>
				<CreateCard setOpen={setOpen} modalContent={modalContent} />
			</Modal>
		</div>
	);
};

export default WorkoutTab;
