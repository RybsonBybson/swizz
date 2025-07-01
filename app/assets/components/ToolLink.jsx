import Banner from './Banner';
import { root } from './main';
import '../css/menu.css'
import Home from './Home';
import { Toaster } from 'react-hot-toast';
import Settings from './Settings';


async function ToolOpen(Href, color, Icon) {
    root.render(
        <>
            <Toaster position='top-right' />
            <Home />
            <Settings />
            <Banner color={color} Icon={Icon} />
            <Href />
        </>
    );

    await Href.base();
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