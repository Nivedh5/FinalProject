import {
  CategoryTitle,
  CategoryDescription,
  Category,
  CategoryList,
  MortgageIcon,
  RealEstateIcon,
  InsuranceIcon,
  AutoIcon,
  HospitalityIcon,
  MortgageWrap,
  RealEstateWrap,
  InsuranceWrap,
  AutoWrap,
  HospitalityWrap,
  IconName,
} from "../Styles/Styles";
import Mortgage from "../Svg/mortgageIcon.js";
import RealEstate from "../Svg/Real-Estate";
import Insurance from "../Svg/Insurance";
import Auto from "../Svg/Auto";
import Hospitality from "../Svg/Hospitality";

const CategorySection = () => {
  return (
    <Category>
      <CategoryTitle>Business Categories</CategoryTitle>
      <CategoryDescription>
        Find the best service for your location
      </CategoryDescription>
      <CategoryList>
        <MortgageWrap>
          <MortgageIcon>
            <Mortgage />
          </MortgageIcon>
          <IconName>Mortgage</IconName>
        </MortgageWrap>
        <RealEstateWrap>
          <RealEstateIcon>
            <RealEstate />
          </RealEstateIcon>
          <IconName>Real Estate</IconName>
        </RealEstateWrap>
        <InsuranceWrap>
          <InsuranceIcon>
            <Insurance />
          </InsuranceIcon>
          <IconName>Insurance</IconName>
        </InsuranceWrap>
        <AutoWrap>
          <AutoIcon>
            <Auto />
          </AutoIcon>
          <IconName>Auto</IconName>
        </AutoWrap>
        <HospitalityWrap>
          <HospitalityIcon>
            <Hospitality />
          </HospitalityIcon>
          <IconName>Hospitality</IconName>
        </HospitalityWrap>
      </CategoryList>
    </Category>
  );
};

export default CategorySection;
