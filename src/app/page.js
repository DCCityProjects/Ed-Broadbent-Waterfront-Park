import Link from "next/link";
import "./css/landing.css";

import Image from "next/image";


export default function LandingPage() {

	return (
		<main>
			<section className="welcome-section ">
				<div className="welcome-section__logo-wrapper">
					<Image src="/images/svgs/icons/logo.svg" alt="Navigation Logo" width={58} height={58} className="welcome-section__logo"/>
				</div>
				<div className="welcome-section__wrapper u-flex-column-justify-align-center u-content-width">
					<h1 className="welcome-section__title">WELCOME</h1>
					<p className="welcome-section__description">Explore, navigate, and enjoy all the park has to offer with ease!</p>
					<Link href="/map" className="welcome-section__button button-color-primary" role="button">GO TO MAP</Link>
				</div>
			</section>
			{/* <section className="assistance u-flex-column-align-center u-content-width">
				<p className="assistance__description">Do you require text to speech assistance?</p>
					<ul className="assistance__list">
						<li className="assistance__item u-flex-column-align-center">
							<input type="radio" name="assistanceCheckbox" value="yes" id="assistance-yes" />
							<label htmlFor="assistance-yes">Yes</label>
						</li>
						<li className="assistance__item u-flex-column-align-center">
							<input type="radio" name="assistanceCheckbox" value="no" id="assistance-no" />
							<label htmlFor="assistance-no">No</label>
						</li>
					</ul>
			</section> */}
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
		</main>
	);
}
