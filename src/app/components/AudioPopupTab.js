"use client"


import { useEffect, useRef, useState } from "react";
import PopupTab from "/public/images/svgs/popup-tab_v1.0.0.svg";
import Play from "/public/images/svgs/icons/play.svg";
import Restart from "/public/images/svgs/icons/restart.svg";
import "/src/app/css/audiopopup.css";
import "/src/app/css/popup.css"
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";

export default function AudioPopupTab() {
    const [isClient, setIsClient] = useState(false);
    const [popupHeight, setPopupHeight] = useState(0);
    const [isUp, setIsUp] = useState(false);


    const tabRef = useRef(null);
    const popupRef = useRef(null);


    useEffect(()=>{
        setIsClient(true);
    }, [])

    useEffect(()=>{
        if(popupRef.current){
            setPopupHeight(popupRef.current.clientHeight)
        }
    }, [])

    useEffect(()=>{
        gsap.registerPlugin(Draggable);
        console.log("wheee")
        console.log(tabRef)
        if(popupRef.current && tabRef.current){
            console.log(popupHeight)
            // const chevron = document.querySelector("#popup-tab__chevron");

            Draggable.create(popupRef.current, {
                type: "y",
                inertia: true,
                bounds: {minY: 0, maxY: popupHeight},
                edgeResistance: 0.5,
                onRelease: function(){
                    console.log(this.y)
                    const y = this.y;
                    //todo TO DO ADD FLAG TO CHECK IF IT IS UP OR DOWN
                    if(y <= popupHeight/2){
                        //* to  make it go to the top
                        gsap.to(popupRef.current, {y: 0})
                        setIsUp(true);
                        // gsap.to("#popup-tab__chevron", {rotateY: 180})
                    } else {
                        //* to  make it go to the bottom
                        gsap.to(popupRef.current, {y: popupHeight})
                        setIsUp(false);
                    }
                }
            })
        }

    }, [isClient, popupHeight]);
    
    return (
        <div className="audio-popup" ref={popupRef}>
            <PopupTab className="popup-tab" preserveAspectRatio="xMidYMin" ref={tabRef} />
            <div className="audio-popup__wrapper">
                <Play className="audio-popup__icon" />
                <Restart className="audio-popup__icon" />
            </div>

        </div>
    );
}