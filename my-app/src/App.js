import { styled } from "styled-components";
import HeaderSection from "./Components/HeaderSection"
import SearchSection from "./Components/SearchSection";
import CategorySection from "./Components/categorySection"
import CompanyDetailsSection from "./Components/CompanyDetailsSection"
import FooterSection from "./Components/FooterSection";
const Body=styled.div`
width:100%;
font-family: 'SF Pro Display', sans-serif;`
const Component=styled.div`
width:100%;
// margin-left:12px;
`
function App() {
  return (

    <Body >
      <Component>
    <HeaderSection/>
    <SearchSection/>
    <CategorySection/>
    <CompanyDetailsSection/>
    <FooterSection/>
    </Component>
    </Body>
  );
}

export default App;
