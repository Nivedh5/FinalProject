import { useState } from "react";
import { Graph,UserData } from "./Graph";
 
 
  const LineGraph = () => {

    const [userData, setUserData] = useState({
        labels:['1 Feb','3 Feb','9 Feb','12 Feb','15 Feb','18 Feb','21 Feb','24 Feb','27 Feb'],

        datasets:[{
        label:"datas graph2",
          data:[1000,3000,6000,0,4000,3000,0,7000,1000,3000,6000],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }]
      })

    return ( <Graph chartData={userData} /> );
  }
   
  export default LineGraph;