import Back from "/public/images/svgs/icons/left.svg";
import Ar from "/public/images/svgs/icons/ar.svg";
import MapBack from "@/app/components/MapBack";
import Link from "next/link";


export default function OrangeGarden({setContent, setIsIconClicked, resetIcons, iconState}) {

    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
        setIsIconClicked(true);
        resetIcons(iconState);
    }

    return (
        <>
            <h2 className="popup__title">ORANGE GARDEN</h2>
            <p>The Orange Garden is a designated space meant for community to reflect, learn and commemorate the legacy of harms caused towards the Indigenous stewards of Turtle Island (North America) to promote healing, equity and inclusion for all.</p>
            <div className="slider">
                
            </div>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <MapBack />
                </a>

                <button type="button" className="popup__read-more button-color-primary">READ MORE</button>

                {/* <Link className="popup__360" href={`panorama_view?location=/orange-garden`}> */}
                <Link className="popup__360" href={`/orange_garden_360`}>
                    <Ar />
                </Link>
            </div>
        </>
    );
}