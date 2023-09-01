import { useState } from "react";
import { Graph,UserData } from "./Graph";
 
 
  const LineGraph = () => {

    const [userData, setUserData] = useState({
        labels:['1 Feb','3 Feb','9 Feb','12 Feb','15 Feb','18 Feb','21 Feb','24 Feb','27 Feb'],

        datasets:[{
          data:[100,110,120,120,130,150,160,170,180,190,200,210],
          borderColor: "rgb(53, 162, 235)",
        borderWidth: 2,
        backgroundColor: (colorSet) => {
          const bgColor = [
            "rgba(53, 162, 235,0.4)",
            "rgba(53, 162, 235,0.01)",
            "rgba(53, 162, 235,0)",
          ];
          if (!colorSet.chart.chartArea) {
            return;
          }
          const {
            ctx,
            data,
            chartArea: { bottom, top },
          } = colorSet.chart;
          const gradientBG = ctx.createLinearGradient(0, top, 0, bottom);
          gradientBG.addColorStop(0, bgColor[0]);
          gradientBG.addColorStop(1, bgColor[1]);
          gradientBG.addColorStop(1, bgColor[2]);
          return gradientBG;
        },
        fill:true,
        tension:0,
        }]
      })

    return ( <Graph chartData={userData} /> );
  }
   
  export default LineGraph;