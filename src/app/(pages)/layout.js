"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MapBack from "../components/MapBack";

export default function InternalLayout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isInternalPage, setIsInternalPage] = useState(false);
    const [is360View, setIs360View] = useState(false);
    const [previousPage, setPreviousPage] = useState("");
    const [page360, setPage360] = useState("");

    const pathname = usePathname();
    // console.log(pathname)

    useEffect(()=>{
        if (pathname === "/general" || pathname === "/aboutEdBroadbent" || pathname === "/events" || pathname === "/gardenOfHumanRights" || pathname === "/amphitheater" || pathname === "/orangeGarden") {
            setIsInternalPage(true);
        }
    }, [pathname]);

    // useEffect()

    const toggleMenu = () => {
        setMenuOpen((prev) => {
            const isOpening = !prev;

                if (isOpening) {
                    document.body.classList.add("no-scroll");
                } else {
                    document.body.classList.remove("no-scroll");
                }

                return isOpening;
            });
        };

    const closeMenu = () => {
        document.body.classList.remove("no-scroll");
        setMenuOpen(false);
    };


    useEffect(()=>{
        if(pathname === "/main_entrance_360" || pathname === "/about_ed_broadbent_360" || pathname === "/amphitheatre_and_stage_360" || pathname === "/garden_of_human_rights_360" || pathname === "/orange_garden_360" || pathname === "/parking_entrance_360"){ 
            setIs360View(true);
        } else if (pathname === "/map"){
        }else {
            setIs360View(false);
        }
    }, [pathname])

    useEffect(()=>{
        if(pathname === "/main_entrance_360"){ 
            setPreviousPage("/map/?content=main-entrance");
        } else if (pathname === "/about_ed_broadbent_360") {
            setPreviousPage("/map/?content=about-ed-broadbent");
        } else if (pathname === "/amphitheatre_and_stage_360") {
            setPreviousPage("/map/?content=amphitheatre-and-stage");
        } else if (pathname === "/garden_of_human_rights_360") {
            setPreviousPage("/map/?content=garden-of-human-rights");
        } else if (pathname === "/orange_garden_360") {
            setPreviousPage("/map/?content=orange-garden");
        } else if (pathname === "parking_entrance_360") {
            setPreviousPage("/map/?content=parking-entrance");
        } else {
            setPreviousPage("/");
        }
    }, [pathname])

    useEffect(()=>{
        console.log(is360View)
    }, [is360View])

    useEffect(()=>{
        if(pathname === "/general"){
            setPage360("/main_entrance_360");
        } else if (pathname === "/aboutEdBroadbent") {
            setPage360("/about_ed_broadbent_360");
        } else if (pathname === "/events") {
            setPage360("/amphitheatre_and_stage_360");
        } else if (pathname === "/gardenOfHumanRights") {
            setPage360("/garden_of_human_rights_360");
        } else if (pathname === "/orangeGarden") {
            setPage360("/orange_garden_360");
        } else {
            setPage360("");
        }
    }, [pathname])

    return (
        <main>
            {/* Header Navigation */}
			<header className="nav">
                <ul className="nav__list">
                    <li className="nav__item" onClick={toggleMenu}>
                        <div className="menu-icon-container">
                            {/* Hamburger Icon */}
							<Image
								src="/nextjs-github-pages/images/svgs/icons/hamburger.svg"
								alt="Hamburger Menu"
								width={51}
								height={51}
								className={`nav__image nav__image--burger ${is360View ? "hide" : "show"}`}
							/>

                        </div>
                    </li>
                    <li className="nav__item" >
                        <Link href={page360}>
                            <Image
                                src="/nextjs-github-pages/images/svgs/icons/ar.svg"
                                alt="AR Icon"
                                width={51}
                                height={51}
                                className={`nav__image nav__image--ar ${is360View ? "hide" : "show"} ${isInternalPage ? "show" : "hide"}`}
                            />
                        </Link>

                    </li>
                    <li className={`nav__item `}>
                        <Link className={`nav__image ${is360View ? "show" : "hide"}`} href={previousPage}>
                            <MapBack />
                        </Link>
                    </li>
					<li className="nav__item nav__item--logo">
						<Link href="/" className={`nav__link`}>
							<Image 
								src="/nextjs-github-pages/images/svgs/icons/logo.svg" 
								alt="Navigation Logo" 
								width={51}
								height={51}
								className={`nav__image logo-image`}
							/>
						</Link>
					</li>
                </ul>
            </header>

            {/* Slide-in Menu */}
            <section className={`slide-menu ${menuOpen ? "open" : ""}`}>
                <header className="slide-menu__header">
                    <Image
                        src="/nextjs-github-pages/images/svgs/icons/close-landing.svg"
                        alt="Close Menu"
                        width={51}
                        height={51}
                        className={`nav__image close-icon`}
                        onClick={toggleMenu}
                    />
                </header>
                <nav className="slide-menu__nav">
                    <ul className="menu-list">
                        <li><Link href="/" className="menu-link" onClick={closeMenu}>Home Page</Link></li>
                        <li><Link href="/map" className="menu-link" onClick={closeMenu}>Go to Map</Link></li>
                        <li><Link href="/general" className="menu-link" onClick={closeMenu}>General Information</Link></li>
                        <li><Link href="/aboutEdBroadbent" className="menu-link" onClick={closeMenu}>About Ed Broadbent</Link></li>
                        <li><Link href="/events" className="menu-link" onClick={closeMenu}>Events & Activities</Link></li>
                        <li><Link href="/gardenOfHumanRights" className="menu-link" onClick={closeMenu}>Garden of Human Rights</Link></li>
                        <li><Link href="/amphitheater" className="menu-link" onClick={closeMenu}>Amphitheater and Stage</Link></li>
                        <li><Link href="/orangeGarden" className="menu-link" onClick={closeMenu}>Orange Garden</Link></li>
                    </ul>
                </nav>
            </section>


            {children}
        </main>
    );
}
