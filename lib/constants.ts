import t1 from "@/public/t1.svg";
import t2 from "@/public/t2.svg";
import t3 from "@/public/t3.svg";
import wo from "@/public/wo.svg";
import clo from "@/public/clo.svg";
import sj from "@/public/sj.svg";
import stars from "@/public/stars.svg";
import Reviews from "@/components/reviews/Reviews";
import { ReactNode } from "react";
export const links = [
	{
		href: "/aitools",
		text: "Ai Tools",
	},
	{
		href: "/resources",
		text: "Resources",
	},
	{
		href: "/works",
		text: "How It Works",
	},
	{
		href: "/about",
		text: "About Us",
	},
];
export const featuresTools = [
	{
		title: "Workout",
		text: "Begin your journey today with a free, personalized workout plan tailored to your fitness goals!",
		href: "workout",
	},
	{
		title: "Clothing",
		text: "Effortlessly craft your style with one click 3D mockups and documentation included!",
		href: "clothing",
	},
	{
		title: "Smoothies & Juices",
		text: "Get all you need to stay clean  fit and nourished expert recipes and trusted suppliers in one place!",
		href: "smoothies",
	},
	{
		title: "Food",
		text: "Elevate your cooking skills with our all in one kit expert recipes and trusted suppliers in just 3 minutes!",
		href: "food",
	},
];
export const testimonials = [
	{
		avatar: t1,
		reviews: stars,
		statement:
			"Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
		name: "Kyle Roberts DVM",
		designation: "Web designer ",
	},
	{
		avatar: t2,
		reviews: stars,
		statement:
			"Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
		name: "Kyle Roberts DVM",
		designation: "Web designer ",
	},
	{
		avatar: t3,
		reviews: stars,
		statement:
			"Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design.",
		name: "Kyle Roberts DVM",
		designation: "Web designer ",
	},
];
export const insights = [
	{
		image: wo,
		title: "Workout",
		statement: "Personalized fitness plans tailored to your goals.",
	},
	{
		image: clo,
		title: "Clothing",
		statement: "Personalized fitness plans tailored to your goals.",
	},
	{
		image: sj,
		title: "Smoothies & Juices",
		statement:
			"Healthy, delicious smoothie and juice recipes customized to your taste.",
	},
	{
		image: sj,
		title: "Food",
		statement: "Personalized fitness plans tailored to your goals.",
	},
];
export const faqs = [
	{
		question: "What types of workouts can I create?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "Can I customize my workout plan?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "How can I track my progress?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "Is there a mobile app available for workouts?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "Can I share my workout plans with friends?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
];
export const faqsMobile = [
	{
		question: "How Workout AI creates plans?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "Can Workout AI adjust progress?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "How does AI suggest outfits?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "Can AI provide seasonal guides?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	{
		question: "AI customizes smoothie recipes?",
		answer:
			"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
	},
	// More questions...
];
export const reviews = [
	{
		id: 1,
		rating: 5,
		content: `
		<p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
	  `,
		date: "July 16, 2021",
		datetime: "2021-07-16",
		author: "Emily Selman",
		avatarSrc:
			"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
	},
	{
		id: 2,
		rating: 3,
		content: `
		<p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
	  `,
		date: "July 12, 2021",
		datetime: "2021-07-12",
		author: "Hector Gibbons",
		avatarSrc:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
	},
	{
		id: 3,
		rating: 5,
		content: `
		<p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
	  `,
		date: "July 16, 2021",
		datetime: "2021-07-16",
		author: "Emily Selman",
		avatarSrc:
			"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
	},
	// More reviews...
];
export const coaches = [
	{
		question: "<img src='./c1.svg' /> <p>John Doe</p>",
		bio: 'Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).',
		trainingTypes: ["Cross Fit", "Boxing"],
		languages: ["English"],
	},
	{
		question: "<img src='./c2.svg' /> <p>Jessica</p>",
		bio: 'Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).',
		trainingTypes: ["Cross Fit", "Boxing", "Circut"],
		languages: ["English", "Spanish"],
	},
	{
		question: "<img src='./c3.svg' /> <p>Marry Jordan</p>",
		bio: 'Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).',
		trainingTypes: ["Strenght", "Boxing"],
		languages: ["English", "French"],
	},

	{
		question: "<img src='./c4.svg' /> <p>Jordan Walke</p>",
		answer:
			'<img src="./concrete.png" alt="conrete" class="hidden md:inline-flex" /> <span">Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).</span>',
		trainingTypes: ["Cross Fit", "Boxing"],
		languages: ["Punjabi", "Italian"],
	},
	{
		question: "<img src='./c5.svg' /> <p>Dan Abranov</p>",
		answer:
			'<img src="./concrete.png" alt="conrete" class="hidden md:inline-flex" /> <span">Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).</span>',
		trainingTypes: ["Cross Fit", "Boxing", "Circut"],
		languages: ["English"],
	},
	{
		question: "<img src='./c6.svg' /> <p>Colt Steele</p>",
		answer:
			'<img src="./concrete.png" alt="conrete" class="hidden md:inline-flex" /> <span">Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).</span>',
		trainingTypes: ["Strenght", "Boxing"],
		languages: ["Chinese"],
	},
	{
		question: "<img src='./c7.svg' /> <p>Stephen Grider</p>",
		answer:
			'<img src="./concrete.png" alt="conrete" class="hidden md:inline-flex" /> <span">Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or "filler" of aggregate (typically a rocky material, loose stones, and sand).</span>',
		trainingTypes: ["Cross Fit", "Boxing"],
		languages: ["Turkish"],
	},

	// More questions...
];
