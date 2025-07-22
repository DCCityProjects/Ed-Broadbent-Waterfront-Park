"use client"

import Image from "next/image";
// import Select from "react-select";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

export default function Navigation({stateList}) {
    const [isOption1Selected, setIsOption1Selected] = useState(false);
    const [isOption2Selected, setIsOption2Selected] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");

    const {
        setContent, iconState,
        zoom, setZoom,
        center, setCenter,
        popupRef, resetIcons, 
        isIconClicked, setIsIconClicked,
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

    
    const navFieldStyles = {
        control: (base, state)=>({
            ...base,
            display: "flex",
            border:"none",
            whiteSpace:"nowrap",
            width: "100%",
            minwidth: "auto",
            border: state.isFocused ? 0 : 0,
            boxShadow: state.isFocused ? 0: 0,
            '& hover': {
                border: state.isFocused ? 0 :0
            }
        })
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

    const handleSelectOption1 = async (e)=>{
        console.log(e.target.value);
        const location = iconState.find((location) => location.name === e.target.value);
        console.log(location)

        console.log(location.position);
        setSelectedOption1(e.target.value);
        setIsOption1Selected(true);

        const iconIndex = iconState.findIndex((num) => num.name === e.target.value);
        if(iconIndex !== -1){
            changeIconColor(iconIndex, iconState, setIconState);
        };

        const distanceResult = checkDistance(location.position);
        console.log(distanceResult);
        if(distanceResult <= 500){
            flyToLocation(location.position, -2, 1);
        } else if((distanceResult > 500) && (distanceResult < 2900)){
            flyToLocation(location.position, -2, 1.5)
            console.log("flying!")
        }
        // flyToLocation(location.position, -2, 1.5);
    }

    const handleSelectOption2 = (e)=>{
        const location = iconState.find((location) => location.name === e.target.value);
        setSelectedOption2(e.target.value);
        setIsOption2Selected(true);

        const iconIndex = iconState.findIndex((num) => num.name === e.target.value);
        if(iconIndex !== -1){
            changeIconColor(iconIndex, iconState, setIconState);
        };

        const distanceResult = checkDistance(location.position);
        console.log(distanceResult);

        if(distanceResult <= 500){
            flyToLocation(location.position, -2, 1);
        } else if((distanceResult > 500) && (distanceResult < 2900)){
            flyToLocation(location.position, -2, 1.5)
            console.log("flying!")
        }
    }

    const handleClearOption1 = ()=>{
        setSelectedOption1("");
        setIsOption1Selected(false);
        resetIconColor("1");
    }

    const handleClearOption2 = (e)=>{
        setSelectedOption2("");
        setIsOption2Selected(false);
        resetIconColor("2");
    }

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
                            <select onChange={(e) => handleSelectOption1(e)} value={selectedOption1} className={`navigation-fields__select ${!isOption1Selected ? "navigation-fields__select--color" : ""}`}>
                                <option value="" disabled hidden>From Starting Point</option>
                                {options.map((option)=>{
                                    return <option key={option.value} value={option.value}>{option.label}</option>
                                })}
                            </select>
                        </div>
                        <Image
                            onClick={(e)=> handleClearOption1(e)}
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
                            <select onChange={(e)=> handleSelectOption2(e)} value={selectedOption2} className={`navigation-fields__select ${!isOption2Selected ? "navigation-fields__select--color" : ""}`}>
                                <option value="" className="navigation-fields__placeholder" disabled hidden >To Destination</option>
                                {options.map((option)=>{
                                    return <option key={option.value} value={option.value} className="optionTest">{option.value}</option>
                                })}
                            </select>
                        </div>
                        <Image
                            onClick={(e)=> handleClearOption2(e)}
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