"use client";
import Slider from "react-slick";
import SupplierCard from "../workout/suppliers/SupplierCard";
import Hoc from "@/public/hoc.png";
import Skan from "@/public/image 12.png";
import Ncc from "@/public/ncc.png";
import Stra from "@/public/strabag.png";
import Zcr from "@/public/zcr.png";
import Zublin from "@/public/zublin.svg";

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		// centerMode: true,
		// centerPadding: "30px",
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					initialSlide: 1,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					centerPadding: "0px",
					vertical: true,
				},
			},
		],
	};
	return (
		<Slider {...settings} arrows>
			{/* {insights.map((insight) => (
				<InsightsCard
					key={insight.title}
					image={insight.image}
					statement={insight.statement}
					title={insight.title}
				/>
			))} */}
			<SupplierCard image={Skan} />
			<SupplierCard image={Ncc} />
			<SupplierCard image={Stra} />
			<SupplierCard image={Zcr} />
			<SupplierCard image={Zublin} />
			<SupplierCard image={Hoc} />
			{/* <button
				onClick={() => setOpen(true)}
				className="w-full md:w-[280px] flex justify-center items-center h-[140px] borderButton"
			>
				<Image src={Plus} alt="add" />
			</button> */}
		</Slider>
	);
};

export default Carousel;
