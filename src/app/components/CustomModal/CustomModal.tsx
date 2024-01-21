import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Checkbox,
} from "@nextui-org/react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="xl">
      <ModalContent className="bg-[#222222] p-12">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <p className="text-[#C89A3D] text-[16px] font-montserratLight">
                VAGÃO DE OURO
              </p>
              <h1 className="text-[24px] font-montserrat text-white font-bold">
                COMO PARTICIPAR
              </h1>
            </ModalHeader>
            <ModalBody>
              <p className="font-montserratLight text-[16px] text-white font-normal">
                Para participar, é bem fácil! Você deve ter um cadastro na
                Esportes da Sorte e ter feito, pelo menos, um depósito de
                R$2,00! Quanto mais depósitos você fizer, mais chances tem de
                ganhar!
              </p>
              <p className="text-[#C89A3D] text-[16px] font-montserrat">
                Responda as perguntas abaixo para confirmar sua participação.
              </p>
              <h1 className="text-[18px] font-montserrat text-white">
                Você já é cadastrado na Esportes da Sorte?
              </h1>
              <div className="flex flex-col space-y-1 text-white">
                <Checkbox
                  radius="full"
                  className="font-montserratLight text-white text-[13px]"
                  classNames={{
                    label: "text-white",
                  }}
                >
                  SIM
                </Checkbox>
                <Checkbox
                  radius="full"
                  className="font-montserratLight text-white text-[13px]"
                  classNames={{
                    label: "text-white",
                  }}
                >
                  NÃO
                </Checkbox>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button size="sm" className="w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px]">
                AVANÇAR
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
