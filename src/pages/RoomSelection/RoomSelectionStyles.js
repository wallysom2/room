// RoomSelectionPage.styles.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
    margin-top: 50px;

`;

export const RoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 70%;
`;

export const Room = styled.div`
  padding: 20px;
  background-color: #3498db;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #207eb8;
  }
`;
