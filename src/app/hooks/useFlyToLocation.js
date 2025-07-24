import { useCallback } from "react";

export default function useFlyToLocation(mapRef) {
    const flyToLocation = useCallback((coordinates, zoom, time)=>{
        console.log("flying to location!")
        const map = mapRef.current;
        if(!map) return;
        map.flyTo(coordinates, zoom, {animate: true, duration: time, easeLinearity: 0.5})
    }, [mapRef])

    return flyToLocation;
}
