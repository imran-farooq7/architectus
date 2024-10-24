import { Dispatch, SetStateAction } from "react";
import LoginForm from "../../shared ui/LoginForm";
import SignupForm from "../../shared ui/SignupForm";
import ForgetPassword from "../../shared ui/ForgetPassword";

const CoachesAuthCard = ({
	setOpen,
	currentAuth,
	setCurrentAuth,
	isCoach,
	setIsCoach,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	currentAuth: string;
	setCurrentAuth: Dispatch<SetStateAction<string>>;
	isCoach?: boolean;
	setIsCoach?: Dispatch<SetStateAction<boolean>>;
}) => {
	let content;
	if (currentAuth === "login") {
		content = (
			<LoginForm
				setOpen={setOpen}
				title="Coach"
				description="Access your dashboard to manage workouts and track progress."
				setCurrentAuth={setCurrentAuth}
			/>
		);
	}
	if (currentAuth === "signup" || (isCoach && currentAuth !== "login")) {
		content = (
			<SignupForm
				setOpen={setOpen}
				title="Coach"
				description="Manage products, track orders, and connect with buyers."
				setCurrentAuth={setCurrentAuth}
				setIsCoach={setIsCoach!}
			/>
		);
	}
	if (currentAuth === "forgetPassword") {
		content = <ForgetPassword setOpen={setOpen} />;
	}
	return (
		<div className="flex relative flex-col mx-8 bg-white rounded-2xl p-8 max-w-full">
			{content}
		</div>
	);
};

export default CoachesAuthCard;
