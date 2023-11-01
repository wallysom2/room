import React, { useState } from 'react';
import axios from 'axios'; // Importe a biblioteca Axios
import SelectedDayContext from '../../contexts/SelectedDayContext.js';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import 'flatpickr/dist/l10n/pt.js';
import { useNavigate } from 'react-router-dom';
import {
  CalendarPageContainer,
  CalendarTitle,
  DatePickerContainer,
  ErrorMessage,
  CustomButton,
} from './CalendarStyles';
import api from '../../api/connect.js';

function CalendarPage() {
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  const isWithinSecondSemester = (selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    return year === 2023 && month >= 7 && month <= 12;
  };

  const isDateDisabled = (date) => {
    return !isWithinSecondSemester(date);
  };

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
  };

const goToRoomSelection = async () => {
  try {
    const response = await api.post('/api/days', { selectedDates });
    if (response.status === 200) {
      navigate('/room-selection', { state: { selectedDates } });
    } else {
      console.error('Erro ao enviar datas para a API');
    }
  } catch (error) {
    console.error('Erro ao enviar datas para a API', error);
  }
};


  return (
    <SelectedDayContext.Provider value={selectedDates[0]}>
    <CalendarPageContainer>
      <CalendarTitle>Selecione as Datas (2º Semestre 2023)</CalendarTitle>
      <DatePickerContainer>
        <Flatpickr
          options={{
            mode: 'range',
            dateFormat: 'd/m/Y',
            locale: 'pt',
            minDate: 'today',
            maxDate: '31/12/2023',
            disable: [isDateDisabled],
          }}
          value={selectedDates}
          onChange={handleDateChange}
        />
      </DatePickerContainer>
      <CustomButton
        onClick={goToRoomSelection}
        disabled={selectedDates.length === 0}
        style={{
          cursor: selectedDates.length === 0 ? 'not-allowed' : 'pointer',
        }}
      >
        Próxima Página
      </CustomButton>
    </CalendarPageContainer>
    </SelectedDayContext.Provider>
  );
}

export default CalendarPage;
