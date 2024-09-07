import './App.css';
import Header from './component/header/Header';
import Sidebarleft from './component/Sidebarleft/Sidebarleft';
import Container from './Container/Container';
import Settings from './component/Settings/Settings';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <div className="testhello">
          <Sidebarleft />

          {/* Le routage se fait ici */}
          <Routes>
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;
