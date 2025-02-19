import Back from "/public/images/left.svg";
import Ar from "/public/images/ar.svg";


export default function HumanRights() {
    return (
        <>
            <h2 className="popup__title">GARDEN OF HUMAN RIGHTS</h2>
            <p>The Garden features 13 garden beds representing the 13 prohibited grounds of discrimination within the Canadian Human Rights Act.</p>
            <div className="slider">
                
            </div>
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