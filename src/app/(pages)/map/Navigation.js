"use client"

import IconSearch from "/public/images/svgs/icons/search-icon.svg";
import IconVoice from "/public/images/svgs/icons/voice-activation-frame.svg";
import Select from "react-select";

export default function Navigation() {

    const options = [
        { value: "Amphitheater and Stage", label: "Amphitheater and Stage" },
        { value: "Benches", label: "Benches" },
        { value: "Bike Racks", label: "Bike Racks" },
        { value: "Bridge", label: "Bridge" },
        { value: "Garden of Human Rights", label: "Garden of Human Rights" },
        { value: "Harbour Benches", label: "Harbour Benches" },
        { value: "Main Entrance", label: "Main Entrance" },
        { value: "Orange Garden", label: "Orange Garden" },
        { value: "Car Parking", label: "Car Parking" }
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
                        <IconSearch className="navigation-fields__search"/>
                        <div className="navigation-fields__select-wrapper">
                            <Select options={options} className="navigation-fields__select" styles={navFieldStyles} components={{IndicatorSeparator: ()=> null, DropdownIndicator:()=> null}} menuPlacement="top" placeholder="From Starting Point"/>
                        </div>
                        {/* <input defaultValue="From Starting Point" type="text" className="navigation-fields__input" /> */}
                        <IconVoice />
                    </div>
                    <hr className="navigation-fields__hr" />
                    <div className="navigation-fields__row">
                        <IconSearch className="navigation-fields__search" />
                        <div className="navigation-fields__select-wrapper">
                            <Select options={options} className="navigation-fields__select" styles={navFieldStyles} components={{IndicatorSeparator: ()=> null, DropdownIndicator:()=> null}} menuPlacement="top" placeholder="To Destination"/>
                        </div>
                        <IconVoice />
                    </div>
                </div>
            <button className="navigation__go">GO</button>
        </>
    );
}