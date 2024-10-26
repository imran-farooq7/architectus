import Button from "./Button";

const ButtonsGroup = ({ isWorkout }: { isWorkout?: boolean }) => {
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
					<Button text="Modify" />
					<Button text="Download" />
					<Button text="Share" />
				</>
			)}
		</div>
	);
};

export default ButtonsGroup;
