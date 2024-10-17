import Image, { StaticImageData } from "next/image";

const SupplierCard = ({ image }: { image: StaticImageData }) => {
	return (
		<div className="bg-white py-6 flex justify-center items-center rounded-[18px] overflow-hidden shadow-md max-w-[280px]">
			<Image
				className="w-full object-cover"
				src={image}
				width={280}
				height={90}
				alt="supplier"
			/>
		</div>
	);
};

export default SupplierCard;
