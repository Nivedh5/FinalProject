import {
  DetailsSection,
  CompanyLicence,
  DetailsSub,
  DetailsHead,
  Industries,
  Resources,
  Location,
  Name,
  Creation,
  CompanyName,
  ContactDetails,
  DetailsDiv,
  Support,
  SupportWord,
  Number,
  EmailContact,
  Attn,
  SupportEmail,
  SocialIcons,
  NewsLetter,
  NewsTitle,
  NewsDesp,
  Subcribe,
  IndustryTitle,
  IndustryTopics,
  IndustryNames,
  ResourcesTitle,
  ResourcesTopics,
  ResourcesNames,
  LocationTitle,
  AllOffice,
  FrancisoOffice,
  NashvillaOffice,
  ChennaiOffice,
  OfficeTitle,
  Address,
} from "../Styles/Styles";
import FaceBook from "../Svg/facebook";
import Linkedin from "../Svg/linkedin";
import Instagram from "../Svg/Insta";
import SubcribeIcon from "../Svg/Subcribe";
const CompanyDetailsSection = () => {
  return (
    <DetailsSection>
      <DetailsSub>
        <DetailsHead>
          <CompanyLicence>
            <CompanyName>
              <Name>Experience.com</Name>
              <Creation>Created by BuyersRoad, Inc.</Creation>
            </CompanyName>
            <ContactDetails>
              <DetailsDiv>CONTACT US BY PHONE</DetailsDiv>
              <Support>
                <SupportWord>Support -</SupportWord>
                <Number>(888) 701-4512</Number>
              </Support>
              <Support>
                {" "}
                <SupportWord>Sales -</SupportWord>
                <Number>(888) 712-5115</Number>
              </Support>
            </ContactDetails>
            <EmailContact>
              <SupportEmail>
                <DetailsDiv>CONTACT US BY EMAIL</DetailsDiv>
                <Number>Experience.com</Number>
              </SupportEmail>
              <SupportEmail>
                <Number>
                  {" "}
                  <Attn>Attn. </Attn>Genral Correspondence
                </Number>
                <Number>Pox Box 681085</Number>
                <Number>Franklin, TN 37068-1085</Number>
              </SupportEmail>
            </EmailContact>
            <SocialIcons>
              <FaceBook />
              <Linkedin />
              <Instagram />
            </SocialIcons>
            <NewsLetter>
              <NewsTitle>NEWSLETTER</NewsTitle>
              <NewsDesp>
                Join our community with 10M+ customers to get the latest
                experience updates.
              </NewsDesp>
              <Subcribe>
                <SubcribeIcon />
              </Subcribe>
            </NewsLetter>
          </CompanyLicence>
          <Industries>
            <IndustryTitle>INDUSTRIES</IndustryTitle>
            <IndustryTopics>
              <IndustryNames>Mortgage</IndustryNames>
              <IndustryNames>Real Estate</IndustryNames>
              <IndustryNames>Insurance</IndustryNames>
              <IndustryNames>Auto</IndustryNames>
              <IndustryNames>Hospitality</IndustryNames>
            </IndustryTopics>
          </Industries>
          <Resources>
            <ResourcesTitle>RESOURCES</ResourcesTitle>
            <ResourcesTopics>
              <ResourcesNames>Resource Center</ResourcesNames>
              <ResourcesNames>Our LeaderShip</ResourcesNames>
              <ResourcesNames>Contact Us</ResourcesNames>
            </ResourcesTopics>
          </Resources>
          <Location>
            <LocationTitle>LOCATIONS</LocationTitle>
            <AllOffice>
              <FrancisoOffice>
                <OfficeTitle>San Francisco Office</OfficeTitle>
                <Address>Experience.com</Address>
                <Address>12677 Alcosta Blvd #250</Address>
                <Address>San Ramon, CA 94583</Address>
                <Address>1-925-815-8114</Address>
              </FrancisoOffice>
              <NashvillaOffice>
                <OfficeTitle>Nashville Office</OfficeTitle>
                <Address>Experience.com</Address>
                <Address>414 Union St #1210</Address>
                <Address> Nashville, TN 37219</Address>
              </NashvillaOffice>
              <ChennaiOffice>
                <OfficeTitle>Chennai Office</OfficeTitle>
                <Address>Experience.com</Address>
                <Address>Akshya Vibgor No. 139/4, Third Floor</Address>
                <Address>Kodambakkam High Road,</Address>
                <Address>Nungambakkam</Address>
                <Address>Chennai, Tamil Nadu 600034 India</Address>
              </ChennaiOffice>
            </AllOffice>
          </Location>
        </DetailsHead>
      </DetailsSub>
    </DetailsSection>
  );
};

export default CompanyDetailsSection;
