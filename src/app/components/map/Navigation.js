"use client"

import Image from "next/image";
// import Select from "react-select";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { filteredOptionList, findPathIndexToUse, getMidPoints, hasTwoSelectedOptions } from "@/app/utils/navigationUtils";
import gsap from "gsap";
import { pathList } from "@/app/data/pathList";

export default function Navigation({stateList}) {
    const [isOption1Selected, setIsOption1Selected] = useState(false);
    const [isOption2Selected, setIsOption2Selected] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");

    const {
        content,
        setContent, iconState,
        zoom, setZoom,
        center, setCenter,
        popupRef, resetIcons, 
        setIconState,
        mapRef, setMapRef, flyToLocation,
        isWayfinding, setIsWayfinding,
        markersRef, markerDataRef,
        setActiveMarkers
    } = stateList;

    const options = useMemo(() => [
        { value: "Main Map North", label: "Main Map North" },
        { value: "About Ed Broadbent", label: "About Ed Broadbent" },
        { value: "Amphitheatre and Stage", label: "Amphitheatre and Stage" },
        { value: "Garden of Human Rights", label: "Garden of Human Rights" },
        { value: "Orange Garden", label: "Orange Garden" },
        { value: "Main Map South", label: "Main Map South" }
    ], []);

    const select1Ref = useRef(null);
    const select2Ref = useRef(null);

    const optionList1 = useMemo(()=>{
        return filteredOptionList(options, selectedOption2)
    }, [options, selectedOption2]);

    const optionList2 = useMemo(()=>{
        return filteredOptionList(options, selectedOption1)
    }, [options, selectedOption1])



    const handleSelectOption = (optionNum, e) =>{
        const option = e.target.value;
        const location = markerDataRef.current.find(location => location.name === option);
        const iconIndex = markerDataRef.current.findIndex((location) => location.name === option);
        
        if(optionNum === 1){
            resetIconColor("1");
            setSelectedOption1(option);
            setIsOption1Selected(true);
        } else if (optionNum === 2){
            resetIconColor("2");
            setSelectedOption2(option);
            setIsOption2Selected(true);
        };

        if(iconIndex !== -1){
            setActiveMarkers(prev => {
                const updated = [...prev];
                updated[optionNum - 1] = location.url;
                return updated;
            });
            
            markersRef.current[iconIndex].options.zIndexOffset = 10000;
        };


        const option1 = optionNum === 1 ? option : selectedOption1;
        const option2 = optionNum === 2 ? option : selectedOption2;
        const areBothOptionsSelected = hasTwoSelectedOptions(option1, option2);

        if(!areBothOptionsSelected){
            const distanceResult = checkDistance(location.position);

            if(distanceResult <= 500){
                flyToLocation(location.position, -2, 0.5);
            } else if((distanceResult > 500) && (distanceResult < 3200)){
                flyToLocation(location.position, -2, 0.8)
            };
        };
    };

    const flyToMidPoint = useCallback((type) =>{
        const iconIndexOption1 = markerDataRef.current.findIndex((num) => num.name === selectedOption1);
        const iconIndexOption2 = markerDataRef.current.findIndex((num) => num.name === selectedOption2);

        const testMidPoints = getMidPoints(markerDataRef.current[iconIndexOption1].position, markerDataRef.current[iconIndexOption2].position);

        const map = mapRef.current;
        const bounds = L.latLngBounds([
            markerDataRef.current[iconIndexOption1].position,
            markerDataRef.current[iconIndexOption2].position,
        ]);

        switch (type) {
            case "before wayfinding":
                map.flyToBounds(bounds, {
                    paddingTopLeft: [20, 100],
                    paddingBottomRight: [40, 300],
                    maxZoom: 0,
                    duration: 1.5
                });
            break;
            case "during wayfinding":
                map.flyToBounds(bounds, {
                    paddingTopLeft: [20, 100],
                    paddingBottomRight: [40, 200],
                    maxZoom: 0,
                    duration: 1.5
                });
            break;
        }
        

    }, [selectedOption1, selectedOption2, mapRef, markerDataRef]);

    useEffect(()=>{
        if(isOption1Selected && isOption2Selected){
            flyToMidPoint("before wayfinding");
        };
    }, [isOption1Selected, isOption2Selected, flyToMidPoint])

    useEffect(()=>{
        if(isWayfinding){
            flyToMidPoint("during wayfinding");
        } else if (!isWayfinding && isOption1Selected && isOption2Selected) {
            flyToMidPoint("before wayfinding");
        }
    }, [isWayfinding, flyToMidPoint, isOption1Selected, isOption2Selected])

    const handleClearOption = (optionNum) => {
        switch (optionNum) {
            case 1:
                setSelectedOption1("");
                setIsOption1Selected(false);
                resetIconColor("1");
                break;
            case 2:
                setSelectedOption2("");
                setIsOption2Selected(false);
                resetIconColor("2");
                break;
        };
    };

    
    function resetIconColor(option){
        let location;
        switch (option) {
            case "1":
                location = markerDataRef.current.find((location) => location.name === selectedOption1);
                
                if (!location) return;
                setActiveMarkers(prev => {
                    const updated = [...prev];
                    updated[option - 1] = "";
                    return updated;
                });
                resetZIndex(location);
                break;
            case "2":
                location = markerDataRef.current.find((location) => location.name === selectedOption2);
                if (!location) return;
                setActiveMarkers(prev => {
                    const updated = [...prev];
                    updated[option - 1] = "";
                    return updated;
                });                
                resetZIndex(location);
                break;
            default:
                break;
        }

        setIconState([...iconState]);
    };

    function resetZIndex(location){
        const iconIndex = markerDataRef.current.findIndex((num) => num.name === location.name);
        markersRef.current[iconIndex].options.zIndexOffset = 1000;
    };

    function checkDistance(newPosition){
        const map = mapRef.current;
        const distance = map.distance(newPosition, L.latLng(center));
        return distance;
    }

    useEffect(()=>{

    }, [selectedOption1, selectedOption2])

    const handleGo = (pathList, markersRef) =>{
        if(selectedOption1 && selectedOption2){
            setIsWayfinding(true);
            const tl = gsap.timeline();

            const pathIndex = findPathIndexToUse(pathList, selectedOption1, selectedOption2);
            hideOtherMarkers(markersRef, selectedOption1, selectedOption2)

            const path = pathList[pathIndex];
            gsap.set(`#${path.id}`, {visibility: "visible"})
            tl
                .from(`#${path.id}`, {
                    drawSVG: "0%",
                    duration: 3,
                    ease: "none",
                    onStart: ()=>{
                        mapRef.current.scrollWheelZoom.disable()
                        mapRef.current.touchZoom.disable()

                    },
                    onComplete: ()=>{
                        mapRef.current.scrollWheelZoom.enable()
                        mapRef.current.touchZoom.enable()
                    }
                });
                
        }
    }

    function hideOtherMarkers(markersRef, option1, option2){
        const iconIndex1 = markerDataRef.current.findIndex((num) => num.name === option1);
        const iconIndex2 = markerDataRef.current.findIndex((num) => num.name === option2);
        const iconIndexes = [iconIndex1, iconIndex2]
        const otherMarkers = markersRef.current.filter((_, index) => !iconIndexes.includes(index));
        otherMarkers.forEach(marker => {
            marker.setOpacity(0);
        });
    };
    function showOtherMarkers(markersRef, option1, option2){
        const iconIndex1 = markerDataRef.current.findIndex((num) => num.name === option1);
        const iconIndex2 = markerDataRef.current.findIndex((num) => num.name === option2);
        const iconIndexes = [iconIndex1, iconIndex2]
        const otherMarkers = markersRef.current.filter((_, index) => !iconIndexes.includes(index));
        otherMarkers.forEach(marker => {
            marker.setOpacity(1);
        });
    }

    const handleExit = (pathList, markersRef) => {
        const pathIndex = findPathIndexToUse(pathList, selectedOption1, selectedOption2);
        const path = pathList[pathIndex];
        gsap.set(`#${path.id}`, {visibility: "hidden"});
        showOtherMarkers(markersRef, selectedOption1, selectedOption2)
        setIsWayfinding(false);
    }


    return (
        <>
            <h2 className={`navigation__title ${isWayfinding ? "wayfindingToHide--hidden" : ""}`}>Select Destination</h2>
                <div className={`navigation-fields ${isWayfinding ? "wayfindingToHide--hidden" : ""}`}>
                    <div className="navigation-fields__row"> 
                        <Image 
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/search.svg"
                            alt="search button"
                            width={32}
                            height={32}
                            className="navigation-fields__search"
                        />
                        <div className="navigation-fields__select-wrapper">
                            <select ref={select1Ref} onChange={(e) => handleSelectOption(1, e)} value={selectedOption1} className={`navigation-fields__select ${!isOption1Selected ? "navigation-fields__select--color" : ""}`}>
                                <option value="" disabled hidden>From Starting Point</option>
                                {optionList1.map((option)=>{
                                    return <option key={option.value} value={option.value}>{option.value}</option>
                                })}
                            </select>
                        </div>
                        <Image
                            onClick={(e)=> handleClearOption(1)}
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close-circle.svg"
                            alt="close button"
                            width={25}
                            height={25}
                            className={`navigation-fields__close ${!isOption1Selected ? "navigation-fields__close--hidden" : ""}`}
                        />
                        {/* <input defaultValue="From Starting Point" type="text" className="navigation-fields__input" /> */}
                        {/* <Image 
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/voice.svg"
                            alt="voice button"
                            width={32}
                            height={32}
                        /> */}
                    </div>
                    <hr className="navigation-fields__hr" />
                    <div className="navigation-fields__row">
                        <Image 
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/search.svg"
                            alt="search bututon"
                            width={32}
                            height={32}
                            className="navigation-fields__search"
                        />
                        <div className="navigation-fields__select-wrapper">
                            <select ref={select2Ref} onChange={(e)=> handleSelectOption(2, e)} value={selectedOption2} className={`navigation-fields__select ${!isOption2Selected ? "navigation-fields__select--color" : ""}`}>
                                <option value="" className="navigation-fields__placeholder" disabled hidden >To Destination</option>
                                {optionList2.map((option)=>{
                                    return <option key={option.value} value={option.value} className="optionTest">{option.value}</option>
                                })}
                            </select>
                        </div>
                        <Image
                            onClick={(e)=> handleClearOption(2)}
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/close-circle.svg"
                            alt="close button"
                            width={25}
                            height={25}
                            className={`navigation-fields__close ${!isOption2Selected ? "navigation-fields__close--hidden" : ""}`}
                        />
                        {/* <Image 
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/voice.svg"
                            alt="voice button"
                            width={32}
                            height={32}
                        />                     */}
                    </div>
                </div>
            <button className={`navigation__go ${isWayfinding ? "wayfindingToHide--hidden" : ""}`} onClick={() => handleGo(pathList, markersRef)}>GO</button>
            <button className={`navigation__go ${isWayfinding ? "" : "wayfindingToHide--hidden"}`} onClick={() => handleExit(pathList, markersRef)}>EXIT</button>
        </>
    );
}