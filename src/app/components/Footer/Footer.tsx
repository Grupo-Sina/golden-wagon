import Image from "next/image"
import edslogofooter from '../../../../public/edslogofooter.png'
import twittericon from '../../../../public/twittericon.png'
import youtubeicon from '../../../../public/youtubeicon.png'
import instaicon from '../../../../public/instaicon.png'

const Footer = () => {
  return (
    <footer className="relative z-20 w-screen h-[140px] bg-[#222222] flex justify-around items-center">
      <Image src={edslogofooter} alt="edslogofooter" className="w-[265px] h-[28px]"/>
      <h1 className="text-[16px] text-white font-normal">@2024 Copyright - Esportedasorte</h1>
      <div className="flex space-x-3">
        <Image src={twittericon} alt="twittericon" className="w-[32px] h-[32px]"/>
        <Image src={youtubeicon} alt="youtubeicon"className="w-[32px] h-[32px]"/>
        <Image src={instaicon} alt="instaicon"className="w-[32px] h-[32px]"/>
      </div>
    </footer>
  )
}

export default Footer