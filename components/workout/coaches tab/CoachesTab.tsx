"use client";
import Button from "@/components/shared ui/Button";
import Modal from "@/components/shared ui/Modal";
import Line from "@/public/linewrk.png";
import Image from "next/image";
import MaterialsFaqs from "./MaterialsFaqs";

import SearchBar from "@/components/shared ui/SearchBar";
import { useState } from "react";
import CoachesAuthCard from "./CoachesLAuthCard";

const CoachesTab = () => {
	const [open, setOpen] = useState(false);
	const [currentAuth, setCurrentAuth] = useState("login");

	return (
		<div className="flex flex-col">
			<div className="my-14 md:my-20">
				<h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Coaches{" "}
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
					the list of Coaches needed to start your journey without excuses.
				</p>
				<div className="flex mt-10 gap-5 flex-col md:flex-row">
					<button
						onClick={() => {
							setCurrentAuth("signup");
							setOpen(true);
						}}
						className="bg-[#3D2278] font-medium text-lg text-white px-10 md:px-[3.3rem] py-3 rounded-xl"
					>
						I'm a Coach
					</button>
					<div
						onClick={() => {
							setCurrentAuth("login");
							setOpen(true);
						}}
					>
						<Button text="Login" />
					</div>
				</div>
			</div>
			<SearchBar />
			<MaterialsFaqs />
			{/* <div className="flex justify-center my-8 md:my-[60px]">
				<Button text="Download" />
			</div> */}
			<Modal open={open} setOpen={setOpen}>
				<CoachesAuthCard
					setOpen={setOpen}
					currentAuth={currentAuth}
					setCurrentAuth={setCurrentAuth}
				/>
			</Modal>
		</div>
	);
};

export default CoachesTab;
