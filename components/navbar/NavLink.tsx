import Link from "next/link";
import { NavLinkProps } from "@/lib/types";
const NavLink = ({ href, text, footer }: NavLinkProps) => {
	return (
		<Link
			href={href}
			className={` ${
				footer ? "text-sm font-medium" : "text-base font-normal"
			} ${!footer ? "text-[#0F0A19B2]/70" : "!text-white/80"}`}
		>
			{text}
		</Link>
	);
};

export default NavLink;
