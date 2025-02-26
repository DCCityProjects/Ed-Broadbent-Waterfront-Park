"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip } from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import {
    iconAmphitheatreGrey,
    iconAmphitheatreSelect,
    iconBenchGrey,
    iconBenchSelect,
    iconBridgeGrey,
    iconBridgeSelect,
    iconGardenHRGrey,
    iconGardenHRSelect,
    iconOrangeGardenGrey,
    iconOrangeGardenSelect,
    iconParkingGrey,
    iconParkingSelect} from "@/app/components/mapPins"


export default function LeafletMap() {
    const [zoom, setZoom] = useState(0);
    const [center, setCenter] = useState([550, 520]);
    // const [L, setL] = useState(null);


    const bounds = [[0, 0], [2868, 4779]];
    const panBounds = [[0,0], [2868, 4779]];

    useEffect(()=>{
        console.log(bounds)

    },[])

    return (
        <div id="map">
            <MapContainer crs={L.CRS.Simple} center={center} zoom={zoom} minZoom={-1} maxBounds={panBounds} zoomControl={false}>
                <Marker position={[610,500]} icon={iconAmphitheatreGrey}  zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Main Entrance</Tooltip>
                </Marker>
                <Marker position={[1000,1280]} icon={iconAmphitheatreGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Amphitheatre</Tooltip>
                </Marker>
                <Marker position={[1200,790]} icon={iconAmphitheatreGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Amphitheatre</Tooltip>
                </Marker>
                <Marker position={[1490,1180]} icon={iconAmphitheatreGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Bike Rack</Tooltip>
                </Marker>
                <Marker position={[1200,1500]} icon={iconGardenHRGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Garden of Human Rights</Tooltip>
                </Marker>
                <Marker position={[780,1650]} icon={iconGardenHRGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Garden of Human Rights</Tooltip>
                </Marker>
                <Marker position={[1820,3500]} icon={iconBridgeGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Bridge</Tooltip>
                </Marker>
                <Marker position={[1690,3880]} icon={iconOrangeGardenGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Orange Garden</Tooltip>
                </Marker>
                <Marker position={[1830,4180]} icon={iconBenchGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Harbourview Benches</Tooltip>
                </Marker>
                <Marker position={[1820,4520]} icon={iconAmphitheatreGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Bike Rack</Tooltip>
                </Marker>
                <Marker position={[1130,4510]} icon={iconParkingGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" permanent={true} closeButton={false} autoClose={false} closeOnClick={false}>Parking</Tooltip>
                </Marker>
                <ImageOverlay url="/images/svgs/map.svg" bounds={bounds}  />
            </MapContainer>
        
        </div>
    );
}