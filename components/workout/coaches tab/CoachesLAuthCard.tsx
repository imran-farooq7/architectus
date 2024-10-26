import { Dispatch, SetStateAction } from "react";
import ForgetPassword from "../../shared ui/ForgetPassword";
import LoginForm from "../../shared ui/LoginForm";
import SignupForm from "../../shared ui/SignupForm";
import CoachSignup from "@/components/shared ui/CoachSignup";

const CoachesAuthCard = ({
	setOpen,
	currentAuth,
	setCurrentAuth,
	isCoach,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	currentAuth: string;
	setCurrentAuth: Dispatch<SetStateAction<string>>;
	isCoach?: boolean;
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
			<CoachSignup
				isSupplier={false}
				setOpen={setOpen}
				setCurrentAuth={setCurrentAuth}
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
