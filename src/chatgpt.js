import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export const DonutGraph = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
          '#9B59B6'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#2ECC71',
          '#9B59B6'
        ]
      }
    ]
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

