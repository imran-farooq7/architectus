"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { links } from "@/lib/constants";
import NavLink from "./NavLink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Dialog, DialogPanel } from "@headlessui/react";

const Navbar = ({ logo }: { logo: StaticImageData }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="py-6 px-10  md:px-20">
			<header className="z-50">
				<nav className="flex items-center justify-between" aria-label="Global">
					<div className="flex lg:flex-1">
						<Link href="/">
							<Image src={logo} alt="logo" />
						</Link>
					</div>
					{/* <div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div> */}

					{/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Link
							href={"/contact"}
							className="lg:inline-flex px-8 py-[14px] rounded-[10px] bg-[#3D2278] font-medium text-white"
						>
							Contact
						</Link>
					</div> */}
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
