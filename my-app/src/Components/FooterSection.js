import {
  Footer,
  FooterLicence,
  FooterPart,
  Terms,
  CopyRight,
  CopyRightWordings,
  TermsCondition,
  EmptyLine,
  Policy,
} from "../Styles/Styles";
import CopyRightLogo from "../Svg/copyRight";
const FooterSection = () => {
  return (
    <Footer>
      <FooterPart>
        <FooterLicence>
          <CopyRight>
            <CopyRightLogo />
          </CopyRight>
          <CopyRightWordings>
            2015 - 2022 Experience.com created by BuyersRoad,Inc. All rights
            reserved.
          </CopyRightWordings>
        </FooterLicence>
        <Terms>
          <TermsCondition>Terms of Use</TermsCondition>
          <EmptyLine></EmptyLine>
          <Policy>Privacy Policy</Policy>
        </Terms>
      </FooterPart>
    </Footer>
  );
};

export default FooterSection;
