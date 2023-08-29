import {
  Section,
  WordingsSection,
  ContentTopic,
  Description,
  SearchBar,
  SearchDiv,
  SearchWord,
  Line,
  LocationIconSpan,
  LocationWordings,
  SearchBtn,
} from "../Styles/Styles";
import SearchIcon from "../Svg/Search.js";
import LocationIcon from "../Svg/LocationIcon";
const SearchSection = () => {
  return (
    <Section>
      <WordingsSection>
        <ContentTopic>
          Find the best professionals in your locality
        </ContentTopic>
        <Description>
          Thousands of reviews from verified customers.
          <br />
          Latest Licensed professionals with real-time information.
        </Description>
        <SearchBar>
          <SearchDiv>
            <SearchIcon></SearchIcon>
          </SearchDiv>
          <SearchWord>Mortgage brokers, Real estate agents,..</SearchWord>
          <Line></Line>
          <LocationIconSpan>
            <LocationIcon />
          </LocationIconSpan>
          <LocationWordings>City, State or ZIP</LocationWordings>
          <SearchBtn>Search</SearchBtn>
        </SearchBar>
      </WordingsSection>
    </Section>
  );
};

export default SearchSection;
