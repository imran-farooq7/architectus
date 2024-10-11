import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
