import React from "react";
import { ContainerBlock } from "../../constants/styles";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import images from "../../constants/images";
import {
  FooterBotom,
  FooterBottom,
  FooterBox,
  FooterBoxs,
  FooterBtn,
  FooterContent,
  FooterForm,
  FooterIconLink,
  FooterIcons,
  FooterInner,
  FooterInnerTxt,
  FooterInput,
  FooterLink,
  FooterLinksBlock,
  FooterLogo,
  FooterTitle,
  FooterTxt,
  FooterWrapper,
} from "./footerStyled";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContainerBlock>
        <FooterContent>
          <FooterBoxs as={Row}>
            <FooterBox as={Col} xs={12} lg={4} md={6} sm={12}>
              <FooterLogo>
                <Image src={images.logo} alt="footer-logo" />
              </FooterLogo>
              <FooterIcons>
                <FooterIconLink>
                  <BsFacebook />
                </FooterIconLink>
                <FooterIconLink>
                  <BsTwitter />
                </FooterIconLink>
                <FooterIconLink>
                  <BsInstagram />
                </FooterIconLink>
              </FooterIcons>
              <FooterTxt>
                <strong>Affiliate</strong> is a Webflow template made for
                entrepreneurs who want a professional and polished site ready to
                start and grow their affiliate marketing business in any niche.
              </FooterTxt>
            </FooterBox>
            <FooterBox as={Col} xs={12} lg={4} md={6} sm={12}>
              <FooterTitle>Latest Articles</FooterTitle>
              <FooterInner as={Col} xs={12}>
                <Image
                  width={140}
                  height={100}
                  src={images.blog1}
                  alt="footer-img"
                />
                <FooterInnerTxt>
                  How to Prep Your Lawn in the Spring
                </FooterInnerTxt>
              </FooterInner>
              <FooterInner as={Col} xs={12}>
                <Image
                  width={140}
                  height={100}
                  src={images.blog2}
                  alt="footer-img"
                />
                <FooterInnerTxt>
                  Secrets to Know About Hedge Trimming
                </FooterInnerTxt>
              </FooterInner>
              <FooterInner as={Col} xs={12}>
                <Image
                  width={140}
                  height={100}
                  src={images.blog3}
                  alt="footer-img"
                />
                <FooterInnerTxt>What to Do With a Dying Tree</FooterInnerTxt>
              </FooterInner>
            </FooterBox>
            <FooterBox as={Col} xs={12} lg={4} md={4} sm={12}>
              <FooterTitle>Browse</FooterTitle>
              <FooterForm>
                <FooterInput type="search" />
                <FooterBtn>Search</FooterBtn>
              </FooterForm>
              <FooterLinksBlock>
                <ul>
                  <li>
                    <FooterLink href="#about">About </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#categories">Categories</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#Tools">Tools</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#Contact">Contact</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#Tools">Privacy Policy</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#Tools">Affiliate Disclosure</FooterLink>
                  </li>
                </ul>
              </FooterLinksBlock>
              <FooterBotom>
                <p>&copy;2022 Javohir</p>
              </FooterBotom>
            </FooterBox>
          </FooterBoxs>
        </FooterContent>
        <FooterBottom>
          <ul>
            <li>
              <a href="">Style Guide</a>
            </li>
            <li>
              <a href="">Licenses</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
          </ul>
          <p>
            Powered by <strong>Bandit</strong>.
            Designed by Barett
          </p>
        </FooterBottom>
      </ContainerBlock>
    </FooterWrapper>
  );
};

export default Footer;
