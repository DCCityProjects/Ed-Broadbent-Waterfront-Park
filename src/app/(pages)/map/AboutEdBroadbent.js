import Back from "/public/images/svgs/icons/left.svg";
import Ar from "/public/images/svgs/icons/ar.svg";
import MapBack from "@/app/components/MapBack";
import gsap from "gsap";
import { useEffect } from "react";


export default function AboutEdBroadbent({setContent}) {

    


    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
        // gsap.to(popupRef.current, {y: 0, duration: 1})
        // console.log(popupRef.current)
        // if(popupRef.current){
        //     console.log("popupRef" + popupRef.current)
        // } else {
        //     console.log("no popupRef")
        // }
    }

    return (
        <>
            <h2 className="popup__title">About Ed Broadbent</h2>
            <p>Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.</p>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <MapBack />
                </a>

                <button type="button" className="popup__read-more button-color-primary">READ MORE</button>

                <button type="button" className="popup__360">
                    <Ar />
                </button>
            </div>
        </>
    );
}