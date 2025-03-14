import Link from "next/link";
import Ar from "/public/images/svgs/icons/ar.svg";
import MapBack from "@/app/components/MapBack";


export default function HumanRights({setContent}) {

    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
    }

    return (
        <>
            <h2 className="popup__title">GARDEN OF HUMAN RIGHTS</h2>
            <p>The Garden features 13 garden beds representing the 13 prohibited grounds of discrimination within the Canadian Human Rights Act.</p>
            <div className="slider">
                
            </div>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <MapBack />
                </a>

                {/* <button type="button" className="popup__read-more button-color-primary">READ MORE</button> */}
                <Link href="/gardenOfHumanRights" className="popup__read-more button-color-primary" role="button">READ MORE</Link>


                <Link href="/humanRights360">
                    <button type="button" className="popup__360">
                        <Ar />
                    </button>
                </Link>
            </div>
        </>
    );
}