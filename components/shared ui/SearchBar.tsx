import Image from "next/image";
import Search from "@/public/search.svg";
import Comment from "@/public/comment.svg";

const SearchBar = () => {
	return (
		<div className="mb-7 md:mb-12">
			<div className="relative mb-5">
				<input
					placeholder="Search by training type"
					type="text"
					className="rounded-[10px]  placeholder:text-[#0F0A19]/60 border py-3 pl-12 border-black/10 w-full md:max-w-[570px]"
				/>
				<Image src={Search} alt="search" className="absolute top-4 left-5" />
			</div>
			<div className="flex gap-[10px] items-center">
				<Image src={Comment} alt="comment" />
				<p className="text-sm text-[#0F0A19]/60">
					Search for training types using keywords such as{" "}
					<span className="font-semibold">CrossFit, Boxing, or Strength</span>.
				</p>
			</div>
		</div>
	);
};

export default SearchBar;
