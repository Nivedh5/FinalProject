import styled from "styled-components"
import BackgroundImage from "../Svg/Section-Bg.svg"

export const Header=styled.div`
width: 1400px;
height: 92px;
flex-shrink: 0;
display:flex;
justify-content:space-between;
align-items:center;
background: var(--grey-t-98, #FBFCFC);
box-shadow: 0px 2px 10px 0px rgba(99, 116, 135, 0.20);`
export const LeftSide=styled.div`
`
export const RightSide=styled.div`
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
font-family: SF Pro Display;
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
font-family: SF Pro Display;
font-size: 13px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right:30px;
`
export const Section=styled.div`
width: 1400px;
height: 504px;
flex-shrink: 0;
background: linear-gradient(116deg, #164F87 0%, #1B63A9 100%);
background-image:url(${BackgroundImage});
display:flex;
align-items:center;
justify-content:center;
`
export const WordingsSection=styled.div`
display:flex;
flex-direction:column;
gap: 60px;
justify-content: space-between;

`
export const ContentTopic=styled.div`
color: var(--grey-t-98, #FBFCFC);
text-align: center;
font-family: SF Pro Display;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-right:45px;
`
export const Description=styled.div`
text-align:center;
color: var(--grey-t-98, #FBFCFC);
text-align: center;
font-family: SF Pro Display;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
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

`
export const SearchDiv=styled.div`
margin-left:30px;
`
export const SearchWord=styled.div`
width: 427px;
height: 21px;
flex-shrink: 0;
color: var(--grey-t-35, #8895A3);
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const Line=styled.div`
width: 0.5px;
height: 44px;
background: #A3ADB8;
margin-left:30px;
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
font-family: SF Pro Display;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
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
font-family: SF Pro Display;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left:270px;
`
