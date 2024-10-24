import Carousel from "../shared ui/Carousel";

const Insights = () => {
	return (
		<div className="lg:px-28 xl:px-32 py-20 px-10">
			<div
				className=" max-w-7xl mx-auto 
    "
			>
				<h1 className="text-center mb-5 text-black font-semibold text-xl lg:text-3xl">
					Our AI Powered Insights
				</h1>
				<p className="text-center font-normal mb-20 text-base md:text-xl text-[#787481]">
					A brief description introducing the blog content.
				</p>
				<Carousel />
			</div>
		</div>
	);
};

export default Insights;
