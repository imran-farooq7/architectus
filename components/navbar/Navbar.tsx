"use client";
import Logo from "@/public/workoutlogo.svg";
import LogoWhite from "@/public/logocap.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Contact from "@/public/contact.svg";
import ContactMobile from "@/public/contactmobile.svg";
import LanguageMenu from "../shared ui/LanguageMenu";
import HeadPhone from "@/public/headphone.svg";

const Navbar = ({
	logo,
	isLandingPage,
}: {
	logo: StaticImageData;
	isLandingPage?: boolean;
}) => {
	return (
		<div className="px-5 lg:px-20 navbar">
			<header className="z-50">
				<nav className="flex items-center justify-between" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link href="/">
							<Image src={logo} alt="logo" className="hidden md:inline-flex" />
							<Image
								src={isLandingPage ? LogoWhite : Logo}
								alt="logo"
								className="inline-flex md:hidden"
							/>
						</Link>
					</div>

					<div className="flex items-center gap-5 md:gap-0">
						<LanguageMenu />
						<Link href={"/contact"} className="hidden md:inline-flex">
							<Image src={Contact} alt="contact us" />
						</Link>

						<Link
							href={"/contact"}
							className="bg-[#3D2278] md:hidden items-center justify-center rounded-xl flex w-10 h-10"
						>
							{/* <Image
								src={Contact}
								alt="contact us"
								className="hidden md:inline-flex"
							/> */}
							<Image
								src={HeadPhone}
								alt="contact us"
								className="inline-flex md:hidden"
							/>
						</Link>
					</div>
				</nav>
				{/* <Dialog
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-50" />
					<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className=" py-6 flex flex-col gap-8">
									{links.map((link) => (
										<NavLink
											href={link.href}
											text={link.text}
											key={link.href}
										/>
									))}
								</div>
								<div className="py-6">
									<Link
										href={"/contact"}
										className=" lg:inline-flex px-9 py-[7px] rounded-[10px] border-[2px] border-[#3D2278] font-medium bg-transparent text-[#3D2278]"
									>
										Contact Us
									</Link>
								</div>
							</div>
						</div>
					</DialogPanel>
				</Dialog> */}
			</header>
		</div>
	);
};

export default Navbar;
