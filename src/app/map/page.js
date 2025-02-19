"use client"

import Link from "next/link";
import "../css/map.css";
import "../css/popup.css";
import icone from "/public/images/icone.jpg"
import Image from "next/image";
import dynamic from "next/dynamic";
import Popup from "../popup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import PopupTab from "/public/images/popup-tab_v1.0.0.svg";
import IconSearch from "/public/images/search-icon.svg";
import IconVoice from "/public/images/voice-activation-frame.svg";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { popup } from "leaflet";
import Navigation from "./Navigation";
import Amphitheatre from "./Amphitheatre";
import HumanRights from "./HumanRights";
import OrangeGarden from "./OrangeGarden";
import MainEntrance from "./MainEntrance";


export default function Map() {
    const [popupHeight, setPopupHeight] = useState(0);
    const [content, setContent] = useState("navigation");
    const popupRef = useRef(null);
    const tabRef = useRef(null);
    const LeafletMap = dynamic(() => import('./LeafletMap'), {ssr: false});

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

    }, [popupHeight])



    
    return (
        <main>
            <LeafletMap />
            <section className="popup u-flex-column-align-center" ref={popupRef}>
                {/* <Popup /> */}
                <PopupTab className="popup-tab" preserveAspectRatio="xMidYMin" ref={tabRef}/>
                <PopupContent />
            </section>
        </main>
    );
}