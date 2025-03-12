"use client"

import { ImageOverlay, MapContainer, Marker, Popup, Tooltip, useMapEvent } from "react-leaflet";
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


export default function LeafletMap({setContent, popupRef}) {
    const [zoom, setZoom] = useState(0);
    const [center, setCenter] = useState([4300, 550]);
    const [iconSize, setIconSize] = useState(50);
    const [iconState, setIconState] = useState([
        
    ]);
    const [offset, setOffset] = useState(0);

    // const [L, setL] = useState(null);


    const bounds = [[0, 0], [4779, 2868]];
    // const panBounds = [[0,0], [4779, 2868]];

    // useEffect(()=>{
    //     console.log(offset)
    // },[offset])


    useEffect(()=>{
        setIconState([
            {icon: iconMainGrey, name: "Main Entrance", permanent: false},
            {icon: iconMainGrey, name: "About Ed Broadbent", permanent: false},
            {icon: iconAmphitheatreGrey, name: "Amphitheatre and Stage", permanent: false},
            {icon: iconGardenHRGrey, name: "Garden of Human Rights", permanent: false},
            {icon: iconOrangeGardenGrey, name: "Orange Garden", permanent: false},
            {icon: iconMainGrey, name: "Parking Entrance", permanent: false}
        ])
    }, [])

    useEffect(()=>{
        console.log(iconState)
    }, [iconState])

    const handleClick = (e, marker, index) => {
        console.log(`clicked ${marker.name}`);
        setContent(marker.url);
        setIconState(prev=>{
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                permanent: true,
                icon: marker.iconGrey?.icon === iconMainGrey ? iconMainSelect :
                marker.iconGrey?.icon === iconAmphitheatreGrey ? iconAmphitheatreSelect :
                marker.iconGrey?.icon === iconGardenHRGrey ? iconGardenHRSelect :
                marker.iconGrey?.icon === iconOrangeGardenGrey ? iconOrangeGardenSelect :
                marker.iconGrey?.icon
            };
            return newState;
        })
        gsap.to(popupRef.current, {y: 0, duration: 1})
        console.log(popupRef.current)
        if(popupRef.current){
            console.log("popupRef" + popupRef.current)
        } else {
            console.log("no popupRef")
        }
    }

    const markers = [
        {
            position: [4300,550],
            iconGrey: iconMainGrey,
            iconSelect: iconMainSelect,
            name: "Main Entrance",
            url: "main-entrance"
        },
        {
            position: [4035,570],
            iconGrey: iconMainGrey,
            iconSelect: iconMainSelect,
            name: "About Ed Broadbent",
            url: "about-ed-broadbent"
        },
        {
            position: [3500,954],
            iconGrey: iconAmphitheatreGrey,
            iconSelect: iconAmphitheatreSelect,
            name: "Amphitheatre and Stage",
            url: "amphitheatre-and-stage"
        },
        {
            position: [3200,980],
            iconGrey: iconGardenHRGrey,
            iconSelect: iconGardenHRSelect,
            name: "Garden of Human Rights",
            url: "garden-of-human-rights"
        },
        {
            position: [920,1680],
            iconGrey: iconOrangeGardenGrey,
            iconSelect: iconOrangeGardenSelect,
            name: "Orange Garden",
            url: "orange-garden"
        },
        {
            position: [465,1570],
            iconGrey: iconMainGrey,
            iconSelect: iconMainSelect,
            name: "Parking Entrance",
            url: "parking-entrance"
        }
    ];
    // maxBounds={panBounds}
    return (
        <div id="map">
            <MapContainer crs={L.CRS.Simple} center={center} zoom={zoom} minZoom={-3} zoomControl={false} closePopupOnClick={false}>
                {/* <ZoomTool setIconSize={setIconSize} setOffset={setOffset} /> */}
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
                                    handleClick(e, marker, index);    
                                    setCenter(marker.position);                                    
                                }
                            }}
                            zIndexOffset={9999}>
                            
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
                
                <ImageOverlay url="/images/svgs/map.svg" bounds={bounds}  />
            </MapContainer>
        
        </div>
    );
}