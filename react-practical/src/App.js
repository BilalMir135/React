import React from 'react';
import './App.css';
import ReactIcons from './components/01_React_Icons/ReactIcons';
import ReactToastify from './components/02_React_Toastify/ReactToastify';
import ReactModal from './components/03_React_Modal/ReactModal';
import ReactTooltip from './components/04_React_ToolTip/ReactTooltip';

function App() {
  return (
    <div className='App'>
      <ReactIcons />
      <ReactToastify />
      <ReactModal />
      <ReactTooltip />
    </div>
  );
}

export default App;
