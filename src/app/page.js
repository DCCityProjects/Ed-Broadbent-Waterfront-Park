"use client"

import { Suspense, useEffect, useState } from "react";
import LandingPageContent from "./landingPageContent";
import Loading from "./loading";



export default function LandingPage() {
	const [firstLoad, setFirstLoad] = useState(true);

	useEffect(() => {
		const firstLoadDone = sessionStorage.getItem("firstLoadDone");

		async function showLogoFirstTime(){
			const delay = (ms) => new Promise((resolve) => {
				setTimeout(resolve, ms);
			});
			await delay(1500);
			setFirstLoad(false);
			sessionStorage.setItem("firstLoadDone", "true");
		};

		if(!firstLoadDone){
			showLogoFirstTime();
		} else {
			setFirstLoad(false);
		};
		
	}, []);

	if(firstLoad){
		return <Loading />;
	}

	return (
		<Suspense fallback={<Loading />}>
			<LandingPageContent />
		</Suspense>
	);
}
