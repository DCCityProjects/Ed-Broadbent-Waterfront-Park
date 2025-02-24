import { PT_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const ptSans = PT_Sans({
weight: ["400", "700"],
subsets: ["latin"],
});


export const metadata = {
title: "Ed Broadbent Park Pocket Guide",
description: "placeholder",
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
