import Banner from './Banner';
import { root } from './main';
import '../css/ToolLink.css'
import Home from './Home';


function ToolOpen(Href, color, Icon) {
    root.render(
        <>
            <Home />
            <Banner color={color} Icon={Icon} />
            <Href />
        </>
    );
}


/**
 * 
 * @param {{ name: string; color: string; Icon: React.ComponentType; Href: React.ComponentType }} props 
 */
function ToolLink({ name, color, Icon, Href }) {
    return (
        <div className="toollink" style={{ '--COLOR': color }} onClick={() => { ToolOpen(Href, color, Icon) }}>
            <Icon weight="fill" />
            <p>{name}</p>
        </div>
    );
}

export default ToolLink