"use client";
import Image from "next/image";
import Workout from "@/public/workout.png";
import ButtonsGroup from "@/components/shared ui/ButtonsGroup";
import { useState } from "react";
import Modal from "@/components/shared ui/Modal";
import CreateCard from "./CreateCard";

const BodyTab = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="flex flex-col gap-8 my-20">
				<h1 className="text-4xl md:text-[64px] font-bold text-[#0F0A19]">
					Visualization
				</h1>
				<p className="text-base md:text-lg font-normal leading-[26px] max-w-[34rem]">
					Envision your new body with precision!Specify Which Parts You Want to
					Improve, Shape, and Size.
				</p>
				<button
					onClick={() => setOpen(true)}
					className="bg-[#3D2278] self-start font-medium text-lg text-white px-[4.35rem] py-3 rounded-xl"
				>
					Create
				</button>
			</div>
			<Image src={Workout} alt="workout" />
			<ButtonsGroup />
			<Modal open={open} setOpen={setOpen}>
				<CreateCard />{" "}
			</Modal>
		</div>
	);
};

export default BodyTab;
