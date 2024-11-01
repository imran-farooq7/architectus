import Image from "next/image";
import Mic from "@/public/mic.png";
import { Dispatch, SetStateAction, useState } from "react";
import Cross from "@/public/close.png";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";
import Recording from "@/public/recording.png";
import Loader from "@/public/loader.svg";
import Download from "./Download";

const CreateCard = ({
	setOpen,
	modalContent,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
	modalContent?: string;
}) => {
	let content;
	const { listening, transcript, browserSupportsSpeechRecognition } =
		useSpeechRecognition();
	const [text, setText] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	if (!browserSupportsSpeechRecognition) {
		return <h1>Browser doest not support speech</h1>;
	}
	if (modalContent === "create" || modalContent === "modify") {
		content = (
			<>
				<h1 className="font-bold text-2xl text-[#0B0B0B] text-left">
					{modalContent === "create" ? "Create" : "Modify"}
				</h1>
				<p className="mt-4  text-[#6D6D6D] text-left text-sm">
					Please describe in as much detail as possible what you intend to
					create, update, or modify.{" "}
				</p>
				<Image
					src={Cross}
					alt="close"
					onClick={() => setOpen(false)}
					className="top-[30px] right-[30px] absolute cursor-pointer"
				/>
				<div className="relative my-8">
					<textarea
						placeholder="Type"
						className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 pt-4 border-[#E7E7E7] w-full rounded-xl bg-[#FAFAFA] h-36"
						value={transcript || text}
						onChange={(e) => setText(e.target.value)}
					/>
					{listening ? (
						<button
							className="absolute bottom-4 right-4"
							onClick={() => SpeechRecognition.stopListening()}
						>
							<Image src={Recording} alt="mic" width={32} height={32} />
						</button>
					) : (
						<button
							className="absolute bottom-4 right-4"
							onClick={() =>
								SpeechRecognition.startListening({
									continuous: true,
									language: "en-US",
								})
							}
						>
							<Image src={Mic} alt="mic" width={32} height={32} />
						</button>
					)}
				</div>
				<div className="gap-5 flex flex-col items-center gap-y-5">
					<button
						onClick={() => setOpen(false)}
						className="bg-transparent order-2 border border-[#3D2278] md:text-lg text-[#3D2278]  w-full h-[52px] rounded-[10px]  transition-all ease-in-out text-sm"
					>
						Cancel
					</button>
					<button
						onClick={() => setIsLoading(true)}
						className="bg-[#3D2278] order-1 md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm"
					>
						{modalContent === "create" ? "Create" : "Modify"}
					</button>
				</div>
			</>
		);
	}
	if (modalContent === "download") {
		content = <Download setOpen={setOpen} />;
	}
	if (modalContent === "share") {
		content = <Download isCoach setOpen={setOpen} />;
	}
	return (
		<div className="flex relative flex-col mx-8 bg-white rounded-2xl p-8 max-w-full">
			{isLoading ? (
				<div className="flex flex-col items-center py-12">
					<Image src={Loader} alt="loading" className="animate-spin" />
					<p className="mt-8 text-center">
						Workout Created is analyzing your documentation
					</p>
					<Image
						src={Cross}
						alt="close"
						onClick={() => setOpen(false)}
						className="top-[30px] right-[30px] absolute cursor-pointer"
					/>
				</div>
			) : (
				content
			)}
		</div>
	);
};

export default CreateCard;
