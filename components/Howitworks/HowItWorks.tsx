import Steps from "./Steps";
import Hw1 from "@/public/hw1.png";
import Hw2 from "@/public/hw2.png";
import Hw3 from "@/public/hw3.png";
import Hw4 from "@/public/hw4.png";
import StepsMobile from "./StepsMobile";

const HowItWorks = () => {
	return (
		<div className="bg-[#F4F2F7BF] py-8 md:py-20 px-10  md:px-28">
			<h1 className="text-xl mb-8 md:text-[32px] md:mb-20  font-bold text-[#0F1017] text-center">
				How It Works
			</h1>
			<div className="hidden lg:flex flex-col gap-20">
				<Steps
					img={Hw1}
					text="Get detailed insights about your body metrics and composition for personalized workout plans."
					title="Body Scan"
					step={1}
					imgOrder="order-1"
					textOrder="order-2"
					stepOrder="order-3"
				/>
				<Steps
					img={Hw2}
					text="Tailored fitness routines designed to meet your specific goals and preferences."
					title="Customised Workout Plans"
					step={2}
					imgOrder="order-3"
					textOrder="order-1"
					stepOrder="order-2"
				/>
				<Steps
					img={Hw3}
					text="Step-by-step audio instructions to guide you through your workouts."
					title="Guided Voice Narration"
					step={3}
					imgOrder="order-1"
					textOrder="order-2"
					stepOrder="order-3"
				/>
				<Steps
					img={Hw4}
					text="Enjoy full access to premium features tools and resources completely free no hidden costs."
					title="Completely Free"
					step={4}
					imgOrder="order-3"
					textOrder="order-1"
					stepOrder="order-2"
				/>
			</div>
			<div className=" flex lg:hidden flex-col gap-8">
				<StepsMobile
					img={Hw1}
					text="Get detailed insights about your body metrics and composition for personalized workout plans."
					title="Body Scan"
					step={1}
					imgOrder="1"
					textOrder="2"
					stepOrder="3"
				/>
				<StepsMobile
					img={Hw2}
					text="Tailored fitness routines designed to meet your specific goals and preferences."
					title="Customised Workout Plans"
					step={2}
					imgOrder="1"
					textOrder="2"
					stepOrder="2"
				/>
				<StepsMobile
					img={Hw3}
					text="Step-by-step audio instructions to guide you through your workouts."
					title="Guided Voice Narration"
					step={3}
					imgOrder="1"
					textOrder="2"
					stepOrder="3"
				/>
				<StepsMobile
					img={Hw4}
					text="Enjoy full access to premium features tools and resources completely free no hidden costs."
					title="Completely Free"
					step={4}
					imgOrder="1"
					textOrder="2"
					stepOrder="2"
				/>
			</div>
		</div>
	);
};

export default HowItWorks;
