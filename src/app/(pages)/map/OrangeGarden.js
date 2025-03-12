import Back from "/public/images/svgs/icons/left.svg";
import Ar from "/public/images/svgs/icons/ar.svg";


export default function OrangeGarden() {
    return (
        <>
            <h2 className="popup__title">ORANGE GARDEN</h2>
            <p>The Orange Garden is a designated space meant for community to reflect, learn and commemorate the legacy of harms caused towards the Indigenous stewards of Turtle Island (North America) to promote healing, equity and inclusion for all.</p>
            <div className="slider">
                
            </div>
            <div className="popup__button-wrapper">
                <a type="button" className="popup__back">
                    <Back />
                </a>

                <button type="button" className="popup__read-more button-color-primary">READ MORE</button>

                <Link href="/orangeGarden360">
                    <button type="button" className="popup__360">
                        <Ar />
                    </button>
                </Link>
            </div>
        </>
    );
}