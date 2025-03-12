import Back from "/public/images/svgs/icons/left.svg";
import Ar from "/public/images/svgs/icons/ar.svg";


export default function MainEntrance() {
    return (
        <>
            <h2 className="popup__title">Main Entrance</h2>
            <p>Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....</p>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back">
                    <Back />
                </a>

                <button type="button" className="popup__read-more button-color-primary">READ MORE</button>

                <Link href="/mainEntrance360">
                    <button type="button" className="popup__360">
                        <Ar />
                    </button>
                </Link>
            </div>
        </>
    );
}