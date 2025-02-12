"use client"

import Link from "next/link";
import "../css/map.css";
import icone from "/public/images/icone.jpg"
import Image from "next/image";
import dynamic from "next/dynamic";

export default function Map() {
    const LeafletMap = dynamic(() => import('./LeafletMap'), {ssr: false});
    
    return (
        <main>
            <LeafletMap />
            <h1>Map</h1>
            <section className="popup">
                <h2>Select Destination</h2>
                <div className="navigation-fields">
                    <div className="navigation-fields__row"> 
                        <Image src={icone} className="navigation-fields__icon" alt="football"></Image>
                        <input defaultValue="From" type="text" className="navigation-fields__input" />
                        <Image src={icone} className="navigation-fields__mic" alt="football"></Image>
                    </div>
                    <div className="navigation-fields__row">
                        <Image src={icone} className="navigation-fields__icon" alt="football"></Image>
                        <input defaultValue="To" type="text" className="navigation-fields__input" name="fromStartingPoint" />
                        <Image src={icone} className="navigation-fields__icon" alt="football"></Image>
                    </div>
                </div>
                <button>GO</button>
            </section>
        </main>
    );
}