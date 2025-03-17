import { useMapEvent } from "react-leaflet";

export default function ZoomTool({setZoom}) {
    const map = useMapEvent({
        zoomend: ()=>{
            setZoom(map.getZoom());
        }
        // map.setZoom(-1);
    })

    return null;
}