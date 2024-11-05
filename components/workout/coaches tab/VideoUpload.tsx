import React, { useRef, useState } from "react";
import VideoUp from "@/public/vidupicon.svg";
import Image from "next/image";
import PlayBtn from "@/public/play.svg";
import ReactPlayer from "react-player";

const VideoUpload = () => {
	const [video1, setVideo1] = useState<File>();
	const [video2, setVideo2] = useState<File>();
	const [video2Preview, setVideo2Preview] = useState("");
	const [video1Preview, setVideo1Preview] = useState("");
	const videoRef1 = useRef<HTMLVideoElement | null>(null);
	const videoRef2 = useRef<HTMLVideoElement | null>(null);
	const [isPlaying1, setIsPlaying1] = useState<boolean>(false);
	const [isPlaying2, setIsPlaying2] = useState<boolean>(false);
	// const [title, setTitle] = useState("");
	// const [description, setDescription] = useState("");
	const handleFileChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files![0];
		setVideo1(file);

		console.log(file);
		// Check if the uploaded file is a video
		if (file) {
			setVideo1Preview(URL.createObjectURL(file)); // Create a preview URL
		}
	};
	const handleFileChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files![0];
		setVideo2(file);

		// Check if the uploaded file is a video
		if (file) {
			setVideo2Preview(URL.createObjectURL(file)); // Create a preview URL
		}
	};
	const togglePlay = () => {
		if (videoRef1.current && videoRef1.current.paused) {
			videoRef1.current.play(); // Play the video if paused
			setIsPlaying1(true);
		} else {
			videoRef1.current!.pause(); // Pause the video if playing
			setIsPlaying1(false);
		}
	};
	const togglePlay2 = () => {
		if (videoRef2.current && videoRef2.current.paused) {
			videoRef2.current.play(); // Play the video if paused
			setIsPlaying2(true);
		} else {
			videoRef2.current!.pause(); // Pause the video if playing
			setIsPlaying2(false);
		}
	};
	return (
		<>
			{!video1 ? (
				<div className="relative w-full">
					<div className=" relative borderUpload py-10" id="dropzone">
						<input
							type="file"
							accept="video/*"
							onChange={handleFileChange1}
							className="absolute inset-0 w-full h-full opacity-0 z-50"
						/>
						<div className="text-center">
							<Image src={VideoUp} alt="upload" className="mx-auto" />

							<h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer"
								>
									<span>Drag and drop</span>
									<span className="text-[#3D2278] font-semibold">
										{" "}
										or browse
									</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
										accept="video/*"
										onChange={handleFileChange1}
									/>
								</label>
							</h3>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className="bg-[#FAFAFA] relative border-[#E7E7E7] border rounded-xl">
						<video
							src={video1Preview}
							width="100%"
							height="160"
							ref={videoRef1}
							className="mx-auto !h-40"
						>
							Your browser does not support the video tag.
						</video>
						{!isPlaying1 && (
							<button
								className="absolute top-1/2 left-1/2"
								onClick={togglePlay}
							>
								<Image src={PlayBtn} alt="play" />
							</button>
						)}
					</div>
					<input
						type="text"
						className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
						placeholder={"Title"}
					/>
					<textarea
						className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA] h-[140px]"
						placeholder="Enter Description"
					/>
				</>
			)}
			{!video2 ? (
				<div className="relative w-full">
					<div className=" relative borderUpload py-10" id="dropzone">
						<input
							type="file"
							accept="video/*"
							onChange={handleFileChange2}
							className="absolute inset-0 w-full h-full opacity-0 z-50"
						/>
						<div className="text-center">
							<Image src={VideoUp} alt="upload" className="mx-auto" />

							<h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer"
								>
									<span>Drag and drop</span>
									<span className="text-[#3D2278] font-semibold">
										{" "}
										or browse
									</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
										accept="video/*"
										onChange={handleFileChange2}
									/>
								</label>
							</h3>
						</div>
					</div>
				</div>
			) : (
				<>
					<div className="bg-[#FAFAFA] relative border-[#E7E7E7] border w-full rounded-xl">
						<video
							src={video2Preview}
							// width="284"
							// height="160"
							ref={videoRef2}
							className="mx-auto aspect-video"
						>
							Your browser does not support the video tag.
						</video>
						{!isPlaying2 && (
							<button
								className="absolute top-1/2 left-1/2"
								onClick={togglePlay}
							>
								<Image src={PlayBtn} alt="play" />
							</button>
						)}
					</div>
					<input
						type="text"
						className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA]"
						placeholder={"Title"}
					/>
					<textarea
						className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 py-4 border-[#E7E7E7] w-full md:w-[540px] rounded-xl bg-[#FAFAFA] h-[140px]"
						placeholder="Enter Description"
					/>
				</>
			)}
		</>
	);
};

export default VideoUpload;
