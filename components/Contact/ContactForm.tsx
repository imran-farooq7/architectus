import React from "react";
import Input from "../workout/suppliers/Input";

const ContactForm = () => {
	return (
		<div className="flex flex-col max-w-full ">
			<div className="flex flex-col gap-[18px] mb-8">
				<Input contactForm type="text" placeHolder="Name" />
				<Input contactForm type="email" placeHolder="Email" />
				<Input contactForm type="text" placeHolder="Company" />
				<textarea
					placeholder="Describe"
					className="border pl-5 pt-4 border-[#0000001F] w-full md:w-[400px] rounded-[10px] h-32"
				/>
			</div>

			<button className="bg-[#3D2278]  text-white w-full h-[52px] rounded-[10px] ">
				Submit
			</button>
		</div>
	);
};

export default ContactForm;
