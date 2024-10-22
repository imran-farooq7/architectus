const Input = ({
	type,
	placeHolder,
	contactForm,
}: {
	type: string;
	placeHolder: string;
	contactForm?: boolean;
}) => {
	let className;
	if (contactForm) {
		className =
			"placeholder:text-[#0F0A19]/60 pl-5 placeholder:text-base border border-black/[0.12] rounded-xl h-[52px]";
	} else {
		className =
			"placeholder:text-[#9D9D9D] pl-5 placeholder:text-sm bg-[#FAFAFA] border border-[#E7E7E7] rounded-xl h-[52px]";
	}
	return <input type={type} placeholder={placeHolder} className={className} />;
};

export default Input;
