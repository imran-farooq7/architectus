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
		<div className="flex tabs gap-4 gap-y-4 justify-evenly md:justify-center">
			{isWorkout ? (
				<>
					<div
						onClick={() => {
							setModalContent!("modify");
							setOpen!(true);
						}}
						className="w-fit"
					>
						<Button text="Modify" />
					</div>
					<div
						className="w-fit"
						onClick={() => {
							setModalContent!("download");
							setOpen!(true);
						}}
					>
						<Button text="Download" />
					</div>
				</>
			) : (
				<>
					<div className="flex gap-5 flex-col md:flex-row">
						{" "}
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
					</div>
					<div className="flex gap-5 flex-col md:flex-row">
						<div
							className="w-full md:w-fit"
							onClick={() => {
								setModalContent!("download");
								setOpen!(true);
							}}
						>
							<Button text="Download" />
						</div>
						<div
							className="w-full md:w-fit"
							onClick={() => {
								setModalContent!("share");
								setOpen!(true);
							}}
						>
							<Button text="Share" />
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ButtonsGroup;
