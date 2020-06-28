import React from 'react';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <div className='App'>
      <div className='chart'>
        <LineChart />
        <BarChart />
        <DoughnutChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;
