import config from "../../configs/config.json" with { type: "json" }
import Banner from './Banner';
import { root } from './main';
import '../css/menu.css'
import Home from './Home';
import { Toaster } from 'react-hot-toast';
import Settings from './Settings';
import KoFi from './Ko-Fi';
import { parseTimeToMs } from "../../js/tools";
import { animate } from 'animejs';



async function toolOpen(e, Href, color, Icon) {
    /** @type {Element} */
    const toollink = e.target?.closest(".toollink");
    const style = getComputedStyle(toollink);
    const animationTimeStr = style.getPropertyValue("--ANIMTRANTIME").trim();
    const animationTime = parseTimeToMs(animationTimeStr);
    const animationPart = animationTime;

    if (config.settings.enableAnimations) await startAnim(toollink, animationPart);

    root.render(
        <>
            <Toaster position='top-right' />
            <Home />
            <Settings />
            <KoFi />
            <Banner color={color} Icon={Icon} />
            <Href />
        </>
    );
}

async function startAnim(toollink, animationPart) {
    const body = document.querySelector("body");

    if (!toollink) return;
    console.log("started");

    const rect = toollink.getBoundingClientRect();

    body.style.pointerEvents = "none";
    toollink.style.top = `${rect.top}px`;
    toollink.style.left = `${rect.left}px`;
    toollink.style.position = "absolute";
    toollink.style.zIndex = "5";
    toollink.classList.add("anim");

    await animate(toollink, {
        loop: false,
        duration: animationPart,
        height: "100vh",
        width: "100vw",
        position: "absolute",
        left: "0",
        top: "0",
        borderRadius: "0",
        zIndex: "5",
        ease: "outExpo"
    });

    body.style.pointerEvents = "auto";
};


/**
 * 
 * @param {{ name: string; color: string; Icon: React.ComponentType; Href: React.ComponentType }} props 
 */
function ToolLink({ name, color, Icon, Href }) {
    return (
        <div className="toollink" style={{ '--COLOR': color }} onClick={(e) => { toolOpen(e, Href, color, Icon) }}>
            <Icon weight="fill" />
            <p>{name}</p>
        </div>
    );
}

export default ToolLink