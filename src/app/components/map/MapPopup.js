import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function MapPopup({stateList}) {

    const {
        content, setContent,
        setIsIconClicked, resetIcons, 
        iconState, setIconState, 
        setActiveMarkers
    } = stateList;

    const popupData = {
        "amphitheatre-and-stage": {
            title: "AMPHITHEATRE AND STAGE",
            isPOI: true,
            p: "Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....",
            srcReadMore: "/amphitheatreAndStage",
            src360: "/360_panorama?content=amphitheatre-and-stage"
        },
        "garden-of-human-rights": {
            title: "GARDEN OF HUMAN RIGHTS",
            isPOI: true,
            p: "The Garden features 13 garden beds representing the 13 prohibited grounds of discrimination within the Canadian Human Rights Act.",
            srcReadMore: "/gardenOfHumanRights",
            src360: "/360_panorama?content=garden-of-human-rights"
        },
        "orange-garden": {
            title: "ORANGE GARDEN",
            isPOI: true,
            p: "The Orange Garden is a designated space meant for community to reflect, learn and commemorate the legacy of harms caused towards the Indigenous stewards of Turtle Island (North America) to promote healing, equity and inclusion for all.",
            srcReadMore: "/orangeGarden",
            src360: "/360_panorama?content=orange-garden"
        },
        "main-map-north": {
            title: "MAIN MAP NORTH",
            isPOI: true,
            p: "Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....",
            srcReadMore: "/general",
            src360: "/360_panorama?content=main-map-north"
        },
        "main-map-south": {
            title: "MAIN MAP SOUTH",
            isPOI: true,
            p: "Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....",
            srcReadMore: "/general",
            src360: "/360_panorama?content=main-map-south"
        },
        "about-ed-broadbent": {
            title: "ABOUT ED BROADBENT",
            isPOI: true,
            p: "Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.",
            srcReadMore: "/aboutEdBroadbent",
            src360: "/360_panorama?content=about-ed-broadbent"
        },
        "benches": {
            title: "SUN LOUNGERS",
            isPOI: false
        },
        "bike-parking-west": {
            title: "BIKE PARKING",
            isPOI: false
        },
        "bike-parking-east": {
            title: "BIKE PARKING",
            isPOI: false
        },
        "bridge": {
            title: "LARRY LADD BRIDGE",
            isPOI: false
        },
        "parking": {
            title: "PARKING LOT",
            isPOI: false
        }
    }

    const currentContent = popupData[content];

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = () => {
        const params = new URLSearchParams(searchParams);
        params.delete("content");
        router.replace(`?${params.toString()}`);

        setContent("navigation");
        setActiveMarkers("");
    };



    return (
        <>
            <h2 className="popup__title">{currentContent.title}</h2>
            {currentContent.isPOI ? <p>{currentContent.p}</p> : ""}
            <div className="popup__button-wrapper">
                <button type="button" className={`popup__back ${currentContent.isPOI ? "" : `popup__back--stretch`}`} onClick={handleClick}>
                    <img src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/left.svg" alt="back button" className="popup__button" />
                </button>
                {/* <Link href="" className="popup__back">
                    <Back />
                </Link> */}

                {currentContent.isPOI ? (
                    <>
                        {/* <button type="button" className="popup__read-more button-color-primary">READ MORE</button> */}
                        <Link href={currentContent.srcReadMore} className="popup__read-more button-color-primary" role="button">READ MORE</Link>

                        {/* <Link className="popup__360" href={`360_panorama?location=/amphitheatre-and-stage`}> */}
                        <Link className="popup__360" href={currentContent.src360}>
                            <img src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/ar.svg" alt="AR button" className="popup__button" />
                        </Link>
                    </>
                ) : ""}
            </div>
        </>
    );
}