import Image from "next/image";
import Link from "next/link";
import LineLeft from "@/public/Line left.png";
import Cross from "@/public/close.png";
import Google from "@/public/Google.svg";
import Apple from "@/public/apple.svg";
import { Dispatch, SetStateAction } from "react";

const LoginForm = ({
	setOpen,
	title,
	description,
	setCurrentAuth,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	title: string;
	description: string;
	setCurrentAuth: Dispatch<SetStateAction<string>>;
}) => {
	return (
		<div className="p-8">
			<h1 className="font-bold text-2xl text-[#0B0B0B] text-left">
				{title} Login
			</h1>
			<p className="mt-4  text-[#6D6D6D] text-left text-sm">{description}</p>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-[30px] right-[30px] absolute cursor-pointer"
			/>

			<div className="gap-5 flex flex-col mt-8 gap-y-5">
				<input
					type="email"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
					placeholder="Enter Your Email"
				/>
				<input
					type="password"
					placeholder="Enter Your Password"
					className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
				/>
				<button
					onClick={() => setCurrentAuth("forgetPassword")}
					className="text-sm self-start font-semibold text-[#3D2278]"
				>
					Forgot Password
				</button>
				<button className="bg-[#3D2278] md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm">
					Login
				</button>
			</div>
			<p className="text-center pt-4 text-sm">
				Don’t have account ?{" "}
				<span
					className="text-sm cursor-pointer font-semibold text-[#3D2278]"
					onClick={() => setCurrentAuth("signup")}
				>
					Sign Up
				</span>
			</p>
			{/* <div className="flex items-center gap-2 my-8 justify-center">
				<Image src={LineLeft} alt="line" className="h-[1px] w-1/2 md:w-full" />
				<span className="text-sm">Or</span>
				<Image src={LineLeft} alt="line" className="h-[1px] w-1/2 md:w-full" />
			</div> */}
			{/* <div className="gap-5 flex flex-col items-center gap-y-5">
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

export default LoginForm;
