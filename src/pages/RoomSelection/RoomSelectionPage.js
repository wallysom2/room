import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/connect";
import * as S from "./RoomSelectionStyles";
import { useLocation } from "react-router-dom";

function RoomSelectionPage() {
  const location = useLocation();
  const selectedDates = location.state.selectedDates;
  const navigate = useNavigate();
  const rooms = [...Array(30).keys()];
  const [loading, setLoading] = useState(false);

  const formatRoomNumber = (roomNumber) => {
    return String(roomNumber + 1).padStart(2, "0");
  };

  const formatDates = (dates) => {
    if (dates.length === 0) {
      return "Nenhuma data selecionada";
    } else if (dates.length === 1) {
      return dates[0].toLocaleDateString("pt-BR");
    } else {
      const firstDate = dates[0];
      const lastDate = dates[dates.length - 1];

      const firstDateString = firstDate.toLocaleDateString("pt-BR");
      const lastDateString = lastDate.toLocaleDateString("pt-BR");

      if (firstDate.toDateString() === lastDate.toDateString()) {
        return firstDateString;
      } else {
        return `${firstDateString} até ${lastDateString}`;
      }
    }
  };

  const formattedSelectedDates = formatDates(selectedDates);

  const handleRoomClick = (roomNumber) => {
  setLoading(true);

  api
    .post("/api/rooms", {
      selectedDates: selectedDates,
      roomNumber: roomNumber + 1,
    })
    .then((response) => {
      if (response.status === 200) {
        setLoading(false);
        navigate("/time-selection", {
          state: {
            selectedDates: selectedDates,
            roomNumber: roomNumber + 1,
          },
        });
      } else {
        setLoading(false);
        console.error("Erro ao enviar dados para a API.");
      }
    })
    .catch((error) => {
      setLoading(false);
      console.error("Erro ao enviar dados para a API:", error);
    });
};

  return (
    <S.PageContainer>
      <p>{formattedSelectedDates}</p>
      <h1>Selecione uma Sala</h1>
      <S.RoomContainer>
        {rooms.map((roomNumber) => (
          <S.Room
            key={roomNumber}
            onClick={() => handleRoomClick(roomNumber)}
            disabled={loading}
          >
            {loading ? "Carregando..." : `Sala ${formatRoomNumber(roomNumber)}`}
          </S.Room>
        ))}
      </S.RoomContainer>
    </S.PageContainer>
  );
}

export default RoomSelectionPage;
