"use client";

import Image from "next/image";
import bigescudozl from "../../public/bigescudozl.png";
import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import CustomModal from "./components/CustomModal/CustomModal";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="flex flex-col pl-36">
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="font-montserrat text-[#C89A3D] text-[102px] ">
            VAGÃO
          </h1>
          <h1 className="font-montserrat text-[#222222] text-[80px] mt-[-60px]">
            DE OURO
          </h1>
        </div>
        <Image
          src={bigescudozl}
          alt="bigescudozl"
          className="w-[153px] h-[182px] z-20 ml-[-20px]"
        />
      </div>

      <p className="w-[50%] text-justify text-[#222222] font-robotoRegular text-[24px] desktop:text-[32px]">
        A abertura da{" "}
        <span className="font-robotoBold">Super Copa Zona Leste</span> tá
        chegando daquele jeito! E pra ficar melhor ainda, você pode concorrer a{" "}
        <span className="font-robotoBold">
          1 Iphone e 10 bancas de R$10,00 na Esportes da Sorte!
        </span>{" "}
        Coisa linda!
      </p>

      <Button
        onPress={onOpen}
        size="sm"
        radius="full"
        className="my-6 w-[150px] bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-black hover:text-[#C89A3D]"
      >
        PARTICIPE AGORA
      </Button>
      <CustomModal isOpen={isOpen} onClose={onOpenChange} />
    </main>
  );
}
