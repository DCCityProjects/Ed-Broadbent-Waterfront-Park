"use client"

import { useEffect, useRef, useState } from "react";
import "/src/app/css/panorama.css";
import Image from "next/image";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

export default function PanoramaPopup() {
    const panoramaPopupRef = useRef(null);
    const iconRef = useRef(null);
    gsap.registerPlugin(MotionPathPlugin);

    useEffect(()=>{
        panoramaPopupRef.current.style.display = "flex";
    }, [])

    const handleClick = ()=>{
        panoramaPopupRef.current.style.display = "none";
    };

    return (
        <div className="panorama-popup" ref={panoramaPopupRef} onClick={handleClick}>
            <h1 className="panorama-popup__title">Welcome to the 360 Experience</h1>
            <p className="panorama-popup__description">Tap anywhere to start</p>
            <p className="panorama-popup__description"></p>
        </div>
    );
}