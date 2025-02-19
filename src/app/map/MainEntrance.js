import Back from "/public/images/left.svg";
import Ar from "/public/images/ar.svg";


export default function MainEntrance() {
    return (
        <>
            <h2 className="popup__title">Main Entrance</h2>
            <p>Located at 169 Harbour Road on almost 35 acres and situated on former marina lands, the Ed Broadbent Waterfront Park is the City of Oshawa's newest addition to the waterfront parks system....</p>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back">
                    <Back />
                </a>

                <button type="button" className="popup__read-more">READ MORE</button>

                <button type="button" className="popup__360">
                    <Ar />
                </button>
            </div>
        </>
    );
}