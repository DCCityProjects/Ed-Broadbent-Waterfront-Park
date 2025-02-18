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
			<header className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<Image 
							src="/images/hamburger.svg" 
							alt="Hamburger Menu" 
							width={40} 
							height={40} 
							className="nav__hamburger"
						/>
					</li>
					<li className="nav__item">
						<Link href="/" className="nav__link nav__logo">
							<Image 
								src="/images/logo.svg" 
								alt="Navigation Logo" 
								width={40} 
								height={40}
							/>
						</Link>
					</li>
				</ul>
			</header>
			{children}
		</body>
	</html>
);
}
