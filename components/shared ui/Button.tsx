const Button = ({ text, disabled }: { text: string; disabled?: boolean }) => {
	return (
		<button
			disabled={disabled}
			className="px-10 md:px-0 w-full md:w-52 text-nowrap text-sm py-2.5 rounded-[10px] border-[2px] border-[#3D2278] font-medium bg-transparent text-[#3D2278] disabled:opacity-40"
		>
			{text}
		</button>
	);
};

export default Button;
