import LandingPageContent from "./landingPageContent";



export default async function LandingPage() {
	const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await delay(1000)

	return (
		<LandingPageContent />
	);
}
