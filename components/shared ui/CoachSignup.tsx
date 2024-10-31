import Image from "next/image";
import Upload from "@/public/avatar upload.svg";
import VideoUpload from "@/public/vidupicon.svg";
import Cross from "@/public/close.png";
import { Dispatch, SetStateAction } from "react";
import Eng from "@/public/eng.svg";

const CoachSignup = ({
	setOpen,
	setCurrentAuth,
	isSupplier,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	setCurrentAuth: Dispatch<SetStateAction<string>>;
	isSupplier: boolean;
}) => {
	return (
		<div>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-2 right-4 absolute cursor-pointer"
			/>
			<div className="my-4">
				{isSupplier ? (
					<div className="relative mt-6 w-full">
						<div className=" relative borderUpload py-10" id="dropzone">
							<input
								type="file"
								className="absolute inset-0 w-full h-full opacity-0 z-50"
							/>
							<div className="text-center">
								<Image src={VideoUpload} alt="upload" className="mx-auto" />

								<h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer"
									>
										<span>Drag and drop</span>
										<span className="text-[#3D2278] font-semibold">
											{" "}
											or browse
										</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
								</h3>
							</div>
						</div>
					</div>
				) : (
					<div className="relative" id="dropzone">
						<input type="file" className="opacity-0 top-8 absolute" />
						<div className="text-center">
							<Image src={Upload} alt="upload" className="mx-auto" />

							<h3 className="mt-6 font-semibold text-[#0B0B0B]">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer"
								>
									<span>Upload your profile</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
									/>
								</label>
							</h3>
						</div>
					</div>
				)}
			</div>
			{isSupplier ? (
				<p className="text-center font-semibold text-[#0F0A19]">
					Upload Product, service or event image
				</p>
			) : null}
			<div className="gap-5 flex flex-col mt-8 gap-y-5">
				<input
					type="text"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder={isSupplier ? "Enter Title" : "Enter Full Name"}
				/>
				<textarea
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA] h-[140px]"
					placeholder={
						isSupplier
							? "Write a small description about your product or service such as product/service type, relevant sports categories, and available shipping countries."
							: "Create a small description about your sport discipline, training method, exercise type, and your skill level."
					}
				/>
				<div
					className={`${
						isSupplier ? "hidden" : "flex"
					}  flex-wrap justify-between gap-y-5`}
				>
					<div className="relative w-full  md:w-[260px]">
						<div className=" relative borderUpload py-10" id="dropzone">
							<input
								type="file"
								className="absolute inset-0 w-full h-full opacity-0 z-50"
							/>
							<div className="text-center">
								<Image src={VideoUpload} alt="upload" className="mx-auto" />

								<h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer"
									>
										<span>Drag and drop</span>
										<span className="text-[#3D2278] font-semibold">
											{" "}
											or browse
										</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
								</h3>
							</div>
						</div>
					</div>
					<div className="relative w-full md:w-[260px]">
						<div className="relative borderUpload py-10" id="dropzone">
							<input
								type="file"
								className="absolute inset-0 w-full h-full opacity-0 z-50"
							/>
							<div className="text-center">
								<Image src={VideoUpload} alt="upload" className="mx-auto" />

								<h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer"
									>
										<span>Drag and drop</span>
										<span className="text-[#3D2278] font-semibold">
											{" "}
											or browse
										</span>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</label>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="relative">
					{" "}
					<input
						type="text"
						className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
						placeholder="Language"
					/>
					<Image src={Eng} alt="language" className="absolute top-4 right-4" />
				</div>
				<input
					type="text"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder={isSupplier ? "Brand Name" : "Add your website link"}
				/>
				<input
					type="text"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder={isSupplier ? "Price" : "Instagram"}
				/>
				<input
					type="text"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder={isSupplier ? "Discount Price" : "Facebook"}
				/>
				<input
					type="text"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder={isSupplier ? "Website link" : "YouTube"}
				/>
				<input
					type="email"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder={isSupplier ? "Email Address" : "Enter Email address"}
				/>
				<input
					type="password"
					placeholder={"Create Password"}
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
				/>
				<input
					type="password"
					placeholder={"Confirm Passowrd"}
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
				/>
				<button
					onClick={() => setCurrentAuth("supplierPayment")}
					className="bg-[#3D2278] md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm"
				>
					{isSupplier ? "Continue" : "Register"}
				</button>
			</div>
			<p className="text-center pt-4 text-sm">
				Already have an account ?{" "}
				<span
					className="text-sm cursor-pointer font-semibold text-[#3D2278]"
					onClick={() => {
						setCurrentAuth("login");
					}}
				>
					Login
				</span>
			</p>
			{/* <div className="flex items-center justify-center gap-2 my-8">
        <Image src={LineLeft} alt="line" className="h-[1px] w-1/2 md:w-full" />
        <span className="text-sm">Or</span>
        <Image src={LineLeft} alt="line" className="h-[1px] w-1/2 md:w-full" />
    </div>
    <div className="gap-5 flex flex-col items-center gap-y-5">
        <button
            onClick={() => setOpen(false)}
            className="bg-transparent  border border-[#0F0A19]/10 flex items-center justify-center gap-4 text-[#0F0A19]/70 w-full h-[52px] rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:text-white hover:scale-105 transition-all ease-in-out text-sm"
        >
            <Image src={Google} alt="google" />
            <span>Login with Google</span>
        </button>
        <button className="bg-transparent  border border-[#0F0A19]/10 text-[#0F0A19]/70 flex items-center justify-center gap-4  w-full h-[52px] rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:text-white hover:scale-105 transition-all ease-in-out text-sm">
            <Image src={Apple} alt="Apple" />
            <span>Login with Apple</span>
        </button>
    </div> */}
		</div>
	);
};

export default CoachSignup;
