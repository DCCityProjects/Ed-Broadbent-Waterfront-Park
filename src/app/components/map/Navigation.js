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
        setIconState, changeIconColor,
        mapRef, setMapRef, flyToLocation,
        isWayfinding, setIsWayfinding,
        markersRef
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
        console.log(e)
        const option = e.target.value;
        const location = iconState.find(location => location.name === option);
        console.log(`%c${content}`, `color: PURPLE`)
        if(optionNum === 1){
            resetIconColor("1");
            setSelectedOption1(option);
            setIsOption1Selected(true);
        } else if (optionNum === 2){
            resetIconColor("2");
            setSelectedOption2(option);
            setIsOption2Selected(true);
        };

        const iconIndex = iconState.findIndex((num) => num.name === option);
        if(iconIndex !== -1){
            const newIconState = changeIconColor(iconIndex, iconState, setIconState);
            console.log(markersRef.current[iconIndex])
            markersRef.current[iconIndex].options.zIndexOffset = 10000;
            setIconState(newIconState);
        };
        console.log("markers ref", markersRef.current);


        const option1 = optionNum === 1 ? option : selectedOption1;
        const option2 = optionNum === 2 ? option : selectedOption2;
        const areBothOptionsSelected = hasTwoSelectedOptions(option1, option2);

        if(!areBothOptionsSelected){
            console.log("there's only one selected")
            const distanceResult = checkDistance(location.position);
            console.log(distanceResult);
            if(distanceResult <= 500){
                flyToLocation(location.position, -2, 1);
            } else if((distanceResult > 500) && (distanceResult < 3200)){
                flyToLocation(location.position, -2, 1.5)
                console.log("flying!");
            };
        };
    };

    const flyToMidPoint = useCallback((type) =>{
        console.log("launch flytomidpoint!")
        const iconIndexOption1 = iconState.findIndex((num) => num.name === selectedOption1);
        const iconIndexOption2 = iconState.findIndex((num) => num.name === selectedOption2);
        console.log(iconIndexOption1);
        console.log(iconIndexOption2)
        const testMidPoints = getMidPoints(iconState[iconIndexOption1].position, iconState[iconIndexOption2].position);
        console.log(testMidPoints);

        const map = mapRef.current;
        const bounds = L.latLngBounds([
            iconState[iconIndexOption1].position,
            iconState[iconIndexOption2].position,
        ]);
        console.log(bounds)
        switch (type) {
            case "before wayfinding":
                map.flyToBounds(bounds, {
                    paddingTopLeft: [20, 100],
                    paddingBottomRight: [40, 280],
                    maxZoom: -1,
                    duration: 1.5
                });
            break;
            case "during wayfinding":
                map.flyToBounds(bounds, {
                    paddingTopLeft: [20, 100],
                    paddingBottomRight: [40, 200],
                    maxZoom: -1,
                    duration: 1.5
                });
            break;
        }
        

    }, [iconState, selectedOption1, selectedOption2, mapRef]);

    useEffect(()=>{
        if(isOption1Selected && isOption2Selected){
            console.log("both options selected!")
            flyToMidPoint("before wayfinding");
        };
    }, [isOption1Selected, isOption2Selected, flyToMidPoint])

    useEffect(()=>{
        if(isWayfinding){
            console.log("wayfinding is starting!")
            flyToMidPoint("during wayfinding");
        } else if (!isWayfinding && isOption1Selected && isOption2Selected) {
            console.log("wayfinding is stopping!")
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
                location = iconState.find((location) => location.name === selectedOption1);
                if (!location) return;
                location.icon = location.iconGrey;
                resetZIndex(location);
                break;
            case "2":
                location = iconState.find((location) => location.name === selectedOption2);
                if (!location) return;
                location.icon = location.iconGrey;
                resetZIndex(location);
                break;
            default:
                break;
        }

        setIconState([...iconState]);
    };

    function resetZIndex(location){
        console.log(location.name)
        const iconIndex = iconState.findIndex((num) => num.name === location.name);
        console.log(iconIndex);
        console.log(markersRef.current[iconIndex])
        markersRef.current[iconIndex].options.zIndexOffset = 1000;
    };

    function checkDistance(newPosition){
        const map = mapRef.current;
        const distance = map.distance(newPosition, L.latLng(center));
        return distance;
    }

    useEffect(()=>{
        console.log("option 1 is:", selectedOption1);
        console.log("option 2 is:", selectedOption2)
    }, [selectedOption1, selectedOption2])


    // useEffect(()=>{
    //     if(!mapRef.current) return;
    //     // console.log(mapRef);

    //     const map = mapRef.current;
    //     const currentCenter = map.getCenter();
    //     flyToLocation(center, -2, 1.5)
    //     // const differenceCenter = currentCenter.map((coords, index)=> coords - center[index]);
    //     // console.log(differenceCenter)
    // }, [mapRef, center, flyToLocation])

    const handleGo = (pathList) =>{
        console.log("pressed go!");
        if(selectedOption1 && selectedOption2){
            console.log("We have both options, time to wayfind!")
            setIsWayfinding(true);
            const tl = gsap.timeline();
            console.log("selectedOption1", selectedOption1)
            console.log("selectedOption2", selectedOption2)
            const pathIndex = findPathIndexToUse(pathList, selectedOption1, selectedOption2);
            console.log("path is", pathIndex);
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

    const handleExit = (pathList) => {
        console.log("pressed exit!");
        const pathIndex = findPathIndexToUse(pathList, selectedOption1, selectedOption2);
        console.log("path is", pathIndex);
        const path = pathList[pathIndex];
        gsap.set(`#${path.id}`, {visibility: "hidden"})
        setIsWayfinding(false);
    }

    useEffect(()=>{
        console.log(isWayfinding)
    }, [isWayfinding])


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
            <button className={`navigation__go ${isWayfinding ? "wayfindingToHide--hidden" : ""}`} onClick={() => handleGo(pathList)}>GO</button>
            <button className={`navigation__go ${isWayfinding ? "" : "wayfindingToHide--hidden"}`} onClick={() => handleExit(pathList)}>EXIT</button>
        </>
    );
}