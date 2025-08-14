'use client'

import "./css/pages/landing.css";

import Link from "next/link";
import { useEffect, useState } from "react";
import AudioPopupTab from "./components/AudioPopupTab";
import Image from "next/image";

export default function LandingPageContent() {
    const [showModal, setShowModal] = useState(false);
	const [countdown, setCountdown] = useState(20);
	const [isVisible, setIsVisible] = useState(false);
	const [startFade, setStartFade] = useState(false); 
	const [sawPreloader, setSawPreloader] = useState(false);
	const [hasSeenModal, setHasSeenModal] = useState(false); 
	const [audioGuidanceEnabled, setAudioGuidanceEnabled] = useState(true);
	const [autoPlay, setAutoPlay] = useState(false);


	useEffect(() => {
		const seen = sessionStorage.getItem("modalSeen");
		setHasSeenModal(seen === "true");
	}, []);

	// Modal delay logic: run after loader fades out
	useEffect(() => {
		console.log("isvisible is", isVisible);
		console.log("hasseenmodal is", hasSeenModal);
		if (!isVisible && !hasSeenModal) {
			console.log("start timer!")
			const modalTimer = setTimeout(() => {
				setShowModal(true);
			}, 500);
			return () => clearTimeout(modalTimer);
		}
	}, [isVisible, hasSeenModal]);

	// Countdown logic inside modal
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
									setAutoPlay(true);

								}}>
									<Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/check.svg" alt="Open Icon" width={0} height={0} className="openIcon" />
								</button>
								<h3 className="modal-overlay__yesNoText">Yes!</h3>
							</div>
							<div>
								<button className="modal-overlay__option-close" onClick={() => {
									sessionStorage.setItem("modalSeen", "true");
									setAudioGuidanceEnabled(false);
									setShowModal(false);
								}}>
									<Image src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close.svg" alt="Close Icon" width={0} height={0} className="closeIcon" />
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
							<Link href="/general" className="home-nav__link  u-flex-column-justify-align-center">
								<div className="home-nav__image-wrapper">
									<Image 
									src="/Ed-Broadbent-Waterfront-Park/images/general/hero-image.jpg"
									fill={true}
									objectFit= "cover"
									sizes="100%"
									className="home-nav__image home-nav__image--general" 
									alt="An aerial shot from the north side of the Ed Broadbent Waterfront Park."
									></Image>
								</div>
								<p className="home-nav__link-text">General Information</p>
							</Link>
						</li>
						<li className="home-nav__item home-nav__item--about">
							<Link href="/aboutEdBroadbent" className="home-nav__link  u-flex-column-justify-align-center">
								<div className="home-nav__image-wrapper">
									<Image 
									src="/Ed-Broadbent-Waterfront-Park/images/aboutEdBroadbent/hero-image.jpg"
									fill={true}
									objectFit= "cover"
									sizes="100%"
									className="home-nav__image home-nav__image--about" 
									alt="Ed Broadbent talking at a podium."
									></Image>
								</div>
								<p className="home-nav__link-text">About Ed Broadbent</p>
							</Link>
						</li>
						<li className="home-nav__item home-nav__item--events">
							<Link href="/events" className="home-nav__link  u-flex-column-justify-align-center">
								<div className="home-nav__image-wrapper">
									<Image 
									src="/Ed-Broadbent-Waterfront-Park/images/events/slider1.jpg"
									fill={true}
									objectFit= "cover"
									sizes="100%"
									className="home-nav__image home-nav__image--events" 
									alt="An indigenous performer in full regalia."
									></Image>
								</div>
								<p className="home-nav__link-text">Events and Activities</p>
							</Link>
						</li>
					</ul>
				</nav>
			</section>
			{/* ADD THE AUDIO PATH HERE LATER */}
			<AudioPopupTab audioSrc="/Ed-Broadbent-Waterfront-Park/audio/landing-page.mp3" audioGuidanceEnabled={audioGuidanceEnabled} autoPlay={autoPlay} />
		</main>
    );
}