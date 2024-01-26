import Image from 'next/image'
import edslogofooter from '../../../../public/edslogofooter.png'
import twittericon from '../../../../public/twittericon.png'
import youtubeicon from '../../../../public/youtubeicon.png'
import instaicon from '../../../../public/instaicon.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative z-20 w-screen min-h-[140px] bg-[#222222] flex flex-col py-4 space-y-2 md:flex-row md:space-y-0 justify-around items-center">
      <Image
        src={edslogofooter}
        alt="edslogofooter"
        className="w-[265px] h-[28px]"
      />
      <h1 className="text-[16px] text-white font-normal font-robotoRegular">
        @2024 Copyright - Esportedasorte
      </h1>
      <div className="flex space-x-3">
        <Link
          href="https://twitter.com/EsportesDaSorte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={twittericon}
            alt="twittericon"
            className="w-[32px] h-[32px]"
          />
        </Link>
        <Link
          href="https://www.youtube.com/@esportesdasorteoficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={youtubeicon}
            alt="youtubeicon"
            className="w-[32px] h-[32px]"
          />
        </Link>
        <Link
          href="https://www.instagram.com/esportesdasorte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={instaicon}
            alt="instaicon"
            className="w-[32px] h-[32px]"
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
