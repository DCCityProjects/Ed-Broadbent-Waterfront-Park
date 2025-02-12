import { PT_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
						<button className="nav__link nav__burger">Burger Menu</button>
					</li>
					<li className="nav__item">
						<Link href="/" className="nav__link">Logo</Link>
					</li>
				</ul>
			</header>
			{children}
		</body>
	</html>
);
}
