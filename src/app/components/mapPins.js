import L from "leaflet";

// TODO: change the Icons to DivIcons so we can change scale!! and probably clean this up
// const iconAmpGrey = new L.Icon({
//     iconUrl: "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--amp.svg",
//     iconSize: [50, 50],
//     iconAnchor: [25, 25],
//     popupAnchor: [0,-40],
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     className: "mapPin mapPin__amphitheatre--grey"
// })

function makeDivIcon(src, className){
    return new L.Icon({
        iconUrl: src,
        iconSize: undefined,
        iconAnchor: undefined,
        popupAnchor: [0, -40],
        className: className
    })

};

export function getAllIcons() {
    return {
        iconAmpGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--amp-gf.svg",
        "map-marker map-marker__amp--grey"
        ),
        iconAmpCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--amp-cf.svg",
        "map-marker map-marker__amp--col"
        ),
        iconBenchesGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--benches-gf.svg",
        "map-marker map-marker__benches--grey"
        ),
        iconBenchesCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--benches-cf.svg",
        "map-marker map-marker__benches--col"
        ),
        iconBikeGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--bike-gf.svg",
        "map-marker map-marker__bike--grey"
        ),
        iconBikeCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--bike-cf.svg",
        "map-marker map-marker__bike--col"
        ),
        iconBridgeGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--bridge-gf.svg",
        "map-marker map-marker__bridge--grey"
        ),
        iconBridgeCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--bridge-cf.svg",
        "map-marker map-marker__bridge--col"
        ),
        iconEBGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--eb-gf.svg",
        "map-marker map-marker__eb--grey"
        ),
        iconEBCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--eb-cf.svg",
        "map-marker map-marker__eb--col"
        ),
        iconHRGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--hr-gf.svg",
        "map-marker map-marker__hr--grey"
        ),
        iconHRCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--hr-cf.svg",
        "map-marker map-marker__hr--col"
        ),
        iconIGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--i-gf.svg",
        "map-marker map-marker__i--grey"
        ),
        iconICol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--i-cf.svg",
        "map-marker map-marker__i--col"
        ),
        iconMapGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--map-gf.svg",
        "map-marker map-marker__map--grey"
        ),
        iconMapCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--map-cf.svg",
        "map-marker map-marker__map--col"
        ),
        iconOGGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--og-gf.svg",
        "map-marker map-marker__og--grey"
        ),
        iconOGCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--og-cf.svg",
        "map-marker map-marker__og--col"
        ),
        iconParkingGrey: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/greyFill/icon--parking-gf.svg",
        "map-marker map-marker__parking--grey"
        ),
        iconParkingCol: makeDivIcon(
        "/Ed-Broadbent-Waterfront-Park/images/svgs/mapPins/coloredFill/icon--parking-cf.svg",
        "map-marker map-marker__parking--col"
        ),
    };
};

