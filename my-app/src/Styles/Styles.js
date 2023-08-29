import styled from "styled-components"
import BackgroundImage from "../Svg/Section-Bg.svg"

export const Header=styled.div`
width: 100%;
height: 92px;
flex-shrink: 0;
display:flex;
justify-content:space-between;
align-items:center;
background: var(--grey-t-98, #FBFCFC);
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);
position:sticky;
top:0;
@media (max-width: 400px) {
    width:auto;
    // height:auto;
     }
`
export const LeftSide=styled.div`
`
export const RightSide=styled.div`
@media (max-width: 400px) {
   display:none;
     }
`
export const LogoSpan=styled.div`
margin-left:30px;
`
export const SignUp=styled.div`
display: inline-flex;
padding: 8px 25px;
align-items: flex-start;
gap: 10px;
border-radius: 3px;
border: 1px solid var(--grey-t-75, #D1D6DC);
margin-right:13px;
color: var(--blue-100, #1B63A9);
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const LogIn=styled.div`
display: inline-flex;
padding: 8px 25px;
align-items: flex-start;
gap: 10px;
border-radius: 3px;
background: var(--blue-100, #1B63A9);
color: #FFF;
// font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right:30px;
`
export const Section=styled.div`
width: 100%;
height: 504px;
flex-shrink: 0;
background: linear-gradient(116deg, #164F87 0%, #1B63A9 100%);
background-image:url(${BackgroundImage});
background-size: cover;
display:flex;
align-items:center;
justify-content:center;
// margin-top:92px;
@media (max-width: 400px) {
   // height:400px;
}
`
export const WordingsSection=styled.div`
display:flex;
flex-direction:column;
gap: 55px;
justify-content: space-between;

`
export const ContentTopic=styled.div`
color: var(--grey-t-98, #FBFCFC);
text-align: center;
// font-family: SF Pro Display;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left:3%;
@media (max-width: 400px) {
   font-size:auto;
    
}
`
export const Description=styled.div`
text-align:center;
color: var(--grey-t-98, #FBFCFC);
text-align: center;
// font-family: SF Pro Display;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-left:2%;
`
export const SearchBar=styled.div`
width: 1180px;
height: 86px;
flex-shrink: 0;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.15);
display:flex;
align-items:center;
gap:20px;
margin-top:15px;
@media (max-width: 400px) {
   width:320px;
   display:none;
   gap:5px;
   
    }
`
export const SearchDiv=styled.div`
margin-left:30px;
margin-top:4px;
@media (max-width: 400px) {
    margin-left:auto;
    
     }
`
export const SearchWord=styled.div`
width: 427px;
height: 21px;
flex-shrink: 0;
color: var(--grey-t-35, #8895A3);
// font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width: 400px) {
    margin-left:auto;
    
     }
`
export const Line=styled.div`
width: 0.5px;
height: 44px;
background: #A3ADB8;
margin-left:3.5%;
@media (max-width: 400px) {
    margin-left:auto;
    
     }
`
export const LocationIconSpan=styled.div`
width: 24px;
height: 24px;
flex-shrink: 0;
`
export const LocationWordings=styled.div`
width: 171px;
height: 21px;
flex-shrink: 0;
color: var(--grey-t-35, #8895A3);
// font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (max-width: 400px) {
    margin-left:auto;
    width:50px;
     }
`
export const SearchBtn=styled.div`
display: inline-flex;
padding: 10px 18px 9px 18px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 3px;
background: var(--blue-t-15, #3D7AB6);
color: var(--grey-t-98, #FBFCFC);
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left:250px;
@media (max-width: 400px) {
    margin-left:auto;
     }
`
export const Category=styled.div`
width: 100%;
height: 570px;
display:flex;
flex-direction:column;
background: var(--grey-t-96, #F8F8F9);
justify-content:center;
align-items:center;
gap:15px;
@media (max-width: 400px) {
    height:auto;
     }

`
export const CategoryTitle=styled.div`
color: var(--grey-s-10, #415367);
text-align: center;
// font-family: SF Pro Display;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const CategoryDescription=styled.div`
color: var(--grey-t-35, #8895A3);
text-align: center;
// font-family: SF Pro Display;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const  CategoryList=styled.div`
display: inline-flex;
align-items: flex-start;
gap: 30px;
margin-top:1.5%;
@media (max-width: 400px) {
    display:flex;
    flex-direction:column;
    
     }
`
export const MortgageWrap=styled.div`
width: 200px;
height: 206px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);
display:flex;
gap:20px;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const RealEstateWrap=styled.div`
width: 200px;
height: 206px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);
display:flex;
gap:20px;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const InsuranceWrap=styled.div`
width: 200px;
height: 206px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);
display:flex;
gap:20px;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const AutoWrap=styled.div`
width: 200px;
height: 206px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);
display:flex;
gap:20px;
flex-direction:column;
justify-content:center;
align-items:center;`
export const HospitalityWrap=styled.div`
width: 200px;
height: 206px;
border-radius: 10px;
background: #FFF;
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);
display:flex;
gap:20px;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const MortgageIcon=styled.div`
width: 100px;
height: 100px;
flex-shrink: 0;
border-radius: 100px;
background: var(--blue-t-92, #EDF3F8);
display:flex;
align-items:center;
justify-content:center;
`
export const RealEstateIcon=styled.div`
width: 100px;
height: 100px;
flex-shrink: 0;
border-radius: 100px;
background: var(--green-t-92, #EEF9F2);
display:flex;
align-items:center;
justify-content:center;
`
export const InsuranceIcon=styled.div`
width: 100px;
height: 100px;
flex-shrink: 0;
border-radius: 100px;
background: var(--yellow-t-75, #FFF9D6);
display:flex;
align-items:center;
justify-content:center;
`
export const AutoIcon=styled.div`
width: 100px;
height: 100px;
flex-shrink: 0;
border-radius: 100px;
background: var(--grey-t-92, #F0F2F4);
display:flex;
align-items:center;
justify-content:center;
`
export const HospitalityIcon=styled.div`
`
export const IconName=styled.div`
color: var(--grey-s-50, #242E39);
text-align: center;
// font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const DetailsSection =styled.div`
width: 100%;
height: 550px;
flex-shrink: 0;
background: var(--grey-s-30, #324050);
display:flex;
// align-items:center;
justify-content:center;
@media (max-width: 400px) {
    height:auto;
     }
`
export const DetailsSub=styled.div`
width:1140px;
margin-top:51px;
margin-bottom:40px
`
export const DetailsHead=styled.div`
display:grid;
grid-template-columns: auto auto auto auto ;
gap:8%;
@media (max-width: 400px) {
    grid-template-columns:auto;
    gap:1%;
    }
`
export const Industries=styled.div`
width: 81px;
height: 162px;
flex-shrink: 0;
display:flex;
flex-direction:column;
gap:20px;

`
export const Resources=styled.div`
width: 124px;
height: 108px;
flex-shrink: 0;
display:flex;
flex-direction:column;
gap:20px;
margin-left:20px;
`
export const Location=styled.div`
width: 215px;
height: 423px;
flex-shrink: 0;
display:flex;
flex-direction:column;
gap:20px;
margin-left:13%;
@media (max-width: 400px) {
    margin-left:auto;
    }

`
export const CompanyLicence =styled.div`
width: 301px;
height: 474px;
flex-shrink: 0;
color: #FFF;
// font-family: SF Pro Display;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
display:flex;
flex-direction:column;
gap:20px;
margin-top:-1%;
`
export const Name=styled.div`
width: 176px;
color: #FFF;
// font-family: SF Pro Display;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Creation=styled.div`
width: 166px;
color: var(--grey-t-50, #A3ADB8);
// font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const CompanyName=styled.div`
display:flex;
flex-direction:column;
gap:10px;`

export const ContactDetails=styled.div`
display:flex;
flex-direction:column;
gap:7px;
`
export const DetailsDiv=styled.div`
color: var(--grey-t-50, #A3ADB8);
// font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 700;

text-transform: uppercase;
`
export const Support=styled.div`
display:flex;
gap:5px;

`
export const SupportWord=styled.div`
color: var(--grey-t-50, #A3ADB8);
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
// line-height: normal;
`
export const Number=styled.div`
color: #FFF;
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
// line-height: normal;
`
export const EmailContact=styled.div`
display:flex;
flex-direction:column;
`
export const Attn=styled.span`
color: #A3ADB8;
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;`
export const SupportEmail=styled.div`
display:flex;
flex-direction:column;
gap:5px;
margin-top:5px;
`
export const SocialIcons=styled.div`
width: 86px;
height: 19px;
flex-shrink: 0;
display:flex;
gap:20px;
margin-top:5px;`

export const NewsLetter=styled.div`
width: 301px;
height: 115px;
flex-shrink: 0;
display:flex;
flex-direction:column;
gap:8px;
margin-top:10px;
`
export const NewsTitle=styled.div`
color: var(--grey-t-50, #A3ADB8);
// font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 169.231% */
text-transform: uppercase;
`
export const NewsDesp=styled.div`
color: #FFF;
// font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const Subcribe=styled.div`
display: inline-flex;
align-items: flex-start;
margin-top:17px;
`
export const IndustryTitle=styled.div`
color: var(--grey-t-50, #A3ADB8);
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const IndustryTopics=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
export const IndustryNames=styled.div`
color: #FFF;
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const ResourcesTitle=styled(IndustryTitle)`
`
export const ResourcesTopics=styled(IndustryTopics)`
display:flex;
flex-direction:column;
gap:10px;
`
export const ResourcesNames=styled(IndustryNames)`
`
export const LocationTitle=styled(IndustryTitle)`
`
export const AllOffice=styled.div`
display: flex;
width: 250px;
flex-direction: column;
align-items: flex-start;
gap: 25px;
`
export const FrancisoOffice=styled.div`
display:flex;
flex-direction:column;
gap:5px;
`
export const NashvillaOffice=styled.div`
display:flex;
flex-direction:column;
gap:5px;
`
export const ChennaiOffice=styled.div`
display:flex;
flex-direction:column;
gap:5px;
`
export const OfficeTitle=styled.div`
color: var(--grey-t-98, #FBFCFC);
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
export const Address=styled.div`
color: var(--grey-t-65, #BFC6CE);
// font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const Footer=styled.div`
width: 100%;
height: 138px;
flex-shrink: 0;
background: var(--grey-s-50, #242E39);
display:flex;
align-items:center;
justify-content:center;
`
export const FooterPart=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
export const FooterLicence=styled.div`
width: 408px;
height: 14px;
flex-shrink: 0;
display:flex;
gap:15px;
`
export const Terms=styled.div`
display:flex;
justify-content:center;
`
export const CopyRight=styled.div`

`
export const CopyRightWordings=styled.div`
color: var(--grey-t-50, #A3ADB8);
text-align: center;
// font-family: SF Pro Display;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const TermsCondition=styled.div`
width: 92px;
color: #FFF;
text-align: center;
// font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const EmptyLine=styled.div`
width: 1px;
height: 14px;
background: #FBFCFC;
`
export const Policy=styled.div`
width: 95px;
color: #FFF;
text-align: center;
// font-family: SF Pro Display;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
