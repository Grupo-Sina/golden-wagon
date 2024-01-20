import Image from "next/image";
import escudozl from "../../../../public/escudozl.png";
import edslogo from "../../../../public/edslogo.png";
import { Button } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="relative z-20 w-screen h-24 bg-[#C89A3D] flex justify-around items-center">
      <Image src={escudozl} alt="escudozl" />
      <Image src={edslogo} alt="edslogo" />
      <Button
        size="sm"
        radius="full"
        className="bg-[#222222] text-white py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-[#222222]"
      >
        PARTICIPE AGORA
      </Button>
    </header>
  );
};

export default Header;
