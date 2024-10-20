import Button from "./Button";

const ButtonsGroup = () => {
	return (
		<div className="flex tabs gap-5 overflow-x-scroll mt-14 md:justify-center">
			<Button text="Scan 3d Body" />
			<Button text="Modify" />
			<Button text="Connect 3d Printer" />
			<Button text="Download" />
		</div>
	);
};

export default ButtonsGroup;
