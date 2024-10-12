import Image from "next/image";
import hero from "@/public/hero.svg";
import Line from "@/public/line.png";
import BG from "@/public/Gradient Group.webp";

const Hero = () => {
	return (
		<section
			className="py-20 relative px-14 lg:px-28 xl:px-32 
            "
		>
			<Image
				src={BG}
				alt="bg"
				fill
				className="hero object-cover"
				quality={100}
				sizes="100vw"
				priority
			/>
			<div className=" gap-20 lg:gap-40 mx-auto flex flex-col lg:flex-row items-center">
				<div>
					<h1 className="max-w-full text-3xl md:text-5xl lg:text-[64px] font-bold text-[#0F0A19] lg:max-w-2xl leading-[1.2]">
						Innovative{" "}
						<span className="relative">
							<span className="hero__ai">A</span>
							<span className="text-[#3D2278]">I</span>
							<Image
								src={Line}
								alt="ai"
								className="absolute left-0 top-[35px] md:top-[65px] lg:top-[76px]"
							/>
						</span>{" "}
						Solutions
					</h1>
					<p className="text-lg font-normal leading-7 my-8 max-w-xl">
						Harness the power of AI to optimize processes, drive growth, and
						unlock new possibilities for your business.
					</p>
					<button className="bg-[#3D2278] font-medium text-lg text-white px-[34px] py-3 rounded-xl">
						Get Start Now
					</button>
				</div>

				<Image src={hero} alt="hero" priority />
			</div>
		</section>
	);
};

export default Hero;
