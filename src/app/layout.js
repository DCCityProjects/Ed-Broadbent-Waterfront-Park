import { PT_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const ptSans = PT_Sans({
weight: ["400", "700"],
subsets: ["latin"],
});


export const metadata = {
title: "Ed Broadbent Waterfront Park Pocket Guide",
description: "Navigate Ed Broadbent Waterfront Park with our interactive map. Explore amenities, park info, park booking, and a 360° virtual tour.",
};

export default function RootLayout({ children }) {
return (
	<html lang="en">
		<body className={`${ptSans.className}`}>
			{children}
		</body>
	</html>
);
}
