function getNewBounds(newMapSWX, newMapSWY, svgWidth, svgHeight){
    const sWBounds = [newMapSWY, newMapSWX];
    const nEBounds = [newMapSWY + svgHeight, newMapSWX + svgWidth];
    console.log("South west bounds", sWBounds);
    console.log("Northeast bounds:", nEBounds);
    return [sWBounds, nEBounds];
}


const edBroadbentToAmphitheatre = getNewBounds(265, 3430,  489.79, 637.73);
const mainMapToAmphitheatre = getNewBounds(265, 3430, 489.61, 950.53);

export const pathList = [
    {
        id: "edBroadbentToAmphitheatre",
        d: "M50.51,6.5H6.5v624.62l391.22-6.43s90.19-4.36,85.39-61.85",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        fill: "none",
        width: 489.79,
        height: 637.73,
        bounds: edBroadbentToAmphitheatre,
        from: "About Ed Broadbent",
        to: "Amphitheatre and Stage"
    },
    {
        id: "mainMapToAmphitheatre",
        d: "M62.77,0v75.42H6.5v868.52l451.74-6.43s24.87.72,24.87-61.85",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        fill: "none",
        width: 489.61,
        height: 950.53,
        bounds: mainMapToAmphitheatre,
        from: "Main Map North",
        to: "Amphitheatre and Stage"
    }
]