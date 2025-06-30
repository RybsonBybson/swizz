import reactLogo from '/react.svg'
import './Menu.css'
import { FileIcon, SubtitlesIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import ToolLink from './ToolLink'



function Menu() {
  const toollinks = [
    { name: "Download from YouTube", color: "#ec2f2e", Icon: YoutubeLogoIcon, Href: "YoutubeDownloader" },
    { name: "File Conversion", color: "#f98f1b", Icon: FileIcon, Href: "FileConversion" },
    { name: "Audio Transcryption", color: "#feb61a", Icon: SubtitlesIcon, Href: "Transcryption" },
  ];


  const amount = toollinks.length;
  return (
    <>
      <div className="menu">
        <div className='logo'><img src={reactLogo} /></div>
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
