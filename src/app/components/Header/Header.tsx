import Image from "next/image";
import escudozl from "../../../../public/escudozl.png";
import edslogo from "../../../../public/edslogo.png";
import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import CustomModal from "../CustomModal/CustomModal";

const Header = () => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="relative z-20 w-screen h-24 bg-[#C89A3D] flex justify-around items-center">
      <Image src={escudozl} alt="escudozl" className="hidden sm:flex"/>
      <Image src={edslogo} alt="edslogo" />
      <Button
        onPress={onOpen}
        size="sm"
        radius="full"
        className="hidden sm:flex bg-[#222222] text-white py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-[#222222]"
      >
        PARTICIPE AGORA
      </Button>
      <CustomModal isOpen={isOpen} onClose={onOpenChange}/>
    </header>
  );
};

export default Header;
