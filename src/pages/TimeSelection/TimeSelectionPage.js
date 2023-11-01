import React, { useState } from "react";
import {
  Button,
  Container,
  FormInput,
  FormLabel,
  Icon,
  ModalButton,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalForm,
  ModalHeader,
  PageContainer,
  TimeSlot,
} from "./ScheduleIcons.styles";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../api/connect"; // Certifique-se de ter importado a instância da API corretamente

const timeSlots = [
  ["M1", "M2", "M3", "M4", "M5", "M6"],
  ["T1", "T2", "T3", "T4", "T5", "T6"],
  ["N1", "N2", "N3", "N4"],
];

const ScheduleIcons = () => {
  const location = useLocation();
  const selectedDates = location.state.selectedDates;
  const selectedRoom = location.state.roomNumber;
  const navigate = useNavigate();

  const [selectedIcons, setSelectedIcons] = useState([]);
  const [confirmedIcons, setConfirmedIcons] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isMatriculaValid, setIsMatriculaValid] = useState(false);

  const toggleIconSelection = (room) => {
    if (isIconReserved(room)) return;

    if (confirmedIcons.includes(room)) {
      setSelectedIcons(selectedIcons.filter((selectedIcon) => selectedIcon !== room));
    } else {
      setSelectedIcons([...selectedIcons, room]);
    }
  };

  const confirmReservation = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        selectedDates,
        selectedRoom,
        selectedIcons,
        name,
        matricula,
        statusRoom: isIconReserved(selectedIcons) ? "reservado" : "não reservado",
      };

      const response = await api.post("/api/selection", data);

      if (response.status === 200) {
        console.log("Seleção de sala confirmada com sucesso.");
        setConfirmedIcons(selectedIcons);
        closeModal();
      } else {
        console.error("Erro ao enviar dados para a API.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
    }
  };

  const validateName = (inputName) => {
    setIsNameValid(!!inputName);
  };

  const validateMatricula = (inputMatricula) => {
    setIsMatriculaValid(!!inputMatricula);
  };

  const isIconReserved = (room) => {
    // Você deve implementar a lógica para verificar se o ícone está reservado aqui
    // Retorne true se o ícone estiver reservado, caso contrário, retorne false
    return false;
  };

  return (
    <PageContainer>
      <Container>
        {timeSlots.map((timeSlot, index) => (
          <TimeSlot key={index}>
            {timeSlot.map((room, roomIndex) => (
              <Icon
                key={roomIndex}
                selected={selectedIcons.includes(room)}
                confirmed={confirmedIcons.includes(room)}
                reservado={isIconReserved(room)}
                onClick={() => toggleIconSelection(room)}
                className={confirmedIcons.includes(room) ? "selected-permanent" : ""}
              >
                {room}
              </Icon>
            ))}
          </TimeSlot>
        ))}
      </Container>
      <Button onClick={confirmReservation}>Reservar</Button>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalHeader>Preencha as informações:</ModalHeader>
            <ModalForm onSubmit={handleFormSubmit}>
              <FormLabel>Nome:</FormLabel>
              <FormInput
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  validateName(e.target.value);
                }}
                required
              />
              <FormLabel>Matrícula:</FormLabel>
              <FormInput
                type="text"
                value={matricula}
                onChange={(e) => {
                  setMatricula(e.target.value);
                  validateMatricula(e.target.value);
                }}
                required
              />
              <ModalButton
                type="submit"
                onClick={handleFormSubmit}
                disabled={!isNameValid || !isMatriculaValid}
              >
                Confirmar
              </ModalButton>
            </ModalForm>
            <ModalCloseButton onClick={closeModal}>Fechar</ModalCloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </PageContainer>
  );
};

export default ScheduleIcons;
