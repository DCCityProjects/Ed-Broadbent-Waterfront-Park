import Link from "next/link";
import { useEffect } from "react";


export default function MapPopup({stateList}) {
    // console.log(stateList)

    const {
        content, setContent,
        setIsIconClicked, resetIcons, 
        iconState, setIconState
    } = stateList;

    const popupData = {
        "amphitheatre-and-stage": {
            title: "AMPHITHEATRE AND STAGE",
            p: "Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....",
            srcReadMore: "/amphitheatreAndStage",
            src360: "/amphitheatre_and_stage_360"
        },
        "garden-of-human-rights": {
            title: "GARDEN OF HUMAN RIGHTS",
            p: "The Garden features 13 garden beds representing the 13 prohibited grounds of discrimination within the Canadian Human Rights Act.",
            srcReadMore: "/gardenOfHumanRights",
            src360: "/garden_of_human_rights_360"
        },
        "orange-garden": {
            title: "ORANGE GARDEN",
            p: "The Orange Garden is a designated space meant for community to reflect, learn and commemorate the legacy of harms caused towards the Indigenous stewards of Turtle Island (North America) to promote healing, equity and inclusion for all.",
            srcReadMore: "/orangeGarden",
            src360: "/orange_garden_360"
        },
        "main-entrance": {
            title: "MAIN ENTRANCE",
            p: "Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....",
            srcReadMore: "/general",
            src360: "/main_entrance_360"
        },
        "parking-entrance": {
            title: "PARKING ENTRANCE",
            p: "Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....",
            srcReadMore: "/general",
            src360: "/parking_entrance_360"
        },
        "about-ed-broadbent": {
            title: "ABOUT ED BROADBENT",
            p: "Ed Broadbent was a Canadian political icon born and raised in Oshawa with long-standing service to our community and across our nation.",
            srcReadMore: "/aboutEdBroadbent",
            src360: "/about_ed_broadbent_360"
        }
    }

    const currentContent = popupData[content];



    const handleClick = (e) => {
        e.preventDefault();
        setContent("navigation");
        const newState = resetIcons(iconState);
        console.log(newState)
        setIconState(newState);

    return (
        <>
            <h2 className="popup__title">{currentContent.title}</h2>
            <p>{currentContent.p}</p>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back" onClick={(e)=>{handleClick(e)}}>
                    <img src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/left.svg" alt="back button" className="popup__button" />
                </a>
                {/* <Link href="" className="popup__back">
                    <Back />
                </Link> */}

                {/* <button type="button" className="popup__read-more button-color-primary">READ MORE</button> */}
                <Link href={currentContent.srcReadMore} className="popup__read-more button-color-primary" role="button">READ MORE</Link>

                {/* <Link className="popup__360" href={`panorama_view?location=/amphitheatre-and-stage`}> */}
                <Link className="popup__360" href={currentContent.src360}>
                    <img src="/Ed-Broadbent-Waterfront-Park/images/svgs/icons/ar.svg" alt="AR button" className="popup__button" />
                </Link>
            </div>
        </>
    );
}