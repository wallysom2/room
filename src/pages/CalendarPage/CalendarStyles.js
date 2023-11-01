// CalendarPageStyles.js
import styled from 'styled-components';

export const CalendarPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding: 150px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const CalendarTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const DatePickerContainer = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  margin-top: 10px;
`;

export const CustomButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #0056b3;
  }
`;
