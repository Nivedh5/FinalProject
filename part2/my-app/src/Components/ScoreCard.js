import {
  Score,
  LogoScore,
  ProgressScore,
  Calculator,
  ProfileDetails,
  LogoWords,
  RankNumber,
  ProgressWords,
  RightProgress,
  LeftProgress,
  YourScore,
  TotalScore,
  ProgressBar,
  GreenProgress,
  BlueProgress,
  VioletProgress,
  CyanProgress,
  ColorDetail,
  ProfileColor,
  GreenColor,
  ColorName,
  VioletColor,
  BlueColor,
  CyanColor,
  CalculatorTitle,
  CalculatorDesp,
  NumberCalci,
  ProfileCard,
  LogoDiv,
  ProfileName,
  YourProgress,
  CompletedItems,
  NumberProgress,
  NumberReview,
} from "../Styles/Styles";
import Logo from "../Svg/Logo";
// import ProgressBar from "../Svg/Progress";
import Chevron from "../Svg/Chevron";
import BlueProgressBar from "../Svg/BlueProgress";
import ProgressRange from "../Svg/ProgressRange";
import VioletProgressBar from "../Svg/VioletProgress";
import CyanProgressBar from "../Svg/CyanProgress";
const ScoreCard = () => {
  return (
    <Score>
      <LogoScore>
        <Logo />
        <LogoWords>Your Search Rank Score :</LogoWords>
        <RankNumber>392</RankNumber>
      </LogoScore>
      <ProgressScore>
        <ProgressWords>
          <RightProgress>Search Rank Score</RightProgress>
          <LeftProgress>
            <YourScore>392</YourScore>
            <TotalScore>of 550 Possible</TotalScore>
          </LeftProgress>
        </ProgressWords>
        <ProgressBar>
          <GreenProgress></GreenProgress>
          <BlueProgress></BlueProgress>
          <VioletProgress></VioletProgress>
          <CyanProgress></CyanProgress>
        </ProgressBar>
      </ProgressScore>
      <ColorDetail>
        <ProfileColor>
          <GreenColor></GreenColor>
          <ColorName>Profile</ColorName>
        </ProfileColor>
        <ProfileColor>
          <BlueColor></BlueColor>
          <ColorName>Reviews</ColorName>
        </ProfileColor>
        <ProfileColor>
          <VioletColor></VioletColor>
          <ColorName>Replies</ColorName>
        </ProfileColor>
        <ProfileColor>
          <CyanColor></CyanColor>
          <ColorName>Connections</ColorName>
        </ProfileColor>
      </ColorDetail>
      <Calculator>
        <CalculatorTitle>Calculator :</CalculatorTitle>
        <CalculatorDesp>
          Add <NumberCalci>118</NumberCalci> points by replying to reviews and
          improve your search ranking
        </CalculatorDesp>
      </Calculator>
      <ProfileDetails>
        <ProfileCard>
          <LogoDiv>
            <ProfileName>Profile</ProfileName>
            <Chevron />
          </LogoDiv>
          <YourProgress>
            <CompletedItems>
              <NumberProgress>21 </NumberProgress>incomplete items
            </CompletedItems>
            <ProgressRange />
          </YourProgress>
        </ProfileCard>
        <ProfileCard>
          <LogoDiv>
            <ProfileName>Reviews</ProfileName>
            <Chevron />
          </LogoDiv>
          <YourProgress>
            <CompletedItems>
              <NumberProgress>55 </NumberProgress>of{" "}
              <NumberReview>75 </NumberReview>Recent
            </CompletedItems>
            <BlueProgressBar />
          </YourProgress>
        </ProfileCard>
        <ProfileCard>
          <LogoDiv>
            <ProfileName>Replies</ProfileName>
            <Chevron />
          </LogoDiv>
          <YourProgress>
            <CompletedItems>
              <NumberProgress>18 </NumberProgress>reviews need Replies{" "}
            </CompletedItems>
            <VioletProgressBar />
          </YourProgress>
        </ProfileCard>
        <ProfileCard>
          <LogoDiv>
            <ProfileName>Connections</ProfileName>
            <Chevron />
          </LogoDiv>
          <YourProgress>
            <CompletedItems>
              <NumberProgress>3 </NumberProgress>of{" "}
              <NumberReview>5 </NumberReview>Connections
            </CompletedItems>
            <CyanProgressBar />
          </YourProgress>
        </ProfileCard>
      </ProfileDetails>
    </Score>
  );
};

export default ScoreCard;
