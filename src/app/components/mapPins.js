import L from "leaflet";

// TODO: change the Icons to DivIcons so we can change scale!! and probably clean this up
// const iconAmpGrey = new L.Icon({
//     iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--amp.svg",
//     iconSize: [50, 50],
//     iconAnchor: [25, 25],
//     popupAnchor: [0,-40],
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     className: "mapPin mapPin__amphitheatre--grey"
// })

function makeDivIcon(src, className){
    return new L.DivIcon({
        html: `<img src=${src}>`,
        iconSize: [50, 50],
        iconAnchor: [25, 25],
        popupAnchor: [0, -40],
        className: className
    })

};

const iconAmpGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--amp.svg",
    "map-marker map-marker__amp--grey"
);

const iconAmpCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--amp-col.svg",
    "map-marker map-marker__amp--col"
);

const iconBenchesGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--benches.svg",
    "mapPin mapPin__benches--grey"
);

const iconBenchesCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--benches-col.svg",
    "mapPin mapPin__benches--col"
);

const iconBikeGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--bike.svg",
    "mapPin mapPin__bike--grey"
);

const iconBikeCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--bike-col.svg",
    "mapPin mapPin__bike--col"
);

const iconBridgeGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--bridge.svg",
    "mapPin mapPin__bridge--grey"
);

const iconBridgeCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--bridge-col.svg",
    "mapPin mapPin__bridge--col"
);

const iconEBGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--eb.svg",
    "mapPin mapPin__eb--grey"
);

const iconEBCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--eb-col.svg",
    "mapPin mapPin__eb--col"
);

const iconHRGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--hr.svg",
    "mapPin mapPin__hr--grey"
);

const iconHRCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--hr-col.svg",
    "mapPin mapPin__hr--col"
);

const iconIGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--i.svg",
    "mapPin mapPin__i--grey"
);

const iconICol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--i-col.svg",
    "mapPin mapPin__i--col"
);

const iconMapGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--map.svg",
    "mapPin mapPin__map--grey"
);

const iconMapCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--map-col.svg",
    "mapPin mapPin__map--col"
);

const iconOGGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--og.svg",
    "mapPin mapPin__og--grey"
);

const iconOGCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--og-col.svg",
    "mapPin mapPin__og--col"
);

const iconParkingGrey = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/grey/icon--parking.svg",
    "mapPin mapPin__parking--grey"
);

const iconParkingCol = makeDivIcon(
    "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredOrange/icon--parking-col.svg",
    "mapPin mapPin__parking--col"
);


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