import ScoreCard from "./Components/ScoreCard";
import "./App.css"
// import LineGraph from "./Components/GraphComponent";
import GraphPart from "./Components/GraphPart";


function App() {
  return (
    <div className="App">
     <ScoreCard/>
   {/* <div style={{height:"235px",width:"704px"}}>
    <LineGraph/>
    </div> */}
    <br/>
    <GraphPart/>
    <br/>
    </div>
  );
}

export default App;
