const Input = ({
	type,
	placeHolder,
}: {
	type: string;
	placeHolder: string;
}) => {
	return (
		<input
			type={type}
			placeholder={placeHolder}
			className="placeholder:text-[#9D9D9D] pl-5 placeholder:text-sm bg-[#FAFAFA] border border-[#E7E7E7] rounded-xl h-[52px]"
		/>
	);
};

export default Input;
