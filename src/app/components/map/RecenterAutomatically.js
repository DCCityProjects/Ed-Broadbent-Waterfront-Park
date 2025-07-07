import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function RecenterAutomatically({lat, lng}) {
    const map = useMap();
        useEffect(() => {
            map.setView([lat, lng]);
        }, [map, lat, lng]);
        
    return null;

}