import Button from "./Button";

const ButtonsGroup = () => {
	return (
		<div className="flex flex-wrap gap-5 mt-14 justify-center">
			<Button text="Scan 3d Body" />
			<Button text="Modify" />
			<Button text="Connect 3d Printer" />
			<Button text="Download" />
		</div>
	);
};

export default ButtonsGroup;
