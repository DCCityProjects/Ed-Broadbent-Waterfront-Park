export function getMidPoints(x, y) {
    const x1 = x[0];
    const x2 = x[1];
    const y1 = y[0];
    const y2 = y[1]
    return [(x1 + y1) / 2, (x2 + y2) / 2];
};

export function hasTwoSelectedOptions(option1, option2) {
    return !!(option1 && option2);
};

export function findMarkerIndex(markerList, currentContent){
    const marker = markerList.findIndex(marker => marker.url === currentContent);
    return marker;
}

export function findPathIndexToUse(pathList, option1, option2){
    const path = pathList.findIndex(path => path.from === option1 && path.to === option2);
    return path;
}

export function filteredOptionList(optionList, option){
    return optionList.filter((opt) => opt.value !== option);
};