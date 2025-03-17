import Back from "/public/images/svgs/icons/left.svg";
import Ar from "/public/images/svgs/icons/ar.svg";
import MapBack from "@/app/components/MapBack";
import gsap from "gsap";
import { useEffect } from "react";
import Link from "next/link";


export default function AboutEdBroadbent({setContent, setIsIconClicked, resetIcons, iconState}) {

    


    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
        setIsIconClicked(true);
        resetIcons(iconState);

    }

    return (
        <>
            <h2 className="popup__title">About Ed Broadbent</h2>
            <p>Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.</p>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <MapBack  />
                </a>

                {/* <button type="button" className="popup__read-more button-color-primary">READ MORE</button> */}
                <Link href="/aboutEdBroadbent" className="popup__read-more button-color-primary" role="button">READ MORE</Link>


                <button type="button" className="popup__360">
                    <Ar />
                </button>
            </div>
        </>
    );
}