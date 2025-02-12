"use client"

import { ImageOverlay, MapContainer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

export default function LeafletMap() {
    const [zoom, setZoom] = useState(0);
    const [center, setCenter] = useState([500, 200]);

    const bounds = [[0, 0], [2592, 4326]];
    const panBounds = [[-200,-200], [2992,4726]];

    return (
        <div id="map">
            <MapContainer crs={L.CRS.Simple} center={center} zoom={zoom} minZoom={-2} maxBounds={panBounds} zoomControl={false}>
                <ImageOverlay url="/images/map.svg" bounds={bounds}  />
            </MapContainer>
        
        </div>
    );
}