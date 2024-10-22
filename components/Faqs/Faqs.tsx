"use client";
import { faqs, faqsMobile } from "@/lib/constants";
import Plus from "@/public/plus.svg";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Faqs() {
	return (
		<div className="lg:px-28 xl:px-32 py-8 md:py-20 px-6">
			<div
				className=" max-w-7xl mx-auto 
    "
			>
				<h1 className="text-center  md:mb-20 text-black font-bold text-xl lg:text-3xl">
					Frequently Asked Questions{" "}
				</h1>
				<dl className="hidden md:block md:mt-10 ">
					{faqs.map((faq) => (
						<Disclosure as="div" key={faq.question} className="pt-6">
							{({ open }) => (
								<>
									<dt className="faqs rounded-[18px]">
										<DisclosureButton className="flex w-full  justify-between py-5 px-[30px] text-left  text-base ">
											<span className="text-base font-medium text-[#0F0A19] ">
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
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</DisclosurePanel>
									</dt>
									{/* <DisclosurePanel as="dd" className="mt-2 pr-12">
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</DisclosurePanel> */}
								</>
							)}
						</Disclosure>
					))}
				</dl>
				<dl className="block md:hidden md:mt-10 ">
					{faqsMobile.map((faq) => (
						<Disclosure as="div" key={faq.question} className="pt-6">
							{({ open }) => (
								<>
									<dt className="faqs rounded-[18px]">
										<DisclosureButton className="flex w-full items-center justify-between py-5 px-8 text-left  text-base ">
											<span className="text-sm font-medium text-[#0F0A19] ">
												{faq.question}
											</span>
											<span className="ml-4 flex h-7 items-center">
												{open ? (
													<MinusSmallIcon
														className="h-6 w-6"
														aria-hidden="true"
													/>
												) : (
													<Image src={Plus} alt="plus" width={16} height={16} />
												)}
											</span>
										</DisclosureButton>
										<DisclosurePanel as="dd" className="mt-2 pb-5 px-8">
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</DisclosurePanel>
									</dt>
									{/* <DisclosurePanel as="dd" className="mt-2 pr-12">
											<p className="text-base leading-7 text-gray-600">
												{faq.answer}
											</p>
										</DisclosurePanel> */}
								</>
							)}
						</Disclosure>
					))}
				</dl>
			</div>
		</div>
	);
}
