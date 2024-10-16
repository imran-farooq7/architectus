import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Reviews from "@/components/reviews/Reviews";
import ButtonsGroup from "@/components/shared ui/ButtonsGroup";
import Workout from "@/components/workout/Workout";
import Image from "next/image";
import BG from "@/public/Gradient Group.webp";

interface Props {
	params: {
		name: string;
	};
}
const AiToolDetailPage = ({ params: { name } }: Props) => {
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
			<div className="hero bg-no-repeat bg-center bg-cover">
				{/* <Image src={BG} alt="bg" className="  object-cover" quality={100} /> */}
				{content}
			</div>
			<ButtonsGroup />
			<Reviews />
		</div>
	);
};

export default AiToolDetailPage;
