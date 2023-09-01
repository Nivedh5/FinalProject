import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs, plugins } from "chart.js/auto";
import { GraphDiv } from "../Styles/Styles";
export const Graph = ({ chartData }) => {
  return (
    <GraphDiv>
      <Line
        data={chartData}
        options={{
          scales: {
            x: { grid: { display: false } },
            y: {
              beginAtZero: false,
              reverse: false,
              min: 50,
              max: 300,

              title: {
                display: false,
                text: "Value",
              },
            },
          },
          plugins:{
            legend:{
                display:false
            }
          }
        }}
        height={150}
        width={400}
      />
    </GraphDiv>
  );
};
export const UserData = [
  {
    id: 1,
    year: "06 Feb",
    users1: 0,
    users2: 3000,
  },
  {
    id: 2,
    year: "07 Feb",
    users1: 2000,
    users2: 5000,
  },
  {
    id: 3,
    year: "08 Feb",
    users1: 0,
    users2: 2000,
  },
  {
    id: 4,
    year: "09 Feb",
    users1: 5000,
    users2: 6000,
  },
  {
    id: 5,
    year: "10 Feb",
    users1: 8000,
    users2: 6500,
  },
  {
    id: 5,
    year: "11 Feb",
    users1: 8000,
    users2: 7000,
  },
  {
    id: 5,
    year: "Feb",
    users1: 6500,
    users2: 0,
  },
];
