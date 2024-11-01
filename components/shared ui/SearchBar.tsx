import Image from "next/image";
import Search from "@/public/search.svg";
import Comment from "@/public/comment.svg";

const SearchBar = ({
	isWorkout,
	isSupplier,
	isTutorial,
}: {
	isWorkout?: boolean;
	isSupplier?: boolean;
	isTutorial?: boolean;
}) => {
	let content;
	if (isSupplier) {
		content = (
			<p className="text-xs md:text-sm text-[#0F0A19]/60 max-w-[30rem]">
				Search for workout{" "}
				<span className="font-semibold">
					supplements,vitamins, training equipment, sportswear, events and
					country location.
				</span>
			</p>
		);
	}

	if (isWorkout) {
		content = (
			<p className={`text-xs md:text-sm text-[#0F0A19]/60`}>
				Search for{" "}
				<span className="font-semibold">
					coach, sport discipline, training method, exercise type, skill level.
				</span>
			</p>
		);
	}
	if (isTutorial) {
		content = (
			<p className="text-xs md:text-sm text-[#0F0A19]/60 max-w-[34rem]">
				Search for{" "}
				<span className="font-semibold">
					coach, sport discipline, training method, exercise type, skill level,
					full body, or focus on a specific muscle group.
				</span>
			</p>
		);
	}
	return (
		<div className="mb-7 md:mb-12">
			<div className="relative mb-5">
				<input
					placeholder="Search type"
					type="text"
					className="rounded-[10px]  placeholder:text-[#0F0A19]/60 border py-3 pl-12 border-black/10 w-full md:max-w-[570px]"
				/>
				<Image src={Search} alt="search" className="absolute top-4 left-5" />
			</div>
			<div className="flex gap-[10px] items-center">
				<Image src={Comment} alt="comment" />

				{content}
			</div>
		</div>
	);
};

export default SearchBar;
