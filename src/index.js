import React from 'react';
import ReactDOM from 'react-dom/client';
import MenuLogic from './menulogic'; // logic tanpa tampilan

// Render logic-only React
const logicRoot = document.createElement('div');
document.body.appendChild(logicRoot);

ReactDOM.createRoot(logicRoot).render(<MenuLogic />);
