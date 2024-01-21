'use client'

import Image from 'next/image'
import bigescudozl from '../../public/bigescudozl.png'
import React from 'react'
import { Button, useDisclosure } from '@nextui-org/react'
import CustomModal from './components/CustomModal/CustomModal'
import { url } from 'inspector'

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <main className="flex flex-col px-10 md:pl-36">
      <div className="flex justify-center md:justify-start my-6">
        <div className="flex flex-col">
          <h1 className="text-[60px] font-montserrat text-[#C89A3D] sm:text-[102px] ">
            VAGÃO
          </h1>
          <h1 className="text-[40px] mt-[-35px] font-montserrat text-[#222222] sm:text-[80px] sm:mt-[-60px]">
            DE OURO
          </h1>
        </div>
        <Image
          src={bigescudozl}
          alt="bigescudozl"
          className="w-[85px] h-[105px] sm:w-[153px] sm:h-[182px] z-20 ml-[-20px]"
        />
      </div>

      <p className="w-full md:w-[50%] text-justify text-[#222222] font-robotoRegular text-[18px] sm:text-[24px] desktop:text-[32px]">
        A abertura da{' '}
        <span className="font-robotoBold">Super Copa Zona Leste</span> tá
        chegando daquele jeito! E pra ficar melhor ainda, você pode concorrer a{' '}
        <span className="font-robotoBold">
          1 Iphone e 10 bancas de R$10,00 na Esportes da Sorte!
        </span>{' '}
        Coisa linda!
      </p>

      <Button
        onPress={onOpen}
        size="sm"
        radius="full"
        className="my-6 w-full sm:w-[150px] bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-black hover:text-[#C89A3D] mx-auto sm:mx-0"
      >
        PARTICIPE AGORA
      </Button>
      <CustomModal isOpen={isOpen} onClose={onOpenChange} />
    </main>
  )
}
