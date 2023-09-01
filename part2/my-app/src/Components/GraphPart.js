import { Graph,LeftNav,RightNav,Top,NavContent,NavMonth, Line,Middle,Bottom,LeftBottom,StarWords,StarNumber,StarWordings,TopList,Highlight} from "../Styles/Styles";
import StarIcon from "../Svg/Star";
import LineGraph from "./GraphComponent";
const GraphPart = () => {
    return (
        <div>
        <Graph>
            <Top>
              <LeftNav>
               Rank Overview
              </LeftNav>
              <RightNav>
               <NavContent>Week</NavContent>
               <NavMonth>
                <NavContent>Month</NavContent>
                 <Line></Line>
               </NavMonth>
               <NavContent>Quarter</NavContent>
               <NavContent>Year</NavContent>
              </RightNav>
            </Top>
            <Middle>
              <LineGraph/>
            </Middle>
            <Bottom>
                <LeftBottom>
          <StarIcon/>
          <StarWords>
            <StarNumber>156</StarNumber>
            <StarWordings><TopList>You are in top <Highlight>5%</Highlight></TopList> 
            You are ranked 156 of 2,612 Mortgage loan officers in zip code 37013. </StarWordings>
          </StarWords>
          </LeftBottom>
        </Bottom>
        </Graph>
       
        </div>
      );
}
 
export default GraphPart;