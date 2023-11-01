import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import RoomSelectionPage from './pages/RoomSelection/RoomSelectionPage';
import TimeSelectionPage from './pages/TimeSelection/TimeSelectionPage';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;

function App() {
  return (
    <AppContainer>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/room-selection" element={<RoomSelectionPage />} />
          <Route path="/time-selection" element={<TimeSelectionPage />} /> {/* Adicione esta rota */}
        </Routes>
      </div>
    </Router>
    </AppContainer>
  );
}

export default App;


