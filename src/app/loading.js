"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import LoadingLogo from "./components/svgs/loadingLogo.js";


export default function Loading() {

    useEffect(()=>{
        const tl = gsap.timeline({});
        console.log("tl test")
        tl.restart();
        tl
            .to(".loading__logo", {
                duration: 0.5,
                scale: 2,
                opacity: 1,
                ease: "power1.in",
            })
    })

    return (
        <section className="loading">
            {/* <LoadingLogo className="loading__logo" /> */}
            <Image
                src="/Ed-Broadbent-Waterfront-Park/images/svgs/logo-text-square-transparent.svg"
                alt="Loading..."
                width={100}
                height={100}
                className="loading__logo"
                opacity={0}
            />
        </section>
    );
}