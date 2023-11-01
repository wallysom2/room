import styled from "styled-components";

export const PageContainer = styled.div`
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimeSlot = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  padding: 10px;
  margin: 5px;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#0074cc" : "white")};
  &.selected-permanent {
    background-color: green;
  }
`;

export const Button = styled.button`
  background-color: #0074cc;
  color: white;
  padding: 10px;
  margin: 50px;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
  margin: 0;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  background-color: #0074cc;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

export const ModalCloseButton = styled.button`
  background-color: #ccc;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;
