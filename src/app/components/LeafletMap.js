"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMap, useMapEvent } from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import {
    iconAmpGrey, iconAmpCol,
    iconBenchesGrey, iconBenchesCol,
    iconBikeGrey, iconBikeCol,
    iconBridgeGrey, iconBridgeCol,
    iconEBGrey, iconEBCol,
    iconHRGrey, iconHRCol,
    iconIGrey, iconICol,
    iconMapGrey, iconMapCol,
    iconOGGrey, iconOGCol,
    iconParkingGrey, iconParkingCol
} from "@/app/components/mapPins"
import MapPin from "./MapPin";
import ZoomTool from "./ZoomTool";
import gsap from "gsap";
import RecenterAutomatically from "./map/RecenterAutomatically";
import { useSearchParams } from "next/navigation";


export default function LeafletMap({stateList}) {
    const [zoom, setZoom] = useState(0);
    const [center, setCenter] = useState([4150, 210]);
    const [iconSize, setIconSize] = useState(50);
    const [iconList, setIconList] = useState([]);
    const [offset, setOffset] = useState(0);

    const {
        setContent, iconState,
        popupRef, resetIcons, 
        isIconClicked, setIsIconClicked,
        setIconState
    } = stateList;

    const bounds = [[0, 0], [4767, 3070]];
    const panBounds = [[-2000, -2000], [6767, 5070]];
    const mapWrapperRef = useRef(null);

    useEffect(()=>{
        console.log(mapWrapperRef);

    },[])

    const searchParams = useSearchParams();

    const handleClick = useCallback((e, marker, index) => {
        console.log(`clicked ${marker.name}`);
        if(!iconState[index]){
            console.log("No icon state");
            return
        };
            setContent(marker.url);
            setIsIconClicked(false);
            resetIcons(iconState);

            const newIconState = [...iconState];

            switch (iconState[index].icon) {
                case iconAmpGrey: newIconState[index].icon = iconAmpCol; break;
                case iconBenchesGrey: newIconState[index].icon = iconBenchesCol; break;
                case iconBikeGrey: newIconState[index].icon = iconBikeCol; break;
                case iconBridgeGrey: newIconState[index].icon = iconBridgeCol; break;
                case iconEBGrey: newIconState[index].icon = iconEBCol; break;
                case iconHRGrey: newIconState[index].icon = iconHRCol; break;
                case iconMapGrey: newIconState[index].icon = iconMapCol; break;
                case iconOGGrey: newIconState[index].icon = iconOGCol; break;
                case iconParkingGrey: newIconState[index].icon = iconParkingCol; break;
                default: break;
            };

            setIconState(newIconState);
            marker.zIndexOffset = 10000;

            gsap.to(popupRef.current, {y: 0, duration: 1})
            console.log(popupRef.current)
            if(popupRef.current){
                console.log("popupRef" + popupRef.current)
            } else {
                console.log("no popupRef")
            }
        
    }, [iconState, resetIcons, setIsIconClicked, setIconState, setContent, popupRef])

    useEffect(()=>{
        setIconState([
            {
                position: [3520, 750],
                zIndexOffset: 1000,
                icon: iconAmpGrey,
                iconGrey: iconAmpGrey,
                iconCol: iconAmpCol,
                name: "Amphitheatre and Stage",
                url: "amphitheatre-and-stage",
                permanent: false
            },
            {
                position: [550, 1800],
                zIndexOffset: 1000,
                icon: iconBenchesGrey,
                iconGrey: iconBenchesGrey,
                iconCol: iconBenchesCol,
                name: "Benches",
                url:"benches",
                permanent: false
            },
            {
                position: [3500, 310],
                zIndexOffset: 1000,
                icon: iconBikeGrey,
                iconGrey: iconBikeGrey,
                iconCol: iconBikeCol,
                name: "Bike Parking",
                url:"bike-parking",
                permanent: false
            },
            {
                position: [3740, 1400],
                zIndexOffset: 1000,
                icon: iconBikeGrey,
                iconGrey: iconBikeGrey,
                iconCol: iconBikeCol,
                name: "Bike Parking",
                url:"bike-parking",
                permanent: false
            },
            {
                position: [1500, 1720],
                zIndexOffset: 1000,
                icon: iconBridgeGrey,
                iconGrey: iconBridgeGrey,
                iconCol: iconBridgeCol,
                name: "Larry Ladd Bridge",
                url: "bridge",
                permanent: false
            },
            {
                position: [4035, 300],
                zIndexOffset: 1000,
                icon: iconEBGrey,
                iconGrey: iconEBGrey,
                iconCol: iconEBCol,
                name: "About Ed Broadbent",
                url: "about-ed-broadbent",
                permanent: false
            },
            {
                position: [3300, 750],
                zIndexOffset: 1000,
                icon: iconHRGrey,
                iconGrey: iconHRGrey,
                iconCol: iconHRCol,
                name: "Garden of Human Rights",
                url: "garden-of-human-rights",
                permanent: false
            },
            // {
            //     position: [465,1570],
            //     zIndexOffset: 1000,
            //     icon: iconIGrey,
            //     iconCol: iconICol,
            //     name: "Information",
            //     permanent: false
            // },
            {
                position: [4400, 350],
                zIndexOffset: 1000,
                icon: iconMapGrey,
                iconGrey: iconMapGrey,
                iconCol: iconMapCol,
                name: "Main Map North",
                url: "main-map",
                permanent: false
            },
            {
                position: [440, 1550],
                zIndexOffset: 1000,
                icon: iconMapGrey,
                iconGrey: iconMapGrey,
                iconCol: iconMapCol,
                name: "Main Map",
                url: "main-map",
                permanent: false
            },
            {
                position: [920, 1600],
                zIndexOffset: 1000,
                icon: iconOGGrey,
                iconGrey: iconOGGrey,
                iconCol: iconOGCol,
                name: "Orange Garden",
                url: "orange-garden",
                permanent: false
            },
            {
                position: [168, 975],
                zIndexOffset: 1000,
                icon: iconParkingGrey,
                iconGrey: iconParkingGrey,
                iconCol: iconParkingCol,
                name: "Parking",
                url: "parking",
                permanent: false
            },
        ])
    }, [setIconState])

    useEffect(()=>{
        const contentParam = searchParams.get("content");
        if(contentParam && iconState.length > 0){
            setContent(contentParam)
            const markerIndex = iconState.findIndex(marker=>marker.url === contentParam);
            if(markerIndex !== -1){
                const marker = iconState[markerIndex];
                setCenter(marker.position);
                handleClick(null, marker, markerIndex);
            }
            console.log(contentParam)
        }
    },[handleClick, iconState, searchParams, setContent])


    function UpdateZoom ({center, zoom}) {
        const map = useMap();

        useEffect(()=>{
            if(!isIconClicked){
                map.flyTo(center, zoom);
                setIsIconClicked(true);
            }
        }, [map, center, zoom])
        return null
    }

    function MapEventHandler(){
        const map = useMapEvent("zoom", ()=>{
            console.log("zoom changed")
            const currentZoom = map.getZoom();
            console.log(currentZoom)
            const markerSize = getMarkerSize(currentZoom);

            if(currentZoom < -2){
                console.log("changing to 25");
                changeMarkerSize(markerSize);
            } else if (currentZoom >= -2) {
                console.log("changing to 50")
                changeMarkerSize(markerSize);
            }
        })
        return null
    };

    function changeMarkerSize(size){
        if(!mapWrapperRef) return
        mapWrapperRef.current.style.setProperty("--marker-width", `${size}px`);
    }

    function getMarkerSize(zoom) {
        const minZoom = -3;
        const maxZoom = -2;
        const minSize = 30;
        const maxSize = 50;

        const clampedZoom = Math.max(minZoom, Math.min(maxZoom, zoom));

        const t = (clampedZoom - maxZoom) / (minZoom - maxZoom);

        return minSize * t + maxSize * (1 - t);
    }

    useEffect(()=>{
        console.log(iconSize)
    }, [iconSize])
    
    // maxBounds={panBounds}
    return (
        <div id="map-wrapper" ref={mapWrapperRef}>
            <MapContainer crs={L.CRS.Simple} center={center} zoomDelta={0.8} maxBounds={panBounds} zoomSnap={0} zoom={zoom} minZoom={-3.1} zoomControl={false} closePopupOnClick={false}>
                {/* <ZoomTool setZoom={setZoom} /> */}
                <UpdateZoom center={center} zoom={zoom} />
                <MapEventHandler />
                <RecenterAutomatically lat={center[0]} lng={center[1]} />
                {iconState.map((marker, index) =>{
                    return (
                        <Marker 
                            key={index}
                            position={marker.position}
                            icon={iconState[index]?.icon}
                            iconSize={[iconSize, iconSize]}
                            eventHandlers={{
                                click: (e)=>{
                                    setCenter(marker.position);
                                    handleClick(e, marker, index);    
                                    // setZoom(-1);                     
                                }
                            }}
                            zIndexOffset={marker.zIndexOffset}>
                            
                            <Tooltip
                            className="map-pin"
                            direction="top"
                            offset={[0, iconSize/2]}
                            permanent={iconState[index]?.permanent}
                            closeButton={false}
                            autoClose={false}
                            >{marker.name}</Tooltip>
                        </Marker>
                    )
                })}
                
                <ImageOverlay url="/Ed-Broadbent-Waterfront-Park/images/svgs/map.svg" bounds={bounds}  />
            </MapContainer>
        
        </div>
    );
}