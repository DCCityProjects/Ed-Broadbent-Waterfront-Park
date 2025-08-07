"use client"

import { useEffect } from "react";
import "/src/app/css/panorama.css";
import Image from "next/image";

export default function PanoramaPopup() {
    useEffect(()=>{
        document.querySelector('.panorama-popup').style.display = "flex";
    }, [])

    const handleClick = ()=>{
        document.querySelector('.panorama-popup').style.display = "none";
    }
    return (
        <div className="panorama-popup" onClick={handleClick}>
            <h1 className="panorama-popup__title">Welcome to the 360 Experience</h1>
            <Image
                src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/ar.svg"
                alt="AR Icon"
                width={91}
                height={91}
                className={`panorama-popup__icon`}
            />
            <p className="panorama-popup__description">Tap anywhere to start</p>
            <p className="panorama-popup__description">Gyroscope controls are on the bottom left</p>
        </div>
    );
}