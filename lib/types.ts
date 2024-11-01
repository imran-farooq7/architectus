import { StaticImageData } from "next/image";

export interface NavLinkProps {
	href: string;
	text: string;
	footer?: boolean;
}
export interface FeatureCardProps {
	title: string;
	text: string;
	href: string;
}
export interface TestimonialCard {
	avatar: any;
	reviews: any;
	statement: string;
	name: string;
	designation: string;
}
export interface InsightsProps {
	image: any;
	title: string;
	statement: string;
}
export interface ReviewProps {
	id: number;
	rating: number;
	content: string;
	date: string;
	datetime: string;
	author: string;
	avatarSrc: string;
}
export interface ProductCardProps {
	image: StaticImageData;
	title: string;
	brand: string;
	price: string;
	discountedPrice: string;
}
