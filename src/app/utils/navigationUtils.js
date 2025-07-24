export function getMidPoints(x, y) {
    console.log("x", x);
    console.log("y", y)
    const x1 = x[0];
    const x2 = x[1];
    const y1 = y[0];
    const y2 = y[1]
    return [(x1 + y1) / 2, (x2 + y2) / 2];
};

export function hasTwoSelectedOptions(option1, option2) {
    return !!(option1 && option2);
};