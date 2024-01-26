import React, { FormEvent, useEffect, useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Checkbox,
  Spinner,
} from '@nextui-org/react'
import Link from 'next/link'
import { questions } from '@/app/utils/questions'
import { toast } from 'react-toastify'
import finishformlogo from '../../../../public/finishformlogo.png'
import Image from 'next/image'
import golden from '../../../../public/golden.png'
import promoBanner from '../../../../public/promoBanner.svg'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
}

interface Question {
  id: number
  content: string
  noOptionTitle: string
  noOptionDescription: string
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  const [isYesChecked, setIsYesChecked] = useState<boolean>(false)
  const [isNoChecked, setIsNoChecked] = useState<boolean>(false)
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [username, setUsername] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>()
  const [submissionStatus, setSubmissionStatus] = useState<
    'pending' | 'success'
  >('pending')

  const handleYHes = () => {
    setIsYesChecked(true)
    setIsNoChecked(false)
  }

  const handleNo = () => {
    setIsYesChecked(false)
    setIsNoChecked(true)
  }

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1)
      setIsYesChecked(false)
      setIsNoChecked(false)
    } else {
      setSubmissionStatus('success')
    }
  }

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const goofleFormObject = {
  //     username,
  //     telefone: phoneNumber,
  //   };

  //   const rawResponse = await fetch(
  //     "https://www.muitomaisquevarzea.com/api/submit",
  //     // 'http://localhost:3000/api/submit',
  //     {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(goofleFormObject),
  //     }
  //   );

  //   try {
  //     const content = await rawResponse.json();

  //     if (content.data === undefined) {
  //       toast.error("O usuário já está cadastrado para o sorteio.");
  //       setUsername("");
  //       setPhoneNumber("");
  //       setIsLoading(false);
  //     } else {
  //       toast.success("Usuário registrado para o sorteio com sucesso!!");
  //       setUsername("");
  //       setPhoneNumber("");
  //       setIsLoading(false);
  //       setSubmissionStatus("success");
  //     }
  //   } catch (error) {
  //     toast.error("Erro ao processar a resposta do servidor.");
  //     setIsLoading(false);
  //   }
  // };

  // const isValidNumberInput = (input: string) =>
  //   /^\d*$/.test(input) && input.length <= 11;

  const handleParticipate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(
      'https://www.esportesdasorte.com/ptb/authentication/signin?return=%2Fptb%2Fpages%2Fclube_eds',
      '_blank',
    )
    setSubmissionStatus('success')
  }

  useEffect(() => {
    setIsSubmitEnabled(username.length > 3)
  }, [username])

  useEffect(() => {
    if (isOpen) {
      setQuestionIndex(0)
      setIsYesChecked(false)
      setIsNoChecked(false)
      setUsername('')
      setPhoneNumber('')
      setIsSubmitEnabled(false)
      setSubmissionStatus('pending')
    }
  }, [isOpen])

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
                {submissionStatus === 'pending'
                  ? 'COMO PARTICIPAR?'
                  : 'AGORA É SÓ ESPERAR E TORCER!'}
              </h1>
            </ModalHeader>
            <ModalBody>
              {submissionStatus === 'pending' ? (
                <>
                  <p className="font-montserratLight text-[16px] text-white font-normal text-justify">
                    Para participar, é bem fácil! Você deve ter um cadastro na
                    Esportes da Sorte e ter feito, pelo menos, um depósito de
                    R$1,00! Depois, é so pegar o seu ticket para o sorteio!
                  </p>
                  {questionIndex === questions.length - 1 ? (
                    <p className="text-[#C89A3D] font-montserratBold text-[16px] ">
                      VOCÊ JÁ PODE PARTICIPAR!
                    </p>
                  ) : (
                    <p className="text-[#C89A3D] text-[16px] font-montserratBold">
                      Responda as perguntas abaixo para confirmar sua
                      participação.
                    </p>
                  )}

                  <h1 className="text-[18px] font-montserratBold text-white">
                    {questions[questionIndex].content}
                  </h1>
                  <div className="flex flex-col space-y-1 text-white">
                    {questionIndex === questions.length - 1 ? (
                      <div className="space-y-4 flex flex-col justify-center items-center">
                        <Image
                          src={promoBanner}
                          alt="promo Banner"
                          className="w-full"
                        />
                        <Button
                          type="submit"
                          onClick={handleParticipate}
                          size="sm"
                          className="w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-white"
                          style={{
                            backgroundImage: `url(${golden.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          PARTICIPAR{' '}
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Checkbox
                          isSelected={isYesChecked}
                          onValueChange={handleYHes}
                          radius="full"
                          className="font-montserratLight text-white text-[13px]"
                          classNames={{
                            label: 'text-white',
                          }}
                        >
                          SIM
                        </Checkbox>
                        <Checkbox
                          isSelected={isNoChecked}
                          onValueChange={handleNo}
                          radius="full"
                          className="font-montserratLight text-white text-[13px]"
                          classNames={{
                            label: 'text-white',
                          }}
                        >
                          NÃO
                        </Checkbox>
                      </>
                    )}

                    {isNoChecked && (
                      <div>
                        <h1 className="text-white font-montserratBold text-[18px]">
                          {questions[questionIndex].noOptionTitle}
                        </h1>
                        <p className="text-white text-[16px] font-montserratLight">
                          <span className="text-[#DA1414] text-[16px] font-montserrat">
                            *
                          </span>
                          {questions[questionIndex].noOptionDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-6">
                  <p className="font-montserratLight text-[16px] text-white font-normal text-justify">
                    Os sorteios vão rolar na{' '}
                    <span className="font-montserratBold">
                      terça-feira (30/01) pelo Clube da Sorte,
                    </span>{' '}
                    plataforma de sorteios seguros da Esportes da Sorte. E nem
                    se preocupa, os vencedores receberão uma notificação no site
                    da Esportes da Sorte e{' '}
                    <span className="font-montserratBold">
                      divulgaremos todos os 100 tickets vencedores tanto aqui
                      como no Instagram da Super Copa Zona Leste.
                    </span>{' '}
                    Não fica aí moscando! Quanto mais depósitos você fizer, mais
                    chances tem de ganhar!
                  </p>
                  <Button
                    onPress={onClose}
                    size="sm"
                    className="w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-white"
                    style={{
                      backgroundImage: `url(${golden.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    FECHAR
                  </Button>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              {submissionStatus === 'pending' && (
                <>
                  {isYesChecked && (
                    <Button
                      onClick={handleNextQuestion}
                      size="sm"
                      className="w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-white"
                      style={{
                        backgroundImage: `url(${golden.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      AVANÇAR
                    </Button>
                  )}
                  {isNoChecked && (
                    <Link
                      href={questions[questionIndex].redirectTo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-white"
                        style={{
                          backgroundImage: `url(${golden.src})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      >
                        {questions[questionIndex].buttonContent}
                      </Button>
                    </Link>
                  )}
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
