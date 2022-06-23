import React from "react";
import { ContainerBlock } from "../../constants/styles";
import {
  HeaderBlock,
  HeaderBox,
  HeaderBoxs,
  HeaderBtn,
  HeaderContent,
  HeaderSpan,
  HeaderTitle,
  HeaderTxt,
} from "./headerStyled";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import images from "../../constants/images";

const Header = () => {
  return (
    <HeaderBlock>
      <ContainerBlock>
        <HeaderContent>
          <HeaderBoxs as={Row}>
            <HeaderBox as={Col} xs={12} lg={6} md={6} sm={12}>
              <Image src={images.header} alt="girl" className="header__img" />
            </HeaderBox>
            <HeaderBox as={Col} xs={12} lg={6} md={6} sm={12}>
              <HeaderSpan>
                Introducing Affiliate Template for Webflow
              </HeaderSpan>
              <HeaderTitle>
                Easy-to-use Template for building Affiliate Sites
              </HeaderTitle>
              <HeaderTxt>
                <strong>Affiliate</strong> is a Webflow template made for
                entrepreneurs who want a professional and polished site ready to
                start and grow their affiliate marketing business in any niche.
              </HeaderTxt>
              <HeaderBtn>Buy this Template</HeaderBtn>
            </HeaderBox>
          </HeaderBoxs>
        </HeaderContent>
      </ContainerBlock>
    </HeaderBlock>
  );
};

export default Header;
