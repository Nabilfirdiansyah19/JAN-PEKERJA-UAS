import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuLogic from './menulogic';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/in" element={<MenuLogic />} />
      </Routes>
    </Router>
  );
}
