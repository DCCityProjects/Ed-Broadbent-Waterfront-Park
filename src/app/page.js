import Link from "next/link";
import Image from "next/image";

import "./css/landing.css";
import AudioPopupTab from "./components/AudioPopupTab";
import LandingPageContent from "./landingPageContent";



export default async function LandingPage() {
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(1000)

	return (
		<LandingPageContent />
	);
}
