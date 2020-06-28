import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales data 2020 (M)',
        data: [3, 2, 2, 1, 5],
        backgroundColor: [
          'rgba(255,99,132,1)',
          'rgba(255,206,86,1)',
          'rgba(54,162,235,1)',
          'rgba(255,159,64,1)',
          'rgba(153,102,255,1)',
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: 'Pie Chart',
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
