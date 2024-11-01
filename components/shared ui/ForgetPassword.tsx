import Cross from "@/public/close.png";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const ForgetPassword = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<>
			<h1 className="font-bold mt-4 text-2xl text-[#0B0B0B] text-left">
				Forgot password
			</h1>
			<p className="mt-4  text-[#6D6D6D] text-left text-sm">
				Please enter your email to reset the password
			</p>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-4 right-5 absolute cursor-pointer"
			/>

			<div className="gap-5 flex flex-col mt-8 gap-y-5">
				<input
					type="email"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder="Enter Your Email"
				/>
			</div>
			<button className="bg-[#3D2278] mt-5 md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm">
				Reset Password
			</button>
		</>
	);
};

export default ForgetPassword;
