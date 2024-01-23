import type { Metadata } from 'next'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer'
import Image from 'next/image'
import hashtag from '../../public/hashtag.png'
import money from '../../public/money.png'
import xelement from '../../public/xelement.png'
import metro from '../../public/metro.png'
import metromobile from '../../public/metromobile.png'
import LayoutWrapper from './components/LayoutWrapper/LayoutWrapper'

export const metadata: Metadata = {
  title: 'Vagão de Ouro - Esportes da Sorte na Várzea',
  description: 'Vagão de Ouro - Esportes da Sorte na Várzea, ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col">
        <ToastContainer />
        <LayoutWrapper>
          <Image
            src={hashtag}
            alt="hashtag"
            className="absolute sm:left-4 left-0 top-20 z-10 w-[66px] h-[91px] sm:block sm:w-[132px] sm:h-[182px]"
          />
          <Image
            src={metro}
            alt="metro"
            className="hidden sm:block absolute right-0 top-0 bottom-0 h-full object-cover"
          />
          <Image
            src={metromobile}
            alt="metromobile"
            className="block absolute bottom-0 object-cover w-full sm:hidden"
          />
          <Image
            src={money}
            alt="money icon"
            className="hidden xl:flex absolute top-20 right-[560px]"
          />
          <Image
            src={xelement}
            alt="xelement"
            className="absolute bottom-24 right-[740px]"
          />
          <Image
            src={xelement}
            alt="xelement 2"
            className="absolute top-16 right-0 w-[65px] h-[102px] sm:hidden"
          />
          <div
            className="relative z-40 w-screen flex-1 bg-noise-effect flex sm:items-center pt-12 justify-center"
            style={{ minHeight: 'calc(100vh - 236px)' }}
          >
            {children}
          </div>
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  )
}
