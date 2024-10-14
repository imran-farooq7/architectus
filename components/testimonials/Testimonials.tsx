import { testimonials } from "@/lib/constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
	return (
		<div className="lg:px-28 xl:px-32 py-20 px-14">
			<div
				className=" max-w-7xl mx-auto 
    "
			>
				<h1 className="text-center mb-16 text-black font-semibold text-xl lg:text-3xl">
					Client Testimonials
				</h1>
				<div className="grid gap-x-8 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.name}
							avatar={testimonial.avatar}
							designation={testimonial.designation}
							name={testimonial.name}
							reviews={testimonial.reviews}
							statement={testimonial.statement}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
