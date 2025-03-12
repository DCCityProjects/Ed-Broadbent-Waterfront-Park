import { useMapEvent } from "react-leaflet";

export default function ZoomTool({setIconSize, setOffset}) {
    useMapEvent("zoomend", (e) => {
        const zoom = e.target.getZoom();
        let newSize = 100;
        let newOffset = 0;

        if (zoom === -1) {
            newSize = 70;
            newOffset = 15;
        } else if (zoom <= -2) {
            newSize = 50
            newOffset = 25

        }
        // else if (zoom < 10) newSize = 100;
        console.log(newOffset)
        console.log(newSize)
        setIconSize(newSize);
        setOffset(newOffset);
    })

    return null;
}