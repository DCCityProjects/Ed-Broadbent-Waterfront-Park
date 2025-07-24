"use client"

import Image from "next/image";
// import Select from "react-select";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { getMidPoints, hasTwoSelectedOptions } from "@/app/utils/navigationUtils";

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
        mapRef, setMapRef, flyToLocation
    } = stateList;

    const options = [
        { value: "Main Map North", label: "Main Map North" },
        { value: "About Ed Broadbent", label: "About Ed Broadbent" },
        { value: "Amphitheatre and Stage", label: "Amphitheatre and Stage" },
        { value: "Garden of Human Rights", label: "Garden of Human Rights" },
        { value: "Orange Garden", label: "Orange Garden" },
        { value: "Main Map South", label: "Main Map South" }
    ];

    
    const handleSelectOption = (optionNum, e) =>{
        console.log(e)
        const option = e.target.value;
        const location = iconState.find(location => location.name === option);
        console.log(`%c${content}`, `color: PURPLE`)

        if(optionNum === 1){
            setSelectedOption1(option);
            setIsOption1Selected(true);
        } else if (optionNum === 2){
            setSelectedOption2(option);
            setIsOption2Selected(true);
        };

        const iconIndex = iconState.findIndex((num) => num.name === option);
        if(iconIndex !== -1){
            const newIconState = changeIconColor(iconIndex, iconState, setIconState);
            setIconState(newIconState);
        };

        const option1 = optionNum === 1 ? option : selectedOption1;
        const option2 = optionNum === 2 ? option : selectedOption2;
        const areBothOptionsSelected = hasTwoSelectedOptions(option1, option2);

        if(!areBothOptionsSelected){
            console.log("there's only one selected")
            const distanceResult = checkDistance(location.position);
            console.log(distanceResult);
            if(distanceResult <= 500){
                flyToLocation(location.position, -2, 1);
            } else if((distanceResult > 500) && (distanceResult < 2900)){
                flyToLocation(location.position, -2, 1.5)
                console.log("flying!");
            };
        };
    };

    useEffect(()=>{
        function flyToMidPoint(){
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
            
            map.flyToBounds(bounds, {
                paddingTopLeft: [20, 100], // add padding if needed
                paddingBottomRight: [40, 280],
                maxZoom: -1,       // optional: prevent zooming in too much
                duration: 1.5
            });
        };

        if(isOption1Selected && isOption2Selected){
            flyToMidPoint();
        };
    }, [iconState, isOption1Selected, isOption2Selected, selectedOption1, selectedOption2, flyToLocation, mapRef])

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
                location.icon = location.iconGrey;
                break;
            case "2":
                location = iconState.find((location) => location.name === selectedOption2);
                location.icon = location.iconGrey;
                break;
            default:
                break;
        }

        setIconState([...iconState]);
    };

    function checkDistance(newPosition){
        const map = mapRef.current;
        const distance = map.distance(newPosition, L.latLng(center));
        return distance;
    }



    // useEffect(()=>{
    //     if(!mapRef.current) return;
    //     // console.log(mapRef);

    //     const map = mapRef.current;
    //     const currentCenter = map.getCenter();
    //     flyToLocation(center, -2, 1.5)
    //     // const differenceCenter = currentCenter.map((coords, index)=> coords - center[index]);
    //     // console.log(differenceCenter)
    // }, [mapRef, center, flyToLocation])



    function getMidPoints(x, y){
        console.log("x", x);
        console.log("y", y)
        const x1 = x[0];
        const x2 = x[1];
        const y1 = y[0];
        const y2 = y[1]
        return [(x1 + y1) / 2, (x2 + y2) / 2];
    }
    return (
        <>
            <h2 className="navigation__title">Select Destination</h2>
                <div className="navigation-fields">
                    <div className="navigation-fields__row"> 
                        <Image 
                            src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/search.svg"
                            alt="search button"
                            width={32}
                            height={32}
                            className="navigation-fields__search"
                        />
                        <div className="navigation-fields__select-wrapper">
                            <select onChange={(e) => handleSelectOption(1, e)} value={selectedOption1} className={`navigation-fields__select ${!isOption1Selected ? "navigation-fields__select--color" : ""}`}>
                                <option value="" disabled hidden>From Starting Point</option>
                                {options.map((option)=>{
                                    return <option key={option.value} value={option.value}>{option.label}</option>
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
                            <select onChange={(e)=> handleSelectOption(2, e)} value={selectedOption2} className={`navigation-fields__select ${!isOption2Selected ? "navigation-fields__select--color" : ""}`}>
                                <option value="" className="navigation-fields__placeholder" disabled hidden >To Destination</option>
                                {options.map((option)=>{
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
            <button className="navigation__go">GO</button>
        </>
    );
}