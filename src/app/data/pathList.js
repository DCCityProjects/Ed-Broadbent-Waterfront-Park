function getNewBounds(newMapSWX, newMapSWY, svgWidth, svgHeight){
    const sWBounds = [newMapSWY, newMapSWX];
    const nEBounds = [newMapSWY + svgHeight, newMapSWX + svgWidth];
    console.log("South west bounds", sWBounds);
    console.log("Northeast bounds:", nEBounds);
    return [sWBounds, nEBounds];
}


const newBounds = getNewBounds(265, 3430,  489.79, 637.73);
console.log(newBounds)
export const pathList = [
    {
        id: "edBroadbentToGardenOfHR",
        d: "M483.11,562.84c4.81,57.49-85.39,61.85-85.39,61.85l-391.22,6.43V6.5h44.01",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        fill: "none",
        width: 489.79,
        height: 637.73,
        bounds: newBounds,
        from: "about-ed-broadbent",
        to: "garden-of-human-rights"
    }
]