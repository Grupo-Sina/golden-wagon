import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import golden from "../../../../public/golden.png";
import { useEffect, useState } from "react";
import winnersJson from "../../utils/winners.json";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WinnersProps {
  id: number;
  ticket: number;
}

const RankingModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const { onOpen } = useDisclosure();

  const [winners, setWinners] = useState<WinnersProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setWinners(winnersJson);
      } catch (error) {
        console.error("Erro ao carregar os dados dos vencedores:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="4xl"
      scrollBehavior="outside"
    >
      <ModalContent className="bg-[#222222] p-3 sm:p-12">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <p className="text-[#C89A3D] text-[16px] font-montserratLight">
                Vagão de Ouro
              </p>
              <h1 className="text-[24px] font-montserratBold text-white">
                CONFIRA OS TICKETS SORTEADOS!
              </h1>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <h1 className="text-white font-robotoRegular font-semibold text-[12px]">
                    POSIÇÃO
                  </h1>
                  <h1 className="text-white font-robotoRegular font-semibold text-[12px]">
                    NÚMERO DO TICKET
                  </h1>
                </div>

                <hr
                  style={{
                    borderTopColor: "rgba(255, 255, 255, 0.20)",
                  }}
                />
              </div>
              <ul className="flex flex-col">
                {winners.map((winner, index) => (
                  <div key={winner.id}>
                    <li className="text-white py-2 font-robotoRegular text-[14px] flex justify-between">
                      <p>{index + 1}.</p> <p>{winner.ticket}</p>
                    </li>
                    <hr
                      style={{
                        borderTopColor: "rgba(255, 255, 255, 0.20)",
                      }}
                    />
                  </div>
                ))}
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button
                onPress={onClose}
                size="sm"
                radius="full"
                className="my-6 w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-black hover:text-white mx-auto md:mx-0"
                style={{
                  backgroundImage: `url(${golden.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                VOLTAR
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RankingModal;
