"use client";
import { insights } from "@/lib/constants";
import InsightsCard from "./InsightsCard";
import Slider from "react-slick";

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "30px",
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 1,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "0px",
				},
			},
		],
	};
	return (
		<Slider {...settings} arrows>
			{insights.map((insight) => (
				<InsightsCard
					key={insight.title}
					image={insight.image}
					statement={insight.statement}
					title={insight.title}
				/>
			))}
		</Slider>
	);
};

export default Carousel;
