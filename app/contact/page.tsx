import ContactContainer from "@/components/Contact/ContactContainer";
import Navbar from "@/components/navbar/Navbar";
import Line from "@/public/contactline.png";
import Phone from "@/public/phone.png";
import Logo from "@/public/logoblack.svg";
import Address from "@/public/address.png";
import Email from "@/public/email.png";

import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";

const ContactUsPage = () => {
	return (
		<div className="relative workoutbg bg-no-repeat bg-center bg-cover">
			<Navbar logo={Logo} />
			<div className="flex flex-col items-center gap-y-6 gap-x-[120px] px-6 lg:flex-row md lg:px-24 pt-10 md:pt-[100px] md:pb-20">
				<div className="py-0 lg:py-16">
					<h1 className=" text-[40px] pl-4 md:text-6xl lg:text-[64px] font-bold text-[#0F0A19]  leading-[1.2]">
						Contact{" "}
						<span className="relative">
							<span className="text-[#3D2278]">Us</span>
							<Image
								src={Line}
								alt="ai"
								className="absolute left-0 top-[50px] md:top-[65px] lg:top-[76px]"
							/>
						</span>{" "}
					</h1>
					<p className="text-sm pl-4 pt-5 md:pt-[30px] pb-10 md:pb-20 md:text-lg font-normal leading-[26px] pr-12 md:pr-0 md:max-w-[33rem]">
						We’re here to help reach out with any questions or feedback and
						we’ll respond promptly!
					</p>
					<div className="hidden md:flex flex-col gap-10">
						<ContactContainer
							icon={Phone}
							text="Need to contact us? We look forward to assisting you.Feel free to give us a call or use the contact form. "
							title="Get In Touch"
							maxWidth
						/>
						<ContactContainer
							icon={Address}
							title="Address"
							text="Consoli Tech, LLC 1234 Innovation Way Suite 300 Atlanta, GA 30301"
						/>
						<ContactContainer
							icon={Email}
							title="Email"
							text="info@consolitech.com"
						/>
					</div>
				</div>
				<div className="reviewbg rounded-[20px] p-8 max-w-[530px] max-h-[622px]">
					{/* <Image fill src={BG} alt="bg" /> */}
					<h1 className="text-xl md:text-[32px] font-bold leading-8">
						Get in Touch
					</h1>
					<p className="md:py-7 pb-6 pt-2.5 text-sm md:text-base pr-4 md:pr-0">
						Reach out with questions and we’ll respond quickly!
					</p>
					<ContactForm />
				</div>
				<div className="flex md:hidden flex-col gap-8 py-10">
					<ContactContainer
						icon={Phone}
						text="Need to contact us? We look forward to assisting you.Feel free to give us a call or use the contact form. "
						title="Get In Touch"
						maxWidth
					/>
					<ContactContainer
						icon={Address}
						title="Address"
						text="Consoli Tech, LLC 1234 Innovation Way Suite 300 Atlanta, GA 30301"
					/>
					<ContactContainer
						icon={Email}
						title="Email"
						text="info@consolitech.com"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUsPage;
