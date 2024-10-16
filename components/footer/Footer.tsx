import { links } from "@/lib/constants";
import BgFooter from "@/public/footer background.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../navbar/NavLink";
import Logo from "@/public/logonewwhite.png";
import FB from "@/public/fb.svg";
import LinkedInn from "@/public/linkedinn.svg";
import Twitter from "@/public/twitter.svg";

const Footer = () => {
	return (
		<footer className=" relative py-9 px-10  md:px-20">
			<Image
				src={BgFooter}
				alt="bg"
				fill
				className="object-cover -z-10"
				quality={100}
			/>
			<div>
				<div
					className="flex flex-col md:flex-row gap-y-6 items-center justify-between"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<Link href="/">
							<Image src={Logo} alt="logo" />
						</Link>
					</div>
					<div className="flex gap-4">
						<Link href={"#"}>
							<Image src={FB} alt="fb" />
						</Link>
						<Link href={"#"}>
							<Image src={LinkedInn} alt="linkedinn" />
						</Link>
						<Link href={"#"}>
							<Image src={Twitter} alt="twitter" />
						</Link>
					</div>
				</div>
				<div className="h-[2px] bg-white/[0.06] my-9"></div>
				<p className="text-white/80 font-normal text-sm text-center">
					©Innovative AI Solutions for Urban Development. 2024
				</p>
			</div>
		</footer>
	);
};

export default Footer;
