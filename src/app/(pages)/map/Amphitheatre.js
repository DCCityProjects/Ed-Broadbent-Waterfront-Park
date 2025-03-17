import Back from "/public/images/svgs/icons/left.svg";
import Ar from "/public/images/svgs/icons/ar.svg";
import Link from "next/link";
import MapBack from "@/app/components/MapBack";

export default function Amphitheatre({setContent, setIsIconClicked, resetIcons, iconState}) {

    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
        setIsIconClicked(true);
        resetIcons(iconState);
    }

    return (
        <>
            <h2 className="popup__title">AMPHITHEATRE AND STAGE</h2>
            <p>Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....</p>
            <div className="slider">
                
            </div>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <MapBack />
                </a>
                {/* <Link href="" className="popup__back">
                    <Back />
                </Link> */}

                {/* <button type="button" className="popup__read-more button-color-primary">READ MORE</button> */}
                <Link href="/amphitheatreAndStage" className="popup__read-more button-color-primary" role="button">READ MORE</Link>


                <Link href="/amphitheatre360">
                    <button type="button" className="popup__360">
                        <Ar />
                    </button>
                </Link>
            </div>
        </>
    );
}