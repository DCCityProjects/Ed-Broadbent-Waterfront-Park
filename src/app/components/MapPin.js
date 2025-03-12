import { Marker, Tooltip, useMapEvent } from "react-leaflet";
import L, { icon } from "leaflet";
import { useEffect, useMemo, useState } from "react";

export default function MapPin({position, url, name}) {
    const [iconSize, setIconSize] = useState(100);

    if (!url || !iconSize) {
        console.log('Icon URL or size is missing!');
        return null;
    }

    useEffect(() => {
        console.log("Icon Size:", iconSize);
        console.log("Popup Anchor:", dynamicIcon.options.popupAnchor);
    }, [dynamicIcon, iconSize]);

    useMapEvent("zoomend", (e) => {
        const zoom = e.target.getZoom();
        let newSize = 100;
    
        if (zoom === -2) newSize = 60;
        else if (zoom === -3) newSize = 40;
        // else if (zoom < 10) newSize = 100;
    
        setIconSize(newSize);
    });


    const dynamicIcon = useMemo(()=>{
        new L.Icon({
            iconUrl: url,
            // iconRetinaUrl: '/images/svgs/mapPins/amphitheatre-grey.svg',
            iconSize: [iconSize, iconSize],
            iconAnchor: [iconSize/2,iconSize/2],
            popupAnchor: [0, -iconSize/2],
            // tooltipAnchor: [0, -iconSize/2],
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
        }), [url, iconSize]
    })
    

    useEffect(()=>{
        console.log("Icon Size:", iconSize);
        console.log(dynamicIcon.options.popupAnchor)
    })

    console.log("MapPin position:", position);
    console.log("iconSize:", iconSize);

    return (
        <Marker position={position} icon={dynamicIcon}  zIndexOffset={99999}>
            <Tooltip className="map-pin" direction="top" offset={[0, -iconSize / 2]} closeButton={false} permanent autoClose={false} closeOnClick={false}>{name}</Tooltip>
        </Marker>
    );
}