"use client";
import Modal from "@/components/shared ui/Modal";
import Plus from "@/public/add.png";
import Down from "@/public/down.png";
import Hoc from "@/public/hoc.png";
import Skan from "@/public/image 12.png";
import Ncc from "@/public/ncc.png";
import Stra from "@/public/strabag.png";
import Zcr from "@/public/zcr.png";
import Zublin from "@/public/zublin.svg";
import Image from "next/image";
import { useState } from "react";
import SupplierCard from "./SupplierCard";
import UploadSupplierForm from "./UploadSupplierForm";
import Carousel from "@/components/shared ui/Carousel";
import Button from "@/components/shared ui/Button";
import SupplierAuthCard from "./SupplierAuthCard";
import SearchBar from "@/components/shared ui/SearchBar";
import Reviews from "@/components/reviews/Reviews";

const SuppliersTab = () => {
	const [open, setOpen] = useState(false);
	const [openUploadForm, setOpenUploadForm] = useState(false);
	const [currentAuth, setCurrentAuth] = useState("login");

	return (
		<div className="flex flex-col ">
			<div className="my-14 md:my-20 space-y-8">
				<h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Suppliers{" "}
				</h1>
				<p className="text-sm !mt-5 md:mt-8 md:text-lg font-normal leading-[26px] max-w-[20rem] md:max-w-[34rem]">
					On this page, you can find the ideal suppliers to obtain all the
					materials, equipment, and supplements necessary for your journey.
				</p>
				<div className="flex mt-10 items-center gap-5 flex-col md:flex-row">
					<button
						onClick={() => {
							setCurrentAuth("signup");
							setOpen(true);
						}}
						className="bg-[#3D2278] font-medium text-lg text-white px-10 md:px-[3.8rem] py-3 rounded-xl"
					>
						Advertise
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
			<SearchBar isSupplier />

			<Carousel slides={4}>
				<SupplierCard image={Skan} />
				<SupplierCard image={Ncc} />
				<SupplierCard image={Hoc} />
				<SupplierCard image={Stra} />
				<SupplierCard image={Zcr} />
				<SupplierCard image={Zublin} />
			</Carousel>
			<Reviews isCoach={false} />
			<Modal open={open} setOpen={setOpen}>
				<SupplierAuthCard
					currentAuth={currentAuth}
					setCurrentAuth={setCurrentAuth}
					setOpen={setOpen}
				/>
			</Modal>
			{/* <Modal open={openUploadForm} setOpen={setOpenUploadForm}>
				<UploadSupplierForm setOpen={setOpenUploadForm} />
			</Modal> */}
		</div>
	);
};

export default SuppliersTab;
