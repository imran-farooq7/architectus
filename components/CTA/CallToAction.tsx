import Image from "next/image";
import CTA from "@/public/cta.png";

const CallToAction = () => {
	return (
		<section
			className="py-20 relative px-10 lg:px-28 xl:px-32 
    "
		>
			<div className="max-w-7xl gap-y-4 mx-auto relative p-10 flex flex-col lg:flex-row justify-between items-center">
				<Image src={CTA} alt="bg" fill className="-z-10" quality={100} />
				<div className="flex flex-col gap-4">
					<h1 className="font-semibold text-base md:text-2xl">
						Still have a question
					</h1>
					<p
						style={{ color: "rgba(15, 10, 25, 0.7" }}
						className="max-w-lg xl:max-w-full"
					>
						Can't find the answer you're looking for? Please reach out to our
						friendly team.
					</p>
				</div>
				<button className="bg-[#3D2278] self-center font-medium text-base text-white px-6 py-3 rounded-xl">
					Get Start Now
				</button>
			</div>
		</section>
	);
};

export default CallToAction;
