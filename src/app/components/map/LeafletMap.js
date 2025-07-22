"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMap, useMapEvent } from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import MapPin from "../MapPin";
import ZoomTool from "../ZoomTool";
import gsap from "gsap";
import RecenterAutomatically from "./RecenterAutomatically";
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
        resetIcons(iconState, setIconState);

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