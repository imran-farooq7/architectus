import Button from "./Button";

const ButtonsGroup = () => {
	return (
		<div className="flex tabs gap-5 flex-wrap md:justify-center">
			<Button text="3D Body" />
			<Button text="Modify" />
			<Button text="3D Printer" />
			<Button text="Download" />
		</div>
	);
};

export default ButtonsGroup;
