'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "./css/landing.css";
import AudioPopupTab from "./components/AudioPopupTab";



export default function LandingPage() {
	const [showModal, setShowModal] = useState(false);
    const [countdown, setCountdown] = useState(20);

	useEffect(() => {
		const hasSeenModal = sessionStorage.getItem("modalSeen");
	
		if (!hasSeenModal) {
			const showTimer = setTimeout(() => {
				setShowModal(true);
			}, 1000);
	
			return () => clearTimeout(showTimer);
		}
	}, []);
	

    useEffect(() => {
        if (showModal) {
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev === 1) {
                        clearInterval(timer);
                        setShowModal(false);
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [showModal]);

	return (
		<main>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-overlay__container">
                        <h2 className="modal-overlay__title">WOULD YOU LIKE TO ENABLE AUDIO GUIDANCE?</h2>
                        <div className="modal-overlay__options">
							<div>
								<button className="modal-overlay__option-open" onClick={() => {
									sessionStorage.setItem("modalSeen", "true");
									setShowModal(false);
								}}>
									<Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/open-landing.svg" alt="Open Icon" width={0} height={0} className="openIcon" />
								</button>
								<h3 className="modal-overlay__yesNoText">Yes!</h3>
							</div>
							<div>
								<button className="modal-overlay__option-close" onClick={() => {
									sessionStorage.setItem("modalSeen", "true");
									setShowModal(false);
								}}>
									<Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close-landing.svg" alt="Close Icon" width={0} height={0} className="closeIcon" />
								</button>
								<h3 className="modal-overlay__yesNoText">No</h3>
							</div>
                        </div>
                        <div className="modal-overlay__timer">{countdown}</div>
                    </div>
                </div>
            )}
			<section className="welcome-section">
				<div className="welcome-section__logo-wrapper">
					<Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/logo.svg" alt="Navigation Logo" width={58} height={58} className="welcome-section__logo"/>
				</div>
				<div className="welcome-section__wrapper u-flex-column-justify-align-center u-content-width">
					<h1 className="welcome-section__title">WELCOME</h1>
					<p className="welcome-section__description">Explore, navigate, and enjoy all the park has to offer with ease!</p>
					<Link href="/map" className="welcome-section__button button-color-primary" role="button">GO TO MAP</Link>
				</div>
			</section>
			<section className="home-nav-section u-flex-column-align-center u-content-width">
				<h2 className="home-nav-section__title">Explore Ed Broadbent Park</h2>
				<nav className="home-nav">
					<ul className="home-nav__list">
						<li className="home-nav__item home-nav__item--general">
							<Link href="/general" className="home-nav__link  u-flex-column-justify-align-center">General Information
								{/* <Image src="/images/general/hero-image.jpg" width={0} height={0} sizes="100%" className="home-nav__image"></Image> */}
							</Link>
						</li>
						<li className="home-nav__item home-nav__item--about">
							<Link href="/aboutEdBroadbent" className="home-nav__link  u-flex-column-justify-align-center">About Ed Broadbent</Link>
						</li>
						<li className="home-nav__item home-nav__item--events">
							<Link href="/events" className="home-nav__link u-flex-column-justify-align-center">Events and Activities</Link>
						</li>
					</ul>
				</nav>
			</section>
			{/* ADD THE AUDIO PATH HERE LATER */}
			<AudioPopupTab />
		</main>
	);
}
