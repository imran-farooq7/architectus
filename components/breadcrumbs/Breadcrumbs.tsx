import React from "react";

const Breadcrumbs = ({ name }: { name: string }) => {
	return (
		<div className="bg-[#EFF2F6]">
			<div className="py-2 px-10 md:px-20">
				<span className="text-sm font-medium text-[#0F0A19]/50">Home / </span>
				<span className="text-sm font-medium text-[#0F0A19]/50">
					Ai Tools /{" "}
				</span>
				<span className="text-sm font-semibold text-[#0F0A19] capitalize">
					{name}
				</span>
			</div>
		</div>
	);
};

export default Breadcrumbs;
