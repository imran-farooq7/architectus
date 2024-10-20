"use client";
import { materialsFaqs } from "@/lib/constants";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import Plus from "@/public/plus.svg";
import Image from "next/image";

const MaterialsFaqs = () => {
	const parser = new DOMParser();

	return (
		<div>
			<div className=" max-w-7xl mx-auto">
				<dl>
					{materialsFaqs.map((faq) => (
						<Disclosure as="div" key={faq.question} className="pt-6">
							{({ open }) => (
								<>
									<dt className="faqs bg-white rounded-[18px]">
										<DisclosureButton className="flex w-full items-start justify-between py-5 px-8 text-left  text-base ">
											<span className="text-base font-medium ">
												{faq.question}
											</span>
											<span className="ml-6 flex h-7 items-center">
												{open ? (
													<MinusSmallIcon
														className="h-6 w-6"
														aria-hidden="true"
													/>
												) : (
													<Image src={Plus} alt="plus" />
												)}
											</span>
										</DisclosureButton>
										<DisclosurePanel as="dd" className="mt-2 pb-5 px-8">
											<div
												className="flex gap-8 text-lg items-center max-w-[59rem]"
												dangerouslySetInnerHTML={{ __html: faq.answer }}
											/>
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

export default MaterialsFaqs;
