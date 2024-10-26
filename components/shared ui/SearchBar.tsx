import Image from "next/image";
import Search from "@/public/search.svg";
import Comment from "@/public/comment.svg";

const SearchBar = ({
	isWorkout,
	isSupplier,
}: {
	isWorkout?: boolean;
	isSupplier?: boolean;
}) => {
	let content;
	if (isSupplier) {
		content = (
			<span className="font-semibold">
				workout supplements, vitamins, training equipment, sportswear,{" "}
				<span className="font-normal">and country location.</span>
			</span>
		);
	}
	if (isWorkout) {
		content = (
			<span className="font-semibold">
				sport discipline, training method, exercise type, skill level, full
				body,{" "}
				<span className="font-normal">
					or focus on a specific muscle group.
				</span>
			</span>
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
				{isWorkout || isSupplier ? (
					<p className="text-xs max-w-xl md:text-sm text-[#0F0A19]/60">
						Search for workout plans using keywords such as {content}
					</p>
				) : (
					<p className="text-sm text-[#0F0A19]/60">
						Search for training types using keywords such as{" "}
						<span className="font-semibold">CrossFit, Boxing, or Strength</span>
						.
					</p>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
