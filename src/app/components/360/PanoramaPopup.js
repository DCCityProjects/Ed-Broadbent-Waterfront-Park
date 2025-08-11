"use client"

import { useEffect, useRef, useState } from "react";
import "/src/app/css/panorama.css";
import Image from "next/image";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";

export default function PanoramaPopup() {
    const [screenSize, setScreenSize] = useState({width: 0, height: 0});
    const panoramaPopupRef = useRef(null);
    const iconRef = useRef(null);
    gsap.registerPlugin(MotionPathPlugin);

    useEffect(()=>{
        panoramaPopupRef.current.style.display = "flex";
    }, [])

    useEffect(()=>{
        function updateSize(){
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return(()=> {
            window.removeEventListener("resize", updateSize);
        });
    }, []);

    useEffect(() => {
        console.log(screenSize);
    }, [screenSize]);

    const handleClick = ()=>{
        panoramaPopupRef.current.style.display = "none";
    };



    return (
        <div className="panorama-popup" ref={panoramaPopupRef} onClick={handleClick}>
            <h1 className="panorama-popup__title">Welcome to the 360 Experience</h1>
            {/* <Image
                ref={iconRef}
                src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/ar.svg"
                alt="AR Icon"
                width={80}
                height={80}
                className={`panorama-popup__icon`}
            /> */}
            <p className="panorama-popup__description">Tap anywhere to start</p>
            <p className="panorama-popup__description"></p>
        </div>
    );
}