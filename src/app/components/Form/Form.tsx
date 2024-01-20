"use client";

import { Button, Input } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [userName, setUserName] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const goofleFormObject = {
      username: userName,
      telefone: cellphone,
    };

    const rawResponse = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goofleFormObject),
    });

    try {
      const content = await rawResponse.json();

      if (content.data === undefined) {
        toast.error("O usuário já está cadastrado para o sorteio.");
        setUserName("");
        setCellphone("");
      } else {
        toast.success("Usuário registrado para o sorteio com sucesso!!");
        setUserName("");
        setCellphone("");
      }
    } catch (error) {
      toast.error("Erro ao processar a resposta do servidor.");
    }
  };

  return (
    <form
      className="w-screen h-auto flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <Input
        labelPlacement="outside"
        label="User Name"
        // placeholder="User Name"
        isRequired
        type="text"
        className="w-full p-2"
        size="md"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        className="w-full p-2"
        labelPlacement="outside"
        label="Celular"
        type="tel"
        size="sm"
        value={cellphone}
        onChange={(e) => setCellphone(e.target.value)}
      />
      <Button
        type="submit"
        className="w-full h-8 p-2 bg-yellow-200 rounded-lg flex justify-center items-center"
      >
        Enviar
      </Button>

      {userName && <h1 className="text-lg text-yellow-400">{`${userName}`}</h1>}
      {cellphone && (
        <h1 className="text-lg text-yellow-400">{`${cellphone}`}</h1>
      )}
    </form>
  );
};

export default Form;
