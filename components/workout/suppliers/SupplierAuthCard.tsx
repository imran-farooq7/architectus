import { Dispatch, SetStateAction } from "react";
import LoginForm from "../../shared ui/LoginForm";
import ForgetPassword from "@/components/shared ui/ForgetPassword";
import SignupForm from "@/components/shared ui/SignupForm";

const SupplierAuthCard = ({
	setOpen,
	currentAuth,
	setCurrentAuth,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	currentAuth: string;
	setCurrentAuth: Dispatch<SetStateAction<string>>;
}) => {
	let content;
	if (currentAuth === "login") {
		content = (
			<LoginForm
				setOpen={setOpen}
				title="Supplier"
				description="Access your dashboard to manage workouts and track progress."
				setCurrentAuth={setCurrentAuth}
			/>
		);
	}
	if (currentAuth === "signup") {
		content = (
			<SignupForm
				setOpen={setOpen}
				title="Supplier"
				description="Manage products, track orders, and connect with buyers."
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

export default SupplierAuthCard;
