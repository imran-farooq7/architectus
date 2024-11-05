const Button = ({ text, disabled }: { text: string; disabled?: boolean }) => {
	return (
		<button
			disabled={disabled}
			className=" md:px-0 min-w-[175px] md:min-w-50 lg:min-w-56 text-nowrap text-base py-2.5 rounded-[10px] border-[2px] border-[#3D2278] font-medium bg-transparent text-[#3D2278] disabled:opacity-40"
		>
			{text}
		</button>
	);
};

export default Button;
