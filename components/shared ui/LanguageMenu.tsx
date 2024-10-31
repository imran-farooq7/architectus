import Eng from "@/public/flageng.svg";
import Brazil from "@/public/flagbrazil.svg";
import Russia from "@/public/flagrussia.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

const LanguageMenu = () => {
	const [lang, setLang] = useState(Eng);
	return (
		<div className="w-52 text-right">
			<Menu>
				<MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 focus:outline-none ">
					<Image src={lang} alt="language" />
					<ChevronDownIcon className="size-4 fill-black" />
				</MenuButton>

				<MenuItems
					transition
					anchor="bottom end"
					className="w-36 divide-y-[0.3px]  text-[#0F1017] origin-top-right rounded-xl langMenu text-sm py-1 transition duration-100 ease-out  focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
				>
					<MenuItem>
						<button
							onClick={() => setLang(Eng)}
							className="group flex w-full items-center gap-2 rounded-lg p-3 data-[focus]:bg-white/10"
						>
							<Image src={Eng} alt="english" />
							English
						</button>
					</MenuItem>
					<MenuItem>
						<button
							onClick={() => setLang(Brazil)}
							className="group flex w-full items-center gap-2 rounded-lg p-3 data-[focus]:bg-white/10"
						>
							<Image src={Brazil} alt="Brazil" />
							Brazilian
						</button>
					</MenuItem>
					<MenuItem>
						<button
							onClick={() => setLang(Russia)}
							className="group flex w-full items-center gap-2 rounded-lg p-3 data-[focus]:bg-white/10"
						>
							<Image src={Russia} alt="Russia" />
							Russian
						</button>
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
};

export default LanguageMenu;
