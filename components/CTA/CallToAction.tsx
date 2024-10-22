import Image from "next/image";
import CTA from "@/public/cta.png";
import Link from "next/link";

const CallToAction = () => {
	return (
		<section
			className="pb-8 md:pb-20 relative px-6 md:px-28 xl:px-32 
    "
		>
			<div className="max-w-7xl md:gap-y-4 mx-auto relative pb-0 px-8 pt-8 md:p-10 flex flex-col lg:flex-row justify-between items-start md:items-center">
				<Image src={CTA} alt="bg" fill className="-z-10" quality={100} />
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-lg md:text-2xl">
						Still have a question
					</h1>
					<p
						style={{ color: "rgba(15, 10, 25, 0.7" }}
						className="max-w-[15.4rem] sm:max-w-md xl:max-w-full text-sm md:text-base leading-6"
					>
						Can't find the answer you're looking for? Please reach out to our
						friendly team.
					</p>
				</div>
				<Link
					href={"/contact"}
					className="bg-[#3D2278] text-center w-full md:w-auto self-center font-medium text-base text-white my-7 md:my-0 px-6 py-3 rounded-xl"
				>
					Contact Us
				</Link>
			</div>
		</section>
	);
};

export default CallToAction;
