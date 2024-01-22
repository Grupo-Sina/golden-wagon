import Image from 'next/image'
import escudozl from '../../../../public/escudozl.png'
import edslogo from '../../../../public/edslogo.png'
import React, { useState } from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  useDisclosure,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import CustomModal from '../CustomModal/CustomModal'

const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Navbar
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
      className="relative z-20 w-screen h-24 bg-[#C89A3D] flex justify-center"
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden text-white font-black"
      />

      <NavbarMenu className="bg-[#C89A3D] z-40 mt-8">
        <NavbarMenuItem>
          <Link
            onPress={onOpen}
            className="font-robotoBold text-white text-[20px]"
          >
            PARTICIPE
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      <Image src={escudozl} alt="escudozl" className="hidden sm:flex" />

      <Image src={edslogo} alt="edslogo" className="flex mx-auto sm:mx-0" />

      <Button
        onPress={onOpen}
        size="sm"
        radius="full"
        className="hidden sm:flex bg-[#222222] text-white py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-[#222222]"
      >
        PARTICIPE AGORA
      </Button>
      <CustomModal isOpen={isOpen} onClose={onOpenChange} />
    </Navbar>
  )
}

export default Header
