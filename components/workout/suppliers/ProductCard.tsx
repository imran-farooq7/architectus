import Image from "next/image";
import P1 from "@/public/p1.svg";
import { ProductCardProps } from "@/lib/types";

const ProductCard = ({
	brand,
	discountedPrice,
	image,
	price,
	title,
	onClick,
	setOpen,
}: ProductCardProps) => {
	return (
		<div className="flex flex-col justify-center items-center rounded-[14px] h-full">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
				<Image src={image} alt="Mountain" className="w-full object-cover" />
				<div className="p-5">
					<h2 className="text-xl mb-4 font-semibold text-[#0F0A19]">{title}</h2>
					<div className="flex flex-col gap-5">
						<div className="flex justify-between">
							<p className="text-[#0F0A19] text-sm">Brand:</p>
							<p className="text-sm font-semibold text-[#0F0A19]">{brand}</p>
						</div>
						<div className="flex justify-between">
							<p className="text-[#0F0A19] text-sm">Price:</p>
							<p className="text-sm text-[#FF3A5E] line-through font-medium">
								{price}
							</p>
						</div>
						<div className="flex justify-between">
							<p className="text-[#0F0A19] text-sm">Discounted Price:</p>
							<p className="text-sm font-bold text-[#3D2278]">
								{discountedPrice}
							</p>
						</div>
					</div>
					<button
						onClick={() => {
							onClick("buyerPayment");
							setOpen(true);
						}}
						className="bg-[#3D2278] mt-5 font-medium text-sm text-white w-full py-3 rounded-xl"
					>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
