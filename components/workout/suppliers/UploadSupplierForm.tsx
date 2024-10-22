import Upload from "@/public/upload.png";
import Image from "next/image";
import Input from "./Input";
import Cross from "@/public/close.png";
import { Dispatch, SetStateAction } from "react";

const UploadSupplierForm = ({
	setOpen,
}: {
	setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div className="flex relative flex-col mx-4 bg-white rounded-2xl p-8 max-w-full ">
			<h1 className="font-bold text-2xl text-[#0B0B0B] text-left">Upload</h1>
			<p className="mt-4 text-[#6D6D6D] text-left text-sm">
				Add your documents here, and you can upload up to 5 files max
			</p>
			<Image
				src={Cross}
				alt="close"
				onClick={() => setOpen(false)}
				className="top-[30px] right-[30px] absolute cursor-pointer"
			/>
			<div className="relative mt-8 mb-[14px]">
				<div
					className="max-w-full  md:max-w-[540px] relative borderUpload py-10"
					id="dropzone"
				>
					<input
						type="file"
						className="absolute inset-0 w-full h-full opacity-0 z-50"
					/>
					<div className="text-center">
						<Image src={Upload} alt="upload" className="mx-auto" />

						<h3 className="mt-6 font-normal text-[#0B0B0B]">
							<label htmlFor="file-upload" className="relative cursor-pointer">
								<span>Drag and drop</span>
								<span className="text-[#3D2278] font-semibold"> or browse</span>
								<input
									id="file-upload"
									name="file-upload"
									type="file"
									className="sr-only"
								/>
							</label>
						</h3>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between mb-8">
				<p className="text-sm text-[#6D6D6D]">Maximum Size: 280 × 90 px</p>
				<p className="text-sm text-[#6D6D6D]">
					white or transparent background
				</p>
			</div>
			<div className="flex flex-col gap-[18px] mb-8">
				<Input type="text" placeHolder="Enter Your Company Name" />
				<Input type="number" placeHolder="Enter Your Phone" />
				<Input type="text" placeHolder="Enter Your Website" />
				<Input type="text" placeHolder="Enter Your Fiscal Number" />
			</div>

			<div className="gap-5 flex flex-col items-center gap-y-5">
				<button
					onClick={() => setOpen(false)}
					className="bg-transparent order-2 border border-[#3D2278] md:text-lg text-[#3D2278]  w-full h-[52px] rounded-[10px] hover:bg-[#3D2278] hover:border-none hover:text-white hover:scale-105 transition-all ease-in-out text-sm"
				>
					Cancel
				</button>
				<button className="bg-[#3D2278] order-1 md:text-lg text-white w-full h-[52px] rounded-[10px] text-sm">
					Submit Request
				</button>
			</div>
		</div>
	);
};

export default UploadSupplierForm;
