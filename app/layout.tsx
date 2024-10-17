import Navbar from "@/components/navbar/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import Footer from "@/components/footer/Footer";
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
	title: "Architectus",
	description:
		"Harness the power of AI to optimize processes, drive growth, and unlock new possibilities for your business.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}  antialiased`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
