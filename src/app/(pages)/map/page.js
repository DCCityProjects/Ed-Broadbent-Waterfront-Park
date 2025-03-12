"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import "/src/app/css/map.css"
import "/src/app/css/popup.css";
import Image from "next/image";
import Popup from "../../popup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import PopupTab from "/public/images/svgs/popup-tab_v1.0.0.svg";
import IconSearch from "/public/images/svgs/icons/search-icon.svg";
import IconVoice from "/public/images/svgs/icons/voice-activation-frame.svg";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import Navigation from "./Navigation";
import Amphitheatre from "./Amphitheatre";
import HumanRights from "./HumanRights";
import OrangeGarden from "./OrangeGarden";
import MainEntrance from "./MainEntrance";
import ParkingEntrance from "./ParkingEntrance";
import AboutEdBroadbent from "./AboutEdBroadbent";

const LeafletMap = dynamic(() => import('@/app/components/LeafletMap'), {
    loading: () => <p>loading...</p>,
    ssr: false
});


export default function Map() {
    const [popupHeight, setPopupHeight] = useState(0);
    const [content, setContent] = useState("navigation");
    const popupRef = useRef(null);
    const tabRef = useRef(null);
    const [isClient, setIsClient] = useState(false);
    const [isUp, setIsUp] = useState(false);



    const popupComponentsList = {
        "navigation": Navigation,
        "amphitheatre-and-stage": Amphitheatre,
        "garden-of-human-rights": HumanRights,
        "orange-garden": OrangeGarden,
        "main-entrance": MainEntrance,
        "parking-entrance": ParkingEntrance,
        "about-ed-broadbent": AboutEdBroadbent
    }

    const PopupContent = popupComponentsList[content]

    useEffect(()=>{
        setIsClient(true);
    }, [])

    // useEffect(()=>{
    //     console.log(content)
    // },[content])

    useEffect(()=>{
        if(popupRef.current){
            setPopupHeight(popupRef.current.clientHeight)
        }
    }, [content])

    useEffect(()=>{
        gsap.registerPlugin(Draggable);

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

    }, [popupHeight, isClient]);

    // useEffect(() => {
    //     if (isClient) {
    //         import("leaflet").then((L) => {
    //             // Use the leaflet library here
    //             console.log("Leaflet loaded", L);
    //         }).catch((error) => {
    //             console.error("Error loading leaflet", error);
    //         });
    //     }
    // }, [isClient]);

    
    return (
        <main>
            {typeof window !== "undefined" && isClient && <LeafletMap setContent={setContent} popupRef={popupRef} />}
            <section className="popup u-flex-column-align-center" ref={popupRef}>
                {/* <Popup /> */}
                <PopupTab className="popup-tab" preserveAspectRatio="xMidYMin" ref={tabRef}/>
                <PopupContent setContent={setContent} />
            </section>
        </main>
    );
}