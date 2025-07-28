"use client"

import { ImageOverlay, MapContainer, Marker, Popup, SVGOverlay, Tooltip, useMap, useMapEvent } from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RecenterAutomatically from "./RecenterAutomatically";
import { useSearchParams, useRouter } from "next/navigation";
import { findMarkerIndex } from "@/app/utils/navigationUtils";
import { pathList } from "@/app/data/pathList";


export default function LeafletMap({stateList}) {
    const {
        setContent, content,
        iconState,
        zoom, setZoom,
        center, setCenter,
        popupRef, resetIcons, 
        setIconState, changeIconColor,
        setMapRef, mapRef, flyToLocation,
        icons
    } = stateList;

    const bounds = [[0, 0], [4767, 3070]];
    const panBounds = [[-3400, -2500], [8567, 5570]];
    const mapWrapperRef = useRef(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const iconStateRef = useRef(null);
    //* ref flag for people coming from teh QR or direct link with the ?content
    const cameFromURLRef = useRef(true);


    // const edBroadbentToGardenOfHR = L.svgOverlay(EdBroadbentToGardenOfHR, bounds).addTo(mapRef);

    useEffect(()=>{
        if(!icons) return;
        if (iconStateRef.current === null && iconState.length > 0){
            iconStateRef.current = [...iconState];
        };
    }, [iconState, icons]);

    const handleClick = useCallback((marker, index) => {
        if(!iconStateRef.current) return;
        let resetState = resetIcons(iconStateRef.current);
        iconStateRef.current = resetState;
        setIconState(resetState);

        let newIconState = changeIconColor(index, resetState);
        setIconState(newIconState);
        setContent(marker.url);

        marker.zIndexOffset = 10000;
        flyToLocation(marker.position, -2, 1);
        gsap.to(popupRef.current, {y: 0, duration: 1});

        const params = new URLSearchParams(searchParams);
        params.set("content", marker.url);
        router.replace(`?${params.toString()}`);
        
    }, [resetIcons, setIconState, changeIconColor, flyToLocation, popupRef, router, searchParams, setContent]);

    useEffect(()=>{
        function reactToSearchParams(){
            const contentParam = searchParams.get("content");
            //* Gotta make sure that the flag is true (for when you come from QR or URL)
            //* also have to check if both iconState and iconStateRef aren't null, just so it really waits.
            if(contentParam && cameFromURLRef.current && iconState && iconStateRef.current){
                const markerIndex = findMarkerIndex(iconStateRef.current, contentParam);

                if(markerIndex !== -1){
                    cameFromURLRef.current = false;
                    const marker = iconStateRef.current[markerIndex];

                    //* Setting the center here because the flyToLocation isn't gonna be perfect
                    //* when coming from the QR or URL
                    setCenter(marker.position)
                    handleClick(marker, markerIndex);
                }
            };
        };
        reactToSearchParams();
    },[searchParams, setContent, handleClick, setCenter, iconState]);

    function MapEventHandler(){
        const map = useMapEvent("zoom", ()=>{
            const currentZoom = map.getZoom();
            const markerSize = getMarkerSize(currentZoom);

            if(currentZoom < -2){
                changeMarkerSize(markerSize);
            } else if (currentZoom >= -2) {
                changeMarkerSize(markerSize);
            };
        });

        return null;
    };

    function changeMarkerSize(size){
        if(!mapWrapperRef) return;
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
    
    return (
        <div id="map-wrapper" ref={mapWrapperRef}>
            <MapContainer 
                crs={L.CRS.Simple}
                center={center}
                zoomDelta={0.8}
                maxBounds={panBounds}
                zoomSnap={0}
                zoom={zoom}
                minZoom={-3.7}
                maxZoom={-1}
                zoomControl={false}
                closePopupOnClick={false}
                ref={mapRef}
                >
                <MapEventHandler />
                <RecenterAutomatically lat={center[0]} lng={center[1]} />
                {pathList.map((path, index) => {
                    console.log(path)
                    return (
                        <SVGOverlay
                        key={index}
                        bounds={path.bounds}
                        attributes={{zIndex: 99999}}>
                            <svg
                                viewBox={`0 0 ${path.width} ${path.height}`}
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                id={path.id}
                                d={path.d} 
                                stroke={path.stroke}
                                strokeMiterlimit={path.strokeMiterlimit}
                                strokeWidth={path.strokeWidth}
                                fill={path.fill}
                                vectorEffect="non-scaling-stroke"
                                style={{ visibility: "hidden"}}
                                >
                                </path>
                            </svg>

                        </SVGOverlay>
                    )
                })};
                {iconState.map((marker, index) =>{
                    return (
                        <Marker 
                            key={index}
                            position={marker.position}
                            icon={iconState[index]?.icon}
                            eventHandlers={{
                                click: ()=>{
                                    // setCenter(marker.position);
                                    handleClick(marker, index);    
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