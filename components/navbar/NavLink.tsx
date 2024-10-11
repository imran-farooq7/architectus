import Link from "next/link";
import { NavLinkProps } from "@/lib/types";
const NavLink = ({ href, text }: NavLinkProps) => {
	return (
		<Link href={href} className="font-normal text-base text-[#0F0A19B2]/70">
			{text}
		</Link>
	);
};

export default NavLink;
