const Button = ({ text }: { text: string }) => {
	return (
		<button className="w-52  py-2.5 rounded-[10px] border-[2px] border-[#3D2278] font-medium bg-transparent text-[#3D2278]">
			{text}
		</button>
	);
};

export default Button;
