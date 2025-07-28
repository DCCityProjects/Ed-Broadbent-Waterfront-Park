"use client"


import "@/app/css/pages/map.css"
import "@/app/css/popup.css";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";

import Navigation from "../../components/map/Navigation";

import resetIcons from "@/app/components/map/resetIcons";
import PopupTab from "@/app/components/svgs/PopupTab";
import MapPopup from "../../components/map/MapPopup";
import { useMap } from "react-leaflet";
import useFlyToLocation from "@/app/hooks/useFlyToLocation";
import useMarkerData from "@/app/hooks/useMarkerData";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

const LeafletMap = dynamic(() => import('@/app/components/map/LeafletMap'), {
    loading: () => <p>loading...</p>,
    ssr: false
});

export default function Map() {
    const [popupHeight, setPopupHeight] = useState(0);
    const [content, setContent] = useState("navigation");
    const [zoom, setZoom] = useState(-2);
    const [center, setCenter] = useState([3250, 810]);
    const popupRef = useRef(null);
    const tabRef = useRef(null);
    const [icons, setIcons] = useState(null);
    const [isUp, setIsUp] = useState(false);
    const [iconState, setIconState] = useState([]);

    const mapRef = useRef(null);

    useEffect(()=>{
        async function loadIcons(){
            const { getAllIcons } = await import("@/app/components/mapPins");
            setIcons(getAllIcons());
        }

        loadIcons();
    }, []);
    
    useMarkerData(icons, setIconState);
    const flyToLocation = useFlyToLocation(mapRef);
    gsap.registerPlugin(Draggable, DrawSVGPlugin);


    const changeIconColor = useCallback((index, iconState) => {
        if(!icons) return;
        const newIconState = [...iconState];

        switch (iconState[index].icon) {
            case icons.iconAmpGrey: newIconState[index].icon = icons.iconAmpCol; break;
            case icons.iconBenchesGrey: newIconState[index].icon = icons.iconBenchesCol; break;
            case icons.iconBikeGrey: newIconState[index].icon = icons.iconBikeCol; break;
            case icons.iconBridgeGrey: newIconState[index].icon = icons.iconBridgeCol; break;
            case icons.iconEBGrey: newIconState[index].icon = icons.iconEBCol; break;
            case icons.iconHRGrey: newIconState[index].icon = icons.iconHRCol; break;
            case icons.iconMapGrey: newIconState[index].icon = icons.iconMapCol; break;
            case icons.iconOGGrey: newIconState[index].icon = icons.iconOGCol; break;
            case icons.iconParkingGrey: newIconState[index].icon = icons.iconParkingCol; break;
            default: break;
        };
        return newIconState;

    }, [icons])

    const stateList = {
        content, setContent,
        zoom, setZoom,
        center, setCenter,
        resetIcons,
        iconState, setIconState,
        popupRef, changeIconColor,
        mapRef, flyToLocation,
        icons
    };

    //* popup height is used for the draggable element
    //* to calculate the draggable distance
    useEffect(()=>{
        if(popupRef.current){
            setPopupHeight(popupRef.current.clientHeight)
            console.log(`Popupheight is set`)
        }
    }, [])

    useEffect(()=>{
        console.log(`%c${content}`, `color: PURPLE`)
    }, [content])

    useLayoutEffect(()=>{

        if(!popupRef.current) return;

            // const chevron = document.querySelector("#popup-tab__chevron");

            Draggable.create(popupRef.current, {
                type: "y",
                inertia: true,
                bounds: {minY: 0, maxY: popupHeight},
                edgeResistance: 1,
                onRelease: function(){
                    console.log(this.y)
                    console.log(popupHeight)
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
        <section id="map-page">
            <LeafletMap stateList={stateList} />
            <section className="popup u-flex-column-align-center" ref={popupRef}>
                {/* <Popup /> */}
                <PopupTab className="popup-tab" preserveAspectRatio="xMidYMin" ref={tabRef}/>
                {content === "navigation" ? (<Navigation stateList={stateList} />) : (<MapPopup stateList={stateList} />)}
            </section>
        </section>
    );
}