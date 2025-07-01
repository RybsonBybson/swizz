import swizzLogo from '/swizz.svg'
import '../css/menu.css'
import { FileIcon, SubtitlesIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import ToolLink from './ToolLink'
import YoutubeDownloader from '../pages/YoutubeDownloader';
import Transcryption from '../pages/Transcryption';
import Settings from './Settings';

function Menu() {
  const toollinks = [
    { name: "Download from YouTube", color: "#ec2f2e", Icon: YoutubeLogoIcon, Href: YoutubeDownloader },
    { name: "File Conversion", color: "#f98f1b", Icon: FileIcon, Href: "FileConversion" },
    { name: "Audio Transcryption", color: "#feb61a", Icon: SubtitlesIcon, Href: Transcryption },
  ];


  const amount = toollinks.length;
  return (
    <>
      <Settings />
      <div className="menu">
        <div className='logo'><img src={swizzLogo} /></div>
        <div className="info"><p>Tools available: {amount}</p></div>
        <div className='tools'>
          {toollinks.map((tool, index) => (
            <ToolLink
              key={index}
              name={tool.name}
              color={tool.color}
              Icon={tool.Icon}
              Href={tool.Href}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Menu
