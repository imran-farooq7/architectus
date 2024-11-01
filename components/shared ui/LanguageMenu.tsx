import Eng from "@/public/flageng.svg";
import Brazil from "@/public/flagbrazil.svg";
import Russia from "@/public/flagrussia.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Check from "@/public/checked.svg";
import { useState } from "react";

const LanguageMenu = () => {
	const [lang, setLang] = useState(Eng);
	return (
		<div className="w-52 hidden md:block text-right">
			<Menu>
				<MenuButton
					className="inline-flex langMenu
				 items-center gap-2 rounded-xl p-3 focus:outline-none "
				>
					{({ active }) => (
						<>
							{" "}
							<Image src={lang} alt="language" />
							<ChevronDownIcon
								className={`${
									active ? "hidden" : "inline-flex size-4 fill-black"
								}`}
							/>
							<ChevronUpIcon
								className={`${
									active ? "inline-flex size-4 fill-black" : "hidden "
								}`}
							/>
						</>
					)}
				</MenuButton>

				<MenuItems
					transition
					anchor={{ gap: "10px", to: "bottom start" }}
					className="w-40 top-4  text-[#0F1017] origin-top-right rounded-xl langMenu text-sm py-1 transition duration-100 ease-out  focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
				>
					<MenuItem>
						{({ focus }) => (
							<button
								onClick={() => setLang(Eng)}
								className="group flex w-full items-center gap-2.5 rounded-lg p-3 data-[focus]:bg-white/10"
							>
								<Image src={Eng} alt="English" />
								<span className={`${lang === Eng && "font-semibold"}`}>
									English
								</span>
								<Image
									src={Check}
									alt="check"
									className={`${
										lang === Eng ? "inline-flex ml-auto" : "hidden"
									}`}
								/>
							</button>
						)}
					</MenuItem>
					<MenuItem>
						{({ focus }) => (
							<button
								onClick={() => setLang(Brazil)}
								className="group flex w-full items-center gap-2.5 rounded-lg p-3 data-[focus]:bg-white/10"
							>
								<Image src={Brazil} alt="Brazil" />

								<span className={`${lang === Brazil && "font-semibold"}`}>
									Brazilian
								</span>
								<Image
									src={Check}
									alt="check"
									className={`${
										lang === Brazil ? "inline-flex ml-auto" : "hidden"
									}`}
								/>
							</button>
						)}
					</MenuItem>
					<MenuItem>
						{({ focus }) => (
							<button
								onClick={() => setLang(Russia)}
								className="group flex w-full items-center gap-2.5 rounded-lg p-3 data-[focus]:bg-white/10"
							>
								<Image src={Russia} alt="Russia" />

								<span className={`${lang === Russia && "font-semibold"}`}>
									Russian
								</span>
								<Image
									src={Check}
									alt="check"
									className={`${
										lang === Russia ? "inline-flex ml-auto" : "hidden"
									}`}
								/>
							</button>
						)}
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
};

export default LanguageMenu;
