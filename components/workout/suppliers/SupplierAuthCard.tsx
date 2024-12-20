import { Dispatch, SetStateAction } from "react";
import LoginForm from "../../shared ui/LoginForm";
import ForgetPassword from "@/components/shared ui/ForgetPassword";
import SignupForm from "@/components/shared ui/SignupForm";
import CoachSignup from "@/components/shared ui/CoachSignup";
import SupplierPayment from "./SupplierPayment";

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
			<CoachSignup
				isSupplier
				setCurrentAuth={setCurrentAuth}
				setOpen={setOpen}
			/>
		);
	}
	if (currentAuth === "forgetPassword") {
		content = <ForgetPassword setOpen={setOpen} />;
	}
	if (currentAuth === "supplierPayment") {
		content = <SupplierPayment setOpen={setOpen} />;
	}
	if (currentAuth === "buyerPayment") {
		content = <SupplierPayment setOpen={setOpen} isBuyer />;
	}
	return (
		<div className="flex relative flex-col p-4 mx-4 md:mx-8 bg-white md:p-8 rounded-2xl min-w-[393px] max-w-full">
			{content}
		</div>
	);
};

export default SupplierAuthCard;
