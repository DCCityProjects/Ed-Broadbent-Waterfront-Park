import L from "leaflet";

const iconAmphitheatreGrey = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/amphitheatre-grey.svg",
    // iconRetinaUrl: '/nextjs-github-pages/images/svgs/mapPins/amphitheatre-grey.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,-40],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__amphitheatre--grey"
})

const iconAmphitheatreSelect = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/amphitheatre-select.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__amphitheatre--select"
})

const iconGardenHRGrey = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/garden-hr-grey.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__gardenHR--grey"
});

const iconGardenHRSelect = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/garden-hr-select.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__gardenHR--select"
});

const iconOrangeGardenGrey = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/orange-garden-grey.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__orangeGarden--grey"
});

const iconOrangeGardenSelect = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/orange-garden-select.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__orangeGarden--select"
});

const iconMainGrey = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/main-grey.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,-25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--grey"
});

const iconMainSelect = new L.Icon({
    iconUrl: "/nextjs-github-pages/images/svgs/mapPins/main-select.svg",
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0,0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    className: "mapPin mapPin__main--select"
});


export {iconAmphitheatreGrey, iconAmphitheatreSelect, iconGardenHRGrey, iconGardenHRSelect, iconOrangeGardenGrey, iconOrangeGardenSelect, iconMainGrey, iconMainSelect};