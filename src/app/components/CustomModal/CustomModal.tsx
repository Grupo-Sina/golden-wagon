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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const goofleFormObject = {
      username,
      telefone: phoneNumber,
    }

    const rawResponse = await fetch(
      'https://www.muitomaisquevarzea.com/api/submit',
      // 'http://localhost:3000/api/submit',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(goofleFormObject),
      },
    )

    try {
      const content = await rawResponse.json()

      if (content.data === undefined) {
        toast.error('O usuário já está cadastrado para o sorteio.')
        setUsername('')
        setPhoneNumber('')
        setIsLoading(false)
      } else {
        toast.success('Usuário registrado para o sorteio com sucesso!!')
        setUsername('')
        setPhoneNumber('')
        setIsLoading(false)
        setSubmissionStatus('success')
      }
    } catch (error) {
      toast.error('Erro ao processar a resposta do servidor.')
      setIsLoading(false)
    }
  }

  const isValidNumberInput = (input: string) => /^\d*$/.test(input)

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
                    R$2,00! Quanto mais depósitos você fizer, mais chances tem
                    de ganhar!
                  </p>
                  <p className="text-[#C89A3D] text-[16px] font-montserratBold">
                    Responda as perguntas abaixo para confirmar sua
                    participação.
                  </p>
                  <h1 className="text-[18px] font-montserratBold text-white">
                    {questions[questionIndex].content}
                  </h1>
                  <div className="flex flex-col space-y-1 text-white">
                    {questionIndex === questions.length - 1 ? (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                          label="Digite seu nome de usuário"
                          isRequired
                          size="md"
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="font-montserratLight text-white text-[16px] bg-[#333] border-none"
                        />
                        <Input
                          label="Digite seu telefone"
                          size="md"
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => {
                            const inputValue = e.target.value
                            if (isValidNumberInput(inputValue)) {
                              setPhoneNumber(inputValue)
                            }
                          }}
                          inputMode="numeric"
                          className="font-montserratLight text-white text-[16px] bg-[#333] border-none"
                        />
                        <Button
                          type="submit"
                          isDisabled={!isSubmitEnabled}
                          size="sm"
                          className="w-full bg-[#C89A3D] text-[#222222] py-3 px-8 font-headingBold text-[16px] hover:bg-white hover:text-white"
                          style={{
                            backgroundImage: `url(${golden.src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          ENVIAR{' '}
                          {isLoading && <Spinner color="default" size="sm" />}
                        </Button>
                      </form>
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
                    Os sorteios vão rolar na abertura da{' '}
                    <span className="font-montserratBold">
                      Super Copa Zona Leste no dia 25/01
                    </span>
                    , durante a live do Youtube, no canal da Várzea Ao Vivo,
                    agora é só torcer! E não fica moscando! Quanto mais
                    depósitos você fizer, mais chances tem de ganhar!
                  </p>
                  <Image src={finishformlogo} alt="finishformlogo" />
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
                      href="https://m.esportesdasorte.com/ptb"
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
