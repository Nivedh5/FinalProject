import { styled } from "styled-components";
import HeaderSection from "./Components/HeaderSection"
import SearchSection from "./Components/SearchSection";
const Body=styled.div`
width:1440px;`
const Component=styled.div`
margin-left:12px;`
function App() {
  return (

    <Body >
      <Component>
    <HeaderSection/>
    <SearchSection/>
    </Component>
    </Body>
  );
}

export default App;
