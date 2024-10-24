import Navbar from "@/components/navbar/Navbar";
import Reviews from "@/components/reviews/Reviews";
import Workout from "@/components/workout/Workout";
import Logo from "@/public/logonew.svg";

const WorkoutDetailsPage = () => {
	return (
		<div>
			<Navbar logo={Logo} />
			{/* <Breadcrumbs name={"Workout"} /> */}
			<div className="workoutbg bg-no-repeat bg-center bg-cover relative">
				{/* <Image src={BG} alt="bg" fill className="object-cover" quality={100} /> */}
				<Workout />
			</div>
		</div>
	);
};

export default WorkoutDetailsPage;
