import BG from "@/public/hero.gif";
import Logo from "@/public/logowhite.svg";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/Navbar";
import Overlay from "@/public/bgoverlay.png";

const Hero = () => {
	return (
		<section
			className="relative
			flex
			w-full h-screen	
            "
		>
			<header className="absolute w-full">
				<Navbar logo={Logo} isLandingPage />
			</header>
			<Image
				src={BG}
				alt="bg"
				fill
				className="object-cover -z-10"
				quality={100}
			/>
			<Image
				src={Overlay}
				alt="bg"
				fill
				className="object-cover -z-10"
				quality={100}
			/>
			<div className="px-10 lg:px-28 xl:px-32 gap-20 lg:gap-40 md:mx-auto flex flex-col items-center justify-end pb-12 md:pb-28">
				<div className="flex flex-col">
					<h1 className="text-[40px] text-left mb-6 max-w-sm md:max-w-full lg:text-[64px] font-bold text-white md:text-center  leading-[1.2]">
						Workout{" "}
					</h1>
					<p className="text-lg font-normal leading-7 mb-10 text-left md:text-center text-white">
						Tools for Body Training
					</p>
					<div className="space-x-8">
						<button className="bg-transparent border border-white md:text-lg text-white w-32 md:w-40 h-[52px] rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:scale-105 transition-all ease-in-out text-sm">
							Scan Body
						</button>
						<button className="bg-[#3D2278] md:text-lg text-white w-32 md:w-40 h-[52px] rounded-[10px] text-sm">
							<Link href="/workout">Create</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
