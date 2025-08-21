import { useCallback } from "react";

export default function useFlyToLocation(mapRef) {
    const flyToLocation = useCallback((coordinates, zoom, time)=>{
        const map = mapRef.current;
        if(!map) return;
        map.flyTo(coordinates, zoom, {animate: true, duration: time, easeLinearity: 0.25})
    }, [mapRef])

    return flyToLocation;
};
