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
    const contentParamRef = useRef();
    const stopSearchParamEffectRef = useRef(false);
    const iconStateRef = useRef(null);

    useEffect(()=>{
        if(!icons) return;
        if (iconStateRef.current === null && iconState.length > 0){
            console.log("setting iconstateref to iconstate")
            iconStateRef.current = [...iconState];
        }
    }, [iconState, icons])

    useEffect(()=>{
        console.log(iconStateRef.current)
    },[iconStateRef])

    const handleClick = useCallback((marker, index) => {
        console.log(`%cClicked ${marker.name}`, `color: green`);
        if(!iconState[index]){
            console.log("No icon state");
            return;
        };

        stopSearchParamEffectRef.current = true;
        const params = new URLSearchParams(searchParams);
        params.set("content", marker.url);
        router.replace(`?${params.toString()}`);

        setTimeout(() => {
            console.log(`%cTimeout!`, `color: red`)
            stopSearchParamEffectRef.current = false;
        }, 500);

        console.log("Setting contents!")
        setContent(marker.url);
        
        let resetState = resetIcons(iconState);
        setIconState(resetState);
        console.log(resetState)

        let newIconState = changeIconColor(index, resetState);
        setIconState(newIconState);

        marker.zIndexOffset = 10000;
        flyToLocation(marker.position, -2, 1);
        gsap.to(popupRef.current, {y: 0, duration: 1})
        
    }, [iconState, setIconState, resetIcons, setContent, popupRef, changeIconColor, flyToLocation, searchParams, router])

    // useEffect(()=>{
    //     if(stopSearchParamEffectRef.current){
    //         console.log("search param set to false!")
    //         stopSearchParamEffectRef.current = false;
    //     }

    // })

    // const contentParam = searchParams.get("content");

    // useEffect(()=>{
    //     if(contentParam && iconState.length > 0){
    //         const markerIndex = iconState.findIndex(marker=>marker.url === contentParam);
    //         if(markerIndex !== -1){
    //             setContent(contentParam);
    //             const marker = iconState[markerIndex];
    //             flyToLocation(marker.position);
    //             handleClick(null, marker, markerIndex);
    //         }
    //         console.log(contentParam)
    //     }
    // },[contentParam, handleClick, iconState, searchParams, setContent, flyToLocation])


    useEffect(()=>{
        function reactToSearchParams(){
            console.log(`%cStarting get search params`, `color: green`)
            const contentParam = searchParams.get("content");
            console.log("content param ref is", contentParamRef.current)
            console.log("contentParam is", contentParam)

            if(!contentParam || contentParamRef.current) return;
            console.log("contentParamRef is now", contentParamRef.current, contentParam)
            if(stopSearchParamEffectRef.current){
                console.log("Looks like we don't need to continue! search param effect is stopped!");
                return;
            };
            if(!iconStateRef.current) return;
            contentParamRef.current = contentParam;

            const markerIndex = iconStateRef.current.findIndex(marker=>marker.url === contentParam);
            if(markerIndex === -1) return;
            const marker = iconStateRef.current[markerIndex];
            setCenter(marker.position)
            handleClick(iconStateRef.current[markerIndex], markerIndex);
        }

        reactToSearchParams();

    },[searchParams, handleClick, setCenter, iconStateRef])



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