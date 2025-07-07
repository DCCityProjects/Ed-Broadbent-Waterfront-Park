"use client"


import "@/app/css/pages/map.css"
import "@/app/css/popup.css";

import dynamic from "next/dynamic";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";

import Navigation from "../../components/map/Navigation";


import resetIcons from "@/app/functions/resetIcons";
import PopupTab from "@/app/components/svgs/PopupTab";
import MapPopup from "../../components/map/MapPopup";

const LeafletMap = dynamic(() => import('@/app/components/LeafletMap'), {
    loading: () => <p>loading...</p>,
    ssr: false
});


export default function Map() {
    const [popupHeight, setPopupHeight] = useState(0);
    const [content, setContent] = useState("navigation");
    const popupRef = useRef(null);
    const tabRef = useRef(null);
    // const [isClient, setIsClient] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const [isUp, setIsUp] = useState(false);
    const [iconState, setIconState] = useState([]);

    const stateList = {
        content, setContent,
        setIsIconClicked, resetIcons,
        iconState, setIconState,
        isIconClicked, setIsIconClicked,
        popupRef
    };

    //* popup height is used for the draggable element
    //* to calculate the draggable distance
    useEffect(()=>{
        if(popupRef.current){
            setPopupHeight(popupRef.current.clientHeight)
        }
    }, [content])

    useLayoutEffect(()=>{
        gsap.registerPlugin(Draggable);

        if(!popupRef.current) return;

            // const chevron = document.querySelector("#popup-tab__chevron");

            Draggable.create(popupRef.current, {
                type: "y",
                inertia: true,
                bounds: {minY: 0, maxY: popupHeight},
                edgeResistance: 1,
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

    }, [popupHeight]);

    return (
        <main>
            <LeafletMap stateList={stateList} />
            <section className="popup u-flex-column-align-center" ref={popupRef}>
                {/* <Popup /> */}
                <PopupTab className="popup-tab" preserveAspectRatio="xMidYMin" ref={tabRef}/>
                {content === "navigation" ? (<Navigation />) : (<MapPopup stateList={stateList} />)}
            </section>
        </main>
    );
}