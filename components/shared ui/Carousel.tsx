"use client";
import Slider from "react-slick";

const Carousel = ({
	children,
	slides,
}: {
	children: React.ReactNode;
	slides: number;
}) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: slides,
		slidesToScroll: 1,
		// centerMode: true,
		// centerPadding: "30px",
		responsive: [
			{
				breakpoint: 1050,
				settings: {
					slidesToShow: slides,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: slides,
					slidesToScroll: 1,
					initialSlide: 1,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: slides,
					slidesToScroll: 1,
					centerPadding: "0px",
					vertical: true,
				},
			},
		],
	};
	return (
		<Slider {...settings} arrows>
			{children}
		</Slider>
	);
};

export default Carousel;
