import { FeatureCardProps } from "@/lib/types";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const Feature = ({ text, title, href }: FeatureCardProps) => {
	return (
		<div className="card flex flex-col p-6 pr-8 rounded-[20px]">
			<UserCircleIcon className="w-12 h-12 mb-8 text-white" />
			<h3 className="text-white font-semibold text-lg">{title}</h3>
			<p className="text-white/80 leading-[22px] text-sm pt-3 pb-6 pr-8">
				{text}
			</p>
			<Link
				href={`/aitools/${href}`}
				className="bg-[#3D2278] btn inline-block text-center w-full text-base text-white px-10 py-3 rounded-xl mb-3"
			>
				Try Now
			</Link>
		</div>
	);
};

export default Feature;
