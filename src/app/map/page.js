import Link from "next/link";
import "../css/map.css";
import icone from "/public/images/icone.jpg"
import Image from "next/image";
import LeafletMap from "./LeafletMap";

export default function Map() {
    return (
        <main>
            <LeafletMap />
            <h1>Map</h1>
            <section>
                <h2>Select Destination</h2>
                <div className="select-destination-input-container">
                    <div className="from-input-field"> 
                        <Image src={icone} className="search-icon" alt="football"></Image>
                        <input defaultValue="From" type="text" />
                        <Image src={icone} className="search-icon" alt="football"></Image>
                    </div>
                    <div className="from-input-field">
                        <Image src={icone} className="search-icon" alt="football"></Image>
                        <input defaultValue="To" type="text" name="fromStartingPoint" />
                        <Image src={icone} className="search-icon" alt="football"></Image>
                    </div>
                </div>
                <button>GO</button>
            </section>
        </main>
    );
}