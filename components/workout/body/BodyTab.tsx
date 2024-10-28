"use client";
import Image from "next/image";
import Workout from "@/public/workout.png";
import WorkoutMobile from "@/public/bodymobile.png";
import ButtonsGroup from "@/components/shared ui/ButtonsGroup";
import { useState } from "react";
import Modal from "@/components/shared ui/Modal";
import CreateCard from "./CreateCard";
import Reviews from "@/components/reviews/Reviews";

const BodyTab = () => {
	const [open, setOpen] = useState(false);
	const [modalContent, setModalContent] = useState("");

	return (
		<div>
			<div className="flex flex-col gap-6 md:gap-8 my-14 md:my-20">
				<h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19]">
					Visualization
				</h1>
				<p className="text-sm md:text-lg font-normal leading-[26px] max-w-[20rem] md:max-w-[34rem]">
					Envision your new body with precision! Specify Which Parts You Want to
					Improve, Shape, and Size.
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
			<Image src={Workout} alt="workout" className="hidden md:block mb-16" />
			<Image
				src={WorkoutMobile}
				alt="workout"
				className="block md:hidden mb-8"
			/>
			<ButtonsGroup setModalContent={setModalContent} setOpen={setOpen} />
			<Reviews isCoach={false} />

			<Modal open={open} setOpen={setOpen}>
				<CreateCard setOpen={setOpen} modalContent={modalContent} />{" "}
			</Modal>
		</div>
	);
};

export default BodyTab;
