import { useEffect } from "react";

export default function useMarkerData(icons, setIconState){
useEffect(()=>{
        if(!icons) return;

        setIconState([
            {
                position: [3458, 350],
                zIndexOffset: 1000,
                icon: icons.iconAmpGrey,
                iconGrey: icons.iconAmpGrey,
                iconCol: icons.iconAmpCol,
                name: "Amphitheatre and Stage",
                url: "amphitheatre-and-stage",
                permanent: false
            },
            {
                position: [570, 1820],
                zIndexOffset: 1000,
                icon: icons.iconBenchesGrey,
                iconGrey: icons.iconBenchesGrey,
                iconCol: icons.iconBenchesCol,
                name: "Benches",
                url:"benches",
                permanent: false
            },
            {
                position: [3540, 310],
                zIndexOffset: 1000,
                icon: icons.iconBikeGrey,
                iconGrey: icons.iconBikeGrey,
                iconCol: icons.iconBikeCol,
                name: "Bike Parking",
                url:"bike-parking-west",
                permanent: false
            },
            {
                position: [3740, 1400],
                zIndexOffset: 1000,
                icon: icons.iconBikeGrey,
                iconGrey: icons.iconBikeGrey,
                iconCol: icons.iconBikeCol,
                name: "Bike Parking",
                url:"bike-parking-east",
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
                position: [4250, 400],
                zIndexOffset: 1000,
                icon: icons.iconEBGrey,
                iconGrey: icons.iconEBGrey,
                iconCol: icons.iconEBCol,
                name: "About Ed Broadbent",
                url: "about-ed-broadbent",
                permanent: false
            },
            {
                position: [3145, 780],
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
                position: [4270, 320],
                zIndexOffset: 1000,
                icon: icons.iconMapGrey,
                iconGrey: icons.iconMapGrey,
                iconCol: icons.iconMapCol,
                name: "Main Map North",
                url: "main-map-north",
                permanent: false
            },
            {
                position: [405, 1553],
                zIndexOffset: 1000,
                icon: icons.iconMapGrey,
                iconGrey: icons.iconMapGrey,
                iconCol: icons.iconMapCol,
                name: "Main Map South",
                url: "main-map-south",
                permanent: false
            },
            {
                position: [775, 1590],
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
}

