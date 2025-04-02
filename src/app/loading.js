"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";


export default function Loading() {

    useEffect(()=>{
        const tl = gsap.timeline({});
        tl
            .to(".loading-logo", {
                duration: 0.5,
                opacity: 1,
                ease: "power1.in",
            })
    })

    return (
        <section>
            <Image
                src="/Ed-Broadbent-Waterfront-Park/images/svgs/logo_loading.svg"
                alt="Loading..."
                width={100}
                height={100}
                className="loading-logo"
                opacity={0}
            />
        </section>
    );
}