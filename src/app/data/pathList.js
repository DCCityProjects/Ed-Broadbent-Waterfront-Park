function getNewBounds(newMapSWX, newMapSWY, svgWidth, svgHeight){
    const sWBounds = [newMapSWY, newMapSWX];
    const nEBounds = [newMapSWY + svgHeight, newMapSWX + svgWidth];
    console.log("South west bounds", sWBounds);
    console.log("Northeast bounds:", nEBounds);
    return [sWBounds, nEBounds];
}

const amphitheatreToEdBroadbent = getNewBounds(270, 3455, 182.42, 869.22);
const amphitheatreToGardenOfHR = getNewBounds(328, 3104,  466.83, 360.32);
const amphitheatreToMainMapN = getNewBounds(270, 3455, 95.65, 821.09);
const amphitheatreToMainMapS = getNewBounds(353, 340, 1412.24, 3125.2);
const amphitheatreToOrangeGarden = getNewBounds(350, 755, 1412.24, 2709.83);
const edBroadbentToAmphitheatre = getNewBounds(270, 3443, 177.42, 878.48);
const edBroadbentToGardenOfHR = getNewBounds(270, 3110, 519.66, 1219.32);
const edBroadbentToMainMapN = getNewBounds(270, 4235, 182.1, 84.09);
const edBroadbentToMainMapS = getNewBounds(270, 347, 1497.24, 3978.5);
const edBroadbentToOrangeGarden = getNewBounds(270, 753, 1497.24, 3563.13);
const gardenOfHRToAmphitheatre = getNewBounds(331, 3104, 452.9, 359.85);
const gardenOfHRToEdBroadbent = getNewBounds(270, 3110, 519.66, 1219.32);
const gardenOfHRToMainMapN = getNewBounds(270, 3108, 523.38, 1164.54);
const gardenOfHRToMainMapS = getNewBounds(767, 343, 992.31, 2948.13);
const gardenOfHRToOrangeGarden = getNewBounds(770, 758, 992.31, 2528.07);
const mainMapNToAmphitheatre = getNewBounds(270, 3455, 95.65, 821.09);
const mainMapNToEdBroadbent = getNewBounds(270, 4235, 182.1, 84.09);
const mainMapNToGardenOfHR = getNewBounds(270, 3108, 523.38, 1164.54);
const mainMapNToMainMapS = getNewBounds(270, 340, 1497.27, 3935.73);
const mainMapNToOrangeGarden = getNewBounds(270, 758, 1497.27, 3517.92);
const orangeGardenToAmphitheatre = getNewBounds(350, 755, 1412.24, 2709.83);
const orangeGardenToEdBroadbent = getNewBounds(270, 753, 1497.24, 3563.13);
const orangeGardenToGardenOfHR = getNewBounds(770, 758, 992.31, 2528.07);
const orangeGardenToMainMapN = getNewBounds(270, 758, 1497.27, 3517.92);
const orangeGardenToMainMapS = getNewBounds(1550, 338, 81.36, 466.49);
const mainMapSToAmphitheatre = getNewBounds(353, 340, 1412.24, 3125.2);
const mainMapSToEdBroadbent = getNewBounds(270, 347, 1497.24, 3978.5);
const mainMapSToGardenOfHR = getNewBounds(767, 343, 992.31, 2948.13);
const mainMapSToMainMapN = getNewBounds(270, 340, 1497.27, 3935.73);
const mainMapSToOrangeGarden = getNewBounds(1550, 338, 81.36, 466.49);

export const pathList = [
    {
        id: "amphitheatreToGardenOfHR",
        d: "M31.13,6.5L6.5,35.05h33.71v318.77s295.95-10.43,420.12-75.63l-3.44,43.39",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 466.83,
        height: 360.32,
        bounds: amphitheatreToGardenOfHR,
        from: "Amphitheatre and Stage",
        to: "Garden of Human Rights"
    },
    {
        id: "amphitheatreToMainMapN",
        d: "M89.15,814.59H21.11c-8.07,0-14.61-6.54-14.61-14.61V17.64c0-6.15,4.99-11.14,11.14-11.14h27.23",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 95.65,
        height: 821.09,
        bounds: amphitheatreToMainMapN,
        from: "Amphitheatre and Stage",
        to: "Main Map North"
    },
    {
        id: "amphitheatreToMainMapS",
        d: "M6.5,6.5l2.36,19.52s254.62,11.97,405.17-15.3l-3.29,276.02s195.2-115.92,431.67-97.54l-19.24,110.65,100.5,15.31s-48.81,529.05,108.69,876.42c0,0,184.77,140.72,291.88,590.1s77.86,484.54,77.86,484.54c0,0-32.42,161.09-130.62,233.67l.2,618.82h-68.99l.5-49.21",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1412.24,
        height: 3125.2,
        bounds: amphitheatreToMainMapS,
        from: "Amphitheatre and Stage",
        to: "Main Map South"
    },
    {
        id: "amphitheatreToOrangeGarden",
        d: "M6.5,6.5l2.36,19.52s254.62,11.97,405.17-15.3l-3.29,276.02s188.58-115.79,425.05-97.41l-12.62,110.52,100.5,15.31s-48.81,529.05,108.69,876.42c0,0,184.77,140.72,291.88,590.1s77.86,484.54,77.86,484.54c0,0-28.4,154.27-126.6,226.85v160.27h-47.03v50",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1412.24,
        height: 2709.83,
        bounds: amphitheatreToOrangeGarden,
        from: "Amphitheatre and Stage",
        to: "Orange Garden"
    },
    {
        id: "edBroadbentToAmphitheatre",
        d: "M142.83,77.97l22.26,5.59,5.31-21.39c2.34-9.41-3.35-18.94-12.74-21.34L25.78,6.99c-9.77-2.51-19.28,4.87-19.28,14.96v828.68c0,11.79,9.56,21.36,21.36,21.36h61.25l1.46-18.71",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 177.42,
        height: 878.48,
        bounds: edBroadbentToAmphitheatre,
        from: "About Ed Broadbent",
        to: "Amphitheatre and Stage"
    },
    {
        id: "edBroadbentToGardenOfHR",
        d: "M142.87,85.3l22.37,8.44,9.23-42.53L6.5,6.5v877.09h90.83v329.23s298.03-10,412.87-71.57l2.96,39.32",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 519.66,
        height: 1219.32,
        bounds: edBroadbentToGardenOfHR,
        from: "About Ed Broadbent",
        to: "Garden of Human Rights"
    },
    {
        id: "edBroadbentToMainMapN",
        d: "M140.69,73.1l9.38,3.53c7.58,2.85,16.06-.87,19.08-8.39l5.63-13.97c2.61-6.48-1.23-13.74-8.05-15.24L19.54,6.75c-6.7-1.47-13.04,3.63-13.04,10.49v17.25c0,7.69,5.74,14.17,13.37,15.1l22.8,2.77",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 182.1,
        height: 84.09,
        bounds: edBroadbentToMainMapN,
        from: "About Ed Broadbent",
        to: "Main Map North"
    },
    {
        id: "edBroadbentToMainMapS",
        d: "M142.87,76.67l3.43,1.29c10.78,4.05,22.79-1.49,26.71-12.32h0c4.17-11.53-2.55-24.13-14.45-27.08L32.15,7.12C19.12,3.88,6.5,13.74,6.5,27.18v829.92c0,11.44,9.3,20.71,20.74,20.67l378.97-1.28c.88,0,1.74-.06,2.61-.17,10.36-1.36,80.52-11.84,249.11-64.86,1.17-.37,2.37-.63,3.59-.79,18.11-2.32,163.3-17.58,391.58,54.26,10.18,3.2,16.24,13.64,13.99,24.07l-57.66,267.41c-1.78,8.28-2.94,16.67-3.45,25.13-5.38,89.73-30.44,618.82,109.57,863.39,7.06,12.33,16.12,23.38,26.84,32.7,25.38,22.08,86.79,87.87,162.63,255.62,100.21,221.66,180.85,676.62,185.51,751.59,4.43,71.33-59.26,213.21-129.04,253.63-6.57,3.81-10.57,10.87-10.37,18.46l3.7,140.39v474.7h-69.5v-49.21",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.24,
        height: 3978.5,
        bounds: edBroadbentToMainMapS,
        from: "About Ed Broadbent",
        to: "Main Map South"
    },
    {
        id: "edBroadbentToOrangeGarden",
        d: "M142.87,76.67l3.43,1.29c10.78,4.05,22.79-1.49,26.71-12.32h0c4.17-11.53-2.55-24.13-14.45-27.08L32.15,7.12C19.12,3.88,6.5,13.74,6.5,27.18v829.92c0,11.44,9.3,20.71,20.74,20.67l378.97-1.28c.88,0,1.74-.06,2.61-.17,10.36-1.36,80.52-11.84,249.11-64.86,1.17-.37,2.37-.63,3.59-.79,18.11-2.32,163.3-17.58,391.58,54.26,10.18,3.2,16.24,13.64,13.99,24.07l-57.66,267.41c-1.78,8.28-2.94,16.67-3.45,25.13-5.38,89.73-30.44,618.82,109.57,863.39,7.06,12.33,16.12,23.38,26.84,32.7,25.38,22.08,86.79,87.87,162.63,255.62,100.21,221.66,180.85,676.62,185.51,751.59,4.43,71.33-59.26,213.21-129.04,253.63-6.57,3.81-10.57,10.87-10.37,18.46l3.7,140.39c.31,11.62-9.03,21.21-20.66,21.21h-2.39c-11.41,0-20.67,9.25-20.67,20.67v17.46",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.24,
        height: 3563.13,
        bounds: edBroadbentToOrangeGarden,
        from: "About Ed Broadbent",
        to: "Orange Garden"
    },
    {
        id: "gardenOfHRToMainMapS",
        d: "M12.55,141.58l-6.05-40.15S236.25-18.77,424.41,11.34l-19.94,106.02,102.43,14.03s-34.06,490.52,76.37,824.58c10.49,31.74,28.58,60.42,52.5,83.77,62.16,60.69,199.07,225.99,269.83,556.34l78.18,419.02c1.44,7.72,2.12,15.55,2.03,23.41-.51,44.62-10.64,189.43-117.19,259.24-7.99,5.23-12.71,14.22-12.71,23.77v620.12h-70.17l-.53-52.08",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 992.31,
        height: 2948.13,
        bounds: gardenOfHRToMainMapS,
        from: "Garden of Human Rights",
        to: "Main Map South"
    },
    {
        id: "gardenOfHRToOrangeGarden",
        d: "M12.55,141.58l-6.05-40.15S236.25-18.77,424.41,11.34l-19.94,106.02,102.43,14.03s-34.06,490.52,76.37,824.58c10.49,31.74,28.58,60.42,52.5,83.77,62.16,60.69,199.07,225.99,269.83,556.34l78.18,419.02c1.44,7.72,2.12,15.55,2.03,23.41-.51,44.62-10.64,189.43-117.19,259.24-7.99,5.23-12.71,14.22-12.71,23.77v152.91s-41.26-1.04-41.26-1.04v48.18",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 992.31,
        height: 2528.07,
        bounds: gardenOfHRToOrangeGarden,
        from: "Garden of Human Rights",
        to: "Orange Garden"
    },
    {
        id: "mainMapNToGardenOfHR",
        d: "M44.33,6.91l-37.83-.41v822.31h90.83v329.23s302.94-13.32,419.55-68.03l-2.21,32.11",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 523.38,
        height: 1164.54,
        bounds: mainMapNToGardenOfHR,
        from: "Main Map North",
        to: "Garden of Human Rights"
    },
    {
        id: "mainMapNToMainMapS",
        d: "M44.33,6.5H6.5v826.3h382.73c6.1,0,12.18-.45,18.21-1.36,27.84-4.19,112.41-18.97,213.58-56.32,94.53-34.89,339.94,4.8,450.01,50.52l-64.2,297.78s-48.8,377.24,82.34,824.25c11.66,39.74,35.1,75.02,67.14,101.26,2.21,1.81,4.51,3.69,6.91,5.62,43.11,34.85,163.11,215.22,242.37,535.8,67.48,272.95,82.09,413.64,84.95,449.43.5,6.26.23,12.55-.83,18.74-6.73,39.51-38.77,191.75-138.93,240.26l4.6,174.69-.76,455.75h-69.29v-49.3",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.27,
        height: 3935.73,
        bounds: mainMapNToMainMapS,
        from: "Main Map North",
        to: "Main Map South"
    },
    {
        id: "mainMapNToOrangeGarden",
        d: "M44.33,6.5H6.5v826.3h382.73c6.1,0,12.18-.45,18.21-1.36,27.84-4.19,112.41-18.97,213.58-56.32,94.53-34.89,339.94,4.8,450.01,50.52l-64.2,297.78s-48.8,377.24,82.34,824.25c11.66,39.74,35.1,75.02,67.14,101.26,2.21,1.81,4.51,3.69,6.91,5.62,43.11,34.85,163.11,215.22,242.37,535.8,67.48,272.95,82.09,413.64,84.95,449.43.5,6.26.23,12.55-.83,18.74-6.73,39.51-38.77,191.75-138.93,240.26l4.6,174.69h-38.38l-.58,37.94",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.27,
        height: 3517.92,
        bounds: mainMapNToOrangeGarden,
        from: "Main Map North",
        to: "Orange Garden"
    },
    {
        id: "orangeGardenToMainMapS",
        d: "M33.77,44.62V13.55c0-3.9,3.16-7.05,7.05-7.05h27.82c3.43,0,6.21,2.78,6.21,6.21v439.1c0,4.52-3.66,8.18-8.18,8.18H16.09c-5.3,0-9.59-4.29-9.59-9.59v-39.62",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 81.36,
        height: 466.49,
        bounds: orangeGardenToMainMapS,
        from: "Orange Garden",
        to: "Main Map South"
    },
    {
        id: "mainMapNToAmphitheatre",
        d: "M44.86,6.5h-27.23c-6.15,0-11.14,4.99-11.14,11.14v782.34c0,8.07,6.54,14.61,14.61,14.61h68.04",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 95.65,
        height: 821.09,
        bounds: mainMapNToAmphitheatre,
        from: "Main Map North",
        to: "Amphitheatre and Stage"
    },
    {
        id: "mainMapSToOrangeGarden",
        d: "M6.5,410.78v39.62c0,5.3,4.29,9.59,9.59,9.59h50.58c4.52,0,8.18-3.66,8.18-8.18V12.71c0-3.43-2.78-6.21-6.21-6.21h-27.82c-3.9,0-7.05,3.16-7.05,7.05v31.07",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 81.36,
        height: 466.49,
        bounds: mainMapSToOrangeGarden,
        from: "Main Map South",
        to: "Orange Garden"
    },
    {
        id: "amphitheatreToEdBroadbent",
        d: "M87.4,862.72H17.56c-6.11,0-11.06-4.95-11.06-11.06V15.08c0-5.7,5.45-9.81,10.93-8.25l150.65,42.89c5.5,1.57,8.83,7.16,7.58,12.74l-3.42,15.31c-1.45,6.47-8.33,10.13-14.5,7.7l-14.85-5.85",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 182.42,
        height: 869.22,
        bounds: amphitheatreToEdBroadbent,
        from: "Amphitheatre and Stage",
        to: "About Ed Broadbent"
    },
    {
        id: "gardenOfHRToAmphitheatre",
        d: "M444.38,321.58l1.99-25.05c.63-7.98-7.48-13.76-14.8-10.53-116.03,51.23-340.46,64.81-392.78,67.34-6.04.29-11.09-4.53-11.09-10.58V45.64c0-5.85-4.74-10.59-10.59-10.59h0c-9.06,0-13.94-10.64-8.02-17.51l9.53-11.04",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 452.9,
        height: 359.85,
        bounds: gardenOfHRToAmphitheatre,
        from: "Garden of Human Rights",
        to: "Amphitheatre and Stage"
    },
    {
        id: "gardenOfHRToMainMapN",
        d: "M514.67,1122.13l2.21-32.11c-116.61,54.71-419.55,68.03-419.55,68.03v-329.23H6.5V6.5l37.83.41",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 523.38,
        height: 1164.54,
        bounds: gardenOfHRToMainMapN,
        from: "Garden of Human Rights",
        to: "Main Map North"
    },
    {
        id: "gardenOfHRToEdBroadbent",
        d: "M513.16,1180.58l-2.96-39.32c-114.84,61.57-412.87,71.57-412.87,71.57v-329.23H6.5V6.5l167.98,44.72-9.23,42.53-22.37-8.44",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 519.66,
        height: 1219.32,
        bounds: gardenOfHRToEdBroadbent,
        from: "Garden of Human Rights",
        to: "About Ed Broadbent"
    },
    {
        id: "mainMapNToEdBroadbent",
        d: "M42.68,52.37l-22.8-2.77c-7.63-.93-13.37-7.41-13.37-15.1v-17.25c0-6.86,6.34-11.96,13.04-10.49l147.19,32.28c6.82,1.5,10.66,8.76,8.05,15.24l-5.63,13.97c-3.03,7.51-11.5,11.24-19.08,8.39l-9.38-3.53",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 182.1,
        height: 84.09,
        bounds: mainMapNToEdBroadbent,
        from: "Main Map North",
        to: "About Ed Broadbent"
    },
    {
        id: "orangeGardenToAmphitheatre",
        d: "M1228.47,2703.33v-50h47.03v-160.27c98.2-72.57,126.6-226.85,126.6-226.85,0,0,29.25-35.17-77.86-484.54-107.1-449.38-291.88-590.1-291.88-590.1-157.5-347.37-108.69-876.42-108.69-876.42l-100.5-15.31,12.62-110.52c-236.47-18.38-425.05,97.41-425.05,97.41l3.29-276.02C263.48,37.99,8.86,26.02,8.86,26.02L6.5,6.5",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1412.24,
        height: 2709.83,
        bounds: orangeGardenToAmphitheatre,
        from: "Orange Garden",
        to: "Amphitheatre and Stage"
    },
    {
        id: "orangeGardenToEdBroadbent",
        d: "M1311.09,3556.63v-17.46c0-11.41,9.25-20.67,20.67-20.67h2.39c11.63,0,20.97-9.59,20.66-21.21l-3.7-140.39c-.2-7.59,3.8-14.65,10.37-18.46,69.78-40.42,133.47-182.3,129.04-253.63-4.65-74.97-85.3-529.93-185.51-751.59-75.84-167.75-137.25-233.54-162.63-255.62-10.72-9.32-19.78-20.37-26.84-32.7-140-244.58-114.95-773.66-109.57-863.39.51-8.45,1.66-16.85,3.45-25.13l57.66-267.41c2.25-10.43-3.81-20.87-13.99-24.07-228.29-71.83-373.47-56.58-391.58-54.26-1.22.16-2.42.42-3.59.79-168.6,53.03-238.75,63.5-249.11,64.86-.87.11-1.73.17-2.61.17l-378.97,1.28c-11.44.04-20.74-9.23-20.74-20.67V27.18c0-13.43,12.62-23.3,25.65-20.06l126.41,31.44c11.89,2.96,18.62,15.56,14.45,27.08h0c-3.92,10.83-15.93,16.37-26.71,12.32l-3.43-1.29",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.24,
        height: 3563.13,
        bounds: orangeGardenToEdBroadbent,
        from: "Orange Garden",
        to: "About Ed Broadbent"
    },
    {
        id: "orangeGardenToMainMapN",
        d: "M1316.41,3511.42l.58-37.94h38.38l-4.6-174.69c100.16-48.51,132.2-200.75,138.93-240.26,1.06-6.19,1.33-12.48.83-18.74-2.85-35.79-17.47-176.48-84.95-449.43-79.25-320.58-199.26-500.95-242.37-535.8-2.39-1.94-4.7-3.81-6.91-5.62-32.04-26.24-55.48-61.52-67.14-101.26-131.14-447.01-82.34-824.25-82.34-824.25l64.2-297.78c-110.06-45.72-355.48-85.42-450.01-50.52-101.17,37.35-185.74,52.12-213.58,56.32-6.03.91-12.11,1.36-18.21,1.36H6.5V6.5h37.83",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.27,
        height: 3517.92,
        bounds: orangeGardenToMainMapN,
        from: "Orange Garden",
        to: "Main Map North"
    },
    {
        id: "orangeGardenToGardenOfHR",
        d: "M814.63,2521.57v-48.18l41.26,1.04v-152.91c0-9.55,4.72-18.54,12.71-23.77,106.55-69.81,116.68-214.62,117.19-259.24.09-7.85-.59-15.69-2.03-23.41l-78.18-419.02c-70.76-330.35-207.67-495.64-269.83-556.34-23.92-23.36-42.01-52.03-52.5-83.77-110.42-334.06-76.37-824.58-76.37-824.58l-102.43-14.03,19.94-106.02C236.25-18.77,6.5,101.43,6.5,101.43l6.05,40.15",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 992.31,
        height: 2528.07,
        bounds: orangeGardenToGardenOfHR,
        from: "Orange Garden",
        to: "Garden of Human Rights"
    },
    {
        id: "mainMapSToMainMapN",
        d: "M1285.31,3879.93v49.3h69.29l.76-455.75-4.6-174.69c100.16-48.51,132.2-200.75,138.93-240.26,1.06-6.19,1.33-12.48.83-18.74-2.85-35.79-17.47-176.48-84.95-449.43-79.25-320.58-199.26-500.95-242.37-535.8-2.39-1.94-4.7-3.81-6.91-5.62-32.04-26.24-55.48-61.52-67.14-101.26-131.14-447.01-82.34-824.25-82.34-824.25l64.2-297.78c-110.06-45.72-355.48-85.42-450.01-50.52-101.17,37.35-185.74,52.12-213.58,56.32-6.03.91-12.11,1.36-18.21,1.36H6.5V6.5h37.83",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.27,
        height: 3935.73,
        bounds: mainMapSToMainMapN,
        from: "Main Map South",
        to: "Main Map North"
    },
    {
        id: "mainMapSToAmphitheatre",
        d: "M1203.18,3069.49l-.5,49.21h68.99l-.2-618.82c98.2-72.57,130.62-233.67,130.62-233.67,0,0,29.25-35.17-77.86-484.54-107.1-449.38-291.88-590.1-291.88-590.1-157.5-347.37-108.69-876.42-108.69-876.42l-100.5-15.31,19.24-110.65c-236.47-18.38-431.67,97.54-431.67,97.54l3.29-276.02C263.48,37.99,8.86,26.02,8.86,26.02L6.5,6.5",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1412.24,
        height: 3125.2,
        bounds: mainMapSToAmphitheatre,
        from: "Main Map South",
        to: "Amphitheatre and Stage"
    },
    {
        id: "mainMapSToGardenOfHR",
        d: "M785.18,2889.55l.53,52.08h70.17v-620.12c0-9.55,4.72-18.54,12.71-23.77,106.55-69.81,116.68-214.62,117.19-259.24.09-7.85-.59-15.69-2.03-23.41l-78.18-419.02c-70.76-330.35-207.67-495.64-269.83-556.34-23.92-23.36-42.01-52.03-52.5-83.77-110.42-334.06-76.37-824.58-76.37-824.58l-102.43-14.03,19.94-106.02C236.25-18.77,6.5,101.43,6.5,101.43l6.05,40.15",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 992.31,
        height: 2948.13,
        bounds: mainMapSToGardenOfHR,
        from: "Main Map South",
        to: "Garden of Human Rights"
    },
    {
        id: "mainMapSToEdBroadbent",
        d: "M1285.31,3922.79v49.21h69.5v-474.7l-3.7-140.39c-.2-7.59,3.8-14.65,10.37-18.46,69.78-40.42,133.47-182.3,129.04-253.63-4.65-74.97-85.3-529.93-185.51-751.59-75.84-167.75-137.25-233.54-162.63-255.62-10.72-9.32-19.78-20.37-26.84-32.7-140-244.58-114.95-773.66-109.57-863.39.51-8.45,1.66-16.85,3.45-25.13l57.66-267.41c2.25-10.43-3.81-20.87-13.99-24.07-228.29-71.83-373.47-56.58-391.58-54.26-1.22.16-2.42.42-3.59.79-168.6,53.03-238.75,63.5-249.11,64.86-.87.11-1.73.17-2.61.17l-378.97,1.28c-11.44.04-20.74-9.23-20.74-20.67V27.18c0-13.43,12.62-23.3,25.65-20.06l126.41,31.44c11.89,2.96,18.62,15.56,14.45,27.08h0c-3.92,10.83-15.93,16.37-26.71,12.32l-3.43-1.29",
        stroke: "#049bec",
        strokeMiterlimit: "10",
        strokeWidth: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        width: 1497.24,
        height: 3978.5,
        bounds: mainMapSToEdBroadbent,
        from: "Main Map South",
        to: "About Ed Broadbent"
    },
]