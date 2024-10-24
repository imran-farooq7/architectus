"use client";
import { coaches } from "@/lib/constants";
import Minus from "@/public/minus.svg";
import Plus from "@/public/plus.svg";
import Share from "@/public/share.svg";
import Web from "@/public/web.svg";
import IG from "@/public/ig.svg";
import TT from "@/public/tiktok.svg";
import YT from "@/public/yt.svg";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";
import Reviews from "@/components/reviews/Reviews";

const Coaches = () => {
	return (
		<div>
			<div className="max-w-7xl mx-auto">
				<dl>
					{coaches.map((faq) => (
						<Disclosure as="div" key={faq.question} className="pt-6">
							{({ open }) => (
								<>
									<dt className="faqs bg-white rounded-[18px]">
										<DisclosureButton className="flex w-full items-center justify-between py-5 px-8 text-left  text-base ">
											<span className="flex gap-4 items-center md:text-xl text-sm  font-semibold">
												<div
													dangerouslySetInnerHTML={{ __html: faq.question }}
													className="flex items-center gap-4"
												/>
											</span>

											<span className="ml-6 flex h-7 items-center">
												{open ? (
													<div className="flex gap-8">
														<Image src={Share} alt="share" />
														<Image src={Minus} alt="minus" />
													</div>
												) : (
													<div className="flex gap-8 items-center">
														<div className="md:flex hidden gap-[10px]">
															{faq.trainingTypes?.map((training) => (
																<span className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1">
																	{training}
																</span>
															))}
														</div>
														<div className="flex gap-8">
															<Image src={Share} alt="share" />
															<Image src={Plus} alt="plus" />
														</div>
													</div>
												)}
											</span>
										</DisclosureButton>
										<DisclosurePanel as="dd" className="mt-2 pb-5 px-8">
											<div className="flex flex-col pb-7 gap-6 border-b-[#0F0A19]/20 border-b">
												<p className="text-lg">{faq.bio}</p>
												<div className="flex flex-col md:flex-row md:gap-5 gap-4">
													<span className="font-semibold text-lg">
														Training Types:
													</span>
													<div className="flex gap-[10px]">
														{faq.trainingTypes?.map((training) => (
															<span className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1">
																{training}
															</span>
														))}
													</div>
												</div>
												<div className="flex flex-col md:flex-row md:gap-[3.7rem] gap-4">
													<span className="font-semibold text-lg">
														Language:
													</span>
													<div className="flex gap-[10px]">
														{faq.languages?.map((lang) => (
															<span className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1">
																{lang}
															</span>
														))}
													</div>
												</div>
												<div className="flex flex-col md:flex-row md:items-center md:gap-[1.3rem] gap-4">
													<span className="font-semibold text-lg">
														Social Media:
													</span>
													<div className="flex">
														<Image src={Web} alt="web" />
														<Image src={IG} alt="ig" />
														<Image src={TT} alt="tt" />
														<Image src={YT} alt="yt" />
													</div>
												</div>
											</div>
											<div>
												<Reviews isCoach />
											</div>
										</DisclosurePanel>
									</dt>
								</>
							)}
						</Disclosure>
					))}
				</dl>
			</div>
		</div>
	);
};

export default Coaches;
