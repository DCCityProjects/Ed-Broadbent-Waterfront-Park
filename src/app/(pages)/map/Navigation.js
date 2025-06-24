"use client"

import Image from "next/image";
import Select from "react-select";

export default function Navigation() {

    const options = [
        { value: "Main Entrance", label: "Main Entrance" },
        { value: "About Ed Broadbent", label: "About Ed Broadbent" },
        { value: "Amphitheater and Stage", label: "Amphitheater and Stage" },
        { value: "Garden of Human Rights", label: "Garden of Human Rights" },
        { value: "Orange Garden", label: "Orange Garden" },
        { value: "Parking Entrance", label: "Parking Entrance" }
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
    }

    return (
        <>
            <h2 className="navigation__title">Select Destination</h2>
                <div className="navigation-fields">
                    <div className="navigation-fields__row"> 
                        <Image src="/images/svgs/icons/search.svg" alt="search bututon" className="navigation-fields__search" />
                        <div className="navigation-fields__select-wrapper">
                            <Select options={options} className="navigation-fields__select" styles={navFieldStyles} components={{IndicatorSeparator: ()=> null, DropdownIndicator:()=> null}} menuPlacement="top" placeholder="From Starting Point"/>
                        </div>
                        {/* <input defaultValue="From Starting Point" type="text" className="navigation-fields__input" /> */}
                        <Image src="/images/svgs/icons/voice-activation-frame.svg" alt="voice button" />
                    </div>
                    <hr className="navigation-fields__hr" />
                    <div className="navigation-fields__row">
                        <Image src="/images/svgs/icons/search.svg" alt="search bututon" className="navigation-fields__search" />
                        <div className="navigation-fields__select-wrapper">
                            <Select options={options} className="navigation-fields__select" styles={navFieldStyles} components={{IndicatorSeparator: ()=> null, DropdownIndicator:()=> null}} menuPlacement="top" placeholder="To Destination"/>
                        </div>
                        <Image src="/images/svgs/icons/voice-activation-frame.svg" alt="voice button" />
                    </div>
                </div>
            <button className="navigation__go">GO</button>
        </>
    );
}