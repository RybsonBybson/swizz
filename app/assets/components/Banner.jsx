import '../css/pages.css'

function Banner({ color, Icon }) {
    document.body.style.setProperty("--COLOR", color);

    return <div className="banner" style={{ '--COLOR': color }}>
        <Icon weight="fill" />
    </div>
}

export default Banner