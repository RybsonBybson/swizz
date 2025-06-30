import reactLogo from '/react.svg'
import './Menu.css'
import { FileIcon, SubtitlesIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import ToolLink from './ToolLink'



function Menu() {
  const yt = ToolLink({ name: "Download from YouTube", color: "#ec2f2e", Icon: YoutubeLogoIcon, href: "YotubeDownloader" })
  const convert = ToolLink({ name: "File Conversion", color: "#f98f1b", Icon: FileIcon, href: "FileConversion" })
  const transcryption = ToolLink({ name: "Audio Transcryption", color: "#feb61a", Icon: SubtitlesIcon, href: "Transcryption" })

  return (
    <>
      <div className="menu">
        <div className='logo'><img src={reactLogo} /></div>
        <div className='tools'>
          {yt}
          {convert}
          {transcryption}
        </div>
      </div>
    </>
  )
}

export default Menu
