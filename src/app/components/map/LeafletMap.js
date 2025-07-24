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

    useEffect(()=>{
        if(!icons) return;
        if (iconStateRef.current === null && iconState.length > 0){
            console.log("setting iconstateref to iconstate")
            iconStateRef.current = [...iconState];
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

    const handleClick = useCallback((marker) => {
        console.log(`%cClicked ${marker.name}`, `color: green`);

        stopSearchParamEffectRef.current = true;
        const params = new URLSearchParams(searchParams);
        params.set("content", marker.url);
        router.replace(`?${params.toString()}`);
        
    }, [searchParams, router])

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
    useEffect(() => {
        const testParam = searchParams.get("content");
        console.log("URL param content is:", testParam);
    }, [searchParams]);

    useEffect(()=>{
        function reactToSearchParams(){
            console.log(`%cStarting reactToSearchParams`, `color: green`);
            const contentParam = searchParams.get("content");
            if(contentParam){
                console.log("contentParam exists! we are now setting content!")
                setContent(contentParam);
            };
        };
        reactToSearchParams();
    },[searchParams, setContent]);

    useEffect(()=>{
        console.log(content)
    }, [content]);

    useEffect(()=>{
        function selectIcon(){
            // console.log(iconState)
            console.log(iconStateRef.current)
            if(!iconStateRef.current) return;
            let resetState = resetIcons(iconStateRef.current);
            iconStateRef.current = resetState;
            setIconState(resetState);
            console.log("the reset state is", resetState);
            console.log(content)
            const markerIndex = findMarkerIndex(iconStateRef.current, content);
            console.log("marker is:", markerIndex);
            if(markerIndex === -1) return;
            let newIconState = changeIconColor(markerIndex, resetState);
            setIconState(newIconState);
            const marker = newIconState[markerIndex];
            marker.zIndexOffset = 10000;
            flyToLocation(marker.position, -2, 1);
            gsap.to(popupRef.current, {y: 0, duration: 1})
        };

        selectIcon();
    }, [resetIcons, setIconState, content, changeIconColor, flyToLocation, popupRef]);

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