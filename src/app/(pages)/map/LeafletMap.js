"use client"

import { ImageOverlay, MapContainer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

export default function LeafletMap() {
    const [zoom, setZoom] = useState(0);
    const [center, setCenter] = useState([550, 520]);

     // ! Ensures the component only renders on the client
    useEffect(() => {
        setIsClient(true);
    }, []);

    const bounds = [[0, 0], [2868, 4779]];
    const panBounds = [[0,0], [2868, 4779]];

    console.log(bounds)

    return (
        <div id="map">
            // ! Ensures the component only renders on the client
            {isClient && (
                <MapContainer crs={L.CRS.Simple} center={center} zoom={zoom} minZoom={-2} maxBounds={panBounds} zoomControl={false}>
                    <ImageOverlay url="/images/svgs/map.svg" bounds={bounds}  />
                </MapContainer>
            )}
        </div>
    );
}