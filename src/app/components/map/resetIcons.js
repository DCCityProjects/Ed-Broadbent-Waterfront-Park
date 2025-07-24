export default function resetIcons(iconState) {
    const newState = iconState.map((icon)=>({
        ...icon,
        icon: icon.iconGrey
    }))

    return [...newState]
}