// import Back from "/public/images/svgs/icons/left.svg";
import MapBack from "@/app/components/MapBack";
import Ar from "/public/images/svgs/icons/ar.svg";
import Link from "next/link";

export default function ParkingEntrance({setContent}) {

    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
    }

    return (
        <>
            <h2 className="popup__title">Parking Entrance</h2>
            <p>Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....</p>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <MapBack />
                </a>
                <Link href="/general" className="popup__read-more button-color-primary" role="button">READ MORE</Link>
                {/* <button type="button" className="popup__read-more button-color-primary">READ MORE</button> */}

                <button type="button" className="popup__360">
                    <Ar />
                </button>
            </div>
        </>
    );
}