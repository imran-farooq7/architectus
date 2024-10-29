import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

const ButtonsGroup = ({
	isWorkout,
	setModalContent,
	setOpen,
}: {
	isWorkout?: boolean;
	setModalContent?: Dispatch<SetStateAction<string>>;
	setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="flex tabs gap-5 flex-wrap md:justify-center">
			{isWorkout ? (
				<>
					<Button text="Modify" />
					<Button text="Download" />
				</>
			) : (
				<>
					<Button text="Body Scan" />
					<div
						onClick={() => {
							setModalContent!("modify");
							setOpen!(true);
						}}
						className="w-full md:w-fit"
					>
						<Button text="Modify" />
					</div>
					<div
						className="w-full md:w-fit"
						onClick={() => {
							setModalContent!("download");
							setOpen!(true);
						}}
					>
						<Button text="Download" />
					</div>
					<Button text="Share" />
				</>
			)}
		</div>
	);
};

export default ButtonsGroup;
