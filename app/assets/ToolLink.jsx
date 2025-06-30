import { root } from './main';
import './ToolLink.css'


function ToolOpen(Href) {
    root.render(
        <Href />
    );
}


/**
 * 
 * @param {{ name: string; color: string; Icon: React.ComponentType; Href: React.ComponentType }} props 
 */
function ToolLink({ name, color, Icon, Href }) {
    return (
        <div className="toollink" style={{ '--COLOR': color }} onClick={() => { ToolOpen(Href) }}>
            <Icon weight="fill" />
            <p>{name}</p>
        </div>
    );
}

export default ToolLink