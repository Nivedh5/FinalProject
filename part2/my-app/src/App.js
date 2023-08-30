import ScoreCard from "./Components/ScoreCard";
import "./App.css"
import LineGraph from "./Components/GraphComponent";


function App() {
  return (
    <div className="App">
     <ScoreCard/>
   <div style={{height:"235px",width:"704px"}}>
    <LineGraph/>
    </div>
    </div>
  );
}

export default App;
