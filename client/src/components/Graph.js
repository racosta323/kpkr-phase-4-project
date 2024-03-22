import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = ({ goalAmount, userContributions }) => {
  const total = goalAmount + userContributions + Math.abs(goalAmount - userContributions);
  const data = {
    labels: ['Goal', 'Contributions', 'Delta'],
    datasets: [
      {
        label: 'Friday Fund',
        data: [goalAmount, userContributions, Math.abs(goalAmount - userContributions)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(2) + '%';
            return label + ': ' + percentage;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default Graph;
