"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMap, useMapEvent } from "react-leaflet";
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
    iconParkingSelect,
    iconMainGrey,
    iconMainSelect
} from "@/app/components/mapPins"
import MapPin from "./MapPin";
import ZoomTool from "./ZoomTool";
import gsap from "gsap";
import RecenterAutomatically from "./RecenterAutomatically";
import { useSearchParams } from "next/navigation";


export default function LeafletMap({setContent, popupRef, resetIcons, isIconClicked, setIsIconClicked, iconState, setIconState}) {
    const [zoom, setZoom] = useState(0);
    const [center, setCenter] = useState([4300, 550]);
    const [iconSize, setIconSize] = useState(50);
    // const [iconState, setIconState] = useState([]);
    const [iconList, setIconList] = useState([]);
    const [offset, setOffset] = useState(0);

    // const [L, setL] = useState(null);

    const searchParams = useSearchParams();

    useEffect(()=>{
        setIconState([
            {icon: iconMainGrey, iconGrey:iconMainGrey, iconSelect: iconMainSelect, name: "Main Entrance", permanent: false},
            {icon: iconMainGrey, iconGrey: iconMainGrey, iconSelect: iconMainSelect, name: "About Ed Broadbent", permanent: false},
            {icon: iconAmphitheatreGrey, iconGrey: iconAmphitheatreGrey, iconSelect: iconAmphitheatreSelect, name: "Amphitheatre and Stage", permanent: false},
            {icon: iconGardenHRGrey, iconGrey:iconGardenHRGrey, iconSelect: iconGardenHRSelect, name: "Garden of Human Rights", permanent: false},
            {icon: iconOrangeGardenGrey, iconGrey: iconOrangeGardenGrey, iconSelect: iconOrangeGardenSelect, name: "Orange Garden", permanent: false},
            {icon: iconMainGrey, iconGrey: iconMainGrey, iconSelect: iconMainSelect, name: "Parking Entrance", permanent: false}
        ])
    }, [setIconState])

    useEffect(()=>{
        const contentParam = searchParams.get("content");
        if(contentParam){
            setContent(contentParam)
            const markerIndex = markers.findIndex(marker=>marker.url === contentParam);
            if(markerIndex !== -1){
                const marker = markers[markerIndex];
                setCenter(marker.position);
                handleClick(null, marker, markerIndex);
            }
            console.log(contentParam)
        }
    },[])


    const bounds = [[0, 0], [4779, 2868]];
    const panBounds = [[-1000, -1000], [5779, 3868]];

    // useEffect(()=>{
    //     console.log(offset)
    // },[offset])

    


    useEffect(()=>{
        console.log(iconState)
    }, [iconState])

    // const resetIcons = ()=>{
    //     iconState.map((icon, index)=>{
    //         icon.icon = icon.iconGrey;
    //     })
    // }


    const handleClick = (e, marker, index) => {
        console.log(`clicked ${marker.name}`);
        if(iconState[index]){
            console.log(iconState[index].icon);
            setIsIconClicked(false);
            resetIcons(iconState);

            const newIconState = [...iconState];
            if (iconState[index].icon === iconMainGrey) {
                newIconState[index].icon = iconMainSelect;
            } else if (iconState[index].icon === iconAmphitheatreGrey) { 
                newIconState[index].icon = iconAmphitheatreSelect;
            } else if (iconState[index].icon === iconGardenHRGrey) {
                newIconState[index].icon = iconGardenHRSelect;
            } else if (iconState[index].icon === iconOrangeGardenGrey) {
                newIconState[index].icon = iconOrangeGardenSelect;
            }

            setIconState(newIconState);
            // if(iconState[index].icon === iconMainGrey){
            //     iconState[index].icon = iconMainSelect;
            // } else if (iconState[index].icon === iconAmphitheatreGrey){ 
            //     iconState[index].icon = iconAmphitheatreSelect;
            // } else if (iconState[index].icon === iconGardenHRGrey){
            //     iconState[index].icon = iconGardenHRSelect;
            // } else if (iconState[index].icon === iconOrangeGardenGrey){
            //     iconState[index].icon = iconOrangeGardenSelect;
            // }
            marker.zIndexOffset = 10000;

            setContent(marker.url);
            // setIconState(prev=>{
            //     const newState = [...prev];
            //     newState[index] = {
            //         ...newState[index],
            //         permanent: true,
            //     };
            //     return newState;
            // })
            gsap.to(popupRef.current, {y: 0, duration: 1})
            console.log(popupRef.current)
            if(popupRef.current){
                console.log("popupRef" + popupRef.current)
            } else {
                console.log("no popupRef")
            }
        } else {
            console.log("No icon state")
        }
        
    }

    const markers = [
        {
            position: [4300,550],
            zIndexOffset: 1000,
            iconGrey: iconMainGrey,
            iconSelect: iconMainSelect,
            name: "Main Entrance",
            url: "main-entrance"
        },
        {
            position: [4035,570],
            zIndexOffset: 1000,
            iconGrey: iconMainGrey,
            iconSelect: iconMainSelect,
            name: "About Ed Broadbent",
            url: "about-ed-broadbent"
        },
        {
            position: [3520,947],
            zIndexOffset: 1000,
            iconGrey: iconAmphitheatreGrey,
            iconSelect: iconAmphitheatreSelect,
            name: "Amphitheatre and Stage",
            url: "amphitheatre-and-stage"
        },
        {
            position: [3200,980],
            zIndexOffset: 1000,
            iconGrey: iconGardenHRGrey,
            iconSelect: iconGardenHRSelect,
            name: "Garden of Human Rights",
            url: "garden-of-human-rights"
        },
        {
            position: [920,1680],
            zIndexOffset: 1000,
            iconGrey: iconOrangeGardenGrey,
            iconSelect: iconOrangeGardenSelect,
            name: "Orange Garden",
            url: "orange-garden"
        },
        {
            position: [465,1570],
            zIndexOffset: 1000,
            iconGrey: iconMainGrey,
            iconSelect: iconMainSelect,
            name: "Parking Entrance",
            url: "parking-entrance"
        }
    ];

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
    
    // maxBounds={panBounds}
    return (
        <div id="map">
            <MapContainer crs={L.CRS.Simple} center={center} zoomDelta={0.8} maxBounds={panBounds} zoomSnap={0} zoom={zoom} minZoom={-3} zoomControl={false} closePopupOnClick={false}>
                {/* <ZoomTool setZoom={setZoom} /> */}
                <UpdateZoom center={center} zoom={zoom} />
                <RecenterAutomatically lat={center[0]} lng={center[1]} />
                {markers.map((marker, index) =>{
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
                {/* <MapPin position={[4300,550]} iconURL={"/images/svgs/mapPins/main-grey.svg"} name={"Ed Broadbent Waterfront Park"} />
                <Marker position={[4300,550]} icon={iconMainGrey} iconSize={[iconSize, iconSize]} zIndexOffset={99999} eventHandlers={{click: (e)=>{console.log("Clicked!")}}}>
                    <Tooltip className="map-pin" direction="top" key={offset} offset={[0, offset]}  closeButton={false} autoClose={false} closeOnClick={false}>Ed Broadbent Waterfront Park</Tooltip>
                </Marker>
                {/* <MapPin position={[4035,570]} iconURL={"/images/svgs/mapPins/main-grey.svg"} name={"About Ed Broadbent"} /> */}
                {/* <Marker position={[4035,570]} icon={iconMainGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" key={offset} offset={[0, offset]}  closeButton={false} autoClose={false} closeOnClick={false}>About Broadbent</Tooltip>
                </Marker> */}
                {/* <MapPin position={[3500,954]} iconURL={"/images/svgs/mapPins/amphitheatre-grey.svg"} name={"Amphitheatre and Stage"} /> */}
                {/* <Marker position={[3500,954]} icon={iconAmphitheatreGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" key={offset} offset={[0, offset]} closeButton={false} autoClose={false} closeOnClick={false}>Amphitheatre and Stage</Tooltip>
                </Marker> */}
                {/* <MapPin position={[3200,980]} iconURL={"/images/svgs/mapPins/garden-hr-grey.svg"} name={"Garden of Human Rights"} /> */}
                {/* <Marker position={[3200,980]} icon={iconGardenHRGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" key={offset}  closeButton={false} offset={[0, offset]} autoClose={false} closeOnClick={false}>Garden of Human Rights (Simcoe)</Tooltip>
                </Marker> */}
                {/* <MapPin position={[920,1680]} iconURL={"/images/svgs/mapPins/orange-garden-grey.svg"} name={"Orange Garden"} /> */}
                {/* <Marker position={[920,1680]} icon={iconOrangeGardenGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" key={offset} closeButton={false} offset={[0, offset]} autoClose={false} closeOnClick={false}>Orange Garden</Tooltip>
                </Marker> */}
                {/* <MapPin position={[465,1570]} iconURL={"/images/svgs/mapPins/main-grey.svg"} name={"Parking Entrance"} /> */}
                {/* <Marker position={[465,1570]} icon={iconMainGrey} zIndexOffset={99999}>
                    <Tooltip className="map-pin" direction="top" key={offset} closeButton={false} offset={[0, offset]} autoClose={false} closeOnClick={false}>Parking Entrance</Tooltip>
                </Marker> */}
                
                <ImageOverlay url="/Ed-Broadbent-Waterfront-Park/images/svgs/map.svg" bounds={bounds}  />
            </MapContainer>
        
        </div>
    );
}