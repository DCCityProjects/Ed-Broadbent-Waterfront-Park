"use client"

import Link from "next/link";
import "/src/app/css/map.css"
import "/src/app/css/popup.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Popup from "../../popup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import PopupTab from "/public/images/svgs/popup-tab_v1.0.0.svg";
import IconSearch from "/public/images/svgs/icons/search-icon.svg";
import IconVoice from "/public/images/svgs/icons/voice-activation-frame.svg";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { popup } from "leaflet";
import Navigation from "./Navigation";
import Amphitheatre from "./Amphitheatre";
import HumanRights from "./HumanRights";
import OrangeGarden from "./OrangeGarden";
import MainEntrance from "./MainEntrance";

// Dynamically import LeafletMap (client-side only)
const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false, loading: () => <p>Loading map...</p> });

export default function Map() {
    const [popupHeight, setPopupHeight] = useState(0);
    const [content, setContent] = useState("navigation");
    const popupRef = useRef(null);
    const tabRef = useRef(null);
    const [isClient, setIsClient] = useState(false);
    // const LeafletMap = dynamic(() => import('./LeafletMap'), {ssr: false});

    const popupComponentsList = {
        "navigation": Navigation,
        "amphitheatre": Amphitheatre,
        "humanRights": HumanRights,
        "orangeGarden": OrangeGarden,
        "mainEntrance": MainEntrance
    }

    const PopupContent = popupComponentsList[content]


    useEffect(()=>{

        if(popupRef.current){
            setPopupHeight(popupRef.current.clientHeight)
            console.log(popupRef.current.clientHeight)

        }
    }, [])

    // useEffect(()=>{
    //     console.log(popupHeight)
    // })

    useEffect(()=>{
        gsap.registerPlugin(Draggable);

        if(popupRef.current && tabRef.current){
            console.log(popupHeight)
            const chevron = document.querySelector("#popup-tab__chevron");

            Draggable.create(popupRef.current, {
                type: "y",
                inertia: true,
                bounds: {minY: 0, maxY: popupHeight},
                edgeResistance: 0.5,
                onRelease: function(){
                    console.log(this.y)
                    const y = this.y;
                    //! TO DO ADD FLAG TO CHECK IF IT IS UP OR DOWN
                    if(y <= popupHeight/2){
                        //* to  make it go to the top
                        gsap.to(popupRef.current, {y: 0})
                        gsap.to(chevron, {rotateY: 180})
                    } else {
                        //* to  make it go to the bottom
                        gsap.to(popupRef.current, {y: popupHeight})
                    }
                }
            })
        }

    }, [popupHeight, isClient]);



    
    return (
        <main>
            {isClient && <LeafletMap />}
            <section className="popup u-flex-column-align-center" ref={popupRef}>
                {/* <Popup /> */}
                <PopupTab className="popup-tab" preserveAspectRatio="xMidYMin" ref={tabRef}/>
                <PopupContent />
            </section>
        </main>
    );
}