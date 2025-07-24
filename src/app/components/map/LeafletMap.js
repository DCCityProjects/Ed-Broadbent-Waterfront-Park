"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMap, useMapEvent } from "react-leaflet";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useCallback, useEffect, useRef, useState } from "react";
import MapPin from "../MapPin";
import ZoomTool from "../ZoomTool";
import gsap from "gsap";
import RecenterAutomatically from "./RecenterAutomatically";
import { useSearchParams, useRouter } from "next/navigation";
import { findMarkerIndex } from "@/app/utils/navigationUtils";


export default function LeafletMap({stateList}) {

    const [iconList, setIconList] = useState([]);
    const [offset, setOffset] = useState(0);

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

    useEffect(()=>{
        console.log(mapWrapperRef);

    },[])

    const router = useRouter();
    const searchParams = useSearchParams();
    //* I'm using this ref to compare to contentParam later on to make sure they aren't the same.
    const contentRef = useRef();
    const stopSearchParamEffectRef = useRef(false);
    const iconStateRef = useRef(null);
    const cameFromURLRef = useRef(true);

    useEffect(()=>{
        if(!icons) return;
        console.log("icons are now here!")
        if (iconStateRef.current === null && iconState.length > 0){
            console.log("setting iconstateref to iconstate")
            iconStateRef.current = [...iconState];
            console.log(iconState);
            console.log(iconStateRef.current)
        }
    }, [iconState, icons])



    useEffect(()=>{
        function updateContentRef(){
            console.log("starting the update content ref!");
            console.log("content is:", content);
            contentRef.current = content;
            
        }

        updateContentRef();
    }, [content])

    useEffect(()=>{
        console.log(iconStateRef.current)
    },[])

    const handleClick = useCallback((marker, index) => {
        console.log(`%cClicked ${marker.name}`, `color: green`);
        if(!iconStateRef.current) return;
        let resetState = resetIcons(iconStateRef.current);
        iconStateRef.current = resetState;
        setIconState(resetState);

        let newIconState = changeIconColor(index, resetState);
        setIconState(newIconState);
        setContent(marker.url)

        marker.zIndexOffset = 10000;
        flyToLocation(marker.position, -2, 1);
        gsap.to(popupRef.current, {y: 0, duration: 1});

        stopSearchParamEffectRef.current = true;
        const params = new URLSearchParams(searchParams);
        params.set("content", marker.url);
        router.replace(`?${params.toString()}`);
        
    }, [resetIcons, setIconState, changeIconColor, flyToLocation, popupRef, router, searchParams, setContent])

    useEffect(() => {
        const testParam = searchParams.get("content");
        console.log("URL param content is:", testParam);
    }, [searchParams]);

    useEffect(()=>{
        function reactToSearchParams(){
            console.log(`%cStarting reactToSearchParams`, `color: green`);
            const contentParam = searchParams.get("content");
            if(contentParam && cameFromURLRef.current && iconState && iconStateRef.current){
                console.log(`%ccontentParam exists! we are now setting content!`, `color: red`)
                const markerIndex = findMarkerIndex(iconStateRef.current, contentParam);
                console.log(markerIndex);
                if(markerIndex !== -1){
                    cameFromURLRef.current = false;
                    const marker = iconStateRef.current[markerIndex];
                    console.log(marker);
                    console.log("hello from reacttosearchparams! gonna do the handleclick")
                    setCenter(marker.position)
                    handleClick(marker, markerIndex);
                }
            };
        };
        reactToSearchParams();
    },[searchParams, setContent, handleClick, setCenter, iconState]);

    useEffect(()=>{
        console.log(content)
    }, [content]);

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
                minZoom={-3.7}
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