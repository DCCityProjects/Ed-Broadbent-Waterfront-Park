import L from "leaflet";

const iconAmpGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--amp.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,-40],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__amphitheatre--grey"
})

const iconAmpCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--amp-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,-40],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__amphitheatre--grey"
})

const iconBenchesGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--benches.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__amphitheatre--select"
})

const iconBenchesCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--benches-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__amphitheatre--select"
})

const iconBikeGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--bike.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__gardenHR--grey"
});

const iconBikeCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--bike-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__gardenHR--grey"
});

const iconBridgeGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--bridge.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__gardenHR--select"
});

const iconBridgeCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--bridge-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__gardenHR--select"
});

const iconEBGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--eb.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__orangeGarden--grey"
});

const iconEBCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--eb-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__orangeGarden--grey"
});

const iconHRGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--hr.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__orangeGarden--select"
});

const iconHRCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--hr-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__orangeGarden--select"
});

const iconIGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--i.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,-25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--grey"
});

const iconICol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--i-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,-25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--grey"
});

const iconMapGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--map.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});

const iconMapCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--map-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});

const iconOGGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--og.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});

const iconOGCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--og-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});

const iconParkingGrey = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--parking.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});

const iconParkingCol = new L.Icon({
    iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--parking-col.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});


export {
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
};