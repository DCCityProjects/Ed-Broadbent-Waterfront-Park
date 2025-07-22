export default function resetIcons(iconState, setIconState) {
    iconState.map((icon, index)=>{
        icon.icon = icon.iconGrey;
    })

    setIconState([...iconState])

    return null;
}