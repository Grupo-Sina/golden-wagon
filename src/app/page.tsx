'use client'

import Image from 'next/image'
import React from 'react'
import { Button, useDisclosure } from '@nextui-org/react'
import CustomModal from './components/CustomModal/CustomModal'
import goldenwagonlogo from '../../public/goldenwagonlogo.png'
import golden from '../../public/golden.png'

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <main className="flex flex-col px-10 md:pl-36">
      <Image
        src={goldenwagonlogo}
        alt="goldenwagonlogo"
        className="my-4 mx-auto w-[400px] sm:w-[531px] md:mx-0"
      />

      <p className="w-full md:w-[50%] text-justify text-[#222222] font-robotoRegular text-[18px] sm:text-[24px] desktop:text-[32px]">
        A abertura da{' '}
        <span className="font-robotoBold">Super Copa Zona Leste</span> tá
        chegando daquele jeito! E pra ficar melhor ainda, você pode concorrer a{' '}
        <span className="font-robotoBold">
          1 Iphone e 10 bancas de R$10,00 na Esportes da Sorte!
        </span>{' '}
        Coisa linda!
      </p>
      <div className="button-container">
        <Button
          onPress={onOpen}
          size="sm"
          radius="full"
          className="my-6 w-full sm:w-[150px] bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-black hover:text-white mx-auto md:mx-0"
          style={{
            backgroundImage: `url(${golden.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          PARTICIPE AGORA
        </Button>
      </div>

      <CustomModal isOpen={isOpen} onClose={onOpenChange} />
    </main>
  )
}
