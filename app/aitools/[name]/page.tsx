import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Reviews from "@/components/reviews/Reviews";
import ButtonsGroup from "@/components/shared ui/ButtonsGroup";
import Workout from "@/components/workout/Workout";
import Image from "next/image";
import BG from "@/public/bg review.png";
import Button from "@/components/shared ui/Button";
import MaterialsFaqs from "@/components/workout/materials tab/MaterialsFaqs";

interface Props {
	searchParams: {
		tab: string;
	};
	params: {
		name: string;
	};
}
const AiToolDetailPage = ({
	searchParams: { tab },
	params: { name },
}: Props) => {
	let content;
	if (name === "workout") {
		content = <Workout />;
	}
	if (name === "clothing") {
		content = "clothing";
	}

	return (
		<div>
			<Breadcrumbs name={name} />
			<div className="workoutbg bg-no-repeat bg-center bg-cover relative">
				{/* <Image src={BG} alt="bg" fill className="object-cover" quality={100} /> */}
				{content}
			</div>

			<Reviews />
		</div>
	);
};

export default AiToolDetailPage;
