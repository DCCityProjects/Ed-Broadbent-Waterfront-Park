"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMap, useMapEvent } from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import MapPin from "./MapPin";
import ZoomTool from "./ZoomTool";
import gsap from "gsap";
import RecenterAutomatically from "./map/RecenterAutomatically";
import { useSearchParams } from "next/navigation";


export default function LeafletMap({stateList}) {

    const [iconList, setIconList] = useState([]);
    const [offset, setOffset] = useState(0);

    const {
        setContent, iconState,
        zoom, setZoom,
        center, setCenter,
        popupRef, resetIcons, 
        isIconClicked, setIsIconClicked,
        setIconState, changeIconColor,
        setMapRef, mapRef, flyToLocation,
        icons
    } = stateList;

    const mapReference = useRef(null);

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

        changeIconColor(index, iconState, setIconState);
        marker.zIndexOffset = 10000;

        flyToLocation(marker.position, -2, 1);
        setIsIconClicked(true);
        gsap.to(popupRef.current, {y: 0, duration: 1})
        console.log(popupRef.current)
        if(popupRef.current){
            console.log("popupRef" + popupRef.current)
        } else {
            console.log("no popupRef")
        }
        
    }, [iconState, setIconState, resetIcons, setIsIconClicked, setContent, popupRef, changeIconColor, flyToLocation])



    useEffect(()=>{
        if(!icons) return;

        setIconState([
            {
                position: [3520, 750],
                zIndexOffset: 1000,
                icon: icons.iconAmpGrey,
                iconGrey: icons.iconAmpGrey,
                iconCol: icons.iconAmpCol,
                name: "Amphitheatre and Stage",
                url: "amphitheatre-and-stage",
                permanent: false
            },
            {
                position: [550, 1800],
                zIndexOffset: 1000,
                icon: icons.iconBenchesGrey,
                iconGrey: icons.iconBenchesGrey,
                iconCol: icons.iconBenchesCol,
                name: "Benches",
                url:"benches",
                permanent: false
            },
            {
                position: [3500, 310],
                zIndexOffset: 1000,
                icon: icons.iconBikeGrey,
                iconGrey: icons.iconBikeGrey,
                iconCol: icons.iconBikeCol,
                name: "Bike Parking",
                url:"bike-parking",
                permanent: false
            },
            {
                position: [3740, 1400],
                zIndexOffset: 1000,
                icon: icons.iconBikeGrey,
                iconGrey: icons.iconBikeGrey,
                iconCol: icons.iconBikeCol,
                name: "Bike Parking",
                url:"bike-parking",
                permanent: false
            },
            {
                position: [1500, 1720],
                zIndexOffset: 1000,
                icon: icons.iconBridgeGrey,
                iconGrey: icons.iconBridgeGrey,
                iconCol: icons.iconBridgeCol,
                name: "Larry Ladd Bridge",
                url: "bridge",
                permanent: false
            },
            {
                position: [4035, 300],
                zIndexOffset: 1000,
                icon: icons.iconEBGrey,
                iconGrey: icons.iconEBGrey,
                iconCol: icons.iconEBCol,
                name: "About Ed Broadbent",
                url: "about-ed-broadbent",
                permanent: false
            },
            {
                position: [3300, 750],
                zIndexOffset: 1000,
                icon: icons.iconHRGrey,
                iconGrey: icons.iconHRGrey,
                iconCol: icons.iconHRCol,
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
                icon: icons.iconMapGrey,
                iconGrey: icons.iconMapGrey,
                iconCol: icons.iconMapCol,
                name: "Main Map North",
                url: "main-map",
                permanent: false
            },
            {
                position: [440, 1550],
                zIndexOffset: 1000,
                icon: icons.iconMapGrey,
                iconGrey: icons.iconMapGrey,
                iconCol: icons.iconMapCol,
                name: "Main Map",
                url: "main-map",
                permanent: false
            },
            {
                position: [920, 1600],
                zIndexOffset: 1000,
                icon: icons.iconOGGrey,
                iconGrey: icons.iconOGGrey,
                iconCol: icons.iconOGCol,
                name: "Orange Garden",
                url: "orange-garden",
                permanent: false
            },
            {
                position: [168, 975],
                zIndexOffset: 1000,
                icon: icons.iconParkingGrey,
                iconGrey: icons.iconParkingGrey,
                iconCol: icons.iconParkingCol,
                name: "Parking",
                url: "parking",
                permanent: false
            },
        ])
    }, [setIconState, icons])

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
    },[handleClick, iconState, searchParams, setContent, setCenter])




    function MapEventHandler(){
        const map = useMapEvent("zoom", ()=>{
            const currentZoom = map.getZoom();
            const markerSize = getMarkerSize(currentZoom);

            if(currentZoom < -2){
                changeMarkerSize(markerSize);
            } else if (currentZoom >= -2) {
                changeMarkerSize(markerSize);
            }
        })

        return null
    };

    function changeMarkerSize(size){
        if(!mapWrapperRef) return
        mapWrapperRef.current.style.setProperty("--marker-width", `${size}px`);
    };

    function getMarkerSize(zoom) {
        const minZoom = -3;
        const maxZoom = -2;
        const minSize = 30;
        const maxSize = 50;

        const clampedZoom = Math.max(minZoom, Math.min(maxZoom, zoom));

        const t = (clampedZoom - maxZoom) / (minZoom - maxZoom);

        return minSize * t + maxSize * (1 - t);
    };

    // useEffect(()=>{
    //     console.log(mapRef)
    // }, [mapRef])
    
    return (
        <div id="map-wrapper" ref={mapWrapperRef}>
            <MapContainer 
                crs={L.CRS.Simple}
                center={center}
                zoomDelta={0.8}
                maxBounds={panBounds}
                zoomSnap={0}
                zoom={zoom}
                minZoom={-3.1}
                maxZoom={-1}
                zoomControl={false}
                closePopupOnClick={false}
                ref={mapRef}
                >
                <MapEventHandler />
                <RecenterAutomatically lat={center[0]} lng={center[1]} />
                {iconState.map((marker, index) =>{
                    return (
                        <Marker 
                            key={index}
                            position={marker.position}
                            icon={iconState[index]?.icon}
                            eventHandlers={{
                                click: (e)=>{
                                    // setCenter(marker.position);
                                    handleClick(e, marker, index);    
                                }
                            }}
                            zIndexOffset={marker.zIndexOffset}>
                            
                            <Tooltip
                                className="map-pin"
                                direction="top"
                                permanent={false}
                                opacity={1}
                                closeButton={false}
                                interactive={false}
                                autoClose={false}
                                bubblingMouseEvents={false}
                                sticky={false}
                            >{marker.name}</Tooltip>
                        </Marker>
                    )
                })}
                
                <ImageOverlay url="/Ed-Broadbent-Waterfront-Park/images/svgs/map.svg" bounds={bounds}  />
            </MapContainer>
        
        </div>
    );
}