"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function InternalLayout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <main>
            {/* Header Navigation */}
			<header className="nav">
                <ul className="nav__list">
                    <li className="nav__item" onClick={toggleMenu}>
                        <div className="menu-icon-container">
                            {/* Hamburger Icon */}
							<Image
								src="/images/svgs/icons/hamburger.svg"
								alt="Hamburger Menu"
								width={51}
								height={51}
								className={`nav__image ${menuOpen ? "fade-out inactive" : "fade-in"}`}
								style={{ position: menuOpen ? "absolute" : "relative" }}
							/>

                            {/* Close Icon - Initially hidden, fades in when menu opens */}
                            <Image
                                src="/images/svgs/icons/close-landing.svg"
                                alt="Close Menu"
                                width={51}
                                height={51}
                                className={`nav__image close-icon ${menuOpen ? "fade-in move-right active" : "fade-out move-back inactive"}`}
                                style={{ position: "absolute", transition: "transform 0.3s ease-in-out, opacity 0s ease-in-out" }}
                            />
                        </div>
                    </li>
					<li className="nav__item">
						<Link href="/" className={`nav__link ${menuOpen ? "inactive" : ""}`}>
							<Image 
								src="/images/svgs/icons/logo.svg" 
								alt="Navigation Logo" 
								width={51}
								height={51}
								className={`nav__image logo-image ${menuOpen ? "fade-out" : "fade-in"}`}
							/>
						</Link>
					</li>
                </ul>
            </header>

            {/* Slide-in Menu */}
            <nav className={`slide-menu ${menuOpen ? "open" : ""}`}>
			<ul className="menu-list">
                    <li><Link href="/" className="menu-link" onClick={() => setMenuOpen(false)}>Home Page</Link></li>
                    <li><Link href="/map" className="menu-link" onClick={() => setMenuOpen(false)}>Go to Map</Link></li>
                    <li><Link href="/general" className="menu-link" onClick={() => setMenuOpen(false)}>General information</Link></li>
                    <li><Link href="/aboutEdBroadbent" className="menu-link" onClick={() => setMenuOpen(false)}>About Ed Broadbent</Link></li>
                    <li><Link href="/humanRights" className="menu-link" onClick={() => setMenuOpen(false)}>Garden of Human Rights</Link></li>
                    <li><Link href="/amphitheater" className="menu-link" onClick={() => setMenuOpen(false)}>Amphitheater</Link></li>
                    <li><Link href="/orangeGarden" className="menu-link" onClick={() => setMenuOpen(false)}>Orange Garden</Link></li>
                </ul>
            </nav>

            {children}
        </main>
    );
}
