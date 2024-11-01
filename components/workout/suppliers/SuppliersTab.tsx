"use client";
import Reviews from "@/components/reviews/Reviews";
import Button from "@/components/shared ui/Button";
import Carousel from "@/components/shared ui/Carousel";
import Modal from "@/components/shared ui/Modal";
import SearchBar from "@/components/shared ui/SearchBar";
import Skan from "@/public/image 12.png";
import P1 from "@/public/p1.svg";
import P2 from "@/public/p2.svg";
import P3 from "@/public/p3.svg";
import P4 from "@/public/p4.svg";
import { useState } from "react";
import ProductCard from "./ProductCard";
import SupplierAuthCard from "./SupplierAuthCard";
import SupplierCard from "./SupplierCard";

const SuppliersTab = () => {
	const [open, setOpen] = useState(false);
	const [openUploadForm, setOpenUploadForm] = useState(false);
	const [currentAuth, setCurrentAuth] = useState("login");

	return (
		<div className="flex flex-col ">
			<div className="my-14 md:my-20 space-y-8">
				<h1 className="max-w-full text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
					Store{" "}
				</h1>
				<p className="text-sm !mt-5 md:mt-8 md:text-lg font-normal leading-[26px] max-w-[20rem] md:max-w-[34rem]">
					On this page, you can find the ideal suppliers to obtain all the
					materials, equipment, and supplements necessary for your journey.
				</p>
				<div className="flex mt-10 items-center gap-5 flex-row">
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
						className="w-fit"
					>
						<Button text="Login" />
					</div>
				</div>
			</div>
			<SearchBar isSupplier />
			<Carousel slides={4}>
				<ProductCard
					image={P1}
					title="Beta-Alanine"
					brand="Kaged Muscle"
					price="€19,90"
					discountedPrice="€9,95"
				/>{" "}
				<ProductCard
					image={P2}
					title="Foods Vitamin D3"
					brand="Smartys"
					price="€19,90"
					discountedPrice="€9,95"
				/>{" "}
				<ProductCard
					image={P3}
					title="Dumbbells"
					brand="Bowflex"
					price="€19,90"
					discountedPrice="€9,95"
				/>{" "}
				<ProductCard
					image={P4}
					title="Running Shorts"
					brand="Nike"
					price="€19,90"
					discountedPrice="€9,95"
				/>{" "}
			</Carousel>

			<div className="flex justify-center mt-20">
				<SupplierCard image={Skan} />
			</div>
			{/* <SupplierCard image={Ncc} />
				<SupplierCard image={Hoc} />
				<SupplierCard image={Stra} />
				<SupplierCard image={Zcr} />
				<SupplierCard image={Zublin} /> */}

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
