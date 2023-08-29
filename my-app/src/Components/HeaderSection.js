import {
  Header,
  LeftSide,
  RightSide,
  LogoSpan,
  SignUp,
  LogIn,
} from "../Styles/Styles";
import Logo from "../Svg/Experience-logo";

const HeaderSection = () => {
  return (
    <Header>
      <LeftSide>
        <LogoSpan>
          <Logo />
        </LogoSpan>
      </LeftSide>
      <RightSide>
        <SignUp>Sign Up</SignUp>
        <LogIn>Log In</LogIn>
      </RightSide>
    </Header>
  );
};

export default HeaderSection;
